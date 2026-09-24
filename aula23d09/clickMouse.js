class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.click = false;
    this.x = 0;
    this.y = 0;
    // Seta para baixo
    this.criarBotaoTouch("btnBaixo", 80, 450, 55, 55, "BAIXO", "s");
    // Botão de pause sem tecla associada e com personalização
    this.criarBotaoTouch("btnPause", 400, 20, 90, 40, "PAUSE")
      .setCores(
        "rgba(13, 110, 253, 0.6)",
        "rgba(10, 70, 160, 0.9)",
        "rgba(147, 197, 253, 0.8)",
        "#FFFFFF",
      )
      .setTamanhoFonte(16)
      .setVibracao(30);
    this.tecla = false;
  }
  atualizar() {}

  cliqueDoMouse(e) {
    this.x = e.x.toFixed(0);
    this.y = e.y.toFixed(0);
  }

  movimentoDoMouse(e) {
    this.cliqueDoMouse(e);
  }

  teclaPressionada(e) {
    if (e.key == "s") {
      this.tecla = true;
    }
  }

  teclaLiberada(e) {
    if (e.key == "s") {
      this.tecla = false;
    }
  }

  //mousePressionado(e){}
  desenhar() {
    this.limparTela("lightblue");
    if (this.x > 1 && this.y > 1) {
      this.preenchimento("black");
      this.texto("X: " + this.x + "\nY: " + this.y, 40, 40, 30, "bold");
    }
    if (this.tecla) {
      this.texto("[S]", 50, 70, 30, "bold");
    }
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Atividade", "meuCanvas", 800, 600);
});
