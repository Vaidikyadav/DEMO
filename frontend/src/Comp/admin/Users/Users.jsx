import React, { useState } from 'react'
import email_icon from '/images/email.png'
import password_icon from '/images/password.png'
import person_icon from '/images/person.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Users = () => {

    const navigate = useNavigate()

    const [action, setAction] = useState("Login")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            console.log(email)
            console.log(password)
            let data = {
                name: name,
                email: email,
                password: password
            }
            const res = await axios.post('http://localhost:8000/backend/api/login/auth/log', data)

            console.log(res)
            if (res.data.status === true) {
                toast.success(res.data.message)
                console.log(res.data.data)
                localStorage.setItem('user', JSON.stringify(res.data.data))
                navigate("/user/dashboard")
            }
        }
        catch (err) {
            console.log(err)
            if (err.response.status === 400) {
                toast.warn(err.response.data.message)
            }
        }
    }

    return (
        <>
            <div className="container" style={{ display: "flex", flexDirection: "column", margin: "auto", background: "#fff" }} >
                <form onSubmit={handleLogin}>
                    <div className="header" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "9px", width: "100%", marginTop: "30px" }}>
                        <div className="text" style={{ color: "#3c009d", fontSize: "48px", fontWeight: "700" }}>{action}</div>
                        <div className="underline" style={{ width: "61px", height: "6px", background: "#3c009d", borderRadius: "9px" }}>
                        </div>
                        <div className="inputs" style={{ marginTop: "55px", display: "flex", flexDirection: "column", gap: "25px" }} >

                            <div className="input" style={{ display: "flex", alignItems: "center", margin: "auto", width: "480px", height: "80px", background: "#eaeaea", borderRadius: "6px" }}>
                                <img src={person_icon} alt='' style={{ margin: "0px 30px" }} />
                                <input required type='name' value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} placeholder='NAME' style={{ height: "50px", width: "400px", background: "transparent", border: "none", outline: "none", color: "#7979790", fontSize: "19px" }} />
                            </div>

                            <div className="input" style={{ display: "flex", alignItems: "center", margin: "auto", width: "480px", height: "80px", background: "#eaeaea", borderRadius: "6px" }}>
                                <img src={email_icon} alt='' style={{ margin: "0px 30px" }} />
                                <input required type='email' value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} placeholder='Email ID' style={{ height: "50px", width: "400px", background: "transparent", border: "none", outline: "none", color: "#7979790", fontSize: "19px" }} />
                            </div>
                            <div className="input" style={{ display: "flex", alignItems: "center", margin: "auto", width: "480px", height: "80px", background: "#eaeaea", borderRadius: "6px" }}>
                                <img src={password_icon} alt='' style={{ margin: "0px 30px" }} />
                                <input required type='password' value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} placeholder='Password' style={{ height: "50px", width: "400px", background: "transparent", border: "none", outline: "none", color: "#7979790", fontSize: "19px" }} />
                            </div>
                        </div>
                        <div className="submit-container" style={{ display: "flex", gap: "30px", margin: "60px auto" }}>
                            <button type='submit'
                                style={{
                                    display: "flex", justifyContent: "center", alignItems: "center", width: "220px"
                                    , height: "59px", color: "#fff", background: "#4c00b4", borderRadius: "50px", fontSize: "19px", fontWeight: "700", cursor: "pointer"
                                }}>Login </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Users  