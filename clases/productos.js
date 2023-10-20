class Remeras{
    constructor (nombre, precio, talle){
        this.nombre = nombre;
        this.precio = precio;
        this.talle = talle;
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }

}

class Camperas{
    constructor (nombre, precio, talle){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.talle = talle;
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }

}

const productos =[];

productos.push (new Remeras ("Remera 1", 10000, 42));

productos.push (new Remeras ("Remera 2", 20000, 42));

productos.push (new Remeras ("Remera 3", 30000, 42));

productos.push (new Remeras ("Remera 4", 40000, 42));

productos.push (new Remeras ("Remera 5", 50000, 42));

productos.push (new Remeras ("Remera 6", 60000, 42));

productos.push (new Remeras ("Remera 7", 70000, 42));

productos.push (new Remeras ("Remera 8", 80000, 42));

productos.push  (new Camperas ("Campera 1", 10000, 42));

productos.push  (new Camperas ("Campera 2", 20000, 42));

productos.push  (new Camperas ("Campera 3", 30000, 42));

productos.push  (new Camperas ("Campera 4", 40000, 42));

productos.push  (new Camperas ("Campera 5", 50000, 42));

productos.push  (new Camperas ("Campera 6", 60000, 42));

productos.push  (new Camperas ("Campera 7", 70000, 42));

productos.push  (new Camperas ("Campera 8", 80000, 42));

