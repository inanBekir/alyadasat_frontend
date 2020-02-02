import React,  { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export function Update(props) {
    const userToken = localStorage.getItem('token');
    const [token] = useState(userToken);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    global.id = props.location.state.param;
    
    function onTitleChange(e){
        setTitle(e.target.value);
    };

    function onDescChange(e){
        setDesc(e.target.value);
    };

    function onPriceChange(e){
        setPrice(e.target.value);
    };

    const history = useHistory();
    const goShow = (param) => history.push('show',{param: param});

    function handleSubmit(e){
      
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
          }
          axios.put('http://localhost:3000/v1/products/' + global.id,
            {
                    title: title,
                    description: desc,
                    price: price
            },
            {            
              headers: headers
            })
            .then(res => {
              if (res.status === 200) {
                goShow(res.data.id)
              }
            })
            .catch(err => console.log(err));
    };
    
    return (
      token === null ?  <div><p>Hellow</p></div> :
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" onChange={onTitleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" onChange={onDescChange} />
        </Form.Group>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" onChange={onPriceChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    );
}