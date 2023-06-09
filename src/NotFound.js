import React from 'react'
import { useLocation} from "react-router-dom";

const NotFound = () => {
    let location = useLocation();

    return (
        <div>
            <h1>404</h1>
            <h3>
                No page for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NotFound
