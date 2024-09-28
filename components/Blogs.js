import React from 'react'
import Styles from './blogs.module.css'

function Blogs() {
  return (
    <div className={Styles.mainHeader}>
        <div className={`${Styles.Workheader} text-[70px] max-md:text-3xl`}>
            BLOGS
        </div>
    </div>
  )
}

export default Blogs
