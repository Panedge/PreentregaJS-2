//le avisamos al usuario que no tiene registro en nuestra pagina
alert("Bienvenido, crea un usuario =")

//le pedimos los datos que requerimos para el login
let nombre = prompt("Ingrese su nombre");
let password = prompt("Ingrese su contraseña");
let mail = prompt ("Ingresa tu direccion de correo electronico");

//le informamos que ya es un usuario registrado de nuestra pagina        
alert("Bienvenido " + nombre + "! Estamos muy felices de que estes aqui" + "\nTu correo es: " + mail + "\n Y tu contraseña es: " + password );
    console.log("ingreso de datos de usuario");


//constantes que alojan los datos ingresados por el usuario
const nam = nombre;
const contra = password;
//verificamos los datos por consola
console.log(nam);
console.log(contra);

//validamos los datos
validarDatos();








































/*
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

validarDatos();
console.log("se valido el dato");

function interaccionDeCompra(){
    let compra = confirm("Desea comprar alguna campera?");

    switch(compra){
        case true:
            iniciarCarrito();
            console.log("se inicia el carrito")
            break;
        case false:
            alert("Ahh listo, sos re pobre");
            console.log("no se inicia el carrito")
            break;    
    }
}


function aniadirAlCarrito(codigo){

    let producto ;

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
        default :        
            producto = false;
    }
    return producto ;
}

function iniciarCarrito(){

    let lista = [];
    let finalizar_carrito = false;
    
    while (!finalizar_carrito){

        let codigo = prompt("Ingrese codigo de producto");
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
        console.log (ConfirmarLista)
        }
/*let respUno = confirm(" Desea comprar los productos seleccionados?")
        
            if (respUno = true ){
                ConfirmarLista()
        let ConfirmarLista = lista.map((el) => el.nombre)
        console.log(ConfirmarLista.map);

       

        

        /*" + ConfirmarLista());
        if (respUno){
            alert("Gracias por su compra");
        }
    }


console.log (productos)

const precios = productos.map((el) => el.precio)
console.log(precios)
*/