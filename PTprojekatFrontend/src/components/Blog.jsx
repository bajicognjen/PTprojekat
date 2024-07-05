import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import './Blog.css';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [editPostId, setEditPostId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: '' });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/PTprojekatBackend/rest/blogs');
        setBlogPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/PTprojekatBackend/rest/users/currentUser', {
          withCredentials: true,
        });

        if (response.status === 200) {
          setCurrentUser(response.data);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleReadMore = (postId) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  const renderActionButton = (post) => {
    if (currentUser && currentUser.role === 'TRAINER') {
      return (
        <div className="blog-actions">
          <img 
            src={editIcon} 
            alt="Edit" 
            onClick={() => handleEditPost(post)} 
            className="edit-icon" 
          />
          <img 
            src={deleteIcon} 
            alt="Delete" 
            onClick={() => handleDeletePost(post.id)} 
            className="delete-icon" 
          />
        </div>
      );
    }
    return null;
  };

  const handleEditPost = (post) => {
    setEditPostId(post.id);
    setEditFormData({
      title: post.title,
      content: post.content,
      image: post.image || '',
    });
  };

  const handleEditFormChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/PTprojekatBackend/rest/blogs/${editPostId}`, editFormData);

      const updatedPosts = blogPosts.map((post) => {
        if (post.id === editPostId) {
          return {
            ...post,
            title: editFormData.title,
            content: editFormData.content,
            image: editFormData.image,
          };
        }
        return post;
      });

      setBlogPosts(updatedPosts);
      setEditPostId(null);
    } catch (error) {
      console.error('Error editing blog post:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditPostId(null);
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/PTprojekatBackend/rest/blogs/${postId}`);

      const updatedPosts = blogPosts.filter((post) => post.id !== postId);
      setBlogPosts(updatedPosts);

      if (expandedPostId === postId) {
        setExpandedPostId(null);
      }
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  const handleAddNewBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/PTprojekatBackend/rest/blogs/add', newBlog);
      setBlogPosts([...blogPosts, response.data]);
      setNewBlog({ title: '', content: '', image: '' });
    } catch (error) {
      console.error('Error adding new blog post:', error);
    }
  };

  const handleNewBlogChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevNewBlog) => ({
      ...prevNewBlog,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewBlog((prevNewBlog) => ({
        ...prevNewBlog,
        image: file.name,
      }));
    }
  };

  const handleImageChangeEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditFormData((prevBlog) => ({
        ...prevBlog,
        image: file.name,
      }));
    }
  };

  return (
    <div>
      <Navbar />
      <div className={`container ${currentUser && currentUser.role === 'TRAINER' ? 'trainer-container' : 'client-container'}`}>
        <header className="header">
          <h1>Blog</h1>
          <p>Read our latest articles on fitness, nutrition, and training tips.</p>
        </header>
        <section className="section blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              {editPostId === post.id ? (
                <form onSubmit={handleEditFormSubmit} className="edit-form">
                  <h2>Edit Blog Post</h2>
                  <input type="text" name="title" value={editFormData.title} onChange={handleEditFormChange} required />
                  <textarea name="content" value={editFormData.content} onChange={handleEditFormChange} required />
                  <input type="file" name="image" onChange={handleImageChangeEdit} />
                  <div className="edit-form-buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelEdit}>Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <h2>{post.title}</h2>
                  {expandedPostId === post.id && (
                    <div>
                      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                      {post.image && (
                        <img src={`http://localhost:5173/src/assets/${post.image}`} alt={post.image} className="blog-image" />
                      )}
                      {renderActionButton(post)}
                    </div>
                  )}
                  <button className="read-more-button" onClick={() => handleReadMore(post.id)}>
                    {expandedPostId === post.id ? 'Close' : 'Read More'}
                  </button>
                </>
              )}
            </article>
          ))}
          {currentUser && currentUser.role === 'TRAINER' && (
            <div className="add-new-blog">
              <h2>Add New Blog Post</h2>
              <form onSubmit={handleAddNewBlog}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={newBlog.title}
                  onChange={handleNewBlogChange}
                  required
                />
                <textarea
                  name="content"
                  placeholder="Content"
                  value={newBlog.content}
                  onChange={handleNewBlogChange}
                  required
                ></textarea>
                <input type="file" name="image" onChange={handleImageChange} />
                <button type="submit" className="add-blog-button">Add New Blog</button>
              </form>
            </div>
          )}
        </section>
        <footer className="footer">
          <p>Stay tuned for more articles. Follow us on social media for updates.</p>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
