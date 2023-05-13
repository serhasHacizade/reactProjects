import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetail = () => {
    const params = useParams();
    return (
        <>
            <h1>ProductsDetail !</h1>
            <p>{params.productId}</p>
        </>
    )
}

export default ProductsDetail;