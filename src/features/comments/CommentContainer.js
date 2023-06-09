import React from "react";
import CommentList from "./CommentList"
import CommentForm from "./CommentForm";
import {useSelector} from "react-redux";
import styles from "./Comments.module.css";

const CommentContainer = ({postId}) => {
    const loadingStatus = useSelector(state => state.comments.status)

    if (loadingStatus === 'loading') {
        return (
            <div className={styles.commentContainer}>
                <h3>Comments</h3>
                <div className={styles.loader}>Comments Loading...</div>
            </div>
        )
    } else {
        return (
            <div className={styles.commentContainer}>
                <h3>Comments</h3>
                <CommentList postId={postId} />
                <CommentForm postId={postId} />
            </div>
        )
    }
}

export default CommentContainer