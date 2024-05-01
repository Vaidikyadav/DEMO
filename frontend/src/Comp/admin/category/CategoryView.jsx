import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CategoryView = () => {
    const navigate = useNavigate()
    const {id}= useParams()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/category/show/${id}`)
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
  return (
    <div>
        <div className='logo' style={{textAlign:"center", justifyContent:"center",fontSize:"12px"}}>
    <h1>CATEGORY VIEW</h1>
    </div>
  
    <table class="table table-bordered table-hover">
        <thead className="table-dark"style={{ textAlign: "center", justifyContent: "center" }}>
            <tr>
                <th scope='col'>NAME</th>
                <th scope='col'>ADDED-ON</th>
            </tr>

        </thead>
        <tbody>
            <tr style={{ textAlign: "center", justifyContent: "center" }}>
                <th scope='row'>{data.category_name}</th>
                <th scope='row'>
                {(data.createdAt && data.createdAt!=="" && data.createdAt!==null) ? data.createdAt : "NA"}
                </th>
            </tr>
           
        </tbody>
    </table>
    </div>
  )
}

export default CategoryView 