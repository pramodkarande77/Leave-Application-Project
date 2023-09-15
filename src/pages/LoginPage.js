import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Register from './Register';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate()

  const initialValue = {
    username: "",
    password: ""
  }
  const [isToggle, setIsToggle] = useState(true)
  const [formData, setFormData] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    const usersData = JSON.parse(localStorage.getItem("users")) || []

    const user = usersData.find((item) => item.username == formData.username && item.password == formData.password)

    localStorage.setItem("userToken", JSON.stringify({ ...formData, position: user?.position }))
    // alert('Submitted!');
    navigate('/')
    setFormData(initialValue)

  };



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleCLick = () => {
    setIsToggle(false)
  }

  return (
    <>
      {/* <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input onChange={handleChange} value={formData.username} type="text" className="form-control" id="username" name="username" />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input onChange={handleChange} value={formData.password} type="password" className="form-control" id="password" name="password" />
                  </div>
                  <button onClick={handleCLick} type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
              </div>
              <div className="card-footer">
                Not Registered Yet? <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
 */}
      <form style={{
        display: "flex", padding: '20px 40px',
        margin: '40px auto', gap: "30px", flexDirection: "column", border: "1px solid red", borderRadius: '10px', backgroundColor: 'lightgrey',
        alignItems: "center", width: '40%'
      }} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name='username'
          type='text'
          value={formData.username}
          onChange={handleChange}
          style={{ width: "100%", background: 'white', borderRadius: '10px' }}
        />
        <TextField
          label="Password"
          name='password'
          type="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", background: 'white', borderRadius: '10px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "100%" }}
        >
          Login
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <h5 sx={{ margin: '0px' }}>Not Registered Yet ?</h5>
          <Button ><Link to="/register">Register</Link></Button>
        </Box>
      </form>

    </>
  );
};

export default LoginForm;









