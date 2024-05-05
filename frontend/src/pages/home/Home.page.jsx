import React from 'react';
import './home.scss';
import Pets from '../../assets/images/Pets.jpg';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
  return (
    <div className="home">
        <h1>Welcome to Pet Store</h1>
        <Button 
            variant='contained' 
            color='primary'
            onClick={() => navigate("/products")}
        >Product List
        </Button>
        <img src={Pets} alt='kitten' />
    </div>
  )
}
