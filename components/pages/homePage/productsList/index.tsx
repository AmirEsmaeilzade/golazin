import { useState } from "react";
import ProductsCard from "../productCard/index";
import axios from "axios";
import { Put , Delete} from "../../../../utils/api/index"

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
    };

    const editHandler = async(titleInput:any ,categoryInput:any ,priceInput:any , id:any) => {
        const filterProduct = products.find((item:any) => item.id === id);
        console.log(filterProduct)
        const editedProduct = {
            id: id,
            title: titleInput,
            category: categoryInput,
            price: priceInput,
            description: filterProduct.description,        
            image: filterProduct.image,
            rating: filterProduct.rating,
        }
        console.log(editedProduct)
        await Put(`/products/${id}`,editedProduct)
        .then((response) => {
          console.log(response);
          offlineProductsHandler(filterProduct,editedProduct)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    };
    console.log(products)

    const offlineProductsHandler = (filterProduct:any,editedProduct:any) => {
        const filteredProducts = products.map((element:any) => {
            if(element.id === filterProduct.id){
                console.log("data",element.id,filterProduct)
                return editedProduct;
            }else{
                return element;
            }
        });
        return setProducts(filteredProducts)
    }

    return (
        <>
            <div className="">
                { products.map((item:any) => (
                    <ProductsCard key={item.id} dataProduct={item} deleteHandler={deleteHandler} editHandler={editHandler}/>
                ))}
            </div>
        </>
    )
}

export default ProductsList;