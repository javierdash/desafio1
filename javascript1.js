
let palabraingresada = document.getElementById("palabraingresada");

let inputText = "";

palabraingresada.addEventListener("keyup", (event) => {
  inputText = event.path[0].value;
  console.log("escribiste: " + inputText);
  document.querySelector(".respuesta-ingresada").innerHTML = inputText; //inner similar a write
  });

//MEJORAR EL CODIGO CON OPERADOR TERNARIO..

let palabraFinal = [];  //lo hago array
let palabraUnida;
//let condicionLarga;

  onClick = () => {
    for(let i=0; i < inputText.length; i++) {
      if(inputText[i] == "a") {
        palabraFinal.push("ai");
      } else if (
      inputText[i] == "e") {
        palabraFinal.push("enter");
      } else if (
        inputText[i] == "i") {
          palabraFinal.push("imes");
      } else if (
        inputText[i] == "o") {
          palabraFinal.push("ober");
      } else if (
        inputText[i] == "u") {
          palabraFinal.push("ufat");
      } else {
          palabraFinal.push(inputText[i]);
      }
    } 
    palabraUnida = palabraFinal.join("")
    document.querySelector(".respuesta-codificada").innerHTML = palabraUnida;
    console.log("Palabra codificada: " + palabraUnida);
    palabraFinal.splice(0,palabraFinal.length);
    palabraingresada.value = "";
    }

    resetPalabra = () => {
      palabraFinal.splice(0,palabraFinal.length);
      console.log(palabraFinal)
      inputText = "";
      palabraingresada.value = "";
    }

    desencriptar = () => {
      for(let i=0; i < inputText.length; i++) { 
          if(inputText[i] == "o" && inputText[i+1] == "b" && inputText[i+2] == "e" && inputText[i+3] == "r") {   
              palabraFinal.push("o");
              console.log(`ingreso "O"`)
             } else if(inputText[i] == "b" && inputText[i+1] == "e" && inputText[i+2] == "r"){
                    console.log("out1")
                  } 
               else if(inputText[i] == "e" && inputText[i+1] == "r") {
                    console.log("out2"); 
                  } 
               else if(inputText[i-1] == "e" && inputText[i] == "r") {
                    console.log("out3"); 
                  }     
               else if(inputText[i] == "a" && inputText[i+1] == "i") {      
                    palabraFinal.push("a");
                    console.log(`ingreso "A"`)
            }   else if(inputText[i-1] == "a" && inputText[i] == "i"){
              console.log("out4")
            }  
                else if(inputText[i] == "u" && inputText[i+1] == "f" && inputText[i+2] == "a" && inputText[i+3] == "t") {   
              palabraFinal.push("u");
              console.log(`ingreso "U"`)
             } else if(inputText[i] == "f" && inputText[i+1] == "a" && inputText[i+2] == "t"){
                    console.log("out5")
                  } 
               else if(inputText[i] == "a" && inputText[i+1] == "t") {
                    console.log("out6"); 
                  } 
               else if(inputText[i-1] == "a" && inputText[i] == "t") {
                    console.log("out7"); 
                  } 
               else if(inputText[i] == "i" && inputText[i+1] == "m" && inputText[i+2] == "e" && inputText[i+3] == "s") {   
                    palabraFinal.push("i");
                    console.log(`ingreso "I"`)
                  } else if(inputText[i] == "m" && inputText[i+1] == "e" && inputText[i+2] == "s"){
                        console.log("out8")
                      } 
                    else if(inputText[i] == "e" && inputText[i+1] == "s") {
                        console.log("out9"); 
                      } 
                    else if(inputText[i-1] == "e" && inputText[i] == "s") {
                        console.log("out10"); 
                      } 
                    else if(inputText[i] == "e" && inputText[i+1] == "n" && inputText[i+2] == "t" && inputText[i+3] == "e" && inputText[i+4] == "r") {   
                      palabraFinal.push("e");
                      console.log(`ingreso "E"`)
                      } else if(inputText[i] == "n" && inputText[i+1] == "t" && inputText[i+2] == "e" && inputText[i+3] == "r"){
                            console.log("out11")
                          } 
                        else if(inputText[i] == "t" && inputText[i+1] == "e" && inputText[i+2] == "r") {
                            console.log("out12"); 
                          }
                          else if(inputText[i] == "e" && inputText[i+1] == "r") {
                            console.log("out12"); 
                          } 
                        else if(inputText[i-1] == "e" && inputText[i] == "r") {
                            console.log("out13"); 
                          }  
             else {
             palabraFinal.push(inputText[i]); 
             console.log(`primera sola "o" u otra letra, ingreso letra`)
           }         
           //console.log(i);
           console.log(inputText[i])
        }
       console.log(palabraFinal)
       palabraUnida = palabraFinal.join("")
       document.querySelector(".respuesta-codificada").innerHTML = palabraUnida;
       palabraFinal.splice(0,palabraFinal.length);
       palabraingresada.value = "";
      //console.log(palabraFinal)
    }
