"use client"
import React, { useState } from 'react';
import styles from './form.module.css';

const IdeaForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [activeOption, setActiveOption] = useState(null);

  const handleOptionChange = (value) => {
    setActiveOption(value);
    console.log('Selected option:', value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className={styles.maincontainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={`flex flex-col ${styles.title}`}>
          <div>
            HAVE AN IDEA? 
          </div>
          <div>
            WE WILL HELP TO IMPLEMENT IT!
          </div>
        </h2>
        <div className="flex flex-col gap-4"> 
          <h2 className={styles.choosetit}>CHOOSE ONE</h2>
          <div className='flex w-full items-center gap-2'>
            <div  className={`${styles.options} ${activeOption === "AI SPECIALIZED SOFTWARE DEVELOPMENT" ? styles.active : ''}`}  onClick={() => handleOptionChange("AI SPECIALIZED SOFTWARE DEVELOPMENT")}>AI SPECIALIZED SOFTWARE DEVELOPMENT</div>
            <div className={`${styles.options} ${activeOption === "CUSTOM SASS PRODUCT DEVELOPMENT" ? styles.active : ''}`} onClick={() => handleOptionChange("CUSTOM SASS PRODUCT DEVELOPMENT")} > CUSTOM SASS PRODUCT DEVELOPMENT </div>
            <div className={`${styles.options} ${activeOption === "CUSTOMIZED CRM DEVELOPMENT" ? styles.active : ''}`} onClick={() => handleOptionChange("CUSTOMIZED CRM DEVELOPMENT")} > CUSTOMIZED CRM DEVELOPMENT  </div>  
          </div>
        </div>

        <div className='flex flex-wrap gap-8 mt-4'>
          <input type="text" placeholder='NAME' className={styles.input}/>
          <input type="text" placeholder='MESSAGE'className={styles.input}/>
          <input type="email" placeholder='E-MAIL' className={styles.input}/>
        </div>

        <div className={styles.sendbtn}>SEND A MESSAGE</div>

      </form>
    </div>
  );
};

export default IdeaForm;