import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectPostById} from './postsSlice';
import User from '../users/User';
import styles from './Posts.module.css';
import store from "../../store";
import {fetchComments} from "../comments/commentsSlice";


const PostListItem = ({id}) => {
    const postId = id
    function handleClick() {
        store.dispatch(fetchComments({postId}))
    }

    const post = useSelector(state => selectPostById(state, postId))
    const loadingStatus = useSelector(state => state.users.status)
    return(
        <>
            <li key={post.id} className={styles.postListItem}>
                <h3 className={styles.postTitle} onClick={handleClick}>
                    <Link to={`/posts/${postId}`}>{post.title}</Link>
                </h3>
                {loadingStatus === 'idle' && <User userId={post.userId} />}
            </li>
        </>
    )
}

export default PostListItem
