import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export function Show(props)  {
  const userToken = localStorage.getItem('token');
  const [token] = useState(userToken);
  const [product, setProduct] = useState({title:'default'});
  global.id = props.location.state.param;
  
  function getProduct(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    axios.get('http://localhost:3000/v1/products/'+ global.id,
      {            
        headers: headers
      })
      .then(res => {
        if (res.status === 200) {
          global.result = res.data;
          setProduct(res.data);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if(product !== global.result){
      getProduct();
    }
  });

  const history = useHistory();
  const goUpdate = (param) => history.push('update',{param: param});
  
  return (
    <Card id="card" border="primary" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="logo192.png" />
    <hr/>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
      <Card.Text>{product.price}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
      <Button variant="primary" onClick={() => goUpdate(product.id)}>Go edit</Button>
      </Card.Body>
    </Card>
  );
}