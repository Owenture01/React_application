import React, {useState} from 'react';
import './App.css';

import Navbar from './Navbar';
import Input  from './Input';
import Post from './Post';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title){         // this function can invoked when there is an event such as clicking enter or submit button
    const newPost = {id, title};   // id is initally = 1, title will be added
    setPosts([newPost, ...posts]); // concatenate the new post with the existing post
    id += 1;
  }

  return (
    <div className="App">
      <Navbar/>
      <Input addPost = {addPost} /> 
      {posts.map((post) => (
        <Post 
          key = {post.id}
          id = {post.id}
          title = {post.title} 
        />
      ))}

    </div>
  );
}

export default App;
