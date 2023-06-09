import React from "react";
import CommentListItem from "./CommentListItem"
import {selectComments} from "./commentsSlice";
import {useSelector} from "react-redux";
import styles from "./Comments.module.css";

const CommentCount = ({ count }) => {
    const suffix = count === 1 ? '' : 's'

    return (
        <div className={styles.commentCount}>
            <p>{count} Comment{suffix}</p>
        </div>
    )
}

const CommentList = ({postId}) => {
    const comments = useSelector(selectComments)
    const count = comments.length

    const renderedCommentList = comments.map((comment) => {
        return (
            <CommentListItem key={comment.id} comment={comment} />
        )
    })
    return (
        <>
            <CommentCount count={count} />
            <div>{renderedCommentList}</div>
        </>
    )
}

export default CommentList