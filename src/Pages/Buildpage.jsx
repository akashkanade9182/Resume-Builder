import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import ResumeContext from '../Context/ResumeContext';
import { useNavigate } from 'react-router-dom';

const Buildpage = (props) => {
     const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)
      const navigate=useNavigate();

     const handleSelectNewTemplate = () => {
     //     setShowComponent(!showComponent)
     navigate("template")
     }
  return (
   <>
     <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
            </div>
   </>
  )
}

export default Buildpage