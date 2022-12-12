// Iteración #1 //

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for(let i = 0; i< products.length; i++) {
    if(products[i].includes("Camiseta")) {
        console.log(products[i]);
    }
}

// Iteración #2 //

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for(alumn of alumns){
    let aprobados = 0;
    for(key in alumn) {
        if(alumn[key] == true){
            aprobados++;
        }
    }
    if(aprobados >= 2) {
        alumn.isAproved = true;
    }
    else {
        alumn.isAproved = false;
    }
    console.log(alumn);
}


// Iteración #3 //

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(let sitios of placesToTravel) {
    console.log(sitios);
}


// Iteración #4 //

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let dato in alien) {
    console.log(dato + ": " + alien[dato]);
}


// Iteración #5 //

const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for(i=0; i<placesToTravel2.length; i++) {
    if(placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40) {
        placesToTravel2.splice(i, 1);
    }
    console.log(placesToTravel2[i]);
}


// Iteración #6 //

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {

        toys.splice(i, 1);

        i--;
    }
}
console.log(toys);

