import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
const Table = () => {
    const [data,setData] = useState([])
    const getData = async () => {
        try {
     
            const res=await axios.get('https://jsonplaceholder.typicode.com/comments',
            {
              headers: {
                'Content-Type': 'application/json',
                
              }
            });
             console.log(res.data)
            
             setData(res.data)
            
        } catch (error) {
            console.log(error)
           
        }
      };
    
      useEffect(() => {
        getData()
      }, [])

      const column = [
        {
          name:<h1 className='text-lg'> User ID</h1>,
          selector:(row)=>row.id,
          sortable:true,
          // right: true,
          },
          {
            name:<h1 className='text-lg'>name</h1>,
            selector:(row)=>row.name,
            sortable:true,
            // right: true,
            },
        {
          name:<h1 className='text-lg'>email</h1>,
          selector:(row)=>row.email,
          sortable:true,
          // right: true,
        },
     
        {
          name: <h1 className="text-[17px]">Action</h1>,
          selector: (row) => (
            <div className="flex items-center space-x-3.5">
              <button className="hover:text-primary" >
               View
              </button>
              <button className="hover:text-primary"  >
                Edit
              </button>
            </div>
          ),
          sortable: true,
        },
      
      ];
  return (
    <>
        <DataTable
            columns={column}
            data={data}
            fixedHeader
            pagination
            fixedHeaderScrollHeight={"600px"}
            // selectableRows
           
            // customStyles={tableCustomStyles}
          />
    </>
  )
}

export default Table