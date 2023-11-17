import Card from "../Card/Card";

function WomenList() {
  const women = [
    {
      name: "Marie Curie",
      period: "1867-1934",
      description:
        "Brilhante cientista, Marie Skłodowska-Curie foi reponsável por conduzir pesquisas pioneiras sobre a radioatividade, sendo uma de suas principais criações a máquina de Raio-X. Foi a primeira mulher a ganhar um Prêmio Nobel, além da primeira pessoa a ganhá-lo em duas categorias simultâneas: física e química.",
      id: 0,
    },
    {
      name: "Margaret Thatcher",
      period: "1925-2013",
      description:
        'Margaret Thatcher foi a primeira mulher a ocupar o cargo de primeira-ministra na Europa, além de a mais longeva ocupante do cargo no Reino Unido desde 1827, e a única a vencer três eleições no século 20.  Seus 11 anos de governo entre 1979 e 1990 foram marcados por transformações econômicas profundas e seu forte estilo de liderar lhe rendeu o apelido de "Dama de Ferro". A mudança mais marcante foi a migração do Reino Unido de uma economia estatista para uma economia liberal.',
      id: 1,
    },
    {
      name: "Coco Chanel",
      period: "1883-1971",
      description:
        'Gabrielle Bonheur "Coco" Chanel foi uma estilista francesa e uma inovadora no campo da moda. Foi a fundadora da marca "Chanel", um grande império na produção de roupas, bolsas, sapatos, perfumes, acessórios etc',
      id: 2,
    },
    {
      name: "Ada Lovelace",
      period: "1815-1852",
      description:
        "Augusta Ada Byron, Condessa de Lovelace, foi uma matemática e escritora inglesa considerada a primeira pessoa a desenvolver um algoritmo na história.  Suas anotações são consideradas a primeira e mais completa descrição dos computadores, de acordo com artigo do Nist, National Institute of Standards and Technology do Departamento de Comércio dos Estados Unidos. Por meio de suas habilidades críticas e criativas, Lovelace lançou as bases para escrever o primeiro programa de computador. ",
      id: 3,
    },
    {
      name: "Joana d'Arc",
      period: "1412-1431",
      description:
        "Jeanne d'Arc foi uma heroína francesa da Guerra dos Cem Anos, travada entre a França e a Inglaterra. Foi canonizada em 1920 e hoje é a Santa Padroeira da França. No campo de batalha, Joana d'Arc teria sido a comandante do exército francês no chamado Cerco de Orleans. A data da vitória teria sido 8 de maio de 1429. Pouco mais de um mês depois, em 17 de julho de 1429, Carlos VII era coroado rei da França, em Reims. E Joana se tornou um símbolo de vitória e liberdade.",
      id: 4,
    },
    {
      name: "Hedy Lamarr",
      period: "1914-2000",
      description:
        "Hedwig Eva Maria Kiesler foi uma atriz e inventora austríaca radicada no Estados Unidos.  Ela desenvolveu o sistema de salto em frequência, planejado originalmente para guiar torpedos submarinos usando sinais de rádio. O sistema acabou sendo usado militarmente, mas a tecnologia abriu diversas portas para o uso civil e permitiu a criação de tecnologias de comunicação como GPS, Bluetooth e Wi-Fi.",
      id: 5,
    },
    {
      name: "Katherine Johson",
      period: "1918-2020",
      description:
        "A extraordinária capacidade de Creola Katherine Johson para a matemática ajudou a colocar em órbita a Apolo 11, a nave que levou o homem à Lua pela primeira vez. Katherine foi uma das mulheres negras que formavam uma equipe no Centro de Pesquisa Langley para calcular a trajetória dos primeiros lançamentos espaciais, operações que hoje são feitas por computadores.",
      id: 6,
    },
    {
      name: "Sally Ride",
      period: "1951-2012",
      description:
        "Sally Kristen Ride foi a primeira mulher americana a ir ao espaço. Seu trabalho se concentrou especificamente no uso de um braço robótico que ela mesma ajudou a desenvolver para recuperar satélites na órbita da Terra. Ela entrou na Nasa em 1978, após ser selecionada entre 8.000 candidatos.",
      id: 7,
    },
    {
      name: "Sheryl Swoopes",
      period: "1971-",
      description:
        "Sheryl Denise Swoopes é uma ex-jogadora profissional de basketball. Foi a primeira jogadora a entrar para a liga WNBA, tendo ganhado quatro campeonatos, três medalhas olímpicas de ouro, além de ter sido a primeira atleta a ganhar um tênis da Nike com seu nome.",
      id: 8,
    },
    {
      name: "Simone Biles",
      period: "1997-",
      description:
        "Simone Biles Owens é uma ginasta profissional dos Estados Unidos, especialista na ginástica artística, vencedora de trinta medalhas em campeonatos mundiais, sendo vinte e três delas de ouro. É a ginasta mais condecorada na história do seu país.",
      id: 9,
    },
  ];

  const cards = women.map((woman) => {
    const { name, period, description } = woman;

    return (
      <li key={woman.id}>
        <Card name={name} period={period} description={description} />
      </li>
    );
  });

  return <ul>{cards}</ul>;
}

export default WomenList;
