class Processo {
  constructor(id, name, priority, wait) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.wait = wait;
  }
}

class GerenciadorDeProcessos {
  constructor() {
    this.fila = [];
  }

  incluirProcesso(processo) {
    if (processo.priority === 0) {
      this.fila.unshift(processo);
    } else {
      this.fila.push(processo);
    }
  }

  matarProcessoComMaiorWait() {
    if (this.fila.length === 0) {
      console.log('Nenhum processo na fila para matar.');
      return;
    }

    let maxWaitIndex = 0;
    for (let i = 1; i < this.fila.length; i++) {
      if (this.fila[i].wait > this.fila[maxWaitIndex].wait) {
        maxWaitIndex = i;
      }
    }
    const [maxWaitProcesso] = this.fila.splice(maxWaitIndex, 1);
    console.log(
      `Processo ${maxWaitProcesso.name} com maior tempo de espera removido.`,
    );
  }

  executarProcesso() {
    if (this.fila.length === 0) {
      console.log('Nenhum processo na fila para executar.');
      return;
    }

    const processo = this.fila.shift();
    console.log(`Processo ${processo.name} executado e removido da fila.`);
  }

  imprimirFila() {
    if (this.fila.length === 0) {
      console.log('Fila de processos vazia.');
      return;
    }

    console.log('Fila de processos:');
    this.fila.forEach((processo) => {
      console.log(
        `ID: ${processo.id}, Nome: ${processo.name}, Prioridade: ${processo.priority}, Espera: ${processo.wait}`,
      );
    });
  }
}

const gerenciador = new GerenciadorDeProcessos();
gerenciador.incluirProcesso(new Processo(101, 'Processo A', 2, 15));
gerenciador.incluirProcesso(new Processo(102, 'Processo B', 0, 10));
gerenciador.incluirProcesso(new Processo(103, 'Processo C', 1, 5));
gerenciador.incluirProcesso(new Processo(104, 'Window manager', 4, 20));

gerenciador.imprimirFila();

gerenciador.matarProcessoComMaiorWait();
gerenciador.executarProcesso();
