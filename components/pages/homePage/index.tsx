"use client";

import ProductsList from "./productsList";

interface OptionalMiddleName {
    data : any;
}
const HomePage = ({data}:OptionalMiddleName) => {
    return (
        <ProductsList data={data}/>
    )
}

export default HomePage;