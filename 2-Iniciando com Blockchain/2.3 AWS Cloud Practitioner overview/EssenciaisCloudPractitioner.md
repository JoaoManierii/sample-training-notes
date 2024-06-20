# Elementos essenciais do AWS Cloud Practitioner 🌐

### O que é um modelo cliente-servidor? 🤔

Você acabou de aprender mais sobre a AWS e como quase toda a computação moderna usa um modelo cliente-servidor básico. Vamos recapitular o que é um modelo cliente-servidor.

O cliente está à esquerda, e o servidor à direita. Setas que apontam do cliente para o servidor e do servidor para o cliente para indicar uma transação.
Na computação, um cliente pode ser um navegador da web ou uma aplicação de desktop com o qual uma pessoa interage para fazer solicitações a servidores de computador. Um servidor pode ser um serviço, como o Amazon Elastic Compute Cloud (Amazon EC2), um tipo de servidor virtual.

Por exemplo, suponha que um cliente faça uma solicitação de uma matéria jornalística, a pontuação em um jogo on-line ou um vídeo engraçado. O servidor avalia os detalhes dessa solicitação e a atende retornando as informações ao cliente.

### Modelos de implantação da computação em nuvem ☁️

Ao selecionar uma estratégia de nuvem, a empresa precisa considerar fatores como os componentes de aplicação de nuvem necessários, as ferramentas preferenciais para gerenciar recursos e os requisitos da infraestrutura de TI legada.

Os três modelos de implantação de computação em nuvem são: computação baseada na nuvem, on-premises e híbrida. Considere por que uma empresa adota determinada abordagem de computação em nuvem para atender às necessidades de negócios.

Para saber mais sobre os benefícios, expanda cada uma das seis categorias a seguir:

- **Troque despesas iniciais por despesas variáveis** 💸
- **Pare de gastar dinheiro para executar e manter data centers** 💰
- **Pare de tentar adivinhar a capacidade** 🤷
- **Beneficie-se de grandes economias de escala** 📉
- **Aumentar a velocidade e a agilidade** ⚡
- **Ter alcance global em minutos** 🌍

### Amazon Elastic Compute Cloud (Amazon EC2) 💻

O [Amazon Elastic Compute Cloud (Amazon EC2)](https://aws.amazon.com/ec2) fornece capacidade computacional segura e redimensionável na nuvem como instâncias do Amazon EC2.

Imagine que você é responsável pela arquitetura dos recursos de sua empresa e precisa dar suporte a novos sites. Com os recursos on-premises tradicionais, você precisa fazer o seguinte:

1. Gastar dinheiro antecipadamente para comprar o hardware.
2. Aguardar até que os servidores sejam entregues para você.
3. Instalar os servidores em seu data center físico.
4. Fazer todas as configurações necessárias.

Em comparação, com uma instância do Amazon EC2, você pode usar um servidor virtual para executar aplicações na nuvem AWS:

- Você pode provisionar e iniciar uma instância do Amazon EC2 em minutos. ⏱️
- Você pode parar de usar a instância quando terminar de executar uma carga de trabalho. 🛑
- Você paga apenas pelo tempo de computação em que uma instância está em execução, não quando ela é interrompida ou terminada. 💵
- Você pode economizar custos pagando apenas pela capacidade do servidor necessária ou desejada. 💼

Aqui está o texto traduzido, formatado em Markdown e com alguns emojis para deixá-lo mais dinâmico:

## Tipos de instâncias do Amazon EC2 🖥️

Os [tipos de instâncias do Amazon EC2](https://aws.amazon.com/ec2/instance-types) são otimizados para tarefas diferentes. Ao selecionar um tipo de instância, considere as necessidades específicas de suas cargas de trabalho e suas aplicações. Isso pode incluir requisitos para recursos de computação, memória ou armazenamento.

Para saber mais sobre os tipos de instância do Amazon EC2, expanda cada uma das cinco categorias abaixo:

- **Instâncias de uso geral** 🛠️
- **Instâncias otimizadas para computação** 🖩
- **Instâncias otimizadas para memória** 🧠
- **Instâncias de computação acelerada** 🚀
- **Instâncias otimizadas para armazenamento** 💾

Aqui está o texto traduzido, formatado em Markdown e com alguns emojis para deixá-lo mais dinâmico:

## Dimensionamento 📏

O dimensionamento significa começar apenas com os recursos necessários e projetar a arquitetura para responder automaticamente às alterações de demanda, fazendo aumentos ou reduções de quantidade. Como resultado, você paga apenas pelos recursos que usa. Você não precisa se preocupar com a falta de capacidade de computação para atender às necessidades dos clientes.

### Amazon EC2 Auto Scaling 🔄

Se você quisesse que o processo de scaling acontecesse automaticamente, qual serviço da AWS você usaria? O serviço da AWS que fornece essa funcionalidade para instâncias do Amazon EC2 é o Amazon EC2 Auto Scaling.

Se você já tentou acessar um site que não carregava e atingiu o tempo limite algumas vezes, ele pode ter recebido mais solicitações do que conseguia atender. Essa situação é semelhante a esperar em uma longa fila em uma cafeteria quando há apenas um barista disponível para registrar os pedidos dos clientes.

📊 Grafo de barras que representa a demanda e a capacidade não utilizada em um período de sete dias.

O Amazon EC2 Auto Scaling permite que você adicione ou remova automaticamente instâncias do Amazon EC2 em resposta à alteração da demanda da aplicação. Ao fazer auto scaling das instâncias, aumentando ou reduzindo a quantidade conforme a necessidade, você tem maior percepção de disponibilidade de aplicações.

No Amazon EC2 Auto Scaling, há duas abordagens disponíveis: scaling dinâmico e scaling preditivo.

- **Scaling dinâmico** responde às alterações na demanda. 📈
- **Scaling preditivo** programa automaticamente o número correto de instâncias do Amazon EC2 com base na demanda prevista. 🔮

Aqui está o texto traduzido, formatado em Markdown e com alguns emojis para deixá-lo mais dinâmico:

## Sistema de mensagens e enfileiramento 📬

### Aplicações monolíticas e microsserviços 🏗️

Quatro retângulos juntos em um quadrado maior para indicar componentes fortemente acoplados, como ocorre em aplicações monolíticas.
As aplicações são formadas por vários componentes. Os componentes se comunicam entre si para transmitir dados, atender solicitações e manter o aplicativo em execução.

Suponha que você tenha uma aplicação com componentes com acoplamento forte. Esses componentes podem ser bancos de dados, servidores, interface do usuário, lógica de negócios e assim por diante. Esse tipo de arquitetura pode ser considerado uma aplicação monolítica.

Nessa abordagem sobre a arquitetura da aplicação, se um único componente falhar, vai ocorrer falha de outros componentes e possivelmente de toda a aplicação.

### Computação sem servidor 🚫🖥️

No início deste módulo, você conheceu o Amazon EC2, um serviço que permite executar servidores virtuais na nuvem. Para executar aplicações no Amazon EC2, faça o seguinte:

1. Provisione as instâncias (servidores virtuais).
2. Faça upload do código.
3. Continue gerenciando as instâncias enquanto a aplicação está em execução.

O termo “sem servidor” significa que o código é executado em servidores, sem que você precise provisionar ou gerenciar esses servidores. Com a computação sem servidor, você pode se concentrar na inovação de novos produtos e recursos em vez de manter servidores.

Outro benefício da computação sem servidor é a flexibilidade de dimensionar aplicações sem servidor automaticamente. A computação sem servidor pode ajustar a capacidade de aplicativos modificando as unidades de consumo, como taxa de transferência e memória.

Um serviço da AWS para computação sem servidor é o AWS Lambda.

### AWS Lambda 🛠️

O [AWS Lambda](https://aws.amazon.com/lambda) é um serviço que permite a execução de códigos sem a necessidade de provisionar ou gerenciar servidores.

Ao usar o AWS Lambda, você paga apenas pelo tempo de computação consumido. As cobranças se aplicam ao tempo em que o código fica em execução. Você pode executar códigos para praticamente qualquer tipo de aplicativo ou serviço de back-end sem a necessidade de qualquer gerenciamento.

Por exemplo, uma função simples do Lambda é o redimensionamento automático de imagens com o upload feito na nuvem AWS. Nesse caso, a função é acionada ao fazer upload de uma nova imagem.

### Como o AWS Lambda funciona

1. Você faz upload do código para o Lambda.
2. Você configura o código para ser acionado pelos eventos de uma origem como serviços da AWS, aplicações móveis ou endpoints HTTP.
3. O Lambda executa o código somente quando acionado.
4. Você paga apenas pelo tempo de computação que usar. No exemplo anterior de redimensionamento de imagens, você pagaria apenas pelo tempo de computação usado ao fazer upload de novas imagens. Fazer upload das imagens aciona o Lambda a executar o código da função de redimensionamento de imagem.

### Contêineres 📦

Os contêineres são uma maneira comum de empacotar códigos, configurações e dependências da aplicação em um único objeto. Você também pode usar contêineres para processos e fluxos de trabalho nos quais há requisitos essenciais de segurança, confiabilidade e dimensionamento.

### Amazon Elastic Container Service (Amazon ECS) 🚢

O [Amazon Elastic Container Service (Amazon ECS)](https://aws.amazon.com/ecs) é um sistema de gerenciamento de contêineres altamente dimensionável e de alto desempenho que permite executar e dimensionar aplicações em contêineres na AWS.

O Amazon ECS é compatível com os contêineres do Docker. O [Docker](https://www.docker.com) é uma plataforma de software que permite criar, testar e implantar aplicações rapidamente. A AWS é compatível com o Docker Community Edition de código aberto e o Docker Enterprise Edition baseado em assinatura. Com o Amazon ECS, você pode usar chamadas de API para iniciar e interromper aplicativos ativados pelo Docker.

### Amazon Elastic Kubernetes Service (Amazon EKS) ☸️

O [Amazon Elastic Kubernetes Service (Amazon EKS)](https://aws.amazon.com/eks) é um serviço totalmente gerenciado que você pode usar para executar o Kubernetes na AWS.

O [Kubernetes](https://kubernetes.io) é um software de código aberto que permite implantar e gerenciar aplicações em contêineres em grande escala. Uma grande comunidade de voluntários mantém o Kubernetes, e a AWS trabalha ativamente em conjunto com essa comunidade Kubernetes. Conforme novos recursos e funcionalidades são lançados para aplicativos Kubernetes, você pode facilmente aplicar essas atualizações aos aplicativos gerenciados pelo Amazon EKS.

### AWS Fargate 🏗️

O [AWS Fargate](https://aws.amazon.com/fargate) é um mecanismo de computação sem servidor para contêineres. Ele funciona com o Amazon ECS e o Amazon EKS.

Com o AWS Fargate, você não precisa provisionar nem gerenciar servidores. O AWS Fargate gerencia sua infraestrutura de servidor para você. Você pode se concentrar em inovar e desenvolver seus aplicativos, pagando apenas pelos recursos necessários para executar os contêineres.

Aqui está o texto traduzido, formatado em Markdown e com alguns emojis para deixá-lo mais dinâmico:

## Infraestrutura global da AWS 🌎

### Seleção de uma Região 📍

Ao determinar a Região certa para seus serviços, dados e aplicações, considere os quatro fatores de negócios a seguir:

Para conhecer mais Regiões, expanda cada uma das quatro categorias a seguir:

- **Conformidade com governança de dados e requisitos legais** 📜
- **Proximidade com os clientes** 👥
- **Serviços disponíveis em uma Região** 🛠️
- **Preços** 💰

### Zonas de Disponibilidade 🏢

Uma Zona de Disponibilidade é um único data center ou um grupo de data centers em uma Região. As Zonas de Disponibilidade estão localizadas a dezenas de quilômetros de distância umas das outras. A proximidade é suficiente para haver baixa latência (tempo entre o momento em que o conteúdo foi solicitado e recebido) entre as Zonas de Disponibilidade. No entanto, se ocorrer um desastre em uma parte da Região, eles estarão distantes o suficiente para reduzir a chance de várias Zonas de Disponibilidade serem afetadas.