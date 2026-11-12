
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

  {
    enunciado: `Como você reagiria se a IA começasse a tomar decisões importantes na sociedade?`,
    alternativas: [
      {
        texto: "Acreditaria que a IA sempre toma as melhores decisões.",
        afirmacao: "Refletiu sobre a influência da inteligência artificial nas decisões da sociedade."
      },
      {
        texto: "Defenderia que os seres humanos continuassem participando das decisões.",
        afirmacao: "Reconhece que a participação humana é essencial nas decisões que afetam a sociedade."
      }
    ]
  },
  {
    enunciado: `Se a IA pudesse substituir professores nas escolas, o que você pensaria?`,
    alternativas: [
      {
        texto: "Acreditaria que a IA poderia substituir completamente os professores.",
        afirmacao: "Percebeu que a tecnologia pode transformar a educação e as formas de ensinar."
      },
      {
        texto: "Acreditaria que a IA deveria apenas auxiliar os professores.",
        afirmacao: "Valoriza a importância dos professores e reconhece a IA como uma ferramenta de apoio."
      }
    ]
  },
  {
    enunciado: `Como você lidaria com notícias falsas criadas por inteligência artificial?`,
    alternativas: [
      {
        texto: "Compartilharia as notícias sem verificar sua origem.",
        afirmacao: "Compreendeu a importância de desenvolver o pensamento crítico diante dos conteúdos digitais."
      },
      {
        texto: "Verificaria a fonte antes de acreditar ou compartilhar.",
        afirmacao: "Demonstra responsabilidade e preocupação com a circulação de informações verdadeiras."
      }
    ]
  },
  {
    enunciado: `Se a tecnologia avançasse a ponto de controlar grande parte da rotina das pessoas, qual seria sua opinião?`,
    alternativas: [
      {
        texto: "Acharia positivo depender cada vez mais da tecnologia.",
        afirmacao: "Reconhece as facilidades que a tecnologia pode proporcionar à vida cotidiana."
      },
      {
        texto: "Defenderia um equilíbrio entre tecnologia e atividades humanas.",
        afirmacao: "Valoriza o equilíbrio entre inovação tecnológica, autonomia e relações humanas."
      }
    ]
  },
  {
    enunciado: `Imagine que estamos em 2049. Qual futuro você gostaria de construir com a inteligência artificial?`,
    alternativas: [
      {
        texto: "Um futuro totalmente controlado pela tecnologia.",
        afirmacao: "Imagina um futuro marcado por grandes avanços tecnológicos e pela automação."
      },
      {
        texto: "Um futuro em que a tecnologia trabalha a favor da humanidade.",
        afirmacao: "Defende um futuro em que a inteligência artificial seja utilizada com consciência, ética e responsabilidade."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(alternativa) {
  historiaFinal += alternativa.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
