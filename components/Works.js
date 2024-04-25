import React from 'react'
import Styles from './work.module.css'

function Works() {
  return (
    <div className={Styles.maincontainer}>
        <div className={Styles.workcontainer}> 
            <div className={`w-full ${Styles.workcontainer1}`}>
                <div></div>
                <div className={Styles.content1}>Our WORK at ANTHILL NETWORKS is a showcase for our passion,  CREATIVITY AND innovative approach to web design.</div>
            </div>
            <div className={Styles.workcontainer2}>
                <div></div>
                <div className={Styles.content2}>As you browse our work, you will experience our ability to adapt to a variety of needs and styles, While high quality and functionality in every project.</div>
            </div>
        </div>
    </div>
  )
}

export default Works
