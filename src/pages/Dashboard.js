import React, { useEffect, useState } from 'react'
import HodDashboard from './HodDashboard'
import LeaveDetails from './LeaveDetails'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [user, setuser] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const userValue = JSON.parse(localStorage.getItem("userToken"))
        if (userValue) {
            setuser(userValue)
        } else {
            navigate("/login")
        }

    }, [])
    return (
        <>
            {user.position === "staff" && <LeaveDetails user={user}/>}
            {user.position === "hod" && <HodDashboard />}
        </>
    )
}

export default Dashboard