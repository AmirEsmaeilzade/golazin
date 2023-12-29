import { useState } from "react";
import ProductsCard from "../productCard/index";
import { Put , Delete} from "../../../../utils/api/index"

interface OptionalMiddleName {
    data : any;
}
const ProductsList = ({data}:OptionalMiddleName) => {
    console.log(data)

    const [products , setProducts] = useState(data)

    const deleteHandler = async(id:number) => {
        const deleteProduct = await Delete(`/products/${id}`)
        .then((response) => {
          console.log(response);
          setProducts((prevState:any) => prevState.filter((item:any) => item.id !== id))
        })
        .catch(function (error) {
          console.log(error);
        })
        
        return deleteProduct
    };

    const editHandler = async(titleInput:any , id:number) => {
        const filterProduct = products.find((item:any) => item.id === id);
        const editedProduct = {
            id: id,
            title: titleInput.titleUpdate,
            category: titleInput.categoryUpdate,
            price: titleInput.priceUpdate,
            description: filterProduct.description,        
            image: filterProduct.image,
            rating: filterProduct.rating,
        }
        await Put(`/products/${id}`,editedProduct)
        .then((response) => {
          console.log(response);
          offlineProductsHandler(filterProduct,editedProduct)
        })
        .catch(function (error) {
          console.log(error);
        })
    };

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
            { products.map((item:any) => (
                <ProductsCard key={item.id} dataProduct={item} deleteHandler={deleteHandler} editHandler={editHandler}/>
            ))}
        </>
    )
}

export default ProductsList;