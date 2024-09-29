import React from 'react';

const sidebarItems = [
  { icon: "/assets/responses.svg", text: "Responses" },
  { icon: "/assets/blogs.svg", text: "Blogs" },
];

function Sidebar({ activeIndex, onSetActiveIndex }) {
  return (
    <aside className="blogs flex flex-col w-full max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow text-base font-medium text-blue-600 text-opacity-60 max-md:mt-10">
        <div className="flex flex-col py-7  w-full bg-white">
          <div className="flex flex-col items-start px-8 w-full whitespace-nowrap max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2c2711346c31721f777baa3e7e6de5fd23773ae742e0701257195aa15627e1?placeholderIfAbsent=true&apiKey=0b1df858a5da45e9baf46b5c3506e757" alt="Company logo" className="mb-10 object-contain rounded-lg aspect-[1.2] w-[85px]" />
            {sidebarItems.map((item, index) => {
              const baseClasses = "flex gap-2.5 px-4 py-1 rounded-md mt-4 whitespace-nowrap cursor-pointer";
              const activeClasses = index === activeIndex ? "px-4 py-1 rounded-md text-blue-600 bg-blue-600 bg-opacity-10 max-md:px-5" : "";

              return (
                <div key={index} onClick={() => onSetActiveIndex(index)}>
                  <div className={`${baseClasses} ${activeClasses}`}>
                    <div className={index === activeIndex ? "grow shrink w-[127px]" : ""}>{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
