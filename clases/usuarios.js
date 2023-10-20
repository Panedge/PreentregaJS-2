class Usuario {
    constructor (nombre, apellido, mail, numero_de_usuario){
        this.nomre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.numero_de_usuario = numero_de_usuario;
        this.cuneta_pesos = null;
    }
    getCuentaPesos(){
        return this.cuneta_pesos;
    }

    setCuentaPesos (nueva_cuenta){
        this.cuneta_pesos = nueva_cuenta;
    }

    getDatos (){
        return this.numero_de_usuario + " - " + this.nombre + " - " + this.apellido;
    }
}

//esto lo deje asi porque pensaba usarlo, pero no llego a acoplarlos a la entrega 