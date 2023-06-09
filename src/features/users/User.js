import React from "react";
import {selectUserById} from "./usersSlice";
import {useSelector} from "react-redux";
import styles from "../posts/Posts.module.css";

const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))
    const loadingStatus = useSelector(state => state.users.status)

    if (loadingStatus === 'loading') {
        return (
            <div>
                <div className={styles.loader}>User Loading...</div>
            </div>
        )
    } else {
        if (user) {
            return(
                <p>By: {user.name}</p>
            )
        }
    }


}

export default User