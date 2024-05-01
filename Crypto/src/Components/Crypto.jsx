import axios from "axios"
import { useEffect, useState } from "react"

function Crypto() {

    const [dashboard, setdashboard] = useState([])
    const [search, setsearch] = useState("")

    function getData() {

        axios.get("https://openapiv1.coinstats.app/coins", {
            headers: {
                accept: 'application/json',
                'X-API-KEY': 'SdDk3aeZLsL0KFHhgwXDN7Jpkx3XzkqNOY+5T8FuJNw='
            }
        })
            .then((response) => {
                console.log("Crypto API data")
                console.log(response.data)
                setdashboard(response.data.result)
            })
            .catch((error) => {
                console.log(error)
            })

        console.log("Crypto Data", dashboard)

    }

    useEffect(() => {
        getData()
    }, [])

    function handleSearch(event) {
        console.log(event.target.value)
        setsearch(event.target.value)
    }

    return (
        <>
            <div className="crypto">
                <div className="container">
                    <div className="input_div">
                        <input type="text" className="form-control" value={search} onChange={handleSearch} placeholder="Search" />
                    </div>

                    <div className="content">
                        <table class="table table-bordered table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            
                            {
                                dashboard
                                    .filter((item) => {
                                        return (item.name.toUpperCase().includes(search.toUpperCase()) && item)
                                    })
                                    .map((item) => {
                                        return (
                                            <>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{item.id}</th>
                                                        <td><img src={item.icon} style={{ width: "60px" }} alt="" /></td>
                                                        <td>{item.name}</td>
                                                        <td>{item.symbol}</td>
                                                        <td>{item.rank}</td>
                                                        <td>{item.price}</td>
                                                    </tr>

                                                </tbody>
                                            </>
                                        )
                                    })
                            }

                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Crypto
