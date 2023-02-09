import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import FenceIcon from '@mui/icons-material/Fence';
import { useState } from 'react';
import { Datos } from './Classdata';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxWidth:'100%',
  minWidth:'20%'
  
};

const icons = [null];
const inputValues = ['Open'];


export function BasicModal(props) {

  
  
  const [icon, setIcon] = useState(icons);
  const [inputValue, setInputValue] = useState(inputValues);


  const [open, setOpen] = useState(false);
  const [save, setSave] = useState(false);

  const handleSave = () => {
    setSave(true);
    const datos = new Datos(props,icon,inputValue);
    const myJSON = new Datos(datos);
    console.log(myJSON.data);
  };
  
  
  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);


  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  return (
    <div>
    <div>
    
      <Button id='invobtn' variant="contained"  onClick={handleOpen}>{icon} {inputValue}</Button>
      
    </div>
      
      <Modal
        open={open}
        save = {save}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container justifyContent="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Titulo
          </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <Button sx={{ mr: 1}} variant="contained"  onClick={() => setIcon(<DoorBackIcon/>)} startIcon={<DoorBackIcon/>}></Button>
            <Button sx={{ mr: 1}} variant="contained" onClick={() => setIcon(<FenceIcon  />)} startIcon={<FenceIcon  />}></Button>
            <Button variant="contained" onClick={() => setIcon(<CameraAltIcon  />)} startIcon={<CameraAltIcon  />} ></Button>
            </Typography>
          </Grid>

          <Grid container justifyContent="center">
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            <TextField label="Ingresa el nombre" value={inputValue} onChange={handleInputChange} color="secondary" focused />
          </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            <Button onClick={handleSave} sx={{ mr: 1}} variant="contained">Agregar</Button>
            <Button sx={{ mr: 1}} variant="contained">Editar</Button>
            
            <Button variant="contained">Eliminar</Button>
            
            </Typography>
          </Grid>
          
          <Grid container justifyContent="end">
            <Button  onClick={handleClose} sx={{ mt: 4}} variant="contained"  >Close</Button>
          </Grid>
          
        </Box>  
        
        
      </Modal>

      
    </div>
    
    
  );
}