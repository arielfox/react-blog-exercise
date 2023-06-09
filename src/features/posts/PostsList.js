import React from 'react';
import {selectFilteredPostIds} from './postsSlice';
import { useSelector} from 'react-redux';
import PostListItem from './PostListItem';
import styles from './Posts.module.css';

const PostCount = ({ count }) => {
    const suffix = count === 1 ? '' : 's'

    return (
        <div className={styles.postCount}>
            <p>{count} Post{suffix}</p>
        </div>
    )
}

const PostsList = () => {
    const posts = useSelector(selectFilteredPostIds)
    const count = posts.length

    const renderedPostList = posts.map((postId) => {
        return (
            <PostListItem key={postId} id={postId} />
            )
    })
    return (
        <>
            <PostCount count={count} />
            <ul className={styles.postsList}>{renderedPostList}</ul>
        </>
    )
}

export default PostsList


