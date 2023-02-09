
export class Datos {
    constructor(buttons, icon,inputValue ) {
      this.buttons = buttons;
      this.icon = icon;
      this.inputValue= inputValue;
      let data = JSON.stringify(buttons, icon,inputValue);
      let file = new Blob([data], {type: "application/json"});
       let a = document.createElement("a");
       a.href = URL.createObjectURL(file);
        a.download = "buttons.txt";
        a.click();

      console.log(data);
    }
  
    getData() {
      return JSON.stringify({
        buttons: this.buttons,
        icon: this.icon,
        inputValue: this.inputValue
        
      });
      
    }

  }

//    const datos = new Datos('hola', 45,'pates'); 
//    console.log(datos.toJSON());


  
