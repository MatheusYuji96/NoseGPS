# NoseGPS

## Integrantes:
- Bruna Cavalcanti
- Matheus Yuji

## Sobre o produto:
A proposta do NoseGPS é servir como uma aplicação de geolocalização em tempo real para treinadores Pokémon. E não só isso: trazer informações sobre os Pokémon presentes na rota ou cidade onde a pessoa está, além de informações climáticas, que influenciam não só no preparo do treinador, como na presença de determinados Pokémon. Seu foco está nos viajantes que se utilizam de bicicletas ou à pé como meio de locomoção entre as rotas ou dentro das cidades, inicialmente para a região de Kanto. A proposta é facilitar a localização de treinadores e ajudar na elaboração de rotas, tornando mais simples a viagem por toda a Kanto.

## Jornada de construção:
### Ideia inicial
1. Como surgiu a ideia do produto?
A ideia do produto veio, primeiro, de algo em comum que os dois integrantes curtem: Pokémon. E a ideia de aplicação focada em geolocalização veio após um pequeno brainstorming, onde se explorou ideias diferentes. Chegou-se ao conceito do Nosepass, um Pokémon cujo nariz está sempre apontado para o norte magnético (exatamente como uma bússola). E disso veio a ideia de trabalhar com localização.

2. Quais alternativas foram consideradas?
Pensou-se inicialmente em uma caneta de choque (daquelas de brincadeira) que, ao ser acionada, gritava o nome do Pokémon Eevee. Mas isso feria uma das regras da atividade. Então, depois de pensar sobre algum outro Pokémon cujo conceito poderia ser explorado, a dupla chegou em Nosepass.

### Pesquisa e referências
1. O que vocês pesquisaram?
Basicamente a imagem do Pokémon para passar como base para o Opencode. Informação como a do nariz dele já era de conhecimento da equipe.

2. Quais sites, produtos, estilos ou referências ajudaram
na construção da solução?
Para pesquisa, utilizamos o Bulbapedia (conhecida fonte de detalhes sobre Pokémon), e para a paleta de cores foi utilizado o Adobe Color.

3. Ferramentas utilizadas:
- React
- OpenCode
- Figma

### Uso de IA
1. Quais modelos foram utilizados?
- Big Pickle (Free)
- Figma Make

2. Para que cada modelo foi utilizado?
- Big Pickle: utilizado para a elaboração de fato do front-end. A sua escolha se dá por experiência anterior, por ser um modelo gratuito e ser voltado para código também. 
- Figma Make: utilizado para testar o prompt e visualizar o que seria elaborado.

3. O que mudou entre a primeira ideia e a versão final?
O que mudou para a versão final foi a alteração de símbolo monetário. A ideia era utilizar o Pokédolar, moeda utilizada dentro do universo Pokémon. Porém, a IA trocou para R$ (Real).
Além disso, o design esperado era mais minimalista, enquanto que o entregue foi mais para Memphis/Bauhaus.

## Resultado final:
1. Como vocês avaliam o resultado?
O resultado final foi bastante satisfatório. A página elaborada tem os elementos que solicitamos, boa estética, consegue mostrar o que é a solução. O único ponto mesmo é um detalhe no banner que misturou um pedaço do fundo com a palavra Pokémon. Fora isso, resultado é bom.

2. O que fariam diferente se tivessem mais tempo?
A alteração de Real para Pokédolar, e possivelmente mais funcionalidades tanto para a versão paga, quanto para a gartuita.
E possivelmente trabalhar com mais modelos para um refinar o que o outro fez.

## Parte 2:

### 1. O que foi melhorado?
Realizamos melhorias na acessibilidade da landing page do NoseGPS, incluindo ajustes nos textos alternativos das imagens, atributos ARIA e estrutura HTML, com a adição das tags `<main>` e `<h1>`.

### 2. Qual MCP foi utilizado?
Utilizamos o **MCP Accessibility Scanner**.

GitHub: https://github.com/JustasMonkev/mcp-accessibility-scanner

### 3. Por que escolhemos esse MCP?
Escolhemos esse MCP para identificar problemas de acessibilidade e auxiliar nas correções do projeto.

### 4. Como ele contribuiu?
Na primeira análise, o relatório apresentou **97/100**, identificando dois problemas relacionados à estrutura HTML.

Após as correções, uma nova análise apresentou **100/100**, sem problemas detectados pela ferramenta.

### 5. Conclusão
O MCP ajudou a identificar problemas, orientar melhorias e validar as correções, contribuindo para tornar o NoseGPS mais acessível.

