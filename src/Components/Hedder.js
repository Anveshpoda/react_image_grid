import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../logo.svg';
import { Input, Row, Col, Button } from 'antd';

const Search = Input.Search;
// import { Button , ButtonGroup , Navbar,Nav,MenuItem,NavItem,NavDropdown } from 'react-bootstrap';


const Header = () => {
   return (
      <div>
         {/* <header > */}
         <Row className="App-header">
            <Col xs={4} sm={3} md={2} lg={2} xl={1} xxl={1}><img src={logo} className="App-logo" alt="logo" /></Col>
            <Col xs={0} sm={12} md={12} lg={12} xl={15} xxl={18}>
               <Search required style={{maxWidth:700}}
                  className='mainSearch'
                  placeholder="Search Images From Google"
                  size="large"
               /></Col>
            <Col xs={20} sm={9} md={10} lg={10} xl={8} xxl={5}>
               <div style={{float: 'right'}}>
               <Button type='link' style={{marginRight:15}}>Login</Button>
               <Button style={{backgroundColor:'#3cb46e', color:'white'}}>Join Free</Button>
               </div>
            </Col>
         </Row>

         {/* <div className="homeSearch">
               <Search required
                  className='mainSearch'
                  placeholder="Search Places From Google"
                  size="large"
               />
            </div> */}
         {/* <h1 className="App-title">Anvesh</h1> */}
         {/* </header> */}
      </div>
   )
}

export default Header