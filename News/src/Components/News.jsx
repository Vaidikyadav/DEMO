import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink, useParams } from 'react-router-dom'

const News = () => {

  const params = useParams()
  console.log("params", params)
  const [value, setvalue] = useState("general")
  const [posts, setposts] = useState([])
  let defaultImage = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
  function getData() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${value}&apiKey=1cc8c11ca025457a923e29232d29ac34 `)

      .then((result) => {
        console.log(result)
        setposts(result.data.articles)

      })

      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (params.business) {
      setvalue(params.business)
    }
    getData()
  }, [params.business])

  console.log("News", posts)

  return (
    <>

      <div className="News">

        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">

          <div class="container" >
            <a class="navbar-brand" href="#"> <span className='badge bg-danger'>Daily</span>News</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item" style={{ color: "white" }}>
                  <NavLink to='/posts/general' className="nav-link">Home</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/business' className="nav-link">Business</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/entertainment' className="nav-link">Entertainment</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/general' className="nav-link">General</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/sports' className="nav-link">Sports</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/health' className="nav-link">Health</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/technology' className="nav-link">Technology</NavLink>
                </li>

                <li class="nav-item">
                  <NavLink to='/posts/science' className="nav-link">Science</NavLink>
                </li>

              </ul>
            </div>

          </div>
        </nav>


        <div className="d-flex justify-content-center mt-3" style={{ color: "black" }}>
          <h4 class="display-6">
            <h2 className='text-center'>DaliyNews <span className='badge bg-danger'>Top Headline</span></h2>
          </h4>
        </div>


        <div className="container">
          <div className="row gy-4 mt-3">

            {
              posts.map((item) => {
                return (
                  <>
                    <div className="col-md-3 new_card">
                      <div className="badge_top"><span class="badge">{item.source.name}</span></div>
                      <div class="card" style={{ width: "100%", height: "100%" }}>
                        <img src={(item.urlToImage) ? item.urlToImage : defaultImage} class="card-img-top" style={{ width: "100%", height: "50%" }} />
                        <div class="card-body" style={{ backgroundColor: "black", color: "white" }}>
                          <h5 class="card-title">{item.title.slice(0, 50)}</h5>
                          <p className="card-text">{(item.description) ? item.description.slice(0, 100) : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                          <a href={item.url} className="btn btn-primary" target='blank'>Read more</a>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }

          </div>
        </div>

      </div>

    </>
  )
}

export default News
