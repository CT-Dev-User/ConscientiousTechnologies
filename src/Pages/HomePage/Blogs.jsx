import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const BlogCMS = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [formData, setFormData] = useState({
    category: '',
    subCategory: '',
    cardHeading: '',
    cardSubHeading: '',
    articleData: [{ Title: '', Desc: '' }],  // Initialize as array of objects
    blogTags: '',
    cardImage: null,
    headerImage: null,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-latest-blog-data');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  // Handle changes in articleData (Title/Desc)
  const handleArticleChange = (index, e) => {
    const newArticleData = [...formData.articleData];
    newArticleData[index][e.target.name] = e.target.value;
    setFormData({ ...formData, articleData: newArticleData });
  };

  // Add new article
  const addArticle = () => {
    setFormData({
      ...formData,
      articleData: [...formData.articleData, { Title: '', Desc: '' }],
    });
  };

  // Remove article
  const removeArticle = (index) => {
    const newArticleData = formData.articleData.filter((_, i) => i !== index);
    setFormData({ ...formData, articleData: newArticleData });
  };

  // Open modal for editing or adding new blog
  const toggleModal = (blog = null) => {
    if (blog) {
      setCurrentBlog(blog);
      setFormData({
        category: blog.category,
        subCategory: blog.subCategory,
        cardHeading: blog.cardHeading,
        cardSubHeading: blog.cardSubHeading,
        articleData: blog.articleData || [{ Title: '', Desc: '' }],  // Load article data or empty array
        blogTags: blog.blogTags,
        cardImage: null,
        headerImage: null,
      });
    } else {
      setCurrentBlog(null);
      setFormData({
        category: '',
        subCategory: '',
        cardHeading: '',
        cardSubHeading: '',
        articleData: [{ Title: '', Desc: '' }],  // Reset articleData to one empty item
        blogTags: '',
        cardImage: null,
        headerImage: null,
      });
    }
    setIsModalOpen(!isModalOpen);
  };

  // Submit blog data (Add/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'articleData') {
        form.append(key, JSON.stringify(formData[key]));  // Convert articleData to JSON string
      } else {
        form.append(key, formData[key]);
      }
    });

    try {
      if (currentBlog) {
        // Update existing blog
        await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-existing-blog-data/${currentBlog._id}`, form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Create new blog
        await axios.post('https://conscientious-technologies-backend.vercel.app/create-new-blog-data', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      fetchBlogs();
      toggleModal();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  // Delete blog
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-existing-blog-data-by-id/${id}`);
          fetchBlogs();
        } catch (error) {
          console.error('Error deleting blog:', error);
        }
      }
    });
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">Manage Blogs</h1>
        <Button variant="primary" onClick={() => toggleModal()}>Add New Blog</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Card Heading</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.category}</td>
              <td>{blog.subCategory}</td>
              <td>{blog.cardHeading}</td> 
              <td>
                <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2' size="sm" onClick={() => toggleModal(blog)}>Edit</button>{' '}
                <button className='hover:bg-red-700 bg-[red] px-2 py-1 rounded text-white shadow-md' size="sm" onClick={() => handleDelete(blog._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add/Edit Modal */}
      <Modal show={isModalOpen} onHide={() => toggleModal()}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{currentBlog ? 'Edit Blog' : 'Add Blog'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-4">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label>Subcategory</label>
              <input
                type="text"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label>Card Heading</label>
              <input
                type="text"
                name="cardHeading"
                value={formData.cardHeading}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label>Card Subheading</label>
              <input
                type="text"
                name="cardSubHeading"
                value={formData.cardSubHeading}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-4">
              <label>Blog Tags (Saperated By Commas)</label>
              <input
                type="text"
                name="blogTags"
                value={formData.blogTags}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            {/* Article Data */}
            <div className="mb-4">
              <label>Article Data</label>
              {formData.articleData.map((article, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    name="Title"
                    placeholder="Title"
                    value={article.Title}
                    onChange={(e) => handleArticleChange(index, e)}
                    className="form-control mb-1"
                    required
                  />
                  <textarea
                    name="Desc"
                    placeholder="Description"
                    value={article.Desc}
                    onChange={(e) => handleArticleChange(index, e)}
                    className="form-control mb-1"
                    required
                  />
                  <Button variant="danger" size="sm" onClick={() => removeArticle(index)} className='text-black'>
                    Remove Article
                  </Button>
                </div>
              ))}
              <Button variant="success" size="sm" onClick={addArticle} className='text-black'>
                Add Article
              </Button>
            </div>

            <div className="mb-4">
              <label>Card Image</label>
              <input type="file" name="cardImage" onChange={handleFileChange} className="form-control" />
            </div>
            <div className="mb-4">
              <label>Header Image</label>
              <input type="file" name="headerImage" onChange={handleFileChange} className="form-control" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => toggleModal()} className='text-black'>
              Close
            </Button>
            <Button type="submit" variant="primary" className='text-black'> 
              {currentBlog ? 'Update Blog' : 'Add Blog'}
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default BlogCMS;
