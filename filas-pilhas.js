// Cria uma classe
class Stack {
  constructor() {
    this.items = [];
  }
  // Adiciona um elemento na pilha
  push(element) {
    this.items.push(element);
  }
  // Remove um elemento da pilha
  pop() {
    if (this.items.length == 0) return 'Underflow';
    return this.items.pop();
  }
  // Verifica se a lista está vazia
  isEmpty() {
    return this.items.length == 0;
  }
}

//Cria outra classe
class Queue {
  constructor() {
    this.items = [];
  }
  //Enfileira um elemento (nesse caso, o elemento "element")
  enqueue(element) {
    this.items.push(element);
  }
  //Desenfileira um elemento
  dequeue() {
    if (this.isEmpty()) return 'Underflow';
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

function inverteFila(fila) {
  let pilha = new Stack();
  while (!fila.isEmpty()) {
    pilha.push(fila.dequeue());
  }
  while (pilha.items.length > 0) {
    fila.enqueue(pilha.pop());
  }
  return fila;
}

let fila = new Queue();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
fila.enqueue(5);

console.log('Fila original: ', fila.items);

fila = inverteFila(fila);

console.log('Fila invertida: ', fila.items);
