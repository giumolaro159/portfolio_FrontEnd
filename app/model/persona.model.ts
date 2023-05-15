export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;

    constructor(nombre: string, apellido: string, mail: string, telefono: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
    }
}