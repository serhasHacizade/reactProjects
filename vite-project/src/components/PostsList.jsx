import Post from "./Post";
import classes from "./PostsList.module.css"
import NewPost from "./NewPost"
import { useState } from "react";
import Modal from "./Modal";

const PostsList = () => {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    };
    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };
    return (
        <>
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Eren" body="Vue.js is awesome" />
                <Post author="Murat" body="Javascript.js is awesome" />
                <Post author="Mehmet" body="Angular.js is awesome" />
            </ul>
        </>
    )
};

export default PostsList;