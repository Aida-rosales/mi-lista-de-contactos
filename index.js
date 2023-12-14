const mi_lista_de_contactos =[];

function contacto(id, nombre, apellido, edad, email, telefono, ciudad, direccion){

this.id=id;
this.nombre=nombre,
this.apellido=apellido,
this.edad=edad,
this.email=email,
this.telefono=telefono,
this.ubicacion={
    ciudad:ciudad,
    direccion:direccion,
}


}

let contacto1= new contacto (0,"jose", "borja", 33, "perezborjajoseantonio@gmail.com", 3243741787, "cartagena", "pozon")
mi_lista_de_contactos.push(contacto1)

let contacto2= new contacto (1, "cristian", "pajoy", 21, "cpajoydiaz@gmail.com", 3045678497, "cartagena", "olaya herrera" )
mi_lista_de_contactos.push(contacto2)

let contacto3= new contacto (2, "aida", "rosales", 26, "rosalesvargasaidaluz@gmail.com", 3022307404, "cartagena", "pozon")
mi_lista_de_contactos.push(contacto3)

console.log(mi_lista_de_contactos);


function eliminarcontacto(){
    let removercontacto = [1];
    mi_lista_de_contactos.pop(removercontacto)
}
eliminarcontacto();
console.log(mi_lista_de_contactos)

function actualizarcontacto(){
    let actualizar= mi_lista_de_contactos.findIndex((obj=> obj.id == 1));
    console.log("antes de actualizar:", mi_lista_de_contactos[actualizar]);
    mi_lista_de_contactos[actualizar].telefono = 3006758456;
    mi_lista_de_contactos[actualizar].ubicacion.ciudad = "medellin";
    mi_lista_de_contactos[actualizar].ubicacion.direccion = "envigado";
    console.log("despues de actualizar: ", mi_lista_de_contactos[actualizar]);

}
actualizarcontacto();