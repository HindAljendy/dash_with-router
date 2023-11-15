import React, { useState } from 'react';
import  new_article from './../../images/add-circle.svg'
import calender from './../../images/calendar.svg'
import gallery_add from './../../images/gallery-add.svg'

import { Link } from 'react-router-dom';
import edit_photo from './../../images/Rectangle edit article.png'
const FormEdit = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    }
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    }
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    }
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    }
  
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();

    }
  
    return (
      <form onSubmit={handleSubmit} className='HJ_form'>
        <div className='HJ_form-part1'>
          <label className='HJ_label'>Project Cover </label>
          <div className='HJ_content'>
              <input  onChange={handleImageChange}  className='HJ_form-image' required/>    
              
          </div>
        </div>
        <div className='HJ_form-part2'>
          <input type="text" value={title} onChange={handleTitleChange}  placeholder='Title' className='HJ_title'  require/>
          <span className='HJ_star'>*</span>
          
          <input type="text" value={selectedDate} onChange={handleDateChange} placeholder='Date: 2023/5/15  ' className='HJ_date' />
         {/*  <img src={calender} className='HJ_calender'  alt='calender'/> */}
        </div>
       
   
        <div className='HJ_form_select'>
          <select value={selectedOption} onChange={handleSelectChange} className='HJ_select' required>
            <option value="option1">Tags</option>
  
  
          </select> 
        </div>
       
        <div className='HJ_form_description'>
          <label>Description</label>
          <input type="text" value={description}   onChange={handleDescriptionChange} className='HJ_description' />
          
        </div>
        <div className='HJ_form_link'>
          <Link to=''>
              <img src={gallery_add} alt="gallery add"/> Add Photo/video
            </Link>
  
        </div>
          
            
        
        <div>
         <button type="submit">إرسال</button> 
          <button type="submit">إرسال</button> 
        </div>
      
      </form>
    );
  }
  
  


export default FormEdit

