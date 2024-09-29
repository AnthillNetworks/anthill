"use client"
import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Blogs from '../../components/admin/Blogs';
import Responses from '../../components/admin/Response';

function Admin() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='w-full flex min-h-screen bg-green-50'>
      <div className='w-1/5 min-h-screen bg-white max-md:hidden'>
        <Sidebar activeIndex={activeIndex} onSetActiveIndex={setActiveIndex} />
      </div>
      <div className='w-4/5 max-md:w-full min-h-screen bg-blue-50 max-h-screen overflow-scroll'>
        {activeIndex === 0 && <Responses/>}
        {activeIndex === 1 && <Blogs/>}
      </div>
    </div>
  );
}

export default Admin;
