"use client";
import React, { useState } from 'react';
import styles from './form.module.css';
import { createEnquiry } from '@/firebase/responses';

const IdeaForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionChange = (value) => {
    setActiveOption(value);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !message || !activeOption) {
      alert('Please fill all the fields');
      return
    }
    try {
      await createEnquiry({name,email,message,activeOption});
      const response = await fetch('api/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email,message,activeOption})
      });
      if (response.ok) {
          await response.json()
          setEmail("");
          setName("");
          setMessage("");
          setActiveOption(null);
          console.log('Messages sent successfully!');
      } else {
          console.error('Failed to send messages');
      }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <div className={`${styles.maincontainer} blogs`}>
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
          <div className='flex flex-wrap w-full items-center gap-2'>
            <div  className={`${styles.options} ${activeOption === "AI SPECIALIZED SOFTWARE DEVELOPMENT" ? styles.active : ''}`}  onClick={() => handleOptionChange("AI SPECIALIZED SOFTWARE DEVELOPMENT")}>AI SPECIALIZED SOFTWARE DEVELOPMENT</div>
            <div className={`${styles.options} ${activeOption === "CUSTOM SASS PRODUCT DEVELOPMENT" ? styles.active : ''}`} onClick={() => handleOptionChange("CUSTOM SASS PRODUCT DEVELOPMENT")} > CUSTOM SASS PRODUCT DEVELOPMENT </div>
            <div className={`${styles.options} ${activeOption === "CUSTOMIZED CRM DEVELOPMENT" ? styles.active : ''}`} onClick={() => handleOptionChange("CUSTOMIZED CRM DEVELOPMENT")} > CUSTOMIZED CRM DEVELOPMENT  </div>  
          </div>
        </div>

        <div className='flex flex-wrap gap-8 mt-4'>
          <input 
            type="text" 
            placeholder='NAME' 
            className={styles.input} 
            value={name} 
            onChange={handleNameChange} 
          />
          <input 
            type="text" 
            placeholder='MESSAGE' 
            className={styles.input} 
            value={message} 
            onChange={handleMessageChange} 
          />
          <input 
            type="email" 
            placeholder='E-MAIL' 
            className={styles.input} 
            value={email} 
            onChange={handleEmailChange} 
            style={{textTransform:"none !important"}}
          />
        </div>

        <button type="submit" className={styles.sendbtn}>SEND A MESSAGE</button>

      </form>
    </div>
  );
};

export default IdeaForm;
