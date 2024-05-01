import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const navigate = useNavigate()
    const[price,setPrice] =useState('')
    const [name,setName] = useState('')  
    const [description,setDescription]=useState('')  
    const [category,setcategory]=useState('')  
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/backend/api/category/list")
            console.log(res)
            setData(res.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    console.log("data", data)
    useEffect(() => {
        getData()
    }, [])
    const handleSubmit = async(event)=>{
        event.preventDefault()
        console.log(name)
        let updateData = {
            product_name:name,
            price:price,
            description:description,
            category:category
            
        }
        try {
            const res = await axios.post("http://localhost:8000/backend/api/product/create",updateData)
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
    <div className='container p-4 border border-1 d-flex justify-content-center'>
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Product Name </label>
        <input 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        type="text" 
        placeholder='Enter Product Name Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>
    <div className='mb-3 col-12'>
    <label htmlFor="exampleInputEmail1" class="form-label">Category</label>
    <select class="form-select" aria-label="Default select example" required  value={category} 
    onChange={(e)=>{
        setcategory(e.target.value)
    }}>
  <option value="">Select Category</option>
  {
    data && data.map((item)=>{
        return <>
        <option value={item._id}>{item.category_name}</option>
        </>
    })
  }
  {/* <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option> */}
</select>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleInputEmail1" class="form-label">Product Price </label>
        <input 
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
        type="text" 
        placeholder='Enter Product Price Here' 
        class="form-control" 
        id="exampleInputEmail1" 
        required
        aria-describedby="emailHelp"/>
    </div>

    <div class="mb-3 col-12">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">Product Description </label>
        <textarea 
        onChange={(e)=>{
            setDescription(e.target.value)
        }}
        type="text" 
        placeholder='Enter Product Description Here' 
        class="form-control" 
        id="exampleFormControlTextarea1" 
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