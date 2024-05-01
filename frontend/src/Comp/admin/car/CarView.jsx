import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CarView = () => {
    const Navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/car/show/${id}`)
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
            <div className='logo' style={{ textAlign: "center", justifyContent: "center", fontSize: "12px" }}>
                <h3>CAR VIEW</h3>
            </div>

            <table class="table table-bordered table-hover">
                <thead className="table-dark" style={{ textAlign: "center", justifyContent: "center" }}>
                    <tr>
                        <th scope="col" >Car_Name</th>
                        <th scope="col" >Company_Name</th>
                        <th scope="col" >Model</th>
                        <th scope="col" >Color</th>
                        <th scope="col" >Manufacture_Year</th>
                        <th scope="col" >Added-On</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>{data.car_name}</td>
                        <td>{data.company_name}</td>
                        <td>{data.model}</td>
                        <td>{(data.color && data.color !== "" && data.color !== null) ? data.color : "NA"}</td>
                        <td>{data.manufacture_year}</td>
                        <td> {(data.createdAt && data.createdAt !== "" && data.createdAt !== null) ? data.createdAt : "NA"}</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export default CarView 