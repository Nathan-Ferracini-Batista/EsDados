class Node {
  constructor(nome) {
    this.nome = nome;
    this.proximo = null;
  }
}

class ListaLigada {
  constructor() {
    this.cabeca = null;
  }

  inserirOrdenado(nome) {
    const novoNo = new Node(nome);
    if (!this.cabeca || this.cabeca.nome.localeCompare(nome) > 0) {
      novoNo.proximo = this.cabeca;
      this.cabeca = novoNo;
    } else {
      let atual = this.cabeca;
      while (atual.proximo && atual.proximo.nome.localeCompare(nome) < 0) {
        atual = atual.proximo;
      }
      novoNo.proximo = atual.proximo;
      atual.proximo = novoNo;
    }
  }

  imprimirLista() {
    let atual = this.cabeca;
    while (atual) {
      console.log(atual.nome);
      atual = atual.proximo;
    }
  }
}

const lista = new ListaLigada();
const nomes = [
  'ARTHUR DAVI GOMES',
  'BRUNO HENRIQUE QUERICHELLI GARCIA',
  'CAIO HENRIQUE FERREIRA DE SOUZA',
  'DANIEL BRITO DA SILVA JUNIOR',
  'DANIEL GALVAO MAGALHAES DA SILVA',
  'DAVI BERTO MANSUR DUARTE',
  'ELISA APARECIDA MARTINS DE OLIVEIRA',
  'ERIC VINICIUS DA SILVA MENEGON',
  'FELIPE AUGUSTO PEREIRA LEMES',
  'FERNANDA VICTORIA FELIX OLIVEIRA',
  'ADRIANO DOS SANTOS',
  'GIOVANI DE BIAGI ALVES',
  'VITOR CARDOSO DA CRUZ',
  'GRAZIELLA SOUZA',
  'RODRIGO MORAES DE SOUZA GARCIA',
  'HOSANA AZEVEDO PIRES',
  'JOAO PEDRO SOUZA SILVA',
  'LEONARDO VINÍCIUS GURTLER HUBERT',
  'MARCELO HENRIQUE REDUZINO',
  'WILLIAM SILVA DOS REIS',
  'NATHAN FERRACINI BATISTA',
  'GUSTAVO SILVA DE CARVALHO',
  'PEDRO HENRIQUE BONOMO SANTOS',
  'RAMON GODINHO',
  'JOAO VITOR FERNANDES DE MATOS ROCHA',
  'MATHEUS HENRIQUE ALMEIDA VIEIRA NEVES',
  'ROBSON ALAN MANTOVANI',
];

nomes.forEach((nome) => lista.inserirOrdenado(nome));

console.log('Lista de nomes em ordem alfabética:');
lista.imprimirLista();
