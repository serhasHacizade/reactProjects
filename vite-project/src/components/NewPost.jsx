import classes from './NewPost.module.css';

const NewPost = (props) => {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={5} onChange={props.onBodyChange}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
        </form>
    );
}

export default NewPost;