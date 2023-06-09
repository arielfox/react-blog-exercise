import React from 'react'
import styles from "./Comments.module.css";
import store from "../../store"
import {saveNewComment} from "./commentsSlice";
import {useSelector} from "react-redux";
import {useState} from "react";

const CommentForm = ({postId}) => {
    const [commentFormValues, setCommentFormValues] = useState({
        name: "",
        email: "",
        body: "",
        postId: parseInt(postId)
    });

    const loadingStatus = useSelector(state => state.comments.status)
    const isSubmitting = loadingStatus === 'submitting'

    function handleSubmit(e) {
        e.preventDefault();

        store.dispatch(saveNewComment(commentFormValues))
        setCommentFormValues({...commentFormValues, name: "", email: "", body: ""})
    }

    return (
        <div className={styles.commentFormContainer}>
            <div className={styles.commentForm}>
                <h3>Add Your Comment</h3>
                <form method="post" onSubmit={handleSubmit}>
                    <div className={styles.formField}>
                        <label>
                            Comment Name:
                            <input
                                name="name"
                                value={commentFormValues.name}
                                onChange={(e) => setCommentFormValues({ ...commentFormValues, name: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className={styles.formField}>
                        <label>
                            Your Email:
                            <input
                                name="email"
                                value={commentFormValues.email}
                                onChange={(e) => setCommentFormValues({ ...commentFormValues, email: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className={styles.formField}>
                        <label>
                            Comment:
                            <textarea
                                name="body" rows={4} cols={40}
                                value={commentFormValues.body}
                                onChange={(e) => setCommentFormValues({ ...commentFormValues, body: e.target.value })}
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CommentForm