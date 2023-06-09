import React from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './Posts.module.css';
import Post from "./Post";

const PostContainer = () => {
    const { postId } = useParams();

    const postLoadingStatus = useSelector(state => state.posts.status)
    const userLoadingStatus = useSelector(state => state.users.status)

    const loadingStatus = postLoadingStatus || userLoadingStatus

    if (loadingStatus === 'loading') {
        return (
            <div>
                <div className={styles.loader}>Loading...</div>
            </div>
        )
    } else {
        return (
            <div className={styles.postContainer}>
                <p><Link to="/posts">Back to Posts</Link></p>
                <Post postId={postId} />
            </div>
        )
    }
}

export default PostContainer