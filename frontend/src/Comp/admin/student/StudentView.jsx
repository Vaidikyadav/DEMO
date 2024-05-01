import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const StudentView = () => {
    const Navigate = useNavigate()
    const {id}= useParams()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/student/show/${id}`)
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
    <>
    <div className='logo' style={{textAlign:"center", justifyContent:"center",fontSize:"12px"}}>
    <h3>STUDENT VIEW</h3>
    </div>
  
    <table class="table table-bordered table-hover">
        <thead className="table-dark"style={{ textAlign: "center", justifyContent: "center" }}>
            <tr>
                <th scope='col'>NAME</th>
                <th scope='col'>PHONE</th>
                <th scope='col'>DOB</th>
                <th scope='col'>COURSE</th>
                <th scope='col'>ADDED-ON</th>

            </tr>

        </thead>
        <tbody>
            <tr style={{ textAlign: "center", justifyContent: "center" }}>
                <th scope='row'>{data.name}</th>
                <th scope='row'>
                {(data.phone && data.phone!=="" && data.phone!==null) ? data.phone : "NA"}
                </th>
                <th scope='row'>
                {(data.dob && data.dob!=="" && data.dob!==null) ? data.dob : "NA"}
                </th>
                <th scope='row'>
                {(data.course && data.course!=="" && data.course!==null) ? data.course : "NA"}
                </th>
                <th scope='row'>
                {(data.createdAt && data.createdAt!=="" && data.createdAt!==null) ? data.createdAt : "NA"}
                </th>
            </tr>
           
        </tbody>
    </table>
    </>
  )
}

export default StudentView 