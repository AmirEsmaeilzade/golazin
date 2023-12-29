import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface OptionalMiddleName {
    openModal : boolean;
    handleClose : any;
    title : string;
    category : string;
    price : string;
    editHandler : Function;
    id:number;
}
const EditModal = ({openModal ,handleClose ,title ,category ,price ,editHandler, id}:OptionalMiddleName) => {
    
    const dataUpdated = {titleUpdate:title , categoryUpdate:category , priceUpdate:price}

    const submitHandler = (e:any) => {
        e.preventDefault()

        handleClose() 
        return editHandler(dataUpdated,id)
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
                        onChange={(e) => dataUpdated.titleUpdate = e.target.value}
                        variant="outlined"
                        defaultValue={title}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
                    />
                    <TextField 
                        onChange={(e) => dataUpdated.categoryUpdate = e.target.value}
                        variant="outlined"
                        defaultValue={category}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
                    />
                    <TextField 
                        onChange={(e) => dataUpdated.priceUpdate = e.target.value}
                        variant="outlined"
                        defaultValue={price}
                        className="m-5 w-[700px] mx-auto"
                        color="secondary"
                        required
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