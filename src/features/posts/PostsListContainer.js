import React from 'react';
import {useSelector} from "react-redux";
import SearchBar from "./../filters/SearchBar";
import PostsList from "./PostsList";
import { fetchPosts } from './postsSlice';
import { fetchUsers } from './../users/usersSlice';
import store from "../../store";
import styles from "./Posts.module.css";

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

const PostsListContainer = () => {
    const loadingStatus = useSelector(state => state.posts.status)

    if (loadingStatus === 'loading') {
        return (
            <div>
                <div className={styles.loader}>Loading...</div>
            </div>
        )
    } else {
        return (
            <div className={styles.postsListContainer}>
                <SearchBar />
                <PostsList />
            </div>
        )
    }

}

export default PostsListContainer