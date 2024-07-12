import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import JoditEditor from 'jodit-react';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    heading: '',
    subHeading: '',
    blogData: [{ blogTitle: '', blogDesc: '' }],
    blogTags: '',
  });
  const [images, setImages] = useState([]);
  const editorRefs = useRef([]);

  const handleClose = () => {
    setShow(false);
    setEditingBlog(null);
    setFormData({
      heading: '',
      subHeading: '',
      blogData: [{ blogTitle: '', blogDesc: '' }],
      blogTags: ''
    });
    setImages([]);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get-blogs-data');
      setBlogs(response.data.getData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
console.log(blogs)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (index, value) => {
    const updatedBlogData = [...formData.blogData];
    updatedBlogData[index].blogDesc = value;
    setFormData({ ...formData, blogData: updatedBlogData });
  };

  const handleImageChange = (e) => {
    const newImages = [...images];
    newImages.push(e.target.files[0]);
    setImages(newImages);
  };

  const handleAddOrEditBlog = async () => {
    const { heading, subHeading, blogData, blogTags } = formData;
    const data = new FormData();

    data.append('heading', heading);
    data.append('subHeading', subHeading);
    data.append('blogData', JSON.stringify(blogData));
    data.append('blogTags', blogTags);

    images.forEach(image => {
      data.append('images', image);
    });

    try {
      if (editingBlog) {
        await axios.put(`http://localhost:8080/edit-blogs-data-by-id/${editingBlog._id}`, data);
        Swal.fire('Updated!', 'Your blog has been updated.', 'success');
      } else {
        await axios.post('http://localhost:8080/add-blogs-data', data);
        Swal.fire('Added!', 'Your blog has been added.', 'success');
      }
      fetchBlogs();
      handleClose();
    } catch (error) {
      console.error('Error adding or editing blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      heading: blog.heading,
      subHeading: blog.subHeading,
      blogData: blog.blogData,
      blogTags: blog.blogTags.map(tag => tag.tags).join(', ')
    });
    handleShow();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-blogs-data-by-id/${id}`);
      Swal.fire('Deleted!', 'Your blog has been deleted.', 'success');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const addBlogDataField = () => {
    setFormData({
      ...formData,
      blogData: [...formData.blogData, { blogTitle: '', blogDesc: '' }]
    });
  };

  const removeBlogDataField = (index) => {
    const updatedBlogData = formData.blogData.filter((_, i) => i !== index);
    setFormData({ ...formData, blogData: updatedBlogData });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Blog Management</h1>
      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => { setEditingBlog(null); handleShow(); }}>
        Add Blog
      </Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Heading</th>
            <th>SubHeading</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog._id}>
              <td>{index + 1}</td>
              <td>{blog.heading}</td>
              <td>{blog.subHeading}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(blog)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(blog._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBlog ? 'Edit Blog' : 'Add Blog'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Heading</label>
              <input type="text" className="form-control" name="heading" value={formData.heading} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>SubHeading</label>
              <input type="text" className="form-control" name="subHeading" value={formData.subHeading} onChange={handleInputChange} />
            </div>
            {formData.blogData.map((item, index) => (
              <div key={index} className="form-group">
                <label>Blog Title</label>
                <input type="text" className="form-control" name={`blogTitle${index}`} value={item.blogTitle} onChange={(e) => {
                  const updatedBlogData = [...formData.blogData];
                  updatedBlogData[index].blogTitle = e.target.value;
                  setFormData({ ...formData, blogData: updatedBlogData });
                }} />
                <label>Blog Description</label>
                <JoditEditor
                  ref={(el) => editorRefs.current[index] = el}
                  value={item.blogDesc}
                  onChange={(value) => handleEditorChange(index, value)}
                />
                <Button className='bg-[red] hover:bg-blue-700 text-white font-bold py-2 px-4 mt-[10px] rounded' onClick={() => removeBlogDataField(index)}>Remove</Button>
              </div>
            ))}
            <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-[10px] rounded' onClick={addBlogDataField}>Add Blog Data</Button>
            <div className="form-group">
              <label>Tags (comma separated)</label>
              <input type="text" className="form-control" name="blogTags" value={formData.blogTags} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Home Image</label>
              <input type="file" className="form-control" name="images" onChange={handleImageChange} />
            </div>
            <div className="form-group">
              <label>Header Image</label>
              <input type="file" className="form-control" name="images" onChange={handleImageChange} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>
            Close
          </Button>
          <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleAddOrEditBlog}>
            {editingBlog ? 'Update Blog' : 'Add Blog'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BlogPage;
