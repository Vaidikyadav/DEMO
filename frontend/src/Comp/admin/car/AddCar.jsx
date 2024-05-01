import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCar = () => {
    const navigate = useNavigate()
    const[name,setName]=useState('')
    const[company_name,setCompany_name]=useState('')
    const[model,setModel]=useState('')
    const[color,setColor]=useState('')
    const[manufacture_year,setManufacture_year]=useState('')

    const handleSubmit = async(event)=>{
        event.preventDefault()
        console.log(name)
        let updateData = {
            car_name:name,
            company_name:company_name,
            model:model,
            color:color,
            manufacture_year:manufacture_year
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/car/create",updateData)
            console.log(res)
            toast.success(res.data.message)
            navigate('/admin/car-list')
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
        <label htmlFor="exampleInputEmail1" class="form-label">Car Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        type="text" 
        placeholder='Enter Car Name Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Company Name </label>
        <input 
        onChange={(e)=>{
            setCompany_name(e.target.value)
        }}
       
        type="text" 
        placeholder='Enter Company Name Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label"> Model </label>
        <input 
        onChange={(e)=>{
            setModel(e.target.value)
        }}
       
        type="text" 
        placeholder='Enter Model Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Color </label>
        <input 
        onChange={(e)=>{
            setColor(e.target.value)
        }}
       
        type="text" 
        placeholder='Enter Color Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Manufacture Year </label>
        <input 
        onChange={(e)=>{
            setManufacture_year(e.target.value)
        }}
       
        type="text" 
        placeholder='Enter Manufacture Year  Here' 
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

export default AddCar 