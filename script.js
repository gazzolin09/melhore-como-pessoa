
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: `Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder dúvidas e gerar imagens e áudios hiper-realistas. Qual o primeiro pensamento?`,
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início, ficou com medo do que essa tecnologia pode fazer."
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Quis saber como usar a IA no seu dia a dia."
      }
    ]
  },
  {
    enunciado: `Uma professora pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?`,
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de busca com IA para encontrar informações e facilitar o entendimento.",
        afirmacao: "Utilizou a IA como ferramenta de pesquisa e apoio à aprendizagem."
      },
      {
        texto: "Escreve com base em conversas, pesquisas na internet e conhecimentos próprios.",
        afirmacao: "Preferiu construir o trabalho com suas próprias pesquisas e conhecimentos."
      }
    ]
  },
  {
    enunciado: `Em um debate sobre como a IA impacta o trabalho do futuro, como você se posiciona?`,
    alternativas: [
      {
        texto: "A IA pode criar oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "Acredita que a IA pode criar oportunidades e transformar o mundo do trabalho."
      },
      {
        texto: "É importante proteger os trabalhadores que podem perder seus empregos para máquinas.",
        afirmacao: "Defende que os impactos da IA sobre os trabalhadores precisam ser considerados."
      }
    ]
  },
  {
    enunciado: `Você precisa criar uma imagem no computador que represente o que pensa sobre IA. O que faz?`,
    alternativas: [
      {
        texto: "Cria uma imagem usando uma plataforma de design, como o Paint.",
        afirmacao: "Preferiu criar sua imagem utilizando ferramentas tradicionais de desenho."
      },
      {
        texto: "Cria uma imagem utilizando um gerador de imagens por IA.",
        afirmacao: "Experimentou a IA como ferramenta de criação visual."
      }
    ]
  },
  {
    enunciado: `Em um trabalho em grupo, um colega utiliza um texto gerado por IA sem revisá-lo. O que você faz?`,
    alternativas: [
      {
        texto: "Considera que utilizar o texto inteiro já é uma contribuição.",
        afirmacao: "Precisa refletir sobre a importância da autoria e da revisão dos conteúdos gerados por IA."
      },
      {
        texto: "Revisa o texto e acrescenta as perspectivas e contribuições do grupo.",
        afirmacao: "Reconhece que a IA pode errar e que a revisão crítica e a contribuição humana são essenciais."
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
