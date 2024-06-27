import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import '../index.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);

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

  const handleReadMore = (postId) => {
    // Provera da li je post već otvoren, zatvori ga ako jeste, inače otvori novi post
    if (expandedPostId === postId) {
      setExpandedPostId(null); 
    } else {
      setExpandedPostId(postId); 
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Blog</h1>
          <p>Read our latest articles on fitness, nutrition, and training tips.</p>
        </header>
        <section className="section blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              {}
              {expandedPostId === post.id ? (
                <div>
                  <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                  {}
                  {post.image && (
                    <img src={`http://localhost:5173/src/assets/${post.image}`} alt={post.image} className="blog-image" />
                  )}
                </div>
              ) : (
                <p className="blog-excerpt">{post.content.substring(0, 200)}...</p>
              )}
              <button className="read-more-button" onClick={() => handleReadMore(post.id)}>
                {expandedPostId === post.id ? 'Close' : 'Read More'}
              </button>
            </article>
          ))}
        </section>
        <footer className="footer">
          <p>Stay tuned for more articles. Follow us on social media for updates.</p>
        </footer>
      </div>
    </div>
  );
};

export default Blog;
