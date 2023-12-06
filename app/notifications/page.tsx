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
import CustomizedInputsStyled from '@/components/CustomTextFiels';

 
 

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
      <div className={'fixed top-0 w-full flex flex-row justify-between items-center rounded-[10px] gap-2 mx-4 py-3 z-10 bg-zinc-100 dark:bg-[#1c1c24] border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden'}>
        <div className=' flex flex-row items-center justify-center ml-4 gap-2'>
        <Icon icon="mdi:arrow-back-circle" width="25px"/>
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create a Event</h1>
      </div>
                      <div className='flex flex-row justify-center items-center'>
                       <div className="w-auto flex justify-center items-center p-2 h-25 mx-6 rounded-[50px] bg-[#8c6dfd] ">
                              <Icon icon="teenyicons:play-solid" />
                              <h4 className="font-epilogue font-bold text-[10px] text-white text-center mx-2 h-4 "> See Preview</h4>
                        </div>
                      </div>
     </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] mt-10">
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
                   <div className='flex flex-col gap-2 text-center'>
                   <h4 className="font-epilogue font-bold text-[20px] text-white ml-[20px]  ">
                     Add a cover image for this event
                  </h4>
                  <h4 className="font-epilogue font-bold text-[10px] text-white ml-[10px]  ">340x120px PNG</h4>
                </div>
              </div>
            </label>
         </div>
         

         <div className="w-full flex justify-start items-center p-3 h-20 rounded-[10px]">
                  
                  <div className="flex items-center ">
                     <div className="w-auto flex justify-start items-center p-4 h-25 rounded-[10px] bg-[#8c6dfd] ml-[-10px]">
                     <Icon icon="akar-icons:image" className="w-[60px] h-[40px] object-contain" />
                     </div>
               
                         <div className="flex-col text-center ml-[20px] mt-[10px] justify-between  ">
                                <h4 className="flex font-epilogue font-bold text-[15px] text-white">
                                 Upload Logo                                   
                                 </h4>       
                                 <h4 className="flex font-epilogue font-bold text-[10px] text-white ">512x512px PNG</h4>     
                            </div>
                            
                        <label htmlFor="upload" className="cursor-pointer">
                        <div className="flex items-center ml-[40px] mt-[20x] ">
                        <div className="w-auto flex justify-start items-center p-2 h-25 rounded-[50px] bg-[#8c6dfd]   ">
                              <h4 className="font-epilogue font-bold text-[10px] text-white text-center mx-3 h-3 "> Upload</h4>
                        </div>
                        </div>
                        </label>  
                            
                    </div>
                 </div>

              <TextField id="standard-basic" label="Name" variant="standard" />

          <FormField 
            labelName="Description"
            placeholder="Enter Event Description"
            inputType="text"                                  
            isTextArea
            value={description}
            handleChange={(e) => handleFormFieldChange('description', e)}         />  

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


          <div className="flex flex-col justify-center items-center p-[56px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
            <label htmlFor="upload" className="cursor-pointer">
                 <input
                 type="file"
                 id="upload"
                 accept="image/png"
                 className="hidden"
                 onChange={handleCoverImageChange} // handleFileUpload is a function to handle the uploaded file
                  />
              <div className="flex items-center flex-col gap-3">
                   <Icon icon="akar-icons:image" className="w-[60px] h-[40px] object-contain" />
                   <h4 className="font-epilogue font-bold text-[20px] text-white ml-[20px] text-center">
                     Upload Your Ticket nft for your event
                  </h4> 
                  <h4 className="font-epilogue font-bold text-[10px] text-white ml-[15px]  justify-center">340x280px PNG</h4>        
              </div>
                
            </label>
         </div>


          
          <TextField id="standard-basic" label="Name" variant="standard" />

          <FormField 
            labelName="Ticket Benifits"
            placeholder="Enter Ticket Benifits"
            inputType="text"                                  
            isTextArea
            value={description}
            handleChange={(e) => handleFormFieldChange('description', e)}         />  

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
          
          <FormField 
            labelName="Ticket Benifits"
            placeholder="Enter Ticket Benifits"
            inputType="text"                                  
            isTextArea
            value={description}
            handleChange={(e) => handleFormFieldChange('description', e)}         />  

           <label className="flex-1 w-full flex flex-col">
             <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Ticket Types</span>
             <CustomizedInputsStyled 
             label={'hello'} 
             placeholder={'lo'}/>
           </label>

            
 
          <div className="flex justify-center items-center mb-[60px]">
            <CustomButton 
            btnType="submit"
            title="Continue"
            styles="bg-[#1dc071]" handleClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
              throw new Error('Function not implemented.');
            } }            />
          </div>
      </form>
    </div>
  );
};

export default EventForm;
