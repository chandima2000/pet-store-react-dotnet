import React, {useState,useEffect} from 'react';
import './products.scss';
import { baseUrl } from '../../constants/url.constant';
import axios from 'axios';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useNavigate,useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Products() {

    const navigate = useNavigate();
    const location = useLocation();
    const [products,setProducts] = useState([]);
    const fetchProductList = async () => {
            try {
                const response = await axios.get(baseUrl);
                setProducts(response.data)
                if(location?.state){
                    Swal.fire({
                        icon: "success",
                        title: location.state.message,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
                navigate(location.pathname,{replace:true})
            } catch (error) {
                Swal.fire({
                    icon: "success",
                    title: error,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
    }

    useEffect (() => {
        fetchProductList();
    },[]);

    // console.log(products);

    const redirectToEditPage = (id) => {
        navigate(`/products/edit/${id}`)
    }

    const redirectToDeletePage = (id) => {
        navigate(`/products/delete/${id}`)
    }

  return (
    <div className='products'>
        <h1>Products List</h1>
        {products.length === 0 ? (
            <h1>No Products Found</h1>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Brand</th>
                                <th>Creation Time</th>
                                <th>Operation Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.brand}</td>
                                    <td>{moment(product.createdAt).fromNow()}</td>
                                    <td>{moment(product.updatedAt).fromNow()}</td>
                                    <td>
                                        <Button 
                                            variant='outlined' 
                                            color='warning' 
                                            sx={{mx:3}}
                                            onClick={() => redirectToEditPage(product.id)}
                                        >
                                            <EditIcon/>
                                        </Button>

                                        <Button 
                                            variant='outlined' 
                                            color='error'
                                            onClick={() => redirectToDeletePage(product.id)}
                                        >
                                            <DeleteIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
    </div>
  )
}
