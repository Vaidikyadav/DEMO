import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const StudentList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/backend/api/student/list")
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
         const res = await axios.get(`http://localhost:8000/backend/api/student/remove/${id}`)
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
                    <button className='btn btn-success' onClick={()=>{navigate("/admin/add-student/")}}>Add Student</button>
                </div>
                <div className='logo' style={{ textAlign: "center", justifyContent: "center" }}>
                    <h4>STUDENT LIST</h4>
                </div>
                <table class="table table-bordered table-hover">
                    <thead className="table-dark" style={{ textAlign: "center", justifyContent: "center" }} >
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >Phone</th>
                            <th scope="col" >DOB</th>
                            <th scope="col" >COURSE</th>
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
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{(item.dob && item.dob!=="" && item.dob!==null) ? item.dob : "NA"}</td>
                                            <td>{item.course}</td>
                                            <td> {(item.createdAt && item.createdAt!=="" && item.createdAt!==null) ? item.createdAt : "NA"}</td>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <button 
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/student-view/${item._id}`)
                                                    }
                                                }
                                                class="btn btn-primary me-md-2" type="button">View</button>
                                                <button class="btn btn-light" type="button"
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/edit-student/${item._id}`)
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