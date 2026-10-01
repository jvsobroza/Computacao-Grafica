class MeuJogo extends JS_CG_2D_API {
  acaoAoIniciar() {
    this.direita = this.carregarFrames("frame_inv", 4);
    this.esquerda = this.carregarFrames("frame", 4);
    this.esq = false;
    this.dir = false;
    this.cima = false;
    this.baixo = false;
    this.jogador = new Sprite(50, 50, 100, 100);
    this.jogador.setAnimacao(this.direita);
    this.personagem = new Retangulo2D(50, 200, 80, 80);
    this.parede = new Retangulo2D(250, 100, 50, 300);
    this.personagem.velocidade = 100; //insere uma variável dentro do personagem
    //QUANDO FALA EM DELTATIME FALA EM PX POR SEGUNDO
    this.teclas = [];
    this.colidiu = false;
  }
  atualizar(dt) {
    //DA PRA USAR O DT para resolver o FPS
    let vX = 0;
    let vY = 0;
    if (this.teclas["a"]) {
      vX = -2;
    }
    if (this.teclas["d"]) {
      vX = 2;
    }
    if (this.teclas["w"]) {
      vY = -2;
    }
    if (this.teclas["s"]) {
      vY = 2;
    }

    if (vX != 0 && vY != 0) {
      vX *= 0.8;
      vY *= 0.8;
    }
    let passo = this.personagem.velocidade * dt; //sempre que usa tem que calcular a velocidade do X e Y, depois dos vX e Y calcular a nova posição

    let xA = this.personagem.x;
    this.personagem.x += passo * vX;
    //primeiro tem que salvar a posição antes de alterar
    if (this.colisao(this.personagem, this.parede)) {
      this.personagem.x = xA;
    }

    let yA = this.personagem.y;
    this.personagem.y += passo * vY;
    if (this.colisao(this.personagem, this.parede)) {
      this.personagem.y = yA;
    }

    if (this.colisao(this.personagem, this.parede)) {
      this.colidiu = true;
    } else {
      this.colidiu = false;
    }
  }

  teclaPressionada(e) {
    this.teclas[e.key] = true;
  }

  teclaLiberada(e) {
    this.teclas[e.key] = false;
  }
  desenhar() {
    this.limparTela("lightblue");
    this.preenchimento("red");
    this.retangulo(this.personagem, Estilo.PREENCHIDO);
    this.preenchimento("black");
    this.retangulo(this.parede, Estilo.PREENCHIDO);
    if (this.colidiu) {
      this.preenchimento("green");
      this.texto("COLIDIU BIXO", 60, 50, 50);
      console.log("BATE");
    }
  }
}
window.addEventListener("load", () => {
  new MeuJogo("Meu Primeiro Jogo com Sprite", "meuCanvas", 800, 600);
});
