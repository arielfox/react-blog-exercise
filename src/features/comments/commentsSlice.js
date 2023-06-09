import { client } from '../../api/client';
import { createSelector } from 'reselect';

const initialState = {
    status: 'idle',
    postId: '',
    entities: [],
}

export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'comments/commentAdded': {
            const comment = action.payload
            return {
                ...state,
                status: 'idle',
                entities: [
                    ...state.entities,
                    comment
                ]
            }
        }
        case 'comments/commentSubmitting': {
            return {
                ...state,
                status: 'submitting'
            }
        }
        case 'comments/commentsLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        case 'comments/commentsLoaded': {
            const comments = action.payload.response
            const postId = comments[0].postId
            return {
                ...state,
                status: 'idle',
                postId: postId,
                entities: comments
            }
        }
        default:
            return state
    }
}

export const commentAdded = (comment) => ({ type: 'comments/commentAdded', payload: comment })

export const commentsLoading = () => ({ type: 'comments/commentsLoading' })

export const commentsLoaded = (response) => ({
    type: 'comments/commentsLoaded',
    payload: { response }
})

const selectCommentEntities = state => state.comments.entities

export const selectComments = createSelector(selectCommentEntities, entities =>
    Object.values(entities)
)

// Thunk functions
export const fetchComments = ({postId}) => async (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    dispatch(commentsLoading())
    const response = await client.get(url)
    dispatch(commentsLoaded(response))
}

export function saveNewComment(formData) {
    return async function saveNewCommentThunk(dispatch, getState) {
        const initialComment = formData
        const url = `https://jsonplaceholder.typicode.com/comments`
        const response = await client.post(url, initialComment)
        dispatch(commentAdded(response))
    }
}

