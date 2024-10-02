import React from 'react';
import Styles from './work.module.css';

function WorkHeader() {
  return (
    <div className={Styles.mainHeader}>
      <div
        className="px-10 border-x-[rgba(215, 214, 214, 1)] w-[90%] px- flex items-center justify-between mx-auto"
        style={{
          borderRight: "1px solid rgba(215, 214, 214, 1)",
          borderLeft: "1px solid rgba(215, 214, 214, 1)",
        }}
      >
        <div className={Styles.Workheader}>
          OUR PROJECTS
        </div>
        <a
          href="/assets/sample.pdf" // Update this path to point to your PDF file
          download="Projects.pdf" // This will be the name of the downloaded file
          className="px-4 py-2 border border-black cursor-pointer hover:bg-gray-200 transition duration-300"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
}

export default WorkHeader;

