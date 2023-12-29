"use client";

import ProductsList from "./productsList";

interface OptionalMiddleName {
    products : any;
}
const HomePage = ({products}:OptionalMiddleName) => {
    console.log(products)
    return (
        <>
            <div className="">
                <ProductsList products={products}/>
            </div>
        </>
    )
}

export default HomePage;