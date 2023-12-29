import ProductsCard from "../productCard/index";

interface OptionalMiddleName {
    products : any;
}
const ProductsList = ({products}:OptionalMiddleName) => {
    console.log(products)
    return (
        <>
            <div className="">
                { products.map((item:any) => (
                    <ProductsCard dataProduct={item}/>
                ))}
            </div>
        </>
    )
}

export default ProductsList;