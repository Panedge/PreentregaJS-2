//funcion que valida al usuario
function validarDatos(){
    let user = prompt("Ingrese su nombre de usuario");
    let pass = prompt("Ingrese su contraseña");

    if (user != nam || pass != contra){
        alert("no es un usuario valido");
    }else {
        alert("Bienvenido " + nombre);
        
        interaccionDeCompra();
        console.log("La interaccion de compra se ejecuto correctamente")
    }
}




//le preguntamos al usuario si decea comprar alguno de nuestros productos
function interaccionDeCompra(){
    let compra = confirm("Desea comprar alguna campera?");
    //el switch nos da las opciones y ejecuta segun la respuesta
    switch(compra){
        case true:
            iniciarCarrito();
            console.log("se inicia el carrito")
            break;
            
        case false:
            alert("Si no vas a comprar nada retirate");
            console.log("no se inicia el carrito")
            break;
    }
}




//funcion que se encarga de añadir los productos al carrito
function aniadirAlCarrito(codigo){
    let producto = "" ; //aqui guardaremos los productos

    //aqui tendremos los objetos a seleccionar
    switch(codigo){
        case "1" :
            producto = productos [0]
            break;
        case "2" :
            producto = productos [1]
            break; 
        case "3" : 
            producto = productos [2]
            break;
        case "4" : 
            producto = productos [3]
            break;    
        case "5" : 
            producto = productos [4]
            break;
        case "6" : 
            producto = productos [5]
            break;       
        case "7" : 
            producto = productos [6]
            break;  
        case "8" : 
            producto = productos [7]
            break;  
        case "9" : 
            producto = productos [8]
            break;  
        case "10" : 
            producto = productos [9]
            break;  
        case "11" : 
            producto = productos [10]
            break; 
        case "12" : 
            producto = productos [11]
            break;
        case "13" : 
            producto = productos [12]
            break;
        case "14" : 
            producto = productos [13]
            break;
        case "15" : 
            producto = productos [14]
            break;
        case "16" : 
            producto = productos [15]
            break;

        default :        
            producto = false;
    }
    return producto ;
}




//funcion que se encarga de iniciar el carrito
function iniciarCarrito(){

    let lista = [];
    let finalizar_carrito = false;
    // mientras que carrito sea distinto de "false" ejecuto:
    while (!finalizar_carrito){

        let codigo = prompt("Ingrese codigo de producto, presione -cancelar- para continuar");
        let producto = aniadirAlCarrito(codigo);

        if (producto){
            console.log("Se agrego : " + producto + " al carrito");
            lista += "\n" + producto;
        }else{
            if (codigo === null){
                finalizar_carrito = true;
            }else{
                alert("Ingrese un codigo de producto valido");
            }
        }
    }
    if (lista != ""){
        let resp = confirm ("Desea comprar los siguientes articulos? :"+listaFinal.join("\n"));
        if (resp){
            alert("Gracias por su compra");
        }
    }
}

//funcion que se encarga de mostrar los productos seleccionados
const listaFinal = productos.map((el) => el.nombre + " " + "$" + el.precio);