import React from 'react'
import Image from 'next/image'
import Styles from './scroll.module.css'

function Scroll() {

    const contentArray = [
        {
          title: "AI Specialized software development",
          description: "Our expertise lies in creating efficient solutions that optimize processes, enhance decision-making, and unlock the potential of data-driven insights",
          index: "(01)"
        },
        {
          title: "Custom SaaS product development",
          description: "From concept to execution, we craft cutting-edge solutions that seamlessly integrate into your workflow, enhancing efficiency and boosting productivity. ",
          index: "(02)"
        },
        {
          title: "Customized CRM development",
          description: "Tailored CRM development services designed to fit your unique business needs, streamlining customer interactions, optimizing data management, and enhancing overall efficiency",
          index: "(03)"
        },
      ];

  return (
    <div className={Styles.container} style={{maxWidth:"90vw"}}>
      <div className={`flex items-center justify-between w-full ${Styles.header}`}>  
        <div className={Styles.title}>WHAT WE DO ?</div>
        <div className='pl-4'><Image src="/assets/arrow.svg" alt='Arrow' width={100} height={100} className={Styles.arrowImg}/></div>
      </div>
      <div>
        <div className={`flex gap-4 overflow-scroll p-4`} >
        {contentArray.map((item, index) => (
            <div className={`flex gap-4 flex-col p-4 ${Styles.eachDiv}`} key={index}>
                <div key={index} className={`flex items-start w-full justify-between ${Styles.cont1}`}>
                    <div className={Styles.head}>{item.title}</div>
                    <div className={Styles.index}>{item.index}</div>
                </div>
                <div className={Styles.cont2}>{item.description}</div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}


export default Scroll
