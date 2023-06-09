import React from "react";
import {selectPostById} from "./postsSlice";
import {useSelector} from "react-redux";
import User from "../users/User";
import styles from "./Posts.module.css";
import CommentContainer from "../comments/CommentContainer";

const Post = ({postId}) => {
    const post = useSelector(state => selectPostById(state, postId))

    if (post) {
        return (
            <>
                <div className={styles.individualPost}>
                    <h1 className={styles.postTitle}>{post.title}</h1>
                    <User userId={post.userId} />
                    <p>{post.body}</p>
                </div>
                <CommentContainer postId={postId} />
            </>
        )
    }
}

export default Post