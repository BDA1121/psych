import React, { useState } from 'react';
import "./styles/forum.css"
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleAddPost = (event) => {
    event.preventDefault();
    // Perform logic to add a new post
    if (newPost.trim() !== '') {
      const post = {
        id: Date.now(),
        content: newPost,
        comments: [],
      };
      setPosts([...posts, post]);
      setNewPost('');
    }
  };

  const handleAddComment = (postId, comment) => {
    // Perform logic to add a comment to a post
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="posts-page">
      <h2>Posts</h2>
      <form onSubmit={handleAddPost}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write a new post..."
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>

      {posts.map((post) => (
        <div className="post" key={post.id}>
          <p>{post.content}</p>
          <div className="comments">
            <h3>Comments</h3>
            {post.comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              post.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.comment.value;
                handleAddComment(post.id, comment);
                e.target.comment.value = '';
              }}
            >
              <input type="text" name="comment" placeholder="Write a comment..." required />
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
