import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const navigate = useNavigate()
    const[phone,setPhone] =useState('')
    const [name,setName] = useState('')  
    const [dob,setDob]=useState('')  
    const [course,setCourse]=useState('')

    const handleSubmit = async(event)=>{
        event.preventDefault()
        console.log(name)
        let updateData = {
            name:name,
            phone:phone,
            dob:dob,
            course: course,
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/student/create",updateData)
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
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        type="text" 
        placeholder='Enter Student Name Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student Phone  </label>
        <input 
        onChange={(e)=>{
            setPhone(e.target.value)
        }}
        type="text" 
        placeholder='Enter Student Phone Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Student  DOB </label>
        <input 
        onChange={(e)=>{
            setDob(e.target.value)
        }}
        type="text" 
        placeholder='Enter Student DOB Here' 
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

export default AddProduct