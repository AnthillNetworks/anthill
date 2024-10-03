import React from 'react';
import { useRouter } from 'next/navigation';

function BlogContainer({ blog }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/blog/${blog.id}`);
  };

  return (
    <div className="blogs cursor-pointer w-[40%] max-md:min-w-[18em] min-w-[24em] max-md:w-[100%]" onClick={handleNavigate}>
      <div className='flex items-center justify-center w-full pb-4'>
       <img src={blog.blogImage} alt="" className='min-h-[20em] max-h-[20em] object-cover w-full rounded-md'/>
      </div>
      <div style={{textTransform:'capitalize !important' }} className="blogs pb-1 font-medium">{blog.blogName}</div>
      <div className="flex items-center gap-2">
        <div className="flex w-full justify-between items-center text-start">
          <div>{blog.writerName}</div>
          <div style={{ color: 'grey' }}>
            {blog.publishDate || 'Unknown Date'}
          </div>
        </div>
      </div>
      <div style={{ color: 'grey',textTransform:'none !important' }} className="blogs pb-1 text-sm">        
        {blog.description ? (
          blog.description.length > 100 ? (
            <>
              {blog.description.substring(0, 100)}...{' '}
              <span style={{ color: '#007BFF' }}>Read More</span>
            </>
          ) : (
            blog.description
          )
        ) : (
          'No description available for this blog.'
        )}
      </div>
    </div>
  );
}

export default BlogContainer;
