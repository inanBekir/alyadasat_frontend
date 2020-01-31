import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export function Index() {
  const userToken = localStorage.getItem('token');
  const [token] = useState(userToken);
  const [products, setProducts] = useState([]);

  function getProducts(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    axios.get('http://localhost:3000/v1/products',
      {            
        headers: headers
      })
      .then(res => {
        if (res.status === 200) {
          global.result = res.data;
          setProducts(res.data);
      }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if(products !== global.result){
      getProducts();
    }
  });

  function TodoList({ items }) {
    return items.map(item => (
      <Card id="card" border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="logo192.png" />
      <hr/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>{item.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ));
  }
  return (
      <TodoList items={products} />
  );
}