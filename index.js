const buttons = document.querySelectorAll("#btn")
let conts = document.querySelector("#conts")
const sumar = document.querySelector("#sumar")
const restar = document.querySelector("#restar")
const multiplicar = document.querySelector("#multiplicar")
let limpiar = document.querySelector("#borrar")
const igual = document.querySelector("#igual")
let pantalla = 0;


//Este es un for para que de recorridos en todos los que tienen la 
//clase btn  utilizando funciones en el .


for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", (event) => 
    {
    
        conts.textContent += event.target.value
        
    }) 
}

//Estas son funciones para lo que es sumar , restar , multiplicar ,limpiar
// y el igual tambien que es para que nos de le resultado si es que vamos a sumar 
// multiplicar o restar o aser ambas cosas 


sumar.addEventListener("click", () => {
    conts.textContent += "+"
})

restar.addEventListener("click", () => {
    conts.textContent += "-"
})

multiplicar.addEventListener("click", () => {
    conts.textContent += "*"
})

limpiar.addEventListener("click", () => {
    conts.textContent = "";
})

igual.addEventListener("click", () => {
    try{
        let respuesta = eval(conts.textContent);
        conts.textContent = respuesta;
    }catch(error){
        conts.textContent = "Expresion mal formada"
    }   
})

