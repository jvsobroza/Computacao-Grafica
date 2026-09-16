class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.direita = this.carregarFrames("frame_inv", 4);
    this.esquerda = this.carregarFrames("frame", 4);
    this.esq = false;
    this.dir = false;
    this.jogador = new Sprite(50, 50, 400, 400);
    this.jogador.setAnimacao(this.direita);
    this.jogador.setVelocidade(30, -4);
  }
  atualizar() {
    this.jogador.atualizar();
    if (this.jogador.px > this.larguraTela() - this.jogador.l) {
      this.jogador.setAnimacao(this.esquerda);
      this.jogador.setVelocidade(-30, 10);
    }
    if (this.jogador.px < 0) {
      this.jogador.setAnimacao(this.direita);
      this.jogador.setVelocidade(30, -10);
    }
  }

  teclaPressionada(e) {
    if (e.key === "ArrowLeft") {
      this.esq = true;
      this.jogador.setAnimacao(this.esquerda);
    }
    if (e.key === "ArrowRight") {
      this.dir = true;
      this.jogador.setAnimacao(this.direita);
    }
  }

  teclaLiberada(e) {
    if (e.key === "ArrowLeft") {
      this.esq = false;
      this.jogador.setVelocidade(0,0);
    }
  }
  desenhar() {
    this.limparTela("lightblue");
    this.desenharSprite(this.jogador);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 800, 600);
});
