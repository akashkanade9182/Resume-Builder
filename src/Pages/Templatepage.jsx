import React, { useContext } from 'react'
import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import Navbar from '../Components/Navbar'
import ResumeContext from '../Context/ResumeContext';

const Templatepage = () => {
     const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);
  return (
     <Box w="100%" bgColor="#1a202c" h="100vh">
          <Navbar/>
       
      <Box w="90%" m="auto" display={"flex"} flexDirection={['column', 'column', "row", 'row']} justifyContent="space-between">
            <Box className='detailsbox'   w="48%" left="10px"  mt="20px" display={"flex"} flexDirection={"column"} justifyContent="space-around">
              <h1 style={{fontSize:"35px",fontWeight:"bold",textAlign:"center"}}>Select Resume Template</h1>
            
              
            </Box>
            <Box className='detailsbox'   w="48%" left="10px"  mt="20px" display={"flex"} flexDirection={"column"} justifyContent="space-around">
              <h1 style={{fontSize:"35px",fontWeight:"bold",textAlign:"center"}}>Build your Resume</h1>
              <h1 style={{fontSize:"35px",fontWeight:"bold",textAlign:"center"}}>in three steps</h1>
            
              
            </Box>
            
      </Box>

     </Box>
  )
}

export default Templatepage