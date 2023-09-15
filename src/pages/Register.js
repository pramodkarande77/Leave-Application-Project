import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Register({ setIsToggle }) {

  const navigate = useNavigate()


  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    department: '',
    username: '',
    password: '',
    position: ''
  }
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("users")) || []
    localStorage.setItem("users", JSON.stringify([...usersData, formData]))
    setFormData(initialValue)
    navigate('/login')

  };
  // const handleClick = () => {
  //   setIsToggle(true)
  // }


  return (
    <form style={{ border: '1px solid red', margin: '50px auto', display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px 40px', width: '70%', justifyContent: 'space-between' }} onSubmit={handleSubmit}>


      <FormControl >
        <FormLabel >Choose an option:</FormLabel>
        <RadioGroup style={{ display: "flex", flexDirection: 'row' }} onChange={handleChange}>
          <FormControlLabel name="position" value="hod" checked={formData.position === "hod"} control={<Radio />} label="HOD" />
          <FormControlLabel name="position" value="staff" checked={formData.position === "staff"} control={<Radio />} label="Staff" />
        </RadioGroup>
      </FormControl>
      <div style={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'center' }}>
        <TextField sx={{ width: '45%' }}
          label="First Name"
          type='text'
          name="firstName"
          value={formData.firstName}
          onChange={handleChange} />
        <TextField sx={{ width: '45%' }}
          label="Last Name"
          type='text'
          name="lastName"
          value={formData.lastName}
          onChange={handleChange} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'center' }}>
        <TextField sx={{ width: '45%' }}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange} />
        <TextField sx={{ width: '45%' }}
          label="Contact"
          name="contact"
          type="number"
          value={formData.contact}
          onChange={handleChange} />
      </div>
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Select sx={{ width: '45%' }}

          name='department'
          value={formData.department}
          onChange={handleChange}>
          <MenuItem value="civil" >Civil</MenuItem>
          <MenuItem value="mechanical">Mechanical</MenuItem>
          <MenuItem value="computer">Computer</MenuItem>
        </Select>
      </FormControl>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center' }}>

        <TextField sx={{ width: '45%' }}
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange} />
        <TextField sx={{ width: '45%' }}
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange} />
      </div>
      <Button type="submit"
        style={{ background: "blue", width: '100%', color: 'white', fontVariant: 'contained' }}>
        Register
      </Button>
      <div sx={{ display: 'flex', justifyContent: 'flex-right', border: '1px solid blue', width: '100%', margin: '0 auto' }}>
        <h5>
          Already Registered? < Button>
           <Link to="/login">Login</Link></Button></h5>
      </div>
    </form>
  );
};

export default Register








