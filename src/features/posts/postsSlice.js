import { client } from '../../api/client';
import { createSelector } from 'reselect';

const initialState = {
    status: 'idle',
    entities: [],
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case 'posts/postsLoading': {
            return {
                ...state,
                status: 'loading'
            }
        }
        case 'posts/postsLoaded': {
            const newEntities = action.payload.map(post => {
                return post
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

export const postsLoading = () => ({ type: 'posts/postsLoading' })

export const postsLoaded = (posts) => ({
    type: 'posts/postsLoaded',
    payload: posts,
})

const selectPostEntities = state => state.posts.entities

export const selectPosts = createSelector(selectPostEntities, entities =>
    Object.values(entities)
)

export const selectPostById = (state, postId) => {
    return selectPosts(state).find(post => post.id == postId)
}

export const fetchPosts = () => async (dispatch) => {
    dispatch(postsLoading())
    const response = await client.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(postsLoaded(response))
}

export const selectFilteredPosts = state => {
    const searchTerm = state.filters.searchTerm
    const sortOrder = state.filters.sortOrder
    const originalPosts = selectPostEntities(state)

    const showAll = (searchTerm === null || searchTerm.length < 1)
    let searchedPosts = []

    if (showAll) {
        searchedPosts = originalPosts
    } else {
        searchedPosts = originalPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchTerm.toLowerCase())
        })
    }

    if (sortOrder === '') {
        return searchedPosts
    }

    let sortedPosts = searchedPosts.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    if (sortOrder === 'DESC') {
        return sortedPosts.reverse()
    } else {
        return sortedPosts
    }
}

export const selectFilteredPostIds = (state) => selectFilteredPosts(state).map(post => post.id)

