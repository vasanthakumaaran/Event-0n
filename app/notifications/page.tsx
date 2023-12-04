"use client"
import { FormField, CustomButton } from '@/components';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  Box, 
  FormControlLabel,
  Switch,Stack, TextField, InputAdornment,
} from '@mui/material' 
import { MuiRadioButton } from '@/components/MuiFormField';

 
 

const EventForm: React.FC = () => {
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventMode, setEventMode] = useState('');
  const [tags, setTags] = useState('');
  const [location, setLocation] = useState('');

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setCoverImage(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      coverImage,
      name,
      description,
      startDate,
      startTime,
      endDate,
      eventMode,
      tags,
      location,
    });
    setCoverImage(null);
    setName('');
    setDescription('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEventMode('');
    setTags('');
    setLocation('');
  };

  function handleFormFieldChange(arg0: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    throw new Error('Function not implemented.');
  }

  function handleFileUpload(arg0: File): void {
    throw new Error('Function not implemented.');
  }
  //switch 1
  const [show1,setShow1] = useState(true) 
  const [checked1, setChecked1] = useState(false)
  console.log(checked1)
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(event.target.checked)
  }
//switch 2
  const [show,setShow] = useState(true) 
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
//switch 2

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && <Loader />} */}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create a Event</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
            <label htmlFor="upload" className="cursor-pointer">
                 <input
                 type="file"
                 id="upload"
                 accept="image/png"
                 className="hidden"
                 onChange={handleCoverImageChange} // handleFileUpload is a function to handle the uploaded file
                  />
              <div className="flex items-center">
                   <Icon icon="akar-icons:image" className="w-[40px] h-[40px] object-contain" />
                   <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">
                     Add a cover image for this event
                    <h4 className="font-epilogue font-bold text-[10px] text-white ml-[10px]">340x120px PNG</h4>
                  </h4>
              </div>
            </label>
         </div>

         <div className="flex justify-start items-center p-4 bg-[#8c6dfd] h-[60px] w-[75px] rounded-[10px]">
                  
                  <div className="flex items-center">
                     <Icon icon="akar-icons:image" className="w-[60px] h-[40px] object-contain justify-center" />
               
                        <div className="flex justify-center items-center mt-[10px] p-4">
                                <h4 className="flex justify-between font-epilogue font-bold text-[15px] text-white ml-[20px]">
                                 Upload Logo                                   
                                 </h4>       
                                   
                        </div>
                            <h4 className="font-epilogue font-bold text-[10px] text-white ml-[10px] mt-[30px]">512x512px PNG</h4>
                        <label htmlFor="upload" className="cursor-pointer">
                        <div className="flex justify-end items-center p-3 bg-[#8c6dfd] h-[30px] w-[75px] rounded-[50px] gap-6">
                              <h4 className="flex justify-center font-epilogue font-bold text-[10px] text-white ml-[10px] mx-[10px]"> Upload</h4>
                               </div>
                        </label>  
                            
                    </div>
                 </div>

              <TextField id="standard-basic" label="Name" variant="standard" />

          <FormField 
            labelName="Description"
            placeholder="Enter Event Description"
                                              
            isTextArea
            value={description}
            handleChange={(e) => handleFormFieldChange('description', e)} inputType={''}          />  

          <div className="flex flex-wrap gap-[40px] text-[35px]">
          
          <FormField 
            labelName="Start Date *"
            placeholder="Start Date"
            inputType="date"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />  

          <FormField 
            labelName="Start Time (Optinal)"
            placeholder="Start Time"
            inputType="Time"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />
          
          <FormField 
            labelName="End Date (Optinal)"
            placeholder="End Date"
            inputType="date"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />  
             </div>
           
             <div className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]">
              <MuiRadioButton/>
            </div>

          <FormField 
            labelName="Tags *"
            placeholder= "Add Tags"
            inputType="text"
            value={""}
            handleChange={(e) => handleFormFieldChange('title', e)} isTextArea={false}          />
             
                   

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Location"
            placeholder="Add location"
            inputType="text"
            value={""}
            handleChange={(e) => handleFormFieldChange('target', e)} isTextArea={false}          />
        </div> 
          <FormField 
            labelName="Add Social Links"
            placeholder="Twitter"
            inputType="url"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />
          <FormField    
            placeholder="Insta"
            inputType="url"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />
          <FormField    
            placeholder="+ Add social media accounts"
            inputType="url"
            value={""}
            handleChange={(e) => handleFormFieldChange('deadline', e)} isTextArea={false}          />
        

        <FormField 
          labelName="Add Tickect Type"
          placeholder="Free"
          inputType="url"
          value={""}
          handleChange={(e) => handleFormFieldChange('image', e)} isTextArea={false}          />

          <div>
            <button onClick={()=>setShow1(!show1)}>
                   <Box>
                     <FormControlLabel
                       label='Ticket Limit'
                       control={
                           <Switch checked={checked1} onChange={handleChange1} />
                          }       
                       />
                    </Box>                           
              </button>
            {
              show1? null:   
                            <FormField 
                             labelName="Ticket Limit"
                             placeholder="Add Tags"
                             inputType="text"
                             value={""}
                             handleChange={(e) => handleFormFieldChange('image', e)} isTextArea={false}          
                             />
                             
            }
              
          </div>
          <div>
            <button onClick={()=>setShow(!show)}>
                   <Box>
                     <FormControlLabel
                       label='Ticket Limit'
                       control={
                           <Switch checked={checked} onChange={handleChange} />
                          }       
                       />
                    </Box>                           
              </button>
            {
              show? null:  <div className='flex flex-wrap gap-[20px]'>
                            <FormField 
                             labelName="Enter NFT Price"
                             placeholder="$"
                             inputType="text"
                             value={""}
                             handleChange={(e) => handleFormFieldChange('image', e)} isTextArea={false}          
                             />
                             
                             <FormField 
                             labelName="Add Beneficiary Wallet"
                             placeholder="0xb3d"
                             inputType="text"
                             value={""}
                             handleChange={(e) => handleFormFieldChange('image', e)} isTextArea={false}          
                             />
                             </div>
            }
              
          </div>
           

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
            btnType="submit"
            title="Submit new campaign"
            styles="bg-[#1dc071]" handleClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
              throw new Error('Function not implemented.');
            } }            />
          </div>
      </form>
    </div>
  );
};

export default EventForm;
