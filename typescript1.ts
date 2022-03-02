// @ts-check

let  notSure: any = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
let  lista: any[] = [1, true, "Cadena"];
lista[1] = 100;


function construirNombre(nombre: string, apellido?: string): string{
    if (apellido) return nombre + apellido
    else return nombre
}
enum Profesion{
 Pintor = "pintor",
  Programador = "programador",
  Panadero = "panadero"
}

class  Persona {
    public  nombre: string;
    public  edad: number;
    public  profesion: Profesion;
    constructor(nombre: string, edad: number, profe?: Profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profe;
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+"y tengo "+this.edad+" años"+ " Profesion: " + this.profesion);
    }
}

function mayorEdad (p1:Persona, p2:Persona):void{
 if(p1.edad > p2.edad) console.log(p1.nombre + " es mayor que " + p2.nombre);
  else console.log(p2.nombre + " es mayor que " + p1.nombre);
}


let  persona2 = new  Persona("Marius", 21);

let  persona = new  Persona("Jonatan", 32,Profesion.Programador);


persona.saludar();
mayorEdad(persona,persona2);
// Hola, mi nombre es Jonatan y tengo 32 años.

let nombre: string = construirNombre(persona.nombre);
console.log(nombre);