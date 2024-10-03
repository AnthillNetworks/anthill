"use client";
import BlogContainer from '@/components/BlogContainer';
import Footer from '@/components/Footer';
import { getAllBlogs, getBlog } from '@/firebase/Blogs';
import React, { useEffect, useState } from 'react';
import Styles from '../../../components/header.module.css';
import Image from 'next/image';
import Form from '@/components/Form';
import { useRouter } from 'next/navigation';

function BlogPage({ params }) {
  const router = useRouter()
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  const fetchBlogs = async () => {
    try {
      const fetchedBlog = await getBlog(params.slug);
      setBlog(fetchedBlog);
      console.log(fetchedBlog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false); // Stop loader when fetch completes
    }
  };

  const fetchAllBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs();
      const filteredBlogs = fetchedBlogs.filter((b) => b.id !== params.slug);
      setBlogs(filteredBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    router.push(`/#${sectionId}`);
  };

  useEffect(() => {
    fetchBlogs();
    fetchAllBlogs();
  }, [params.slug]);

  // Function to copy URL to clipboard
  const handleShare = () => {
    const blogUrl = window.location.href;
    navigator.clipboard.writeText(blogUrl)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy URL:', error);
      });
  };

  return (
    <div>
      {/* Header */}
      <div className={Styles.mainCon}>
        <div className={`${Styles.container} items-center`}>
          <div className="hidden md:block cursor-pointer">
            <Image className={Styles.logo} onClick={()=>router.push('/')} src="/assets/logo1.svg" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex md:hidden cursor-pointer">
            <Image src="/assets/logo1.svg" onClick={()=>router.push('/')} alt="Logo" width={160} height={160} />
          </div>
          <div className={`flex gap-8 ${Styles.links}`}>
          <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('about')}>
                <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
                <div className={Styles.ids}>ABOUT</div>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('works-section')}>
                <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
                <div className={Styles.ids}>WORKS</div>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('anthill')}>
                <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
                <div className={Styles.ids}>SERVICES</div>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => scrollToSection('idea-form')}>
                <div>{/* <Image className={Styles.img} src="/assets/rightarrow.svg" alt="Logo" width={100} height={100} /> */}</div>
                <div className={Styles.ids}>CONTACT</div>
                </div>
          </div>
          <div className='flex items-center gap-4' width={30}>
            <img src="/assets/call.svg"  alt="" className='max-md:w-[2em] cursor-pointer' onClick={() => scrollToSection('idea-form')}/>
            <div className="cursor-pointer text-center text-black px-6 py-1 max-md:px-1 max-md:text-[10px] capitalize border border-black font-medium" onClick={() => scrollToSection('idea-form')}>
              Let&#39;s Build Together
            </div>
          </div>
        </div>
      </div>

      {/* Show loader while fetching */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="loader"></div> {/* Add your loader here */}
        </div>
      ) : (
        <>
          {/* Blog Details */}
          <div className='blogs items-center gap-10 justify-between w-[90%] mx-auto px-24 py-10 max-md:px-10 flex-wrap' style={{ borderTop: "1px solid rgba(215, 214, 214, 1)", borderRight: "1px solid rgba(215, 214, 214, 1)", borderLeft: "1px solid rgba(215, 214, 214, 1)" }}>
            <div><img src={blog.blogImage} alt="Blog Image" className='w-full max-h-[24em] object-center' /></div>
            <div className='blogs text-3xl font-semibold pt-6' style={{ textTransform: "capitalize !important" }}>{blog.blogName}</div>
            <div className='w-full flex items-center justify-between'>
              <div className='flex gap-6 items-center'>
                <div className=' text-lg'>{blog.writerName}</div>
                <div className='text-neutral-500 text-sm'>{blog.publishDate || 'Unknown Date'}</div>
              </div>
              <div className='flex gap-2 cursor-pointer' onClick={handleShare}>
                <img src="/assets/share.svg" alt="Share Icon" />
                <div>Share</div>
              </div>
            </div>
            <div className='pt-4'>
              {blog.description}
            </div>
          </div>

          {/* Related Blogs */}
          <div className='blogs gap-10 justify-between w-[90%] mx-auto px-24 py-10 max-md:px-10 overflow-scroll' style={{ borderTop: "1px solid rgba(215, 214, 214, 1)", borderRight: "1px solid rgba(215, 214, 214, 1)", borderLeft: "1px solid rgba(215, 214, 214, 1)" }}>
            <div className='py-10 text-[#7f7e7f] font-medium text-[35px]'>YOU MAY ALSO LIKE</div>
            <div className='flex gap-10 items-center overflow-scroll justify-between'>
              {blogs.length > 0 ? (
                blogs.map((relatedBlog, index) => (
                  <BlogContainer key={index} blog={relatedBlog} />
                ))
              ) : (
                <div>No blogs available</div>
              )}
            </div>
          </div>

          <Form />
          <Footer />
        </>
      )}
    </div>
  );
}

export default BlogPage;
