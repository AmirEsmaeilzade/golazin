import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import EditModal from "./editModal";

interface OptionalMiddleName {
    dataProduct : any;
    deleteHandler : any;
    editHandler : any;
}
const ProductsCard = ({dataProduct,deleteHandler,editHandler}:OptionalMiddleName) => {
    const {id, price, category, image, title, rating } = dataProduct;

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
            <div className="flex w-full my-5 mr-10 p-2 border border-purple-500 rounded-md text-gray-700">
                <div className="p-2 bg-white rounded-md shadow-lg"><Image src={image} alt="" className="w-[270px] h-[200px] " width={270} height={200}/></div>
                <div className="w-full px-4 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between">
                            <p className="font-semibold text-xl">{title}</p>
                            <div>
                                <EditIcon className="text-blue-500 mr-2" onClick={handleOpen}/>
                                <EditModal title={title} category={category} price={price} id={id} editHandler={editHandler} openModal={openModal} handleClose={handleClose}/>
                                <DeleteIcon className="text-red-600" onClick={() => deleteHandler(id)}/>
                            </div>
                        </div>
                        <p className="mt-2 font-semibold text-gray-500">{category}</p>
                    </div>
                    <div className="flex justify-between font-semibold">
                        <div className="flex">
                            <p>{rating.rate}</p>
                            <StarIcon className="text-yellow-400"/>
                            <p className="text-slate-500">({rating.count})</p>
                        </div>
                        <p className="text-purple-700 text-2xl">{price} $</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard;