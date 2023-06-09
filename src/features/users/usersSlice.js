import { client } from '../../api/client';
import { createSelector } from 'reselect';

const initialState = {
    status: 'idle',
    users: {},
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/usersLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        case 'users/usersLoaded': {
            const newEntities = {}
            action.payload.forEach(user => {
                newEntities[user.id] = user
            })
            return {
                ...state,
                status: 'idle',
                entities: newEntities
            }
        }
        default:
            return state
    }
}

export const usersLoading = () => ({ type: 'users/usersLoading' })

export const usersLoaded = (users) => ({
    type: 'users/usersLoaded',
    payload: users,
})

const selectUserEntities = state => state.users.entities

export const selectUsers = createSelector(selectUserEntities, entities =>
    Object.values(entities)
)

export const selectUserById = (state, userId) => {
    return selectUserEntities(state)[userId]
}

// Thunk function
export const fetchUsers = () => async (dispatch) => {
    dispatch(usersLoading())
    const response = await client.get('https://jsonplaceholder.typicode.com/users')
    dispatch(usersLoaded(response))
}

export const selectUserIds = createSelector(
    selectUsers,
    (users) => users.map((user) => user.id)
)