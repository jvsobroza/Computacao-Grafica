class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.pontos = 0;
    this.x = 100;
    this.y = 100;
    this.ir = true;
    this.desc = true;
  }
  atualizar() {
    if (this.ir) {
      this.x++;
    }
    if (!this.ir){
        this.x--;
    }
    if (this.x >= 600) {
      this.ir = false;
    }
    if (this.desc){
        this.y++;
    }
    if (!this.desc){
        this.y--;
    }
    if (this.y >= 500){
        this.desc = false;
    }
  } //todo calculo é no atualizar
  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("red");
    this.retangulo(this.x, this.y, 200, 100, Estilo.PREENCHIDO);
    this.retangulo(this.x, this.y, 200, 100, Estilo.LINHAS);
    this.contorno("yellow");
    this.preenchimento("green");
    this.retangulo(this.x, this.y, 200, 100, Estilo.PONTOS);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 800, 600); //primeiro é o título, id do canvas, fps, largura e altura
});
