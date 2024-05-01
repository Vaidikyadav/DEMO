import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductList = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/backend/api/product/list")
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

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const res = await axios.get(`http://localhost:8000/backend/api/product/remove/${id}`)
            toast.warn(res.data.message)
            getData()
        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <>
            <div className="content">
                <div className='d-flex justify-content-end p-4'>
                    <button className='btn btn-success' onClick={() => { navigate("/admin/add-product/") }}>Add product</button>
                </div>
                <div className='logo' style={{ textAlign: "center", justifyContent: "center" }}>
                    <h4>PRODUCT LIST</h4>
                </div>
                <table class="table table-bordered table-hover">
                    <thead className="table-dark" style={{ textAlign: "center", justifyContent: "center" }} >
                        <tr>
                            <th scope="col" >Name</th>
                            <th scope="col" >Price</th>
                            <th scope="col" >Description</th>
                            <th scope="col" >Added-on</th>
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
                                            <td>{item.product_name}</td>

                                            <td>
                                                {(item.price && item.price !== "" && item.price !== null) ? item.price : "NA"}
                                            </td>
                                            <td>
                                                {(item.description && item.description !== "" && item.description !== null) ? item.description : "NA"}
                                            </td>
                                            <td>{(item.createdAt && item.createdAt !== "" && item.createdAt !== null) ? item.createdAt : "NA"}</td>

                                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <button
                                                    title='View'
                                                    onClick={
                                                        () => {
                                                            navigate(`/admin/product-view/${item._id}`)
                                                        }
                                                    }
                                                    class="btn btn-primary me-md-2" type="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                    </svg>
                                                </button>
                                                <button class="btn btn-light" title='Edit' type="button"
                                                    onClick={
                                                        () => {
                                                            navigate(`/admin/edit-product/${item._id}`)
                                                        }
                                                    }
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </button>
                                                <button class="btn btn-danger" type="button" title='Delete'
                                                    onClick={() => {
                                                        handleDelete(item._id)
                                                    }}
                                                ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                                                        <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                    </svg></button>
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

export default ProductList 