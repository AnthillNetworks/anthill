"use client";
import React, { useState, useRef } from 'react';
import { uploadPost } from './StoreData';
import Styles from './page.module.css';

function AdminControl() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // Use ref to manipulate file input

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title && content && image) {
      const res = await uploadPost(title, content, image);
      alert("Blog Uploaded Successfully ...");
      setTitle('');
      setContent('');
      setImage(null);
      fileInputRef.current.value = ''; // Clear the file input
    } else {
      alert('Please fill out all fields and select an image.');
    }
  };

  return (
    <div className='mt-10 flex flex-col gap-8 items-center justify-center w-full'>
      <div className='text-3xl'>
        Admin Control
      </div>
      <div className='text-xl'>
        Create a New Blog
      </div>
      <div>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={Styles.input}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={Styles.input}
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            ref={fileInputRef} // Attach ref to file input
            className={Styles.input}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AdminControl;
