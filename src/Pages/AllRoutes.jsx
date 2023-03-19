import React from 'react'
import {Routes,Route} from "react-router-dom"


import Homepage from './Homepage'
import Templatepage from './Templatepage'
// import Buildpage from './Buildpage'

const AllRoutes = () => {
  return (
    <Routes>
     <Route path={"/"} element={<Homepage/>}/>
     <Route path={"/template"} element={<Templatepage/>}/>
     {/* <Route path={"/buildpage"} element={<Buildpage/>}/> */}
    </Routes>
  )
}

export default AllRoutes