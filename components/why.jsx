import React from 'react';

const InfoCard = ({ imageSrc, title, description }) => (
  <div className="flex items-start text-start gap-8 p-4 w-[50%] max-md:items-center justify-between max-md:gap-4 max-lg:w-[100%]">
    <div className="min-w-[7em] min-h-[7em] mb-4 flex items-center max-md:max-w[3em] max-md:min-w-[3em] justify-center">
      <img src={imageSrc} alt={title} className=" object-contain" />
    </div>
    <div>
        <h3 className="text-xl max-md:text-sm font-bold mb-2 font-league-gothic uppercase">{title}</h3>
        <p className="text-gray-600 max-md:text-[10px] font-unbounded">{description}</p>
    </div>
  </div>
);

const AnthillNetworksInfo = () => {
  return (

    <div className='w-full border border-gray-300'>
          <div className="w-[90%] mx-auto p-4 border border-x-gray-400">
            <h1 className="text-4xl font-bold text-gray-700 mb-2 max-md:text-2xl font-league-gothic uppercase">WHY ANTHILL NETWORKS?</h1>
            <h2 className="text-xl text-gray-600 mb-8 max-md:text-lg font-unbounded">More Reliable Than Freelancers, More Affordable Than Software Agencies</h2>
            <div className="flex flex-wrap justify-between max-lg:flex-col">
                <InfoCard
                imageSrc="/assets/1.svg"
                title="NON-TECH FOUNDER FOCUS"
                description="We specialize in working with founders who don't have a technical background, providing clear communication and support at every step."
                />
                <InfoCard
                imageSrc="/assets/2.svg"
                title="COMPREHENSIVE SUPPORT"
                description="From initial brainstorming to post-launch maintenance, we're with you every step of the way."
                />
                <InfoCard
                imageSrc="/assets/3.svg"
                title="AFFORDABLE AND TRANSPARENT PRICING"
                description="We deliver high-quality solutions at a fraction of the cost compared to traditional agencies."
                />
                <InfoCard
                imageSrc="/assets/4.svg"
                title="PROVEN TRACK RECORD"
                description="With a portfolio of successful projects, we've built trust with startups across multiple industries."
                />
            </div>
        </div>
    </div>
  
  );
};

export default AnthillNetworksInfo;