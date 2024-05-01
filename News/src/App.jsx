import { Route, Routes } from 'react-router-dom'
import './App.css'
import News from './Components/News'

function App() {
  return (
    <>
    {/* <News/> */}
    <Routes>
      <Route exact path='/posts' element={<News/>}></Route>
      <Route path='/posts/:business' element={<News/>}></Route>
    </Routes>
    </>
  )
}

export default App
