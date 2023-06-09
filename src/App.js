import styles from './App.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Navigation from './features/navigation/Navigation'
import PostContainer from "./features/posts/PostContainer";
import Album from "./features/albums/Album";
import PostsListContainer from "./features/posts/PostsListContainer";
import NotFound from "./NotFound";
import React from "react";


function App() {
  return (
    <Router>
        <div className={styles.App}>
            <Navigation />

            <Switch>
                <Route path="/posts/:postId">
                    <PostContainer />
                </Route>
                <Route path="/albums">
                    <Album />
                </Route>
                <Route exact path="/posts">
                    <PostsListContainer />
                </Route>
                <Route exact path="/">
                    <PostsListContainer />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
