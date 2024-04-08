
import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Footer from './Footer';

const WomenCloth = () => {
  const [apidata,setdata] = useState([])
  useEffect(()=>{
    getDeta()
  },[])
  async function getDeta()
  { 
    var result=await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    //console.log(result)
    var data = await result.json()
    //console.log(data)
    setdata(data)
    
  }
  return (
  
    <div>
     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
     
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard className='h-100'>
<center>
<MDBCardImage
            src={item.image} style={{width:"140px",height:"140px"}}
            alt='...'
            position='top'

          /></center>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>Rs{item.price*80}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>Rs{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>Rs{item.rating.rate}*</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              card has even longer content than the first to show that equal height action.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
        )}
      
    </MDBRow>
    <Footer></Footer>
    </div>
  )
}
export default WomenCloth

