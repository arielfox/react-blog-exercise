import React from 'react';
import styles from './Comments.module.css';

const CommentListItem = ({comment}) => {
    return (
        <div className={styles.commentListItem}>
            <h3 className={styles.commentName}>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentListItem