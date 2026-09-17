class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.imgSol = new Image();
    this.imgSol.src = "imagens/sol.png";
    this.imgCasa = new Image();
    this.imgCasa.src = "imagens/casa.png";
    this.arvore = this.carregarFrames("arvore", 5);
    this.arvAnimacao = new Sprite(490, 300, 150, 150);
    this.arvAnimacao.setAnimacao(this.arvore);
  }
  atualizar() {
    this.arvAnimacao.atualizar();
  }

  teclaLiberada(e) {}
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
    this.retangulo(360, 460, 215, 40, Estilo.PREENCHIDO);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Atividade", "meuCanvas", 800, 600);
});
