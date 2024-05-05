import React from "react";
import './delete-product.scss';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/url.constant";
import axios from "axios";

export default function DeleteProduct() {

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) =>
        navigate("/products", { state: { message: "Product Deleted." } })
      )
      .catch((error) => alert(error));
  };

  const handleBackBtnClick = () => {
    navigate("/products");
  };

  return (
    <div className="delete-product">
            <h2>Delete Product</h2>
            <h4>Are You sure, You want to delete this product?</h4>
            <div className="btn">
                <Button
                variant="contained"
                color="error"
                onClick={handleDeleteBtnClick}
                >
                Yes, Delete It
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
