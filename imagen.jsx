import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import { BasicModal } from './btnimagen';
import { Datos } from './Classdata';


const initialButtons = [];


export const Imagenes = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleClicks = () => {
    setIsVisible(true);

    
    
  };
  const handleClickss = () => {
    setIsVisible(false);

    // const datos = new Datos(buttons,'','');
    // const myJSON = new Datos(datos);
    // console.log(myJSON.data);
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
                        <BasicModal style={{
                          
                          position: "absolute",
                          left: button.left,
                          top: button.top,
                          width: button.width,
                          height: button.height,
                            
                        }} ></BasicModal>
                       
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
