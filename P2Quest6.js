function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const alunos = [
  'LEONARDO VINÍCIUS G. HUBERT',
  'WILLIAM SILVA DOS REIS',
  'JOAO VITOR F. M. ROCHA',
  'CAIO HENRIQUE F. DE SOUZA',
  'ERIC VINICIUS DA S. MENEGON',
  'DANIEL GALVAO M. DA SILVA',
  'GIOVANI DE BIAGI ALVES',
  'VITOR CARDOSO DA CRUZ',
  'GUSTAVO SILVA DE CARVALHO',
  'HOSANA AZEVEDO PIRES',
  'NATHAN FERRACINI BATISTA',
  'JOAO PEDRO SOUZA SILVA',
  'DANIEL BRITO DA SILVA JUNIOR',
  'ARTHUR DAVI GOMES',
  'ROBSON ALAN MANTOVANI',
  'MARCELO HENRIQUE REDUZINO',
  'ADRIANO DOS SANTOS',
  'MATHEUS HENRIQUE A. V. NEVES',
  'PEDRO HENRIQUE B. SANTOS',
  'RAMON GODINHO',
  'GRAZIELLA SOUZA',
  'RODRIGO MORAES DE S. GARCIA',
  'BRUNO HENRIQUE Q. GARCIA',
];

const alunosOrdenados = quickSort(alunos);
console.log(alunosOrdenados);
