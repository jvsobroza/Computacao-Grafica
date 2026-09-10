class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.pontos = 0;
    this.x = 0;
    this.y = 0;
    this.ir = true;
    this.desc = true;
    this.img = new Image();
    this.img.src = "img/carro.png"; //NÃO TEM COMO REDIMENSIONAR A IMAGEM
  }
  atualizar() {
    if (this.ir) {
      this.x++;
    }
    if (!this.ir) {
      this.x--;
    }
    if (this.x >= 580) {
      this.ir = false;
      this.img.src = "img/carro_inv.png";
    }
  } //todo calculo é no atualizar
  desenhar() {
    this.limparTela("lightblue");
    /*this.empilhar();
    this.escalar(-1, 1);
    this.desempilhar();
    isso é para inverter um objeto
    */
    this.imagem(this.img, this.x, this.y);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 900, 800); //primeiro é o título, id do canvas, fps, largura e altura
});
