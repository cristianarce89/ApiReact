// codigo para previsualizar imagenes
//en esta seccion hace que boton quede con la propiedad del file
document.addEventListener("DOMContentLoaded", () => {
    const add_imagen = document.getElementById("imagen");
    const boton_add = document.getElementById("boton_add");
    boton_add.addEventListener("click", () => {
        add_imagen.click();
    });

// con este se agrega la imagen al body
    add_imagen.addEventListener("change", () =>{
        const fotoBoton = document.getElementById("boton_add");
        for(let i = 0; i < add_imagen.files.length; i++){
            const element = URL.createObjectURL(add_imagen.files[i]);
            const imagen = document.createElement("img");
            imagen.src = element; 
            fotoBoton.innerHTML = "";
            fotoBoton.appendChild(imagen)
            // document.body.appendChild(imagen);
        }
    });
});