/**SpreadOperator**/

//SpreadOperator nos ayuda a copiar nuestro arreglos sin modificarlo.
let team1 = ['Manuel', 'David', 'Javier']
let team2 = ['Alex', 'Diana', 'Samuel']
let educacion = ['Jaime', ...team1, ...team2]
console.log(educacion);

let hobbyes = [
    ['lol', 'wow'],
    'Musica',
    'Estudiar',
    'Salir'
];

let comida = ['Arroz', 'Papas', 'Carne'];

let deTodo = ['Novia', ...hobbyes, 'Pasear', ...comida];
console.log(deTodo);