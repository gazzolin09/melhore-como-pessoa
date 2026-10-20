
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: `Você está fazendo uma atividade escolar e encontra uma informação gerada por uma IA. O que você faz?`,
    alternativas: [
      {
        texto: "Confia na resposta da IA sem verificar.",
        afirmacao: "Aprendeu que confiar totalmente na IA pode trazer riscos quando as informações não são verificadas."
      },
      {
        texto: "Pesquisa em outras fontes para confirmar a informação.",
        afirmacao: "Reconhece a importância de verificar as informações geradas pela IA antes de utilizá-las."
      }
    ]
  },
  {
    enunciado: `Um amigo utiliza a inteligência artificial para criar uma imagem de outra pessoa sem autorização. Qual é sua opinião?`,
    alternativas: [
      {
        texto: "Acha normal, pois a IA permite criar qualquer imagem.",
        afirmacao: "Percebeu que é necessário refletir sobre os limites éticos do uso da inteligência artificial."
      },
      {
        texto: "Acredita que é importante respeitar a imagem e a privacidade das pessoas.",
        afirmacao: "Valoriza a privacidade e o respeito às pessoas no uso de ferramentas de inteligência artificial."
      }
    ]
  },
  {
    enunciado: `Você precisa estudar para uma prova e decide utilizar uma ferramenta de IA. Como pretende usá-la?`,
    alternativas: [
      {
        texto: "Pede para a IA fornecer todas as respostas e apenas copia.",
        afirmacao: "Percebeu que utilizar a IA sem desenvolver o próprio raciocínio pode prejudicar sua aprendizagem."
      },
      {
        texto: "Pede explicações, exemplos e exercícios para praticar.",
        afirmacao: "Utiliza a inteligência artificial como apoio para aprender e desenvolver suas habilidades."
      }
    ]
  },
  {
    enunciado: `Uma empresa começa a utilizar robôs e inteligência artificial para realizar algumas tarefas dos funcionários. O que você pensa?`,
    alternativas: [
      {
        texto: "A tecnologia pode facilitar tarefas e aumentar a produtividade.",
        afirmacao: "Acredita que a inteligência artificial pode facilitar o trabalho e criar novas possibilidades profissionais."
      },
      {
        texto: "É necessário preparar os trabalhadores para as mudanças tecnológicas.",
        afirmacao: "Reconhece que a evolução tecnológica exige capacitação e atenção aos impactos sobre os trabalhadores."
      }
    ]
  },
  {
    enunciado: `Em 2049, a inteligência artificial está presente em quase todos os lugares. Como você gostaria que ela fosse utilizada?`,
    alternativas: [
      {
        texto: "Para automatizar o máximo possível de atividades humanas.",
        afirmacao: "Imagina um futuro em que a inteligência artificial automatiza muitas tarefas e transforma a rotina das pessoas."
      },
      {
        texto: "Para ajudar as pessoas, respeitando os direitos humanos e a ética.",
        afirmacao: "Defende um futuro em que a inteligência artificial contribua para o bem-estar das pessoas com responsabilidade e respeito."
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
