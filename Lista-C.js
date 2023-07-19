//Crear una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido
//                            0                    1                 2
const ListaContactos = ['Maria Gonzalez', 'Eduardo Caceres', 'Alejandra Perez'];
console.log(ListaContactos);
console.log('_______________');

//añadir un nuevo contacto a la lista 
const agregarContacto = (contacto)=>{
    ListaContactos.push(contacto);
}  
agregarContacto('Saul Sanchez');
console.log(ListaContactos);
console.log('_______________');

// Borrar un contacto existente de la lista
const borrarContacto = (contacto) =>{
    let indice = ListaContactos.indexOf('Eduardo Caceres');
    if (indice >= 1){
        ListaContactos.splice(indice, 1);
    }
   }
   console.log(borrarContacto(1,0, 'Eduardo Caceres'));
   console.log('_______________');

   console.log(ListaContactos);
   console.log('_______________');

   console.log(ListaContactos.length);
   console.log('_______________');


// Imprimir en consola los contactos presentes en la lista
const imprimirConctacto = (ListaContactos) => {
    console.log(ListaContactos);
    console.log('_______________');
}