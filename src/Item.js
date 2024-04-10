import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function Item()
{  
    const location =useLocation();
    const data=location.state
    const [apidata,setdata] = useState({})
    useEffect(()=>
{
   fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
    result.json().then((data1)=>{
        //  console.log(data1)
        setdata(data1)
    }) 
   }) 
},[])
    return(
        <div>
             <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>:{apidata.title}</MDBCardTitle>
        <MDBCardTitle style={{color:"red"}}>price :{apidata.price*80}Rs</MDBCardTitle>
        <MDBCardTitle>:Category{apidata.category} </MDBCardTitle>
        <MDBCardTitle>:description{apidata.description} </MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Buy</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
    )

}export default Item