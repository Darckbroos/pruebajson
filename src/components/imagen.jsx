import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { BasicModal } from './btnimagen';
import { Datos } from './Classdata';
import useBottom from '../hooks/useBottom';


const initialButtons = [];


export const Imagenes = () => {
  const { icons, inputValues} = useBottom();
  
  const [icon, setIcon] = useState([]);
  const [inputValue, setInputValue] = useState([]);



  const [isVisible, setIsVisible] = useState(false);
  
  // console.log(inputValues)

  const handleClicks = () => {
    setIsVisible(true);

    
    
  };

    const [datos, estableceDatos] = useState('');

    const hijoAPadre = (datoshijo,datosicon) => {
      estableceDatos(datoshijo,datosicon);
      console.log(datoshijo,datosicon);
      console.log(JSON.stringify(datoshijo))
      console.log(JSON.stringify(datosicon))
      return(
        <>
        {datosicon}
        {datoshijo}
        </>
        
      )
    };


  const handleClickss = () => {
    setIsVisible(false);
    const datos = new Datos(buttons,inputValues,icons); //,datosicon,datoshijo
    const myJSON = new Datos(datos);
    console.log(myJSON.data);
  };


    const [buttons, setButtons] = useState(initialButtons);

    const handleClick = (event) => {
      const { clientX , clientY } = event;
      const overlappingButton = buttons.find(
        (button) =>
            clientX > button.left &&
            clientX < button.left + button.width &&
            clientY > button.top &&
            clientY < button.top + button.height
      );
      if (!overlappingButton) {
        setButtons([
          ...buttons,
          {
            left: clientX + -50,
            top:  clientY + -25 ,
            width: 100,
            height: 50,
            
          },
          
        ]);
      }

    };



    

    return (
     
        <Grid container justifyContent="center">
            <Grid 
            style={{
                    maxWidth:'70%',
                    width:'100%',
                    position: 'static',
                    marginTop: 70,
                     
                
                }}>
                <Grid style={{
                        maxWidth:'100%',
                        minWidth:'20%',
                        border: '3px solid #66ff76',
                        overflow: 'hidden',
                }}>
                    <img onClick={handleClick} src="./Assets/img/Plano1.jpg" className="logo" alt="" width={'100%'} />
                </Grid>
                <Grid > 
                {buttons.map((button, index) => (
                        <Button
                        key={index}
                        style={{
                          
                          position: "absolute",
                          left: button.left,
                          top: button.top,
                          width: button.width,
                          height: button.height,
                            
                        }}
                        onClick={handleClicks}
                        > 
                        {icons} {inputValues}
                        <BasicModal hijoAPadre={hijoAPadre}></BasicModal>
                       
                    </Button>
                ))}
                </Grid>
                 <Grid   container justifyContent="end">
                  <Button id='saves' variant="contained" onClick={handleClickss}
                  style={{ display: isVisible ? 'block' : 'none' }}
                  >
                  
                  Save
                  </Button>
                  
                 </Grid>   
                
                
            </Grid> 
        </Grid>
    );
}
