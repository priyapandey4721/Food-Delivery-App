import React,{useState,useEffect}  from 'react'
import Header from "../Header/Header"
import {Row,Col, Container} from 'react-bootstrap';
import {getOrder} from "../../config/Myservices"
import "./Order.css"
function Order() {
    let [order,setOrder] = useState([]);
    useEffect(()=>{
      getOrder(sessionStorage.getItem("user"))
      .then(res=>{
        if(res.data.user){
          let data=res.data.user;
          setOrder(data)
        }else{
          console.log(res.data.err)
        }
      })
    },[])
    console.log(order)
  return (
    <div className='background'>
        <Header/>
        {order.map((value,index)=>{
          return (
            <>
            <Container>
            <div className='order'>
                <Row>
                    <Col style={{ color: 'white' }}>
                        <ul className='list-unstyled'><h4>About Company</h4>
                            <li>NeoSOFT Technologies is here at your quick and easy service for Shopping</li>
                            <li>Contact Information</li>
                            <li>Email : contact@neosofttech.com</li>
                            <li>Phone : +91 0000000000</li>
                            <li>Mumbai, India</li>
                        </ul>
                    </Col>
                    <Col style={{ color: 'white' }}>
                        <ul className='list-unstyled'><h4>Order Placed At</h4>
                            <li>{value.streetName}</li>
                            <li>{value.city}</li>
                            <li>{value.state}</li>
                            <li>{value.country}</li>
                        </ul>
                    </Col>
                    <Col style={{ color: 'white' }}>
                        <ul className='list-unstyled'><h4>News Letter</h4>
                            <li>Signup to get exclusive offer from our favourite brands and to be sale up in the news</li><br />
                            <li></li>
                            <br />
                            <li></li>
                        </ul>
                    </Col>
                </Row>
                <h5 class="date">Order Placed on : {value.createdAt}</h5>
            </div>
            </Container>
            </>
          )
        })}
    </div>
  )
}

export default Order