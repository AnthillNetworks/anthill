"use client"
import React, { useEffect, useState } from "react";
import { getAllBlogs, getBlog } from "../../firebase/Blogs";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { useRouter } from 'next/navigation';
import Styles from '@/components/header.module.css' 
import Image from "next/image";
import BlogContainer from "@/components/BlogContainer";

function AllBlogs() {

  const [blogs, setBlogs] = useState([]);
  const [open, setopen] = useState(false)
  const router = useRouter();
  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs(); // Fetch all blogs
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const scrollToSection = (sectionId) => {
    router.push(`/#${sectionId}`);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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
            <img src="/assets/call.svg" alt="" className='max-md:hidden max-md:w-[2em] cursor-pointer' onClick={() => scrollToSection('idea-form')}/>
            <div className="cursor-pointer text-center text-black px-6 py-1 max-md:px-1 max-md:text-[10px] capitalize border border-black font-medium" onClick={() => scrollToSection('idea-form')}>
              Let&#39;s Build Together
            </div>
          </div>
          <div className="max-md:flex hidden cursor-pointer" onClick={()=>setopen(!open)}>
            {
            !open ?
            <Image src="/assets/hamburger.svg" alt="Hamburger Menu" width={40} height={40} style={{width:"1em"}} />
            : <><img src="/assets/closee.svg" alt="" className="w-[20px]"/></>
            }
          </div>
            </div>
        </div>

        {
          open &&  
          <div className={`space-y-2 py-4 max-md:block hidden transform transition-all duration-5000 ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('about');setopen(false)}}>
              <div className={Styles.ids} style={{fontSize:"20px"}}>ABOUT</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('works-section');setopen(false)}}>
              <div className={Styles.ids} style={{fontSize:"20px"}}>WORKS</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('anthill');setopen(false)}}>
              <div className={Styles.ids} style={{fontSize:"20px"}}>SERVICES</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('blogs');setopen(false)}}>
              <div className={Styles.ids} style={{fontSize:"20px"}}>BLOGS</div>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={() => {scrollToSection('idea-form');setopen(false)}}>
              <div className={Styles.ids} style={{fontSize:"20px"}}>CONTACT</div>
            </div>
          </div>
        }

        <div className="w-[90%] mx-auto text-center py-10"
              style={{borderTop: "1px solid rgba(215, 214, 214, 1)",borderRight: "1px solid rgba(215, 214, 214, 1)",borderLeft: "1px solid rgba(215, 214, 214, 1)",}}
        >
          <div className={`${Styles.name1_} text-[60px] max-md:text-[28px] League uppercase`}>Stay Ahead with Our Expertise </div>
          <div className={`${Styles.name_} text-[60px]  max-md:text-[28px] League uppercase`}>Trends, Insights, and Case Studies</div>
        </div>

        <div className='flex items-center gap-10 justify-between w-[90%] mx-auto px-24 py-10 max-md:px-4 flex-wrap'
           style={{borderTop: "1px solid rgba(215, 214, 214, 1)",borderRight: "1px solid rgba(215, 214, 214, 1)",borderLeft: "1px solid rgba(215, 214, 214, 1)",}}
        >
          {blogs.slice(0,4).map((blog, index) => (
            <BlogContainer key={index} blog={blog} />
          ))}
        </div>

      <Form/>
      <Footer />
    </div>
  );
}

export default AllBlogs;
