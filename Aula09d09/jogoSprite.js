class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.direita = this.carregarFrames("frame_inv", 4);
    this.esquerda = this.carregarFrames("frame", 4);
    this.esq = false;
    this.dir = false;
    this.cima = false;
    this.baixo = false;
    this.jogador = new Sprite(50, 50, 400, 400);
    this.jogador.setAnimacao(this.direita);

    this.teclas = [];
  }
  atualizar() {
    this.jogador.atualizar();
    if (this.jogador.px > this.larguraTela() - this.jogador.l) {
      this.jogador.setAnimacao(this.esquerda);
    }
    if (this.jogador.px < 0) {
      this.jogador.setAnimacao(this.direita);
    }

    if (this.teclas["ArrowLeft"]) {
      this.jogador.setVelocidade(-2, 0);
      this.jogador.setAnimacao(this.esquerda);
    }
    if (this.teclas["ArrowRight"]) {
      this.jogador.setVelocidade(2, 0);
      this.jogador.setAnimacao(this.direita);
    }
    if (this.teclas["ArrowUp"]) {
      this.jogador.setVelocidade(0, -2);
    }
    if (this.teclas["ArrowDown"]) {
      this.jogador.setVelocidade(0, 2);
    }

    /*
    if (this.esq) {
      this.jogador.setVelocidade(-2, 0);
    }
    if (this.dir) {
      this.jogador.setVelocidade(2, 0);
    }
    if (this.cima) {
      this.jogador.setVelocidade(0, -2);
    }
    if (this.baixo) {
      this.jogador.setVelocidade(0, 2);
    }*/
  }

  teclaPressionada(e) {
    this.teclas[e.key] = true;
  }

  teclaLiberada(e) {
    this.teclas[e.key] = false;
    this.jogador.setVelocidade(0,0);
    /*
    if (e.key === "ArrowLeft") {
      this.esq = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowRight") {
      this.dir = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowUp") {
      this.cima = false;
      this.jogador.setVelocidade(0, 0);
    }
    if (e.key === "ArrowDown") {
      this.baixo = false;
      this.jogador.setVelocidade(0, 0);
    }*/
  }
  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 800, 600);
});
