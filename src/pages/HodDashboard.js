import { Button, Card, CardContent, InputLabel, TextField, TextareaAutosize } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function HodDashboard() {

  const [values, setValues] = useState([])
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('userToken')
    navigate('/login')
  }

  useEffect(() => {
    setValues(JSON.parse(localStorage.getItem("leves")) || [])


  }, [values])

  console.log(values);

  const handleApprove = (item) => {
    const indexNum = values.findIndex((i) => i.id === item.id)
    values.splice(indexNum, 1, { ...item, status: "Approved" })
    localStorage.setItem("leves", JSON.stringify(values))

  }

  const handleReject = (item) => {
    const indexNum = values.findIndex((i) => i.id === item.id)
    values.splice(indexNum, 1, { ...item, status: "Reject" })
    localStorage.setItem("leves", JSON.stringify(values))

  }


  return (
    <>
      <div style={{ margin: '50px auto', display: 'flex', justifyContent: 'flex-end', marginRight: '50px' }}>
        <Button onClick={handleLogOut} style={{ width: '10%', background: "blue", color: 'white' }}>Logout</Button>
      </div>

      <div className='MainDiv'>
        {values.map((item) => {
          return (
            <div className='MiddleDiv'>
              <h6>Leave For: {item.from}</h6>
              <h6>Leave To: {item.to}</h6>
              <p>Reason: {item.reason}</p>
              <p>Status: {item.status}</p>
              {item.status === "Pending" && <div>
                <Button sx={{marginRight:'20px'}} variant="contained" color="success" onClick={() => handleApprove(item)}>Approve</Button>
                <Button variant="contained" color="error"  onClick={() => handleReject(item)}>Reject</Button>
              </div>}
            </div>
          )
        })}
      </div>
    </>
  )
}


export default HodDashboard