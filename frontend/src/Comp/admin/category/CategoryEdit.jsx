import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const CategoryEdit = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [name,setName] = useState('')
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/category/show/${id}`)
            console.log(res)
            setName(res.data.data.category_name)
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
            category_name:name
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/category/update",updateData)
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
    <div>
        <h1 className='text-center'>Edit Category</h1>
    </div>
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Category Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        value={name}
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

export default CategoryEdit