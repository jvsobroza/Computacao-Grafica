class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.imgSol = new Image();
    this.imgSol.src = "imagens/sol.png";
    this.imgCasa = new Image();
    this.imgCasa.src = "imagens/casa.png";
    this.arvore = this.carregarFrames("arvore", 5);
    this.arvAnimacao = new Sprite(490, 300, 150, 150);
    this.arvAnimacao.setAnimacao(this.arvore);
    this.estrada = new Image();
    this.estrada.src = "imagens/estrada.png";
    this.criarBotaoTouch("btnEsq", 80, 500, 55, 55, "<", "a");
    this.criarBotaoTouch("btnDir", 150, 500, 55, 55, ">", "d");
    // Botão de pause sem tecla associada e com personalização
    this.esq = false;
    this.dir = false;
    this.jogador = new Sprite(230, 275, 200, 200);
    this.jogador.setAnimacao(this.carregarFrames("frame", 4));
  }
  atualizar() {
    this.arvAnimacao.atualizar();
    this.jogador.atualizar();
    if (this.esq) {
      this.jogador.setVelocidade(1, 0);
    }
  }

  cliqueDoMouse(e) {
    this.x = e.x.toFixed(0);
    this.y = e.y.toFixed(0);
  }

  movimentoDoMouse(e) {
    this.cliqueDoMouse(e);
  }

  teclaPressionada(e) {
    if (e.key == "a") {
      this.esq = true;
    }
  }

  teclaLiberada(e) {
    if (e.key == "d") {
      this.dir = false;
    }
  }
  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("black");
    this.texto("Bem vindo ao jogo bagual", 260, 40, 24, "bold");
    this.imagem(this.imgSol, 600, 0, 200, 200);
    this.imagem(this.imgCasa, 230, 275, 200, 200);
    this.desenharSprite(this.arvAnimacao);
    this.preenchimento("green");
    this.retangulo(0, 460, 10000, 1000, Estilo.PREENCHIDO);
    this.preenchimento("brown");
    this.retangulo(556, 440, 20, 20, Estilo.PREENCHIDO);
    this.imagem(this.estrada, 330, 350, 250, 250);
    if (this.x > 1 && this.y > 1) {
      this.preenchimento("black");
      this.texto("X: " + this.x + "\nY: " + this.y, 40, 40, 30, "bold");
    }
    this.desenharSprite(this.jogador);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Atividade do click", "meuCanvas", 800, 600);
});
