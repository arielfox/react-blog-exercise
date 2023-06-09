import { combineReducers } from 'redux'

import postsReducer from './features/posts/postsSlice';
import usersReducer from './features/users/usersSlice';
import commentsReducer from './features/comments/commentsSlice';
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    filters: filtersReducer
})

export default rootReducer