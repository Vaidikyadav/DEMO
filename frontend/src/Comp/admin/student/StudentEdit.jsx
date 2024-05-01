import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const StudentEdit = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const[phone,setPhone] =useState('')
    const [name,setName] = useState('')  
    const [dob,setDob]=useState('')  
    const [course,setCourse]=useState('')
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/student/show/${id}`)
            console.log(res)
            setName(res.data.data.name)
            setPhone(res.data.data.phone)
            setDob(res.data.data.dob)
            setCourse(res.data.data.course)
        }
        catch (err) {
            console.log(err)
        }
    }
 
    useEffect(() => {
        getData()
    }, [])

    const handleSubmit = async(event)=>{
        event.preventDefault()
        console.log(name)
        let updateData = {
            updateId:id,
            name:name ,
            phone:phone,
            dob:dob,
            course:course,
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/student/update",updateData)
            console.log(res)
            
            toast.success(res.data.message)
            navigate('/admin/student-list')
            
        }
        catch (err) {
            console.log(err)
        }
    }
  return (
    <>
    <div>
        <h1 className='text-center'>Edit Student</h1>
    </div>
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        value={name}
        type="text" 
        placeholder='Enter Product Name Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student Phone </label>
        <input 
        onChange={(e)=>{
            setPhone
            (e.target.value)
        }}
        value={phone}
        type="text" 
        placeholder='Enter Student Phone Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student DOB </label>
        <input 
        onChange={(e)=>{
            setDob(e.target.value)
        }}
        value={dob}
        type="text" 
        placeholder='Enter Product Description Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student Course </label>
        <input 
        onChange={(e)=>{
            setCourse(e.target.value)
        }}
        value={course}
        type="text" 
        placeholder='Enter Student Course Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div className='col-12 d-flex justify-content-center'>
    <button type="submit" class="btn btn-primary">Save</button>
    </div>
   
    </div>
    </form>
    </div>
    </>
  )
}

export default StudentEdit