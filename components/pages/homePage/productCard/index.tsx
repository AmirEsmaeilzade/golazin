import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';

interface OptionalMiddleName {
    dataProduct : any;
}
const ProductsCard = ({dataProduct}:OptionalMiddleName) => {
    const { price, category, image, title, rating } = dataProduct
    console.log(dataProduct)
    return (
        <>
            <div className="flex w-full my-5 mr-10 p-2 border border-gray-700 rounded-md text-gray-700">
                <div className="p-2 bg-white rounded-md shadow-lg"><Image src={image} alt="" className="w-[270px] h-[200px] " width={270} height={200}/></div>
                <div className="w-full px-4 flex flex-col justify-between">
                    <div>
                        <p className="font-semibold text-xl">{title}</p>
                        <p className="mt-2 font-semibold text-gray-500">{category}</p>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <div className="flex">
                            <p>{rating.rate}</p>
                            <StarIcon className="text-yellow-400"/>
                            <p className="text-slate-500">({rating.count})</p>
                        </div>
                        <p>{price} $</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard;