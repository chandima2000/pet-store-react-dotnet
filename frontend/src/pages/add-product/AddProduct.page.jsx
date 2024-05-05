import React from "react";
import "./add-product.scss";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url.constant";
import Swal from 'sweetalert2';


export default function AddProduct() {
  const [product, setProduct] = useState({ title: "", brand: "" });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveBtnClick = () => {
    if (product.title === "" || product.brand === "") {
      Swal.fire({
        icon: "info",
        title: "Please fill all the Fields",
        showConfirmButton: false,
        timer: 2500
    });
      return;
    }

    const data = {
      brand: product.brand,
      title: product.title,
    };

    axios
      .post(baseUrl, data)
      .then((response) => navigate(
                "/products",
                {state : {message:"Product Created Successfully"}}
      ))
      .catch((error) => alert(error));
  };

  const handleBackBtnClick = () => {
    navigate("/products");
  };

  return (
    <div className="add-product">
      <h2> Add New Product</h2>
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
      <div>

        <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleSaveBtnClick}
        >
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
