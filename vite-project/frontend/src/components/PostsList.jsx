import Post from "./Post";
import classes from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from "./Modal";
import { useState } from "react";

const PostsList = ({ isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setPosts(prev => [postData, ...prev]);
    };
    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: "center", color: "white"}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start posting some!</p>
                </div>
            )}
            
        </>
    )
};

export default PostsList;