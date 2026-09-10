class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.pontos = 0;
    this.x = 500;
    this.y = 600;
    this.ir = true;
    this.desc = true;
    this.img = new Image();
    this.img.src = "img/triangulo.jpeg"; //NÃO TEM COMO REDIMENSIONAR A IMAGEM
  }
  atualizar() {
    /* if (this.ir) {
      this.x++;
    }
    if (!this.ir) {
      this.x--;
    }
    if (this.x >= 600) {
      this.ir = false;
    }
    if (this.desc) {
      this.y++;
    }
    if (!this.desc) {
      this.y--;
    }
    if (this.y >= 500) {
      this.desc = false;
    }*/
  } //todo calculo é no atualizar
  desenhar() {
    this.limparTela("lightblue");
    this.imagem(this.img, 300, 300);

    this.preenchimento("red");
    this.ponto(100, 10, 10); //x, y e tamanho
    this.linha(500, 400, 600, 300, Estilo.PONTOS); //passa x inicial, y inicial, x final e y final e sai da cor do contorno
    this.paralelogramo(
      100,
      100,
      200,
      100,
      250,
      180,
      150,
      180,
      Estilo.PREENCHIDO,
    );
    //pode usar o pontos apenas para representar as extremidades
    this.retangulo(this.x, this.y, 200, 100, Estilo.PREENCHIDO);

    //CIRCULO
    this.circulo(200, 500, 100, 100, Estilo.PREENCHIDO);

    //TEXTO
    this.texto("Pontos: 100", 20, 40, 50, "bold");

    //TRIANGULO
    this.preenchimento("white");
    this.triangulo(300, 400, 500, 300, 350, 200, Estilo.PREENCHIDO);
    this.triangulo(300, 400, 500, 300, 350, 200, Estilo.LINHAS);

    //POLIGONO
    let x = [100, 200, 250, 180, 120];
    let y = [100, 80, 150, 220, 180];
    this.poligono(x, y, Estilo.PREENCHIDO);

    this.retangulo(this.x, this.y, 200, 100, Estilo.LINHAS);
    this.contorno("yellow");
    this.preenchimento("green");
    this.retangulo(this.x, this.y, 200, 100, Estilo.PONTOS);
    this.preenchimento("yellow");
    this.contorno(5, "black");
    this.retangulo(400, 100, 200, 100, Estilo.LINHAS);
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo", "meuCanvas", 60, 900, 800); //primeiro é o título, id do canvas, fps, largura e altura
});
