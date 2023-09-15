import { Button, FormLabel, TextField, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LeaveDetails({user}) {
console.log(user)
  const iniValue = {
    from: '',
    to: '',
    reason: ''
  }

  const [values, setValues] = useState(iniValue)
  const [newValues, setNewValues] = useState([])

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('userToken')
    navigate('/login')
  }

  const handleChange = (e) => {

    setValues((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }
  console.log(values);

  const handleClick = (e) => {
    e.preventDefault();
    const allLeves = JSON.parse(localStorage.getItem("leves")) || []
    localStorage.setItem("leves",JSON.stringify([...allLeves,{...values, status:"Pending", username:user.username,id:uuidv4()}]))
    setValues(iniValue)
  }

  const handleRemove = () => {

  }


  return (
    <>

      <div style={{ margin: '50px auto', display: 'flex', justifyContent: 'flex-end', marginRight: '50px' }}>
        <Button onClick={handleLogOut} style={{ width: '10%', background: "blue", color: 'white' }}>Logout</Button>
      </div>

      <div style={{ border: '1px solid red', width: '70%', padding: '20px 0px', display: 'flex', justifyContent: 'center', margin: '50px auto' }}>
        <form>
          <Typography>Leave Details</Typography>
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%', margin: '20px 0px 30px 0px' }}>
            <div style={{ width: '50%' }}>

              <FormLabel>From</FormLabel>
              <TextField onChange={handleChange} name='from' type='date' value={values.from} />
            </div>
            <div style={{ width: '50%' }}>

              <FormLabel style={{ display: 'flex', flexDirection: 'row' }}>To</FormLabel>
              <TextField onChange={handleChange} name='to' type='date' value={values.to} />
            </div>
          </div>
          <div>
            <FormLabel>Reason</FormLabel>
            <TextField onChange={handleChange} name='reason' multiline variant='outlined' type='text' value={values.reason} style={{ width: "100%", padding: '10px 0px' }} />
          </div>
          <div style={{ margin: '20px 0px', display: 'flex', justifyContent: "flex-end" }}>
            <Button onClick={handleRemove} style={{ width: '30%', background: "grey", marginRight: '15px', color: 'white' }}>Cancel</Button>
            <Button onClick={handleClick} style={{ width: '30%', background: "blue", color: 'white' }}>Submit</Button>

          </div>

        </form>
      </div>
    </>
  )
}

export default LeaveDetails;