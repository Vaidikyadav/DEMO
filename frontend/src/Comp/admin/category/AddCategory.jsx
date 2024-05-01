import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddCategory = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    

    const handleSubmit = async(event)=>{
        event.preventDefault()
        console.log(name)
        let updateData = {
            category_name:name
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/category/create",updateData)
            console.log(res)
            toast.success(res.data.message)
            navigate('/admin/category-list')
            
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
        <label htmlFor="exampleInputEmail1" class="form-label">Category Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        type="text" 
        placeholder='Enter Category Name Here' 
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

export default AddCategory