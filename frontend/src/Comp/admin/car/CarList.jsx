import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const StudentList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/backend/api/car/list")
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

    const handleDelete = async(id) =>{
        console.log(id)
        try{
         const res = await axios.get(`http://localhost:8000/backend/api/car/remove/${id}`)
         toast.warn(res.data.message)
         getData()
        }
        catch(err){
            console.log(err)
        }
       
    }
    return (
        <>
            <div className="content">
                <div className='d-flex justify-content-end p-4'>
                    <button className='btn btn-success' onClick={()=>{navigate("/admin/add-car/")}}>Add Car</button>
                </div>
                <div className='logo' style={{ textAlign: "center", justifyContent: "center" }}>
                    <h4>CAR LIST</h4>
                </div>
                <table class="table table-bordered table-hover">
                    <thead className="table-dark" style={{ textAlign: "center", justifyContent: "center" }} >
                        <tr>
                            <th scope="col" >Car Name</th>
                            <th scope="col" >Company Name</th>
                            <th scope="col" >Model</th>
                            <th scope="col" >Color</th>
                            <th scope="col" >Manufacture Year</th>
                            <th scope="col" >Added-On</th>
                            <th scope="col" >Action</th>
                        </tr>
                    </thead>

                    {
                        data &&
                        data.map((item) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{item.car_name}</td>
                                            <td>{item.company_name}</td>
                                            <td>{item.model}</td>
                                            <td>{(item.color && item.color!=="" && item.color!==null) ? item.color: "NA"}</td>
                                            <td>{item.manufacture_year}</td>
                                            <td> {(item.createdAt && item.createdAt!=="" && item.createdAt!==null) ? item.createdAt : "NA"}</td>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <button 
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/car-view/${item._id}`)
                                                    }
                                                }
                                                class="btn btn-primary me-md-2" type="button">View</button>
                                                <button class="btn btn-light" type="button"
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/edit-car/${item._id}`)
                                                    }
                                                }
                                                >Edit</button>
                                                <button class="btn btn-danger" type="button"
                                                onClick={()=>{
                                                    handleDelete(item._id)
                                                }}
                                                >Delete</button>
                                            </div>
                                        </tr>

                                    </tbody>
                                </>
                            )
                        })
                    }

                </table>

            </div>
        </>
    )
}

export default StudentList 