"use client";

import ProductsList from "./productsList";

interface OptionalMiddleName {
    data : any;
}
const HomePage = ({data}:OptionalMiddleName) => {
    console.log(data)
    return (
        <>
            <div className="">
                <ProductsList data={data}/>
            </div>
        </>
    )
}

export default HomePage;