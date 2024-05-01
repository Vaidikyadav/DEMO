import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import DataTable from 'react-data-table-component';
const CategoryList = () => {
    const navigate = useNavigate()
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

    const handleDelete = async(id) =>{
        console.log(id)
        try{
         const res = await axios.get(`http://localhost:8000/backend/api/category/remove/${id}`)
         toast.warn(res.data.message)
         getData()
        }
        catch(err){
            console.log(err)
        }
       
    }

    const column = [
        // {
        //   name:<h1 className='text-lg'> User ID</h1>,
        //   selector:(row)=>row.id,
        //   sortable:true,
        //   // right: true,
        //   },
          {
            name:<h1 className='text-lg'>Category Name</h1>,
            selector:(row)=>row.category_name,
            sortable:true,
            // right: true,
            },
        // {
        //   name:<h1 className='text-lg'>email</h1>,
        //   selector:(row)=>row.email,
        //   sortable:true,
        //   // right: true,
        // },
     
        {
          name: <h1 className="text-[17px]">Action</h1>,
          selector: (row) => (
            <div className="flex items-center space-x-3.5">
                <button 
                    onClick={
                        ()=>{
                             navigate(`/admin/category-view/${row._id}`)
                        }
                    }
                    class="btn btn-primary me-md-2" type="button">View</button>
                    <button class="btn btn-light mx-1" type="button"
                    onClick={
                        ()=>{
                            navigate(`/admin/edit-category/${row._id}`)
                        }
                    }
                    >Edit</button>
                    <button class="btn btn-danger" type="button"
                    onClick={()=>{
                        handleDelete(row._id)
                    }}
                    >Delete</button>
            </div>
          ),
          sortable: true,
        },
      
      ];
    return (
        <>
            <div className="content">
                <div className='d-flex justify-content-end p-4'>
                    <button className='btn btn-success' onClick={()=>{navigate("/admin/add-category/")}}>Add Category</button>
                </div>
                <div className='logo' style={{ textAlign: "center", justifyContent: "center" }}>
                    <h4>CATEGORY LIST</h4>
                </div>
                <table class="table table-bordered table-hover">
                    <thead className="table-dark" style={{ textAlign: "center", justifyContent: "center" }} >
                        <tr>
                            <th scope="col" >Category_Name</th>
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
                                            <td>{item.category_name}</td>
                                           <td> {(item.createdAt && item.createdAt!=="" && item.createdAt!==null) ? item.createdAt : "NA"}</td>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <button 
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/category-view/${item._id}`)
                                                    }
                                                }
                                                class="btn btn-primary me-md-2" type="button">View</button>
                                                <button class="btn btn-light" type="button"
                                                onClick={
                                                    ()=>{
                                                        navigate(`/admin/edit-category/${item._id}`)
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
                <DataTable
                    columns={column}
                    data={data}
                    fixedHeader
                    pagination
                    fixedHeaderScrollHeight={"600px"}
                    // selectableRows
                
                    // customStyles={tableCustomStyles}
                />
            </div>
        </>
    )
}

export default CategoryList 