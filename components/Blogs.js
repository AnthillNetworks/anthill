"use client";
import React, { useEffect, useState } from 'react';
import Styles from './blogs.module.css';
import { useRouter } from 'next/navigation';
import { getAllBlogs } from '@/firebase/Blogs';
import BlogContainer from './BlogContainer';

function Blogs() {
  
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs(); // Fetch all blogs
      setBlogs(fetchedBlogs);
      console.log(fetchedBlogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={Styles.mainHeader}>
      <div className={`${Styles.Workheader} flex items-center justify-between max-md:text-1xl`}
      >
        <div className='text-[70px] max-md:text-xl uppercase'>
          Blogs
        </div> 
        <div onClick={()=>{router.push('/blogs')}} className="px-4 py-2 border border-black cursor-pointer hover:bg-gray-200 transition duration-300">
          View More Blogs
        </div>
      </div>
      <div className='flex items-center gap-10 justify-between w-[90%] mx-auto px-24 py-10 max-md:px-4 overflow-scroll'
           style={{borderTop: "1px solid rgba(215, 214, 214, 1)",borderRight: "1px solid rgba(215, 214, 214, 1)",borderLeft: "1px solid rgba(215, 214, 214, 1)",}}
      >
        {blogs.map((blog, index) => (
          <BlogContainer key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
