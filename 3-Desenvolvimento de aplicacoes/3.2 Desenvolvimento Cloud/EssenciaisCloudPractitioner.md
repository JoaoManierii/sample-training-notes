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

## Locais de borda 🌐

Um local de borda é um site que o Amazon CloudFront usa para armazenar cópias em cache do conteúdo mais próximo dos clientes para uma entrega mais rápida.

## Maneiras de interagir com os serviços da AWS 🔄

Para saber maneiras de interagir com os serviços da AWS, selecione cada uma das três guias a seguir:

### CONSOLE DE GERENCIAMENTO DA AWS 🖥️

O console de gerenciamento da AWS é uma interface baseada na web para acessar e gerenciar os serviços da AWS. Você pode acessar rapidamente os serviços usados recentemente e pesquisar outros serviços por nome, palavra-chave ou acrônimo. O console inclui assistentes e fluxos de trabalho automatizados que podem simplificar o processo de conclusão de tarefas.

Você também pode usar o AWS Console Mobile Application para executar tarefas como monitoramento de recursos, visualização de alarmes e acesso a informações de cobrança. Várias identidades podem permanecer em sessão no AWS Console Mobile Application ao mesmo tempo.

### AWS COMMAND LINE INTERFACE 💻

Para economizar tempo ao fazer solicitações de API, você pode usar o AWS Command Line Interface (AWS CLI). O AWS CLI permite que você controle vários serviços AWS diretamente a partir da linha de comando em uma ferramenta. O AWS CLI está disponível para usuários no Windows, macOS e Linux.

Usando a AWS CLI, você pode automatizar as ações que seus serviços e aplicações executam por meio de scripts. Por exemplo, você pode usar comandos para iniciar uma instância do Amazon EC2, conectar uma instância do Amazon EC2 a um grupo específico do Auto Scaling e muito mais.

### KITS DE DESENVOLVIMENTO DE SOFTWARE (SDKs) 💼

Os SDKs da AWS permitem que você interaja com os serviços da AWS usando a linguagem de programação de sua escolha. Eles fornecem APIs de alto nível que facilitam a integração dos serviços da AWS com suas aplicações.

## AWS Elastic Beanstalk 🌱

Com o AWS Elastic Beanstalk, você envia definições de código e configuração, e o Elastic Beanstalk implanta os recursos necessários para executar as seguintes tarefas:

- Ajustar capacidade
- Balancear carga
- Auto scaling
- Monitorar o health da aplicação

## AWS CloudFormation 🏗️

Com o AWS CloudFormation, você pode considerar sua infraestrutura como código. Isso significa que você pode criar um ambiente escrevendo linhas de código em vez de usar o console de gerenciamento da AWS para provisionar recursos individualmente.

O AWS CloudFormation provisiona os recursos de maneira segura e repetível, permitindo que você crie frequentemente a infraestrutura e as aplicações sem precisar executar ações manuais. Ele determina quais são as operações mais adequadas para gerenciar sua pilha e reverte as alterações automaticamente se detecta erros.


## Amazon Virtual Private Cloud (Amazon VPC) 🛡️

Imagine os milhões de clientes que usam os serviços AWS. Imagine também os milhões de recursos que esses clientes criaram, como as instâncias do Amazon EC2. Sem limites para todos esses recursos, o tráfego de rede fluiria entre eles sem restrições.

Um serviço de rede que você pode usar para definir limites para seus recursos AWS é o [Amazon Virtual Private Cloud (Amazon VPC)](https://aws.amazon.com/vpc).

O Amazon VPC permite que você provisione uma seção isolada da nuvem AWS. Nessa seção isolada, você pode executar os recursos em uma rede virtual que definir. Em uma Virtual Private Cloud (VPC), você pode organizar seus recursos em sub-redes. Uma sub-rede é uma seção de uma VPC que pode conter recursos como instâncias do Amazon EC2.

### Gateway de Internet 🌐

Para permitir que o tráfego público da internet acesse sua VPC, é preciso anexar um gateway de internet à VPC.

Um gateway da internet é uma conexão entre uma VPC e a internet. Você pode pensar em um gateway da internet como sendo semelhante a uma porta que os clientes usam para entrar na cafeteria. Sem um gateway da internet, ninguém pode acessar os recursos em sua VPC.

### Gateway Privado Virtual 🔒

Para acessar recursos privados em uma VPC, use um gateway privado virtual.

Veja um exemplo de como um gateway privado virtual funciona. Você pode pensar na internet como o caminho entre sua casa e a cafeteria. Suponha que você está viajando com um guarda-costas para proteção. Você ainda usa o mesmo caminho que outros clientes, mas com uma camada extra de proteção.

O guarda-costas é como uma conexão de rede privada virtual (VPN) que criptografa (ou protege) seu tráfego de internet de todas as outras solicitações ao redor.

O gateway privado virtual é o componente que permite que o tráfego protegido da internet ingresse na VPC. Mesmo que sua conexão com a cafeteria tenha proteção extra, os engarrafamentos são possíveis porque você usa o mesmo caminho que outros clientes.
Um gateway privado virtual permite estabelecer uma conexão VPN (rede privada virtual) entre a VPC e uma rede privada, como um data center on-premises ou uma rede corporativa interna. Um gateway privado virtual permitirá o tráfego na VPC somente se ele for proveniente de uma rede aprovada.

### AWS Direct Connect 🚀

O [AWS Direct Connect](https://aws.amazon.com/directconnect) é um serviço que permite estabelecer uma conexão privada dedicada entre seu data center e uma VPC.

Suponha que haja um prédio com um corredor que o liga diretamente à cafeteria. Somente os moradores do prédio podem passar por esse corredor.

Esse corredor privado estabelece o mesmo tipo de conexão dedicada que o AWS Direct Connect. Os moradores conseguem entrar na cafeteria sem precisar usar a estrada pública compartilhada com outros clientes.

## Sub-redes e Listas de Controle de Acesso à Rede 🛡️

Para entender melhor a função das sub-redes em uma VPC, veja o exemplo da cafeteria a seguir.

### Exemplo da Cafeteria ☕️

Primeiro, os clientes fazem os pedidos ao operador de caixa. O operador de caixa, em seguida, passa os pedidos para o barista. Esse processo permite que a fila prossiga sem problemas à medida que mais clientes entram.

Suponha que alguns clientes tentem pular a fila do caixa e fazer os pedidos diretamente ao barista. Isso interrompe o fluxo de tráfego e faz com que os clientes acessem uma parte da cafeteria que é restrita a eles.

Para corrigir isso, os proprietários da cafeteria dividem a área do balcão colocando o operador de caixa e o barista em estações de trabalho separadas. A estação de trabalho do operador de caixa é voltada para o público e projetada para receber clientes. A área do barista é privada. O barista ainda pode receber pedidos do operador de caixa, mas não diretamente dos clientes. Isso é semelhante à forma como você pode usar os serviços de redes da AWS para isolar recursos e determinar exatamente como o tráfego de rede flui.

Na cafeteria, você pode pensar na área do balcão como uma VPC. A área do balcão divide-se em duas áreas separadas para a estação de trabalho do operador de caixa e para a estação de trabalho do barista. Em uma VPC, sub-redes são áreas separadas usadas para agrupar recursos.

### Sub-redes 🌐

Uma sub-rede é uma seção de uma VPC na qual você pode agrupar recursos com base em necessidades operacionais ou de segurança. As sub-redes podem ser públicas ou privadas. 
- **Sub-redes públicas** contêm recursos que precisam ser acessíveis ao público, como o site de uma loja online.
- **Sub-redes privadas** contêm recursos que devem ser acessíveis apenas pela sua rede privada, como um banco de dados que contém informações pessoais dos clientes e históricos de pedidos.

Em uma VPC, as sub-redes podem se comunicar entre si. Por exemplo, um aplicativo que envolve instâncias do Amazon EC2 em uma sub-rede pública que se comunicam com bancos de dados localizados em uma sub-rede privada.

### Tráfego de Rede em uma VPC 🚦

Quando um cliente solicita dados de um aplicativo hospedado na nuvem AWS, essa solicitação é enviada como um pacote. Um pacote é uma unidade de dados enviada pela internet ou por uma rede.

Ele entra em uma VPC por um gateway de internet. Antes de um pacote poder entrar em uma sub-rede ou sair de uma sub-rede, ele verifica se há permissões. Essas permissões indicam quem enviou o pacote e como ele tenta se comunicar com os recursos em uma sub-rede.

O componente da VPC que verifica as permissões de pacotes das sub-redes é uma lista de controle de acesso (ACL) de rede.

### ACLs de Rede 🔐

Uma ACL de rede é um firewall virtual que controla o tráfego de entrada e saída no nível de sub-rede.

#### Exemplo do Aeroporto ✈️

Por exemplo, saia da cafeteria e imagine que você está em um aeroporto. No aeroporto, os viajantes estão tentando entrar em outro país. Você pode pensar nos viajantes como pacotes e no oficial de controle de passaportes como uma ACL de rede. O oficial de controle de passaportes verifica as credenciais dos viajantes quando entram e saem do país. Se um viajante estiver em uma lista aprovada, ele poderá passar. No entanto, se ele não estiver na lista aprovada ou estiver explicitamente em uma lista de viajantes proibidos, ele não poderá entrar.

Cada conta AWS tem uma ACL de rede-padrão. Ao configurar sua VPC, você pode usar a ACL de rede comum da sua conta ou criar ACLs de rede personalizadas.

Por padrão, a ACL-padrão de rede da conta permite todo o tráfego de entrada e saída, mas você pode adicionar suas regras. Para ACLs de rede personalizadas, todo o tráfego de entrada e saída é negado até que você adicione regras para especificar qual tráfego permitir. Além disso, todas as ACLs de rede têm uma regra de negação explícita. Essa regra garante que, se um pacote não corresponder a nenhuma das outras regras na lista, ele será negado.

### Filtragem de Pacotes Stateless 📦

As ACLs de rede executam a filtragem de pacotes stateless. Elas não se lembram de nada e verificam os pacotes que atravessam a fronteira da sub-rede em todos os sentidos: entrada e saída.

Lembre-se do exemplo anterior de um viajante que quer entrar em outro país. Isso se parece com o envio de uma solicitação de uma instância do Amazon EC2 para a internet.

Quando a resposta de pacote da solicitação volta para a sub-rede, a ACL de rede não se lembra da solicitação anterior. A ACL de rede verifica a resposta do pacote em relação à lista de regras para determinar se permite ou nega.

Depois que um pacote entra em uma sub-rede, é necessário verificar as permissões dele nos recursos da sub-rede, como as instâncias do Amazon EC2.

### Grupos de Segurança 🔒

O componente de VPC que verifica as permissões de pacote para uma instância do Amazon EC2 é um grupo de segurança.

Um grupo de segurança é um firewall virtual que controla o tráfego de entrada e saída de uma instância do Amazon EC2.
Por padrão, um grupo de segurança nega todo o tráfego de entrada e permite todo o tráfego de saída. Você pode adicionar regras personalizadas para configurar o tráfego que será permitido.

#### Exemplo do Porteiro 🏢

Neste exemplo, suponha que você esteja em um prédio com um porteiro que recebe as visitas no lobby. Você pode pensar nas visitas como pacotes e no porteiro como um grupo de segurança. À medida que as visitas chegam, o porteiro verifica uma lista para garantir que eles podem entrar no edifício. No entanto, o porteiro não verifica a lista novamente quando as visitas saem do edifício.

Se você tiver várias instâncias do Amazon EC2 na mesma VPC, poderá associá-las ao mesmo grupo de segurança ou usar grupos de segurança diferentes para cada instância.

### Filtragem de Pacotes Stateful 🔄

Os grupos de segurança fazem a filtragem de pacotes stateful. Eles se lembram de decisões anteriores tomadas para pacotes recebidos.

Considere o mesmo exemplo de envio de uma solicitação de uma instância do Amazon EC2 para a internet.

Quando a resposta de pacote da solicitação retorna para a instância, o grupo de segurança lembra-se da solicitação anterior. O grupo de segurança permite que a resposta prossiga, independentemente das regras do grupo de segurança de entrada.

Com as ACLs de rede e os grupos de segurança, você pode configurar regras personalizadas para o tráfego na sua VPC. Conforme você sabe mais sobre a segurança e a rede da AWS, entenda as diferenças entre ACLs de rede e grupos de segurança.

### Recapitulação de Componentes da VPC 📝

Lembre-se da finalidade dos quatro componentes do VPC a seguir. Escolha o flashcard de cada componente da VPC para comparar sua resposta.

## Sistema de Nomes de Domínio (DNS) 🌐

Suponha que a AnyCompany tenha um site hospedado na nuvem AWS. Os clientes digitam o endereço da web no navegador e podem acessar o site. Isso acontece devido à resolução do Sistema de Nomes de Domínio (DNS). Na resolução de DNS, o resolvedor DNS do cliente se comunica com um servidor DNS.

### Entendendo o DNS 📖

Pense no DNS como a lista telefônica da internet. A resolução de DNS é o processo de conversão de um nome de domínio para um endereço IP. 

#### Exemplo: Acessando o site da AnyCompany 🖥️

1️⃣ Quando você digita o nome de domínio no navegador, essa solicitação é enviada a um resolvedor de DNS do cliente.

2️⃣ O resolvedor de DNS do cliente solicita ao servidor DNS da empresa o endereço IP que corresponde ao site da AnyCompany.

3️⃣ O servidor DNS da empresa responde com o endereço IP para o site da AnyCompany, 192.0.2.0.

### Amazon Route 53 🚦

O [Amazon Route 53](https://aws.amazon.com/route53) é um serviço da web de DNS. Ele oferece aos desenvolvedores e empresas uma maneira confiável de rotear os usuários finais para aplicativos da internet hospedados na AWS. 

#### Funcionalidades do Route 53 📌

- **Roteamento de Solicitações**: O Amazon Route 53 conecta solicitações de usuários à infraestrutura em execução na AWS (como instâncias do Amazon EC2 e balanceadores de carga). Ele pode direcionar os usuários para a infraestrutura fora da AWS.
- **Gerenciamento de Registros DNS**: Outro recurso do Route 53 é a capacidade de gerenciar os registros DNS para nomes de domínio. Você pode registrar novos nomes de domínio diretamente no Route 53. Também é possível transferir registros DNS para nomes de domínio existentes gerenciados por outras empresas de registro de domínio. Isso permite que você gerencie todos os seus nomes de domínio em um único local.

### Integração com o Amazon CloudFront 🌍

No módulo anterior, você conheceu o Amazon CloudFront, um serviço de entrega de conteúdo. O exemplo a seguir descreve como o Route 53 e o Amazon CloudFront trabalham juntos para entregar conteúdo aos clientes.

#### Exemplo: Entrega de Conteúdo para AnyCompany 📦

Suponha que a aplicação da AnyCompany esteja em execução em várias instâncias do Amazon EC2. Essas instâncias estão em um grupo do Auto Scaling que é anexado a um Application Load Balancer. 

1️⃣ Um cliente solicita dados da aplicação acessando o site da AnyCompany.

2️⃣ O Amazon Route 53 usa a resolução de DNS para identificar o endereço IP correspondente da AnyCompany.com, 192.0.2.0. Essas informações são enviadas de volta para o cliente.

3️⃣ A solicitação do cliente é enviada para o local de borda mais próximo por intermédio do Amazon CloudFront.

4️⃣ O Amazon CloudFront se conecta ao Application Load Balancer, que envia o pacote de entrada para uma instância do Amazon EC2.


## Armazenamentos de Instâncias 💾

Os volumes de armazenamento a nível de bloco se comportam como discos rígidos físicos.

### Armazenamento de Instância 🗂️

Um armazenamento de instância é um meio temporário de armazenamento a nível de bloco para uma instância do Amazon EC2. Ele é o armazenamento em disco fisicamente anexo ao computador host para uma instância do EC2 e, portanto, tem a mesma vida útil da instância. Quando a instância é terminada, você perde todos os dados no armazenamento de instância.

### Amazon Elastic Block Store (Amazon EBS) 📦

O [Amazon Elastic Block Store (Amazon EBS)](https://aws.amazon.com/ebs) é um serviço que fornece volumes de armazenamento a nível de bloco que você pode usar com instâncias do Amazon EC2. Se você interromper ou terminar uma instância do Amazon EC2, todos os dados no volume do EBS anexo permanecerão disponíveis.

Para criar um volume do EBS, você define a configuração (como tamanho e tipo do volume) e faz a provisão. Depois de criado, o volume do EBS pode ser anexado a uma instância do Amazon EC2.

### Backups e Snapshots 🔄

Como os volumes do EBS são para dados que precisam perdurar, é importante fazer backup dos dados. Você pode fazer backups incrementais de volumes do EBS criando snapshots do Amazon EBS.

#### Snapshots do Amazon EBS 📸

Um [snapshot do EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html) é um backup incremental. Isso significa que o primeiro backup de um volume copia todos os dados. Nos backups subsequentes, somente os blocos de dados que foram alterados desde o snapshot mais recente são salvos.

Os backups incrementais são diferentes dos backups completos, nos quais todos os dados em um volume de armazenamento são copiados cada vez que ocorre um backup. O backup completo inclui dados que não foram alterados desde o backup mais recente.

## Armazenamento de Objetos no Amazon S3 📦

### O Que é o Amazon S3? 🌐

O [Amazon Simple Storage Service (Amazon S3)](https://aws.amazon.com/s3) é um serviço de armazenamento a nível de objeto. Ele armazena dados como objetos em buckets. Você pode fazer upload de qualquer tipo de arquivo para o Amazon S3, como imagens, vídeos, arquivos de texto e muito mais. Por exemplo, o Amazon S3 pode ser usado para armazenar arquivos de backup, arquivos de mídia para um site ou documentos arquivados. O Amazon S3 oferece espaço de armazenamento ilimitado, com o tamanho máximo de arquivo para um objeto de até 5 TB.

Ao fazer upload de um arquivo, você pode definir permissões para controlar a visibilidade e o acesso a ele. Além disso, o Amazon S3 possui um recurso de versionamento que permite rastrear alterações nos seus objetos ao longo do tempo.

### Classes de Armazenamento do Amazon S3 🗄️

Com o Amazon S3, você paga apenas pelo que usa. Existem várias classes de armazenamento que você pode escolher, dependendo das suas necessidades de negócios e de custo. Ao selecionar uma classe de armazenamento, considere os seguintes fatores:

- **Frequência de Recuperação dos Dados:** Com que frequência você planeja recuperar seus dados.
- **Disponibilidade dos Dados:** Se seus dados precisam estar muito ou pouco disponíveis.

#### Principais Classes de Armazenamento do Amazon S3 📊

1. **S3 Standard** 🌟
   - Armazenamento para dados que são acessados com frequência.
   - Alta durabilidade e disponibilidade.

2. **S3 Standard – Infrequent Access (S3 Standard-IA)** 📉
   - Armazenamento para dados acessados com menor frequência, mas que ainda requerem acesso rápido quando necessário.
   - Custo mais baixo comparado ao S3 Standard.

3. **S3 One Zone-Infrequent Access (S3 One Zone – IA)** 🏢
   - Armazenamento de dados infrequentes em uma única zona de disponibilidade.
   - Custo mais baixo que o S3 Standard-IA, mas com menor disponibilidade.

4. **S3 Intelligent-Tiering** 🤖
   - Move automaticamente os dados entre duas camadas de acesso, dependendo dos padrões de acesso.
   - Ideal para dados com padrões de acesso imprevisíveis.

5. **S3 Glacier Instant Retrieval** 🥶
   - Armazenamento de arquivos raramente acessados com recuperação instantânea.
   - Muito econômico para arquivos raramente acessados.

6. **S3 Glacier Flexible Retrieval** 🧊
   - Armazenamento de arquivos raramente acessados com opções flexíveis de recuperação.
   - Mais econômico, com recuperação dos dados em minutos ou horas.

7. **S3 Glacier Deep Archive** 🗄️
   - Armazenamento mais econômico para arquivos raramente acessados que podem esperar horas para serem recuperados.
   - Ideal para dados arquivados a longo prazo.

8. **S3 Outposts** 🌍
   - Armazenamento em seus próprios data centers usando hardware AWS.
   - Oferece armazenamento local para aplicações que requerem acesso em tempo real e latência mínima.

### Benefícios do Amazon S3 🌐

- **Escalabilidade:** Cresce com suas necessidades de armazenamento.
- **Segurança:** Controles de acesso e permissões para proteger seus dados.
- **Durabilidade:** Projetado para uma durabilidade de 99,999999999% (11 9's).
- **Integração:** Funciona com outros serviços AWS para criar soluções completas.

## Armazenamento de Arquivos no AWS 📂

### O Que é Armazenamento de Arquivos? 🗄️

No armazenamento de arquivos, vários clientes (como usuários, aplicações, servidores, etc.) podem acessar dados armazenados em pastas de arquivos compartilhadas. Essa abordagem utiliza um servidor de armazenamento que organiza os arquivos usando armazenamento em bloco com um sistema de arquivos local. Os clientes acessam os dados por meio de caminhos de arquivo.

Comparado ao armazenamento em blocos e ao armazenamento de objetos, o armazenamento de arquivos é ideal para casos de uso em que muitos serviços e recursos precisam acessar os mesmos dados simultaneamente.

### Amazon Elastic File System (Amazon EFS) 🌐

O [Amazon Elastic File System (Amazon EFS)](https://aws.amazon.com/efs) é um sistema de arquivos escalável usado com serviços em nuvem da AWS e recursos on-premises. À medida que você adiciona e remove arquivos, o Amazon EFS expande e retrai automaticamente. Ele pode dimensionar sob demanda para petabytes sem interromper os aplicativos.

#### Principais Características do Amazon EFS 📈

- **Escalabilidade:** Expande e retrai automaticamente à medida que você adiciona e remove arquivos.
- **Alta Disponibilidade e Durabilidade:** Armazena dados em várias Zonas de Disponibilidade e entre elas.
- **Acesso Simultâneo:** Permite que múltiplos recursos acessem dados ao mesmo tempo.
- **Integração On-Premises:** Servidores on-premises podem acessar o Amazon EFS usando o AWS Direct Connect.

### Comparação Entre Amazon EBS e Amazon EFS 📊

#### Amazon Elastic Block Store (Amazon EBS) 📦

- **Armazenamento em Bloco:** Um volume de armazenamento em bloco usado com instâncias do Amazon EC2.
- **Zona de Disponibilidade Única:** Armazena dados em uma única Zona de Disponibilidade.
- **Anexação de Instâncias:** Para anexar uma instância do Amazon EC2 a um volume do EBS, tanto a instância quanto o volume precisam estar na mesma Zona de Disponibilidade.
- **Backups:** Suporta snapshots incrementais para backup de dados.

#### Amazon Elastic File System (Amazon EFS) 🌐

- **Armazenamento de Arquivos:** Um sistema de arquivos usado para armazenar e acessar arquivos.
- **Serviço Regional:** Armazena dados em várias Zonas de Disponibilidade e entre elas.
- **Acesso Simultâneo e Redundante:** Permite acesso simultâneo de múltiplas Zonas de Disponibilidade na mesma região.
- **Integração On-Premises:** Servidores on-premises podem acessar o EFS usando o AWS Direct Connect.

### Casos de Uso Ideais para o Amazon EFS 🛠️

- **Ambientes Compartilhados:** Aplicações e serviços que necessitam acessar os mesmos arquivos ao mesmo tempo.
- **Sistemas de Gestão de Conteúdo:** Plataformas que gerenciam grande quantidade de arquivos de usuários.
- **Desenvolvimento e Teste:** Ambientes de desenvolvimento que precisam de acesso compartilhado aos mesmos conjuntos de dados.
- **Análises de Dados:** Processamento de grandes volumes de dados que requer acesso simultâneo a múltiplos nós de computação.

### Benefícios do Amazon EFS 🌟

- **Facilidade de Uso:** Simplifica a configuração e o gerenciamento do armazenamento de arquivos.
- **Economia de Tempo:** Expande e retrai automaticamente, eliminando a necessidade de provisionamento manual.
- **Alto Desempenho:** Oferece baixa latência e alta taxa de transferência.
- **Segurança:** Integração com AWS IAM e outros serviços de segurança para proteger seus dados.

### Conclusão 📝

O Amazon EFS é uma solução robusta para armazenamento de arquivos, oferecendo escalabilidade, alta disponibilidade e facilidade de acesso para múltiplos recursos ao mesmo tempo. Ele complementa o Amazon EBS, que é mais adequado para armazenamento em bloco em uma única Zona de Disponibilidade. Juntos, eles oferecem soluções de armazenamento abrangentes para diversas necessidades e casos de uso.

## Bancos de Dados Relacionais e Amazon RDS 🗃️

### O Que é um Banco de Dados Relacional? 📚

Em um banco de dados relacional, os dados são armazenados de maneira que se relacionem com outros dados. Os bancos de dados relacionais utilizam a Linguagem de Consulta Estruturada (SQL) para armazenar e consultar dados, permitindo uma abordagem consistente e dimensionável para o gerenciamento de dados. 

### Exemplos Práticos 🎓

Imagine um sistema de gerenciamento de inventário para uma cafeteria. Cada registro no banco de dados incluiria dados para um único item, como nome do produto, tamanho, preço, etc. Os proprietários da cafeteria podem, por exemplo, escrever uma consulta SQL para identificar todos os clientes que compraram um café com leite médio com mais frequência.

### Amazon Relational Database Service (Amazon RDS) ☁️

O [Amazon Relational Database Service (Amazon RDS)](https://aws.amazon.com/rds) é um serviço gerenciado que permite executar bancos de dados relacionais na nuvem AWS, automatizando tarefas como provisão de hardware, configuração de banco de dados, aplicação de patches e backups. Isso permite que você se concentre mais em inovar seus aplicativos do que em tarefas administrativas.

#### Principais Características do Amazon RDS 🌟

- **Automação:** Automatiza tarefas administrativas como provisionamento de hardware, configuração de banco de dados, aplicação de patches e backups.
- **Segurança:** Oferece diversas opções de segurança, incluindo criptografia em repouso e em trânsito.
- **Integração:** Pode ser integrado a outros serviços AWS, como AWS Lambda, para consultas a partir de aplicações sem servidor.

### Mecanismos de Banco de Dados do Amazon RDS 🔄

O Amazon RDS oferece suporte a seis mecanismos de banco de dados diferentes, otimizados para memória, desempenho ou entrada/saída (E/S):

1. **Amazon Aurora**
2. **PostgreSQL**
3. **MySQL**
4. **MariaDB**
5. **Oracle Database**
6. **Microsoft SQL Server**

### Amazon Aurora 🌐

O [Amazon Aurora](https://aws.amazon.com/rds/aurora) é um banco de dados relacional de nível empresarial compatível com MySQL e PostgreSQL, sendo até cinco vezes mais rápido que os bancos de dados MySQL comuns e três vezes mais rápido que os bancos de dados PostgreSQL comuns. 

#### Benefícios do Amazon Aurora 💡

- **Desempenho:** Mais rápido que os bancos de dados MySQL e PostgreSQL comuns.
- **Redução de Custos:** Reduz operações desnecessárias de E/S.
- **Alta Disponibilidade:** Replica seis cópias dos dados em três Zonas de Disponibilidade.
- **Backup Contínuo:** Faz backup contínuo dos dados para o Amazon S3.

## Bancos de Dados Não Relacionais

### O Que é um Banco de Dados Não Relacional? 🗃️

Bancos de dados não relacionais, ou bancos de dados NoSQL, utilizam estruturas diferentes de linhas e colunas para organizar dados. Em vez de usar uma abordagem tradicional de tabelas e esquemas rígidos, esses bancos de dados podem usar diversas abordagens estruturais, como pares de chave-valor.

### Estrutura de Pares de Chave-Valor 🔑

Em um banco de dados de chave-valor, os dados são organizados em itens (chaves) e cada item tem atributos (valores). Atributos são características dos dados, e você pode adicionar ou remover atributos a qualquer momento. Além disso, nem todos os itens na tabela precisam ter os mesmos atributos, proporcionando flexibilidade no gerenciamento dos dados.

### Amazon DynamoDB 📦

[Amazon DynamoDB](https://aws.amazon.com/dynamodb) é um serviço de banco de dados de chave-valor que oferece um desempenho de milissegundos de um dígito em qualquer escala. 

#### Características do DynamoDB 🌟

- **Sem Servidor:** O DynamoDB é sem servidor, o que significa que você não precisa provisionar, aplicar patches ou gerenciar servidores. Não há necessidade de instalar, manter ou operar software.
  
- **Auto Scaling:** O DynamoDB dimensiona automaticamente para se ajustar às alterações na capacidade, mantendo um desempenho consistente. Isso o torna adequado para casos de uso que exigem alto desempenho durante o scaling.

### Comparação com Bancos de Dados Relacionais 📊

- **Estrutura:** 
  - **Relacionais:** Usam tabelas com linhas e colunas.
  - **Não Relacionais:** Usam estruturas flexíveis, como pares de chave-valor.
  
- **Flexibilidade:**
  - **Relacionais:** Esquemas rígidos, menos flexíveis na adição de novos campos.
  - **Não Relacionais:** Esquemas flexíveis, permitindo fácil adição ou remoção de atributos.

- **Escalabilidade:**
  - **Relacionais:** Escalabilidade vertical (aumentar a capacidade de um único servidor).
  - **Não Relacionais:** Escalabilidade horizontal (adicionar mais servidores para lidar com o aumento da carga).

### Casos de Uso 🌐

Bancos de dados não relacionais são ideais para aplicações que requerem flexibilidade e alta performance em grandes escalas, como:

- Aplicativos de jogos que requerem armazenamento rápido de estados de usuário.
- Aplicações móveis que necessitam de sincronização de dados em tempo real.
- Plataformas de e-commerce que precisam gerenciar catálogos de produtos dinâmicos.

## Amazon Redshift

### O Que é o Amazon Redshift? 🏢

[Amazon Redshift](https://aws.amazon.com/redshift) é um serviço de data warehouse totalmente gerenciado que permite realizar análises de Big Data de maneira rápida e eficiente. Ele permite coletar dados de diversas fontes e fornece ferramentas para entender as relações e tendências dentro desses dados.

## AWS Database Migration Service (AWS DMS)

### O Que é o AWS Database Migration Service (AWS DMS)? 📦

[AWS Database Migration Service (AWS DMS)](https://aws.amazon.com/dms/) é um serviço que facilita a migração de bancos de dados relacionais e não relacionais e outros tipos de armazenamento de dados para a AWS. Ele permite mover dados entre bancos de dados de origem e de destino, que podem ser do mesmo tipo ou de tipos diferentes, enquanto minimiza o tempo de inatividade dos aplicativos que dependem desses bancos de dados.

### Funcionalidades Principais 🌟

1. **Migração Mínima de Tempo de Inatividade:** Durante a migração, o banco de dados de origem permanece operacional, permitindo que os aplicativos continuem a funcionar com interrupção mínima.

2. **Suporte para Bancos de Dados Heterogêneos:** AWS DMS pode migrar dados entre bancos de dados de tipos diferentes, como de um banco de dados MySQL para um banco de dados do Amazon Aurora.

3. **Confiabilidade e Automação:** O serviço é gerenciado pela AWS, garantindo alta disponibilidade, monitoramento contínuo e recuperação automática de falhas.

4. **Facilidade de Uso:** A configuração é simples e não requer alterações no banco de dados de origem.

### Casos de Uso do AWS DMS 📚

#### 1. Desenvolvimento e Teste de Migrações de Banco de Dados
**Uso:** Desenvolvedores podem testar as aplicações com dados de produção sem afetar os usuários de produção.
**Benefício:** Permite validar as migrações antes de aplicá-las em ambientes de produção, garantindo que os dados são migrados corretamente e que as aplicações funcionam como esperado.

#### 2. Consolidação de Banco de Dados
**Uso:** Combinação de vários bancos de dados em um único banco de dados.
**Benefício:** Simplifica a administração de dados e reduz custos ao centralizar dados dispersos em um único local, facilitando o gerenciamento e a análise de dados.

#### 3. Replicação Contínua
**Uso:** Envio de cópias contínuas dos dados para outras fontes de destino em vez de fazer uma migração única.
**Benefício:** Mantém os dados sincronizados entre múltiplos ambientes, útil para backup, recuperação de desastres, e análise em tempo real.


### Serviços de Banco de Dados Adicionais na AWS

#### 1. 📄 Amazon DocumentDB
Amazon DocumentDB é um serviço de banco de dados de documentos compatível com MongoDB. Ele é projetado para cargas de trabalho que requerem armazenamento, consulta e indexação de dados JSON de forma eficiente.

**Características:**
- 🛠️ Compatibilidade com MongoDB: Fácil migração e integração de aplicativos MongoDB.
- 📈 Escalabilidade Automática: Ajusta automaticamente a capacidade conforme necessário.
- ⚙️ Alta Disponibilidade: Réplicas em múltiplas zonas de disponibilidade.
- 🔒 Segurança Integrada: Criptografia de dados em trânsito e em repouso.

**Casos de Uso:**
- 📱 Aplicações móveis
- 🗂️ Sistemas de gerenciamento de conteúdo
- 🎮 Jogos

#### 2. 🌐 Amazon Neptune
Amazon Neptune é um serviço de banco de dados gráfico rápido e confiável que facilita a criação e a execução de aplicativos com dados altamente conectados.

**Características:**
- 🌟 Suporte a Grafos RDF e Property Graph: Permite consultas com SPARQL e Gremlin.
- ⚙️ Alta Disponibilidade: Réplicas em múltiplas zonas de disponibilidade.
- 📈 Escalabilidade: Dimensionamento automático de leitura.
- 🔒 Segurança: Criptografia de dados em trânsito e em repouso.

**Casos de Uso:**
- 👥 Redes sociais
- 🎯 Sistemas de recomendação
- 🛡️ Detecção de fraudes

#### 3. 📜 Amazon Quantum Ledger Database (Amazon QLDB)
Amazon QLDB é um banco de dados de ledger totalmente gerenciado que oferece um log de transações imutável, transparente e criptograficamente verificável.

**Características:**
- 🔒 Imutabilidade: Todas as alterações são registradas de forma permanente.
- 👁️ Transparência: Histórico completo e verificável de alterações.
- 🛠️ Facilidade de Uso: Sem necessidade de gerenciamento de infraestrutura.

**Casos de Uso:**
- 💸 Sistemas financeiros
- 🚚 Rastreamento de cadeia de suprimentos
- 🏛️ Sistemas de registros governamentais

#### 4. 🔗 Amazon Managed Blockchain
Amazon Managed Blockchain permite criar e gerenciar redes blockchain escaláveis usando frameworks populares como Ethereum e Hyperledger Fabric.

**Características:**
- 🚀 Facilidade de Criação e Gerenciamento: Criação rápida de redes blockchain.
- 📈 Escalabilidade: Suporte para milhares de aplicativos.
- 🔒 Segurança: Certificados de gerenciamento e controle de acesso.

**Casos de Uso:**
- 💳 Processamento de transações financeiras
- 🆔 Verificação de identidade
- 🏗️ Gestão de cadeias de suprimentos

#### 5. 🚀 Amazon ElastiCache
Amazon ElastiCache é um serviço de cache na memória totalmente gerenciado que melhora o desempenho de aplicativos ao permitir acesso rápido a dados em cache.

**Características:**
- 🔧 Compatibilidade com Redis e Memcached: Suporte para dois mecanismos populares de cache.
- ⚡ Alto Desempenho: Latência de microssegundos.
- ⚙️ Alta Disponibilidade: Réplicas em múltiplas zonas de disponibilidade.
- 📈 Escalabilidade: Fácil dimensionamento de clusters.

**Casos de Uso:**
- 🧑‍💻 Sessões de usuário
- 🌐 Cache de conteúdo dinâmico
- 🎮 Jogos

#### 6. ⚡ Amazon DynamoDB Accelerator (DAX)
Amazon DynamoDB Accelerator (DAX) é um serviço de cache na memória para DynamoDB que oferece tempos de resposta em microssegundos para tabelas do DynamoDB.

**Características:**
- ⚡ Desempenho de Alta Velocidade: Reduz latência para leituras do DynamoDB.
- 🛠️ Totalmente Gerenciado: Sem necessidade de gerenciar infraestrutura de cache.
- 🗄️ Compatibilidade: Transparente para as aplicações que utilizam DynamoDB.

**Casos de Uso:**
- 🎮 Aplicativos de jogos
- 🛒 Comércio eletrônico
- 🌐 Aplicativos de IoT


### Modelo de Responsabilidade Compartilhada da AWS

O modelo de responsabilidade compartilhada da AWS divide as responsabilidades de segurança entre a AWS e o cliente. Enquanto a AWS cuida da segurança da infraestrutura da nuvem, o cliente é responsável pela segurança dentro da nuvem.

#### Clientes: Segurança na Nuvem 🛡️🌩️
Os clientes são responsáveis pela segurança e conformidade dos seus próprios dados e aplicativos que estão na nuvem AWS. Isso inclui:

- **Gerenciamento de Dados**: Proteção dos dados armazenados em serviços como Amazon S3, RDS, DynamoDB, etc.
- **Controle de Acesso**: Configuração de permissões e políticas de acesso usando AWS Identity and Access Management (IAM).
- **Configuração de Rede**: Definição e gerenciamento de configurações de segurança de rede, incluindo VPC, sub-redes, e grupos de segurança.
- **Gerenciamento de Patches e Updates**: Aplicação de patches e updates em sistemas operacionais e aplicativos instalados em instâncias EC2.
- **Criptografia de Dados**: Implementação de criptografia para dados em trânsito e em repouso.
- **Monitoramento e Log**: Uso de ferramentas como AWS CloudTrail e Amazon CloudWatch para monitorar atividades e acessar logs de auditoria.

#### AWS: Segurança da Nuvem 🔒☁️
A AWS é responsável pela proteção da infraestrutura que executa todos os serviços oferecidos na AWS Cloud. Isso inclui:

- **Infraestrutura Física**: Segurança de data centers, incluindo controle de acesso físico e proteção contra desastres.
- **Hardware e Software**: Manutenção de hardware, firmware e software necessários para a execução dos serviços AWS.
- **Rede Global**: Proteção das redes que interconectam data centers e regiões da AWS.
- **Serviços de Infraestrutura**: Segurança dos serviços de infraestrutura, como servidores, armazenamento e componentes de rede.
- **Gerenciamento de Patches e Updates de Infraestrutura**: Aplicação de patches e atualizações em hardware e software da infraestrutura.

#### Comparação com Proprietário e Construtora 🏠👷‍♂️
O modelo de responsabilidade compartilhada pode ser comparado à relação entre um proprietário e uma construtora. A construtora (AWS) é responsável pela construção sólida da casa (infraestrutura da nuvem). O proprietário (cliente) é responsável por proteger o que está dentro da casa (dados e aplicativos) e garantir que as portas estejam fechadas e trancadas (configurações de segurança).


### AWS Organizations 🏢🌐

O AWS Organizations permite que você consolide e gerencie múltiplas contas AWS de forma centralizada. Este serviço facilita o controle de permissões e a organização de contas, atendendo às necessidades específicas de negócios e segurança da sua empresa.

#### Estrutura de Organização 🌲
- **Raiz da Organização**: Quando você cria uma organização, o AWS Organizations cria automaticamente uma raiz, que serve como o contêiner primário para todas as contas da organização.
- **Unidades Organizacionais (UO)**: Grupos de contas dentro da organização que facilitam o gerenciamento de contas com requisitos de negócios ou segurança semelhantes.

#### Políticas de Controle de Serviço (SCPs) 🛡️📜
- As SCPs permitem colocar restrições nos serviços AWS, recursos e ações individuais de API que os usuários e funções em cada conta podem acessar.
- Ao aplicar uma SCP a uma UO, todas as contas na UO herdam automaticamente as permissões especificadas na política.


### AWS Artifact 🗂️🔒

Dependendo do setor de sua empresa, talvez seja necessário manter padrões específicos. Uma auditoria ou inspeção assegurará que a empresa cumpriu esses padrões.

O **AWS Artifact** é um serviço que concede acesso sob demanda a relatórios de segurança e conformidade da AWS e a contratos on-line selecionados. O AWS Artifact consiste em duas seções principais: **AWS Artifact Agreements** e **AWS Artifact Reports**.

#### AWS Artifact Agreements 📝
- **Contratos On-line**: Acesse contratos e acordos com a AWS para entender melhor os termos e condições que regem o uso dos serviços AWS.
- **Gerenciamento de Conformidade**: Simplifique a gestão de conformidade ao ter contratos facilmente acessíveis e auditáveis.

#### AWS Artifact Reports 📑
- **Relatórios de Segurança e Conformidade**: Obtenha acesso a relatórios detalhados de segurança e conformidade, como:
  - Certificações ISO da AWS
  - Relatórios do Payment Card Industry (PCI)
  - Relatórios de Controle da Organização de Serviços (SOC)
- **Acesso Sob Demanda**: Visualize e faça download de relatórios sempre que precisar, facilitando a preparação para auditorias e inspeções.

#### Centro de Conformidade para o Cliente 📚
O **Centro de Conformidade para o Cliente** contém recursos que ajudam você a saber mais sobre a conformidade da AWS.

- **Histórias de Conformidade dos Clientes**: Leia como empresas de setores regulamentados resolveram desafios de conformidade, governança e auditoria.
- **Whitepapers e Documentação**: Acesse uma vasta gama de whitepapers e documentação sobre tópicos como:
  - Respostas da AWS aos principais problemas de conformidade
  - Visão geral do risco e da conformidade da AWS
  - Lista de verificação da segurança de auditoria
- **Plano de Aprendizagem para Auditores**: Projetado para indivíduos em funções jurídicas, de auditoria e de conformidade que desejam saber mais sobre como demonstrar conformidade usando a nuvem AWS.

AWS Artifact oferece uma forma estruturada e eficiente de gerenciar a conformidade, garantindo que sua empresa atenda a padrões rigorosos e esteja preparada para auditorias.


### Ataques de Negação de Serviço 🚫🖥️

#### Cenário da Cafeteria 📞☕
Os clientes podem telefonar para a cafeteria para fazer pedidos. Depois de atender cada chamada, um operador de caixa anota o pedido e o entrega ao barista.

No entanto, suponha que uma pessoa telefone várias vezes para fazer pedidos, mas nunca retire as bebidas. Isso faz com que o operador de caixa fique indisponível para atender chamadas de outros clientes. A cafeteria pode tentar parar os pedidos falsos bloqueando o número de telefone que a pessoa está usando.

Esse cenário é semelhante a um ataque de negação de serviço (DoS).

#### Ataques de Negação de Serviço (DoS) 🚫
Um ataque de negação de serviço (DoS) é uma tentativa deliberada de tornar um site ou aplicação indisponível para os usuários. 

- **Ação de um Único Ator de Ameaça**: O invasor direciona um site ou aplicação, inundando-os com tráfego excessivo de rede até que o site ou a aplicação se sobrecarregue e não consiga responder.
- **Resultado**: O serviço é negado aos usuários legítimos.

#### Ataques Distribuídos de Negação de Serviço (DDoS) 🌐🚫
Agora, suponha que a pessoa passando o trote tenha recrutado a ajuda de amigos. Essa pessoa e os amigos dela telefonam repetidamente para a cafeteria para fazer pedidos, mesmo que não pretendam retirá-los. Esses pedidos vêm de números de telefone diferentes, tornando impossível para a cafeteria bloqueá-los todos. O influxo de chamadas dificulta cada vez mais o atendimento aos clientes. 

Esse cenário é semelhante a um ataque distribuído de negação de serviço (DDoS).

- **Ação de Múltiplas Origens**: Em um ataque DDoS, várias origens são usadas para iniciar um ataque. Pode ser feito por um grupo de invasores ou um único invasor usando vários computadores infectados (bots) para enviar tráfego excessivo.
- **Resultado**: O site ou aplicação se torna indisponível devido ao tráfego excessivo.

#### AWS Shield 🛡️
Para ajudar a minimizar o efeito de ataques DoS e DDoS em suas aplicações, você pode usar o **AWS Shield**.

- **Proteção Contra DDoS**: O AWS Shield protege aplicações contra ataques DDoS.
- **Níveis de Proteção**:
  - **Standard**: Proteção básica contra ataques DDoS sem custo adicional.
  - **Advanced**: Proteção avançada que inclui detecção e mitigação mais sofisticadas, além de suporte 24/7 e monitoramento contínuo.

### AWS Key Management Service (AWS KMS) 🔐

A cafeteria tem muitos itens, como máquinas de café, confeitaria, dinheiro nas caixas registradoras e assim por diante. Você pode pensar nesses itens como dados. Os proprietários da cafeteria querem garantir que todos esses itens estejam protegidos, independentemente de estarem dispostos na sala de armazenamento ou em transporte.

Da mesma forma, você deve garantir que os dados das suas aplicações estejam protegidos durante o armazenamento (criptografia em repouso) e durante a transmissão (criptografia em trânsito).

O AWS Key Management Service (AWS KMS) permite que você execute operações de criptografia usando chaves de criptografia. Uma chave de criptografia é uma cadeia aleatória de dígitos usada para bloquear (criptografar) e desbloquear (descriptografar) dados. Você pode usar o AWS KMS para criar, gerenciar e usar chaves de criptografia. Você também pode controlar o uso de chaves em uma ampla gama de serviços e em suas aplicações.

Com o AWS KMS, você pode escolher os níveis específicos de controle de acesso necessários para suas chaves. Por exemplo, você pode especificar quais usuários e funções do IAM podem gerenciar chaves. Do mesmo modo, você pode desativar temporariamente as chaves para que não sejam mais usadas. Suas chaves nunca saem do AWS KMS e você está sempre no controle delas.

### AWS WAF 🔒

O AWS WAF é um firewall de aplicação web que permite monitorar solicitações de rede que entram em aplicações web.

O AWS WAF trabalha em conjunto com o Amazon CloudFront e um Application Load Balancer. Lembre-se das listas de controle de acesso de rede que você aprendeu em um módulo anterior. O AWS WAF funciona de forma semelhante para bloquear ou permitir o tráfego. No entanto, ele faz isso usando uma lista de controle de acesso (ACL) da web para proteger seus recursos da AWS.

Veja um exemplo de como você pode usar o AWS WAF para permitir e bloquear solicitações específicas.

#### Exemplo de Uso do AWS WAF:
- **Permitir Solicitações Legítimas**: Suponha que a aplicação tenha recebido solicitações de rede mal-intencionadas de vários endereços IP. Você quer impedir que essas solicitações continuem a acessar seu aplicativo, mas também deseja garantir que usuários legítimos ainda possam acessá-lo. Você configura a ACL da web para permitir todas as solicitações, exceto aquelas dos endereços IP que você especificou.
- **Bloquear Solicitações Maliciosas**: Quando uma solicitação entra no AWS WAF, ele confere a lista de regras configurada na ACL da web. Se uma solicitação não for proveniente de um dos endereços IP bloqueados, ele permitirá o acesso à aplicação. No entanto, se uma solicitação for proveniente de um dos endereços IP bloqueados, o AWS WAF vai negar o acesso.

### Amazon Inspector 🔍

Suponha que os desenvolvedores da cafeteria estão desenvolvendo e testando um novo aplicativo para pedidos. Eles querem se certificar de que estão projetando o aplicativo de acordo com as práticas recomendadas de segurança. Contudo, eles têm vários outros aplicativos para desenvolver, por isso, não podem passar tempo demais fazendo avaliações manuais. Para fazer avaliações de segurança automatizadas, eles decidem usar o Amazon Inspector.

O Amazon Inspector ajuda a melhorar a segurança e a conformidade das aplicações executando avaliações de segurança automatizadas. Ele verifica os aplicativos quanto a vulnerabilidades de segurança e desvios das práticas recomendadas de segurança, como acesso aberto a instâncias do Amazon EC2 e instalações de versões de software vulneráveis.

Depois que o Amazon Inspector faz uma avaliação, ele apresenta uma lista de descobertas de segurança. A lista prioriza por nível de gravidade, com uma descrição detalhada de cada problema de segurança e uma recomendação sobre como corrigi-lo. Contudo, a AWS não garante que seguir as recomendações feitas resolverá todos os possíveis problemas de segurança. Sob o modelo de responsabilidade compartilhada, os clientes são responsáveis pela segurança de ferramentas, aplicativos e processos executados nos serviços AWS.

### Amazon GuardDuty 🚨

O Amazon GuardDuty é um serviço que realiza detecção inteligente de ameaças para sua infraestrutura e seus recursos AWS. Ele identifica ameaças monitorando continuamente a atividade da rede e o comportamento da conta no seu ambiente AWS.

#### Etapas do Amazon GuardDuty:
1. **Ativar**: Depois de habilitar o GuardDuty para sua conta AWS, ele começa a monitorar sua atividade de rede e conta.
2. **Analisar**: GuardDuty analisa continuamente dados de várias fontes da AWS, incluindo logs de fluxo de VPC e logs de DNS.
3. **Detectar com Inteligência**: Se o GuardDuty detectar ameaças, você poderá analisar as descobertas detalhadas no console de gerenciamento da AWS.
4. **Ver Descobertas e Tomar Ações**: As descobertas incluem etapas recomendadas para a correção. Você também pode configurar as funções do AWS Lambda para executar as etapas de correção automaticamente em resposta às descobertas de segurança do GuardDuty.

### Amazon CloudWatch 🌐

O Amazon CloudWatch é um serviço da web que permite monitorar e gerenciar várias métricas e configurar ações de alarme de acordo com os dados dessas métricas.

O CloudWatch usa métricas para representar os pontos de dados para seus recursos. Os serviços AWS enviam as métricas ao CloudWatch. Em seguida, o CloudWatch usa essas métricas para criar automaticamente gráficos que mostram como o desempenho mudou ao longo do tempo.

### Alarmes do CloudWatch 🚨

Com o CloudWatch, você pode criar alarmes que vão executar ações automaticamente se o valor da métrica ultrapassar ou for inferior a um limite predefinido.

#### Exemplo de Uso de Alarme do CloudWatch:
- **Interromper Instâncias do EC2**: Suponha que os desenvolvedores da sua empresa usem instâncias do Amazon EC2 para fins de desenvolvimento ou teste de aplicações. Se os desenvolvedores ocasionalmente se esquecerem de interromper as instâncias, as instâncias continuarão a ser executadas e incorrerão em cobranças.
  - **Solução**: Você pode criar um alarme do CloudWatch que interrompe automaticamente uma instância do Amazon EC2 quando a porcentagem de utilização da CPU permanecer abaixo de um determinado limite por um período específico. Ao configurar o alarme, você pode especificar se deseja receber uma notificação sempre que esse alarme for acionado.

### Painel do CloudWatch 📊

O recurso de painel do CloudWatch permite que você acesse todas as métricas dos seus recursos em um único local.

#### Exemplos de Uso do Painel do CloudWatch:
- **Monitoramento de Utilização da CPU**: Você pode usar um painel do CloudWatch para monitorar a utilização da CPU de uma instância do Amazon EC2.
- **Monitoramento de Solicitações do S3**: Você pode monitorar o número total de solicitações feitas para um bucket do Amazon S3.
- **Personalização de Painéis**: Você pode personalizar painéis separados para diferentes fins comerciais, aplicativos ou recursos.


### AWS CloudTrail 🛤️

O AWS CloudTrail registra as chamadas de API realizadas na sua conta. As informações gravadas incluem a identidade do chamador da API, hora da chamada da API, endereço IP de origem do chamador da API e muito mais. Você pode pensar no CloudTrail como uma “trilha” (ou um log de ações) que alguém criou.

Lembre-se de que você pode usar chamadas de API para provisionar, gerenciar e configurar seus recursos da AWS. Com o CloudTrail, você pode visualizar um histórico completo de atividades do usuário e chamadas de API de seus aplicativos e recursos.

### Atualização de Eventos

Normalmente, os eventos são atualizados no CloudTrail dentro de 15 minutos após uma chamada de API. Você pode filtrar eventos especificando a hora e a data em que uma chamada de API ocorreu, o usuário que solicitou a ação, o tipo de recurso envolvido na chamada de API e muito mais.

### Exemplo: Evento do AWS CloudTrail 📋

Suponha que o proprietário da cafeteria esteja navegando pela seção AWS Identity and Access Management (IAM) do Console de gerenciamento da AWS. Ele descobre que um novo usuário do IAM chamado Mary foi criado, mas não sabe quem, quando ou qual método foi usado para criar o usuário.

#### Com o AWS CloudTrail, o proprietário pode:
1. **Identificar o Chamador**: Saber quem criou o usuário Mary.
2. **Hora da Criação**: Determinar quando o usuário Mary foi criado.
3. **Método Utilizado**: Verificar qual método ou chamada de API foi usado para criar o usuário.

### Benefícios do AWS CloudTrail

- **Transparência**: Proporciona um histórico completo de atividades, aumentando a transparência.
- **Segurança**: Ajuda a detectar atividades suspeitas e tomar medidas apropriadas.
- **Auditoria**: Facilita a auditoria das atividades para fins de conformidade e análise.

### Uso do AWS CloudTrail
- **Monitoramento Contínuo**: Use o CloudTrail para monitorar continuamente todas as atividades de API em sua conta AWS.
- **Filtros Personalizados**: Aplique filtros personalizados para encontrar eventos específicos rapidamente.
- **Análise de Segurança**: Utilize as informações detalhadas para análise de segurança e auditoria.

Ao utilizar o AWS CloudTrail, você garante que todas as atividades de API em sua conta são registradas e acessíveis para revisão, proporcionando uma camada adicional de segurança e conformidade.

### AWS Trusted Advisor 🌟

O AWS Trusted Advisor é um serviço da web que inspeciona seu ambiente AWS e faz recomendações em tempo real de acordo com as práticas recomendadas da AWS.

### Categorias de Verificação

O Trusted Advisor compara as descobertas com as práticas recomendadas da AWS em cinco categorias:
1. **Otimização de Custos** 💸
2. **Desempenho** 🚀
3. **Segurança** 🔒
4. **Tolerância a Falhas** 🔄
5. **Limites de Serviço** 📏

Para as verificações em cada categoria, o Trusted Advisor oferece uma lista de ações recomendadas e recursos adicionais para saber mais sobre as práticas recomendadas da AWS.

### Benefícios do AWS Trusted Advisor

As orientações feitas pelo AWS Trusted Advisor podem beneficiar sua empresa em todos os estágios da implantação. Por exemplo, você pode usar o AWS Trusted Advisor para ajudar enquanto cria fluxos de trabalho e desenvolve novas aplicações. Ou você pode também usá-lo enquanto faz melhorias contínuas em aplicações e recursos.

### Painel do AWS Trusted Advisor 📊

Ao acessar o painel do Trusted Advisor no console de gerenciamento da AWS, você pode analisar as verificações concluídas para otimização de custos, desempenho, segurança, tolerância a falhas e limites de serviço.

#### Indicadores do Painel

Para cada categoria:
- **Marca de Verificação Verde** ✅: Indica o número de itens para os quais nenhum problema foi detectado.
- **Triângulo Laranja** ⚠️: Representa o número de investigações recomendadas.
- **Círculo Vermelho** ⭕: Representa o número de ações recomendadas.

### Exemplos de Uso do AWS Trusted Advisor

- **Otimização de Custos**: Identificar recursos subutilizados ou ociosos para reduzir despesas.
- **Desempenho**: Garantir que suas aplicações estão utilizando os recursos de forma eficiente.
- **Segurança**: Verificar se há vulnerabilidades ou configurações incorretas que possam comprometer a segurança.
- **Tolerância a Falhas**: Assegurar que suas aplicações podem se recuperar rapidamente de falhas.
- **Limites de Serviço**: Monitorar e gerenciar o uso de recursos para evitar ultrapassar os limites de serviço.

Ao utilizar o AWS Trusted Advisor, você pode garantir que seu ambiente AWS esteja configurado de acordo com as melhores práticas, otimizando custos, melhorando o desempenho, aumentando a segurança e garantindo a resiliência de suas aplicações.

# Nível Gratuito da AWS

Com o nível gratuito da AWS, você pode começar a usar determinados serviços sem custos durante o período especificado. Existem três tipos de ofertas disponíveis:

1. **Sempre Gratuito** 🆓
2. **12 Meses Gratuitos** 🕛
3. **Versões de Teste** 🧪

# Calculadora de Preços da AWS

A Calculadora de Preços da AWS permite explorar os serviços da AWS e gerar estimativas de custo para seus casos de uso. Com ela, você pode:

- Organizar suas estimativas por grupos, refletindo a organização de sua empresa. 📊
- Salvar e compartilhar estimativas por meio de links. 🔗

# Painel de Cobrança

Use o Painel de Faturamento e Gerenciamento de Custos da AWS para:

- Pagar sua fatura da AWS 💳
- Monitorar seu uso 📈
- Analisar e controlar seus custos 💰

Compare o saldo atual do mês acumulado com o mês anterior e obtenha uma previsão do próximo mês com base no uso atual.

- Visualize os gastos do mês acumulado por serviço. 📅
- Visualize o uso do nível gratuito por serviço. 📊
- Acesse o Cost Explorer e crie orçamentos. 📈
- Adquira e gerencie o Savings Plans. 💼
- Publique relatórios de uso e custo da AWS. 📝

# Cobrança Consolidada

Em um módulo anterior, você aprendeu sobre o AWS Organizations, um serviço que permite gerenciar múltiplas contas AWS em um local central. O AWS Organizations também oferece a opção de cobrança consolidada.

O recurso de cobrança consolidada do AWS Organizations permite que você receba uma única fatura para todas as contas AWS na sua organização. Ao consolidar, você pode rastrear facilmente os custos combinados de todas as contas vinculadas em sua organização. O número máximo de contas-padrão permitido para uma organização é quatro, mas você pode entrar em contato com o AWS Support para aumentar sua cota, se necessário.

Na sua fatura mensal, você pode ver os encargos discriminados incorridos por cada conta. Isso permite que você tenha maior transparência nas contas da sua organização, mantendo a conveniência de receber uma única fatura mensal.

Outro benefício da cobrança consolidada é a capacidade de compartilhar preços de desconto por volume, Savings Plans e instâncias reservadas nas contas da sua organização. Por exemplo, uma conta pode não ter uso mensal suficiente para se qualificar para preços com desconto. No entanto, quando várias contas são combinadas, o uso agregado pode resultar em um benefício que se aplica a todas as contas na organização.

# AWS Budgets

No AWS Budgets, você pode criar orçamentos para planejar o uso do serviço, os custos de serviço e as reservas de instâncias.

As informações do AWS Budgets são atualizadas três vezes por dia. Isso ajuda você a definir com precisão a proximidade entre seu uso e os valores orçados ou limites de nível gratuito da AWS.

No AWS Budgets, você também pode definir alertas personalizados para quando seu uso exceder (ou estiver prestes a exceder) o valor orçado.

# AWS Cost Explorer

O AWS Cost Explorer é uma ferramenta que permite visualizar, interpretar e gerenciar seus custos e uso da AWS ao longo do tempo.

O AWS Cost Explorer inclui um relatório-padrão dos custos e do uso dos cinco principais serviços da AWS de acúmulo de custos. Você pode aplicar filtros e grupos personalizados para analisar seus dados. Por exemplo, você pode exibir o uso de recursos no nível por hora.

# AWS Marketplace

O AWS Marketplace é um catálogo digital com milhares de ofertas de software de provedores independentes de software. Você pode usar o AWS Marketplace para encontrar, testar e comprar software que pode ser executado na AWS.

O AWS Marketplace oferece produtos em várias categorias, como Software de infraestrutura, DevOps, Produtos de dados, Serviços profissionais, Aplicações de negócios, Machine Learning, Indústrias e Internet das Coisas (IoT). 🛒

Aqui está o conteúdo solicitado em formato Markdown, incluindo as seis perspectivas fundamentais do Cloud Adoption Framework (AWS CAF), com emojis:

# Migracao e inovacao na nuvem

## Seis Perspectivas Fundamentais do Cloud Adoption Framework

No nível mais alto, o AWS Cloud Adoption Framework (AWS CAF) organiza orientações em seis áreas de foco chamadas perspectivas. Cada perspectiva aborda responsabilidades distintas. O processo de planejamento ajuda as pessoas certas em toda a organização a se prepararem para as mudanças futuras.

Em geral, as perspectivas de negócio, pessoas e governança se concentram nos recursos comerciais, enquanto as perspectivas de plataforma, segurança e operações se concentram em capacidades técnicas.

Para saber mais sobre o AWS CAF, expanda cada uma das seis categorias a seguir.

## Perspectiva de Negócio 📈
Foca em garantir que a adoção da nuvem esteja alinhada com os objetivos de negócios da organização. Envolve identificar métricas de sucesso, elaborar casos de negócios e criar um roteiro de adoção.

## Perspectiva de Pessoas 👥
Foca em preparar a organização para a mudança na cultura e nas competências necessárias para adotar a nuvem. Inclui a gestão de mudanças organizacionais, o desenvolvimento de habilidades e a comunicação eficaz.

## Perspectiva de Governança 📜
Foca em alinhar a estratégia de TI e as operações com os objetivos de negócios e garantir que a organização se mantenha em conformidade com os regulamentos e políticas. Envolve a criação de políticas, gerenciamento de riscos e controle financeiro.

## Perspectiva de Plataforma 🖥️
Foca na construção de uma base robusta de TI na nuvem. Envolve o planejamento de infraestrutura, a seleção de tecnologias e a arquitetura de soluções.

## Perspectiva de Segurança 🔒
Foca em garantir que a organização mantenha uma postura de segurança forte na nuvem. Inclui a implementação de controles de segurança, a proteção de dados e a gestão de identidade e acesso.

## Perspectiva de Operações ⚙️
Foca em manter a eficiência operacional e a continuidade dos negócios na nuvem. Envolve a gestão de operações diárias, a monitorização de desempenho e a otimização de processos.

Cada perspectiva é essencial para um planejamento bem-sucedido e uma transição tranquila para a nuvem, ajudando a garantir que todas as áreas da organização estejam preparadas para as mudanças que a adoção da nuvem traz.

# Seis Estratégias de Migração

Ao migrar aplicações para a nuvem, seis das estratégias de migração mais comuns que você pode implementar são:

1. **Redefinir Hospedagem** 🏠
2. **Redefinir Plataforma** 🔄
3. **Refatorar/Redefinir Arquitetura** 🛠️
4. **Recomprar** 🛒
5. **Reter** ⏳
6. **Retirar** ❌

Para saber mais sobre estratégias de migração, expanda cada uma das seis categorias a seguir.

## Redefinir Hospedagem 🏠
Mover aplicações do ambiente atual para a nuvem sem alterações significativas. Também conhecido como "lift and shift".

## Redefinir Plataforma 🔄
Fazer otimizações mínimas para aproveitar melhor os serviços em nuvem. Também conhecido como "lift, tinker, and shift".

## Refatorar/Redefinir Arquitetura 🛠️
Reimagine e reescreva aplicações para tirar total proveito dos serviços em nuvem.

## Recomprar 🛒
Substituir aplicações antigas por soluções SaaS (Software as a Service).

## Reter ⏳
Manter algumas aplicações no ambiente atual, postergando a migração.

## Retirar ❌
Desativar aplicações que não são mais necessárias ou viáveis.

Aqui está o conteúdo sobre os membros da AWS Snow Family em formato Markdown, com emojis:

# Membros da AWS Snow Family 🚚❄️

A AWS Snow Family é uma coleção de dispositivos físicos para transporte físico de até exabytes de dados para dentro e para fora da AWS.

A AWS Snow Family consiste nos seguintes serviços:

1. **AWS Snowcone** 🍦
2. **AWS Snowball** 📦
3. **AWS Snowmobile** 🚛

Esses dispositivos oferecem diferentes pontos de capacidade e a maioria inclui recursos de computação integrados. A AWS é a proprietária e responsável pelo gerenciamento da Snow Family, que integra recursos de segurança, monitoramento, gerenciamento de armazenamento e computação da AWS.

Aqui está o conteúdo sobre como inovar com os serviços da AWS em formato Markdown, com emojis:

# Inove com os serviços da AWS 🚀

Ao examinar como usar os serviços da AWS, é importante focar nos resultados desejados. Você fica devidamente preparado para impulsionar a inovação na nuvem se conseguir articular claramente as seguintes condições:

- **O estado atual** 📍
- **O estado desejado** 🎯
- **Os problemas que você está tentando resolver** ❓

Considere alguns dos caminhos que poderá explorar no futuro, enquanto continuar em sua jornada para a nuvem.

## Aplicações sem servidor ⚙️
## Machine learning 🤖
## Inteligência artificial 🧠