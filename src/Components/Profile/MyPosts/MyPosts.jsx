import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postItem = props.postsData.map((element) => <Post key={element.id} post={element.post} likesCount={element.likesCount} />);

    let newPostText = React.createRef();

    let addPost = () => {
        let text = newPostText.current.value;
        props.addPost(text);
    };



    return (
        <div>
            <h3>My posts</h3>
            <div><textarea ref={newPostText} /></div>
            <div><button onClick={addPost}>Add post</button></div>

            <div className={style.item}>
                {postItem}
            </div>
        </div>
    )
}

export default MyPosts;