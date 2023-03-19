import React from 'react'
import { Box,Button} from "@chakra-ui/react"

import "../Styles/Homepage.css"
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate=useNavigate()

  return (
    <Box className="mainbox">
      <Navbar />
      <Box w="90%" m="auto" display={"flex"} flexDirection={['column', 'column', "row", 'row']} justifyContent="space-between">
            <Box className='detailsbox'   w="50%" left="10px"  mt="20px" display={"flex"} flexDirection={"column"} justifyContent="space-around">
              <h1 style={{fontSize:"35px",fontWeight:"bold",textAlign:"center"}}>Build your Resume</h1>
              <h1 style={{fontSize:"35px",fontWeight:"bold",textAlign:"center"}}>in three steps</h1>
              <Box textAlign={"center"} color="white" mt="20px">
                Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.
              </Box>
              <Box>
                <Box display={"flex"} alignItems="center">
                  <div style={{backgroundColor:"#408E91",borderRadius:"10px",color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40px",height:"40px"}}>1</div>
                  <h1 style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold"}}>Select Template</h1>
                </Box>
                <Box display={"flex"} alignItems="center" mt="15px">
                  <div style={{backgroundColor:"#408E91",borderRadius:"10px",color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40px",height:"40px"}}>2</div>
                  <h1 style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold"}}>Type your Resume </h1>
                </Box>
                <Box display={"flex"} alignItems="center" mt="15px">
                  <div style={{backgroundColor:"#408E91",borderRadius:"10px",color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",width:"40px",height:"40px"}}>3</div>
                  <h1 style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold"}}>Download your Resume</h1>
                </Box>
              </Box>
              <Button className='selectbtn' onClick={()=>navigate("/template")} w="fit-content" m="auto" fontSize={"20px"} mt="20px" p="10px 10px" bgColor={"transparent"} display="flex" color="white" border={"none"}>Select template</Button>
            </Box>
            <Box>
             
            </Box>
      </Box>

    </Box>
  )
}

export default Homepage