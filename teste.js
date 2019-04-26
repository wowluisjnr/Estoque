var objeto = [ 
    { data : new Date('11-30-2015'), nome: 'Marconi', telefone:'32486745425'},
    { data : new Date('11-31-2015'), nome: 'Marcos', telefone:'32486745425'},
    { data : new Date('11-25-2015'), nome: 'B', telefone:'32486745425'},
    { data : new Date('11-27-2015'), nome: 'Testes', telefone:'32486745425'},
];
 			
function compare(a,b) {
  return a.data < b.data;
}

let a = objeto.sort(compare)

console.log(a);