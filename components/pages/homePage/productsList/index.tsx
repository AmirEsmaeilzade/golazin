import { useState } from "react";
import ProductsCard from "../productCard/index";
import axios from "axios";

interface OptionalMiddleName {
    data : any;
}
const ProductsList = ({data}:OptionalMiddleName) => {
    console.log(data)

    const [products , setProducts] = useState(data)

    const deleteHandler = async(id:any) => {
        await axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          // handle success
          console.log(response);
          setProducts((prevState:any) => prevState.filter((item:any) => item.id !== id))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    return (
        <>
            <div className="">
                { products.map((item:any) => (
                    <ProductsCard key={item.id} dataProduct={item} deleteHandler={deleteHandler}/>
                ))}
            </div>
        </>
    )
}

export default ProductsList;