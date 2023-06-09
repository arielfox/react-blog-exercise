const initialState = {
    searchTerm: '',
    sortOrder: ''
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/filtersChanged': {
            return {
                ...state,
                sortOrder: action.payload
            }
        }
        case 'filters/searchFilterChanged': {
            return {
                ...state,
                searchTerm: action.payload
            }
        }
        default:
            return state
    }
}

export const sortFilterChanged = (sortOrder) => ({
    type: 'filters/filtersChanged',
    payload: sortOrder
})

export const searchFilterChanged = (searchTerm) => ({
    type: 'filters/searchFilterChanged',
    payload: searchTerm
})



