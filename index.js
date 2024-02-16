const mi_lista_de_contactos = [];

function añadirContacto({ id: id,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    email: email,
    telefono: telefono,
    ciudad: ciudad,
    direccion: direccion }) {

    mi_lista_de_contactos.push({id, nombre, apellido, edad, email, telefono, ciudad, direccion})


}

let contacto1 = {
    id: 0,
    nombre: "jose",
    apellido: "borja",
    edad: 33,
    email: "perezborjajoseantonio@gmail.com",
    telefono: 3243741787,
    ciudad: "cartagena",
    direccion: "pozon"
}
añadirContacto(contacto1)

 let contacto2=  {
    id:1,
    nombre: "cristian", 
    apellido:"pajoy",
    edad: 21,
    email: "cpajoydiaz@gmail.com",
    telefono: 3045678497,
    ciudad: "cartagena", 
    direccion:"olaya herrera"}
 añadirContacto(contacto2)


// let contacto3= new contacto (2, "aida", "rosales", 26, "rosalesvargasaidaluz@gmail.com", 3022307404, "cartagena", "pozon")
// mi_lista_de_contactos.push(contacto3)

// console.log(mi_lista_de_contactos);


function eliminarcontacto(contacto){
  
    contacto.pop();
 }
 eliminarcontacto(mi_lista_de_contactos);

 
 function imprimir(contactos){
   return console.log(contactos)
}

imprimir(mi_lista_de_contactos)