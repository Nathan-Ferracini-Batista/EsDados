class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  inOrderTraverse(node = this.root) {
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.data);
      this.inOrderTraverse(node.right);
    }
  }
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

const bst = new BST();

alunos.forEach((aluno) => {
  bst.add(aluno);
});

bst.inOrderTraverse();
