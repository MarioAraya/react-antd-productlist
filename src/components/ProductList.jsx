export default ProductList
import React, { useEffect, useState } from 'react';
// import './index.css';
import products from '../mocks/productos';
import ProductListTable from './ProductListTable';

// const fakeDataUrl = `https://randomuser.me/api/?results=${3}&inc=name,gender,email,nat,picture&noinfo`;

function ProductList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        console.log(products);
        // fetch(fakeDataUrl)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setList(res.results);
        //     });
        setList(products);
    }, [products]);

    return (
        <ProductListTable list={list} />
    );
}



