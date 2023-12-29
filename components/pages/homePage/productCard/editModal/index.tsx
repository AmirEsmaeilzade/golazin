import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';

interface OptionalMiddleName {
    openModal : any;
    handleClose : any;
    title : any;
    category : any;
    price : any;
}
const EditModal = ({openModal ,handleClose ,title ,category ,price}:OptionalMiddleName) => {

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

      const StyledInput = styled(Input)(
        ({ theme }) => `
      
        .${inputClasses.input} {
          width: 720px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5;
          padding: 8px 12px;
          border-radius: 8px;
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
          background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
          box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
          &:hover {
            border-color: ${blue[400]};
          }
      
          &:focus {
            outline: 0;
            border-color: ${blue[400]};
            box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
          }
        }
      `,
      );

      const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
      
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
      
    return (
        <Modal
            open={openModal}
            onClose={handleClose}
        >
            <Box sx={style}>
                <FormControl className='' defaultValue={title} required>
                    <p className='p-1 font-semibold text-gray-700'>Title</p>
                    <StyledInput placeholder="Write your name here" />
                </FormControl>
                <FormControl className='mt-5' defaultValue={category} required>
                    <p className='p-1 font-semibold text-gray-700'>Category</p>
                    <StyledInput placeholder="Write your name here" />
                </FormControl>
                <FormControl className='mt-5' defaultValue={price} required>
                    <p className='p-1 font-semibold text-gray-700'>Price</p>
                    <StyledInput placeholder="Write your name here" />
                </FormControl>
            </Box>
      </Modal>
    )
}

export default EditModal;