 
import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Switch,Stack, TextField, InputAdornment,
} from '@mui/material'

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <Box>
      <FormControlLabel
        label='Set Ticket Limit'
        control={
                <Switch 
                checked={checked} 
                onChange={handleChange} 
                />}       
     />
    </Box>
  )
}



export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <FormControl >
        <FormLabel id='job-experience-group-label'>
        <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">Event Mode</span>
        </FormLabel>
        <RadioGroup
          
          aria-labelledby='job-experience-group-label'
          name='job-experience-group'
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            labelPlacement='start'
            value='Online'
            control={<Radio size='small' color='secondary' />}
            label='Online'
          />
          <FormControlLabel
            labelPlacement='start'
            value='Hybrid'
            control={<Radio size='small' color='secondary' />}
            label='Hybrid'
          />
          <FormControlLabel
            labelPlacement='start'
            value='Offline'
            control={<Radio size='small' color='secondary' />}
            label='Offline'
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}




interface MuiTextFieldProps{
    labelName?:string;
    placeholder:string;
    
}


export const MuiTextField = () => {
  const [value, setValue] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='Small secondary' size='small' color='secondary' />
      </Stack>
    </Stack>
  )
}