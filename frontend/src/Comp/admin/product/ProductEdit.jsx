import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductEdit = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [name,setName] = useState('')
    const[price,setPrice]=useState('')
    const [description,setDescription]=useState('')  
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/product/show/${id}`)
            console.log(res)
            setName(res.data.data.product_name)
            setPrice(res.data.data.price)
            setDescription(res.data.data.description)
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
            product_name:name ,
            price:price,
            description:description,
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/product/update",updateData)
            console.log(res)
            
            toast.success(res.data.message)
            navigate('/admin/product-list')
            
        }
        catch (err) {
            console.log(err)
        }
    }
  return (
    <>
    <div>
        <h1 className='text-center'>Edit Product</h1>
    </div>
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Product Name </label>
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
        <label htmlFor="exampleInputEmail1" class="form-label">Product Price </label>
        <input 
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
        value={price}
        type="text" 
        placeholder='Enter Product Price Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Product Description </label>
        <input 
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        value={description}
        type="text" 
        placeholder='Enter Product Description Here' 
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

export default ProductEdit