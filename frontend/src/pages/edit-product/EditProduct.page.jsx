import React from "react";
import "./edit-product.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import { baseUrl } from '../../constants/url.constant';
import axios from 'axios';


export default function EditProduct() {

    const [product, setProduct] = useState({ title: "", brand: "" });

    const navigate = useNavigate();
    const {id} = useParams();

    const inputHandler = (e) => {
        setProduct({
        ...product,
        [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        axios
        .get(`${baseUrl}/${id}`)
        .then((response) => {
            setProduct({
                title:response.data.title,
                brand:response.data.brand,
            });
        })
    },[]);

    const handleSaveBtnClick = () => {
        if (product.title === "" || product.brand === "") {
            Swal.fire({
                icon: "info",
                title: "Please fill all the Fields",
                showConfirmButton: false,
                timer: 2000
            });
          return;
        }
    
        const data = {
          brand: product.brand,
          title: product.title,
        };
    
        axios
          .put(`${baseUrl}/${id}`, data)
          .then((response) => navigate(
                    "/products",
                    {state : {message:"Product Updated"}}
          ))
          .catch((error) => alert(error));
      };
    
      const handleBackBtnClick = () => {
        navigate("/products");
      };
    

  return (
    <div className="edit-product">
      <h2>Edit Product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        variant="outlined"
        name="brand"
        value={product.brand}
        onChange={inputHandler}
      />
      <TextField
        autoComplete="off"
        label="Title"
        variant="outlined"
        name="title"
        value={product.title}
        onChange={inputHandler}
      />
      <div  className="btn">
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
