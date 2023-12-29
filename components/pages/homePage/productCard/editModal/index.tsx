import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface OptionalMiddleName {
    openModal : any;
    handleClose : any;
    title : any;
    category : any;
    price : any;
    editHandler : any;
    id:any;
}
const EditModal = ({openModal ,handleClose ,title ,category ,price ,editHandler, id}:OptionalMiddleName) => {
    
    const [titleInput , setTitleInput] = useState(title)
    const [categoryInput , setCategoryeInput] = useState(category)
    const [priceInput , setPriceInput] = useState(price)

    const [titleError , setTitleError] = useState(false)
    const [categoryError , setCategoryeError] = useState(false)
    const [priceError , setPriceError] = useState(false)

    const submitHandler = (e:any) => {
        e.preventDefault()
        setTitleError(false)
        setCategoryeError(false)
        setPriceError(false)

        if(titleInput == ""){
            setTitleError(true)
        }
        if(categoryInput == ""){
            setCategoryeError(true)
        }
        if(priceInput == ""){
            setPriceError(true)
        }
        handleClose() 
        return editHandler(titleInput,categoryInput,priceInput,id)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
        >
            <Box sx={style}>
                <form onSubmit={submitHandler}>
                    <TextField 
                        onChange={(e) => setTitleInput(e.target.value)}
                        variant="outlined"
                        defaultValue={title}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
                        error={titleError}
                    />
                    <TextField 
                        onChange={(e) => setCategoryeInput(e.target.value)}
                        variant="outlined"
                        defaultValue={category}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
                        error={categoryError}
                    />
                    <TextField 
                        onChange={(e) => setPriceInput(e.target.value)}
                        variant="outlined"
                        defaultValue={price}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
                        error={priceError}
                    />

                    <Button
                        type='submit'
                        color='secondary'
                        variant='outlined'
                        className='mt-2 w-20'
                    >
                        Submit
                    </Button>
                </form>
            </Box>
      </Modal>
    )
}

export default EditModal;