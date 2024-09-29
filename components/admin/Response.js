import React, { useEffect, useState } from 'react';
import { getAllEnquiries } from '../../firebase/responses';

function Responses() {

    const [responses,Setresponses] = useState([]);
    const fetchResponses = async () => {
      try {
        const fetchedResponses = await getAllEnquiries();
        Setresponses(fetchedResponses);
        console.log(fetchedResponses);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    useEffect(() => {
      fetchResponses();
    }, []);

    return (
    <div className="blogs overflow-hidden py-6 px-8 bg-blue-50 max-md:pr-5 min-h-screen">
      <main className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col gap-8 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className='flex w-full items-center justify-between'>
                <div>
                  <header className="flex flex-col self-start text-black ">
                    <h1 className="self-start text-3xl font-medium leading-none">Responses</h1>
                    <p className="mt-1.5 text-lg leading-tight">List of Users</p>
                  </header>
                </div>
                <div onClick={()=>fetchResponses()}>
                  <button className="self-end px-11 py-2 text-base text-white whitespace-nowrap bg-blue-500 rounded-lg border border-solid border-emerald-500 border-opacity-80 shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10">
                    Refresh
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full text-black bg-white mt-6 rounded-lg shadow-sm">
            <div className="flex w-full bg-blue-100 p-4 font-medium text-lg border-b-2 border-gray-200">
              <div className="w-1/3 text-[16px]">Name</div>
              <div className="w-1/3 text-[16px]">Email</div>
              <div className="w-1/3 text-[16px]">Message</div>
              <div className="w-1/3 text-[16px]">Option</div>
            </div>
            {responses.map((response) => (
              <div key={response.id} className="blogsno flex items-center w-full p-4 border-b border-gray-200">
                <div style={{textTransform:"none !important"}} className="w-1/3 overflow-scroll text-[14px]">{response.name}</div>
                <div style={{textTransform:"none !important"}} className="w-1/3 overflow-scroll text-[14px]">{response.email}</div>
                <div style={{textTransform:"none !important"}} className="w-1/3 overflow-scroll text-[14px]">{response.message}</div>
                <div style={{textTransform:"none !important"}} className="w-1/3 overflow-scroll text-[14px]">{response.activeOption}</div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Responses;
