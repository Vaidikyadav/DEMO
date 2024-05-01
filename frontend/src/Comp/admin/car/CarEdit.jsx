import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const CarEdit = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const[name,setName]=useState('')
    const[company_name,setCompany_name]=useState('')
    const[model,setModel]=useState('')
    const[color,setColor]=useState('')
    const[manufacture_year,setManufacture_year]=useState('')
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/car/show/${id}`)
            console.log(res)
            setName(res.data.data),
            setCompany_name(res.data.data),
            setModel(res.data.data),
            setColor(res.data.data),
            setManufacture_year(res.data.data)
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
            car_name:name,
            company_name:company_name,
            model:model,
            color:color,
            manufacture_year:manufacture_year,
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/car/update",updateData)
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
    <div>
        <h1 className='text-center'>Edit Car</h1>
    </div>
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    
    <form onSubmit={handleSubmit}>
    <div className='row'><div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Car Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        value={name}
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
        value={company_name}
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
        value={model}
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
        value={color}
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
        value={manufacture_year}
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

export default CarEdit