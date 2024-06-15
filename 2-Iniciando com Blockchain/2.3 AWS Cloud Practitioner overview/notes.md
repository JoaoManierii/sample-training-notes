# 📘 AWS Technical Essentials

*** 
# Module 1: Introduction to AWS

## 🌩️ Modelos de Implantação em Computação em Nuvem

A computação em nuvem oferece aos desenvolvedores e departamentos de TI a capacidade de focar no que realmente importa, evitando trabalhos como aquisição, manutenção e planejamento de capacidade. À medida que a computação em nuvem se popularizou, várias estratégias de implantação surgiram para ajudar a atender às necessidades específicas de diferentes usuários. Cada tipo de método de implantação oferece diferentes níveis de controle, flexibilidade e gerenciamento. Compreender as diferenças entre essas estratégias de implantação pode ajudar a decidir qual conjunto de serviços é mais adequado para suas necessidades.

### 🏢 On-premises

Antes da nuvem, empresas e organizações hospedavam e mantinham hardware como computação, armazenamento e equipamentos de rede em seus próprios data centers. Eles frequentemente alocavam departamentos inteiros de infraestrutura para cuidar de seus data centers, resultando em operações custosas que tornavam algumas cargas de trabalho e experimentações impossíveis.

À medida que o uso da internet se tornou mais difundido, a demanda por equipamentos de computação, armazenamento e rede aumentou. Para algumas empresas e organizações, o custo de manter uma grande presença física era insustentável. Para resolver esse problema, a computação em nuvem surgiu.

### ☁️ Nuvem

A computação em nuvem é a entrega sob demanda de recursos de TI pela internet, com preços principalmente baseados no uso. Com a computação em nuvem, as empresas não precisam gerenciar e manter seu próprio hardware e data centers. Em vez disso, empresas como a Amazon Web Services (AWS) possuem e mantêm data centers e fornecem tecnologias e serviços de data center virtual para empresas e usuários pela internet.

### 🔀 Híbrido

Uma terceira opção é a implantação híbrida. Esse tipo de implantação é uma maneira de conectar infraestrutura e aplicativos entre recursos baseados na nuvem e recursos existentes que não estão localizados na nuvem. O método mais comum de implantação híbrida entre a nuvem e a infraestrutura on-premises existente conecta recursos de nuvem a sistemas internos para estender e expandir a infraestrutura de uma organização para a nuvem.

## 💡 Seis Vantagens da Computação em Nuvem:

1. **Pagamento conforme o uso:** Pague apenas pelo que você usa.
2. **Benefício de economias de escala massivas:** Aproveite a escala massiva de grandes provedores de nuvem.
3. **Pare de adivinhar a capacidade:** Escale conforme a necessidade, sem precisar prever a capacidade.
4. **Aumente a velocidade e agilidade:** Implemente rapidamente novos recursos e aplicativos.
5. **Realize economias de custo:** Reduza custos operacionais.
6. **Vá global em minutos:** Expanda seus serviços globalmente em pouco tempo.

# 🌍 Infraestrutura Global da AWS

A infraestrutura, como data centers e conectividade de rede, ainda existe como a base de cada aplicativo em nuvem. Na AWS, essa infraestrutura física compõe a Infraestrutura Global da AWS, na forma de Regiões e Zonas de Disponibilidade.

## 🗺️ Regiões

As regiões são localizações geográficas em todo o mundo onde a AWS hospeda seus data centers. As Regiões da AWS são nomeadas com base na localização onde residem. Por exemplo, nos Estados Unidos, a Região na Virgínia do Norte é chamada de Região da Virgínia do Norte, e a Região em Oregon é chamada de Região de Oregon. A AWS possui Regiões na Ásia-Pacífico, China, Europa, Oriente Médio, América do Norte e América do Sul. Continuamos a expandir para atender às necessidades dos nossos clientes.

### ✅ Escolhendo a Região AWS Certa

As Regiões da AWS são independentes umas das outras. Sem o consentimento e autorização explícitos do cliente, os dados não são replicados de uma Região para outra. Ao decidir em qual Região da AWS hospedar seus aplicativos e cargas de trabalho, considere quatro aspectos principais: latência, preço, disponibilidade de serviços e conformidade.

- **LATÊNCIA**
- **PREÇO**
- **DISPONIBILIDADE DE SERVIÇOS**
- **CONFORMIDADE DE DADOS**

## 📍 Zonas de Disponibilidade

Dentro de cada Região há um cluster de Zonas de Disponibilidade. Uma Zona de Disponibilidade consiste em um ou mais data centers com energia, rede e conectividade redundantes. Esses data centers operam em instalações discretas em locais não divulgados. Eles são conectados usando links redundantes de alta velocidade e baixa latência.

### 🔄 Mantendo a Resiliência

Para manter seu aplicativo disponível, você deve manter alta disponibilidade e resiliência. Uma prática recomendada bem conhecida para arquitetura em nuvem é usar serviços gerenciados com escopo de Região. Esses serviços vêm com disponibilidade e resiliência incorporadas. Quando isso não for possível, certifique-se de que sua carga de trabalho esteja replicada em várias Zonas de Disponibilidade. No mínimo, você deve usar duas Zonas de Disponibilidade. Dessa forma, se uma Zona de Disponibilidade falhar, seu aplicativo terá infraestrutura funcionando em uma segunda Zona de Disponibilidade para assumir o tráfego.

## 🌐 Locais de Borda

Os locais de borda são locais globais onde o conteúdo é armazenado em cache. Por exemplo, se o seu conteúdo de mídia está em Londres e você deseja compartilhar arquivos de vídeo com seus clientes em Sydney, você pode ter os vídeos armazenados em cache em um local de borda mais próximo de Sydney. Isso tornaria possível para seus clientes acessarem os vídeos em cache mais rapidamente do que acessá-los de Londres. Atualmente, existem mais de 400 locais de borda globalmente.

# 🌐 Interagindo com a AWS

Toda ação que você realiza na AWS é uma chamada de API que é autenticada e autorizada. Na AWS, você pode fazer chamadas de API para serviços e recursos através do AWS Management Console, AWS Command Line Interface (AWS CLI) ou AWS SDKs.

## 🖥️ AWS Management Console

Uma maneira de gerenciar recursos na nuvem é através do console baseado na web, onde você faz login e escolhe o serviço desejado. Essa pode ser a maneira mais fácil de criar e gerenciar recursos quando você começa a trabalhar com a nuvem.

## 📝 AWS CLI

Considere o cenário em que você executa muitos servidores na AWS para o frontend do seu aplicativo. Você quer executar um relatório para coletar dados de todos os servidores. Você precisa fazer isso programaticamente todos os dias porque os detalhes do servidor podem mudar. Em vez de fazer login manualmente no console e depois copiar e colar informações, você pode agendar um script do AWS CLI com uma chamada de API para puxar esses dados para você.

A AWS CLI é uma ferramenta unificada que você pode usar para gerenciar serviços da AWS. Você pode baixar e configurar uma ferramenta que pode usar para controlar vários serviços da AWS a partir da linha de comando e automatizá-los com scripts. A AWS CLI é de código aberto e instaladores estão disponíveis para Windows, Linux e macOS.

## 💻 AWS SDKs

As chamadas de API para a AWS também podem ser realizadas executando código com linguagens de programação. Você pode fazer isso usando os AWS SDKs. Os SDKs são de código aberto e mantidos pela AWS para as linguagens de programação mais populares, como C++, Go, Java, JavaScript, .NET, Node.js, PHP, Python, Ruby, Rust e Swift.

Os desenvolvedores costumam usar os AWS SDKs para integrar o código-fonte de suas aplicações com os serviços da AWS. Por exemplo, considere uma aplicação com um frontend que roda em Python. Toda vez que a aplicação recebe uma foto, ela faz o upload do arquivo para um serviço de armazenamento. Essa ação pode ser realizada no código-fonte usando o AWS SDK para Python (Boto3).

# 🔒 Segurança e o Modelo de Responsabilidade Compartilhada da AWS

Ao trabalhar com a AWS Cloud, a gestão de segurança e conformidade é uma responsabilidade compartilhada entre a AWS e você. Para ilustrar essa responsabilidade compartilhada, a AWS criou o modelo de responsabilidade compartilhada. A distinção de responsabilidade é comumente referida como segurança da nuvem em comparação com segurança na nuvem.

## 🛡️ Responsabilidade da AWS

A AWS é responsável pela segurança da nuvem. Isso significa que a AWS protege e assegura a infraestrutura que executa os serviços oferecidos na AWS Cloud. A AWS é responsável pelo seguinte:

- Proteger e assegurar as Regiões da AWS, Zonas de Disponibilidade e data centers, até a segurança física dos edifícios.
- Gerenciar os componentes de hardware, software e rede que executam os serviços da AWS, como os servidores físicos, sistemas operacionais host, camadas de virtualização e componentes de rede da AWS.

O nível de responsabilidade da AWS depende do serviço. A AWS classifica os serviços em duas categorias. A tabela a seguir fornece informações sobre cada uma, incluindo a responsabilidade da AWS.

## 👤 Responsabilidade do Cliente

Os clientes são responsáveis pela segurança na nuvem. Ao usar qualquer serviço da AWS, o cliente é responsável por configurar adequadamente o serviço e suas aplicações, além de garantir que seus dados estejam seguros.

O nível de responsabilidade dos clientes depende do serviço da AWS. Alguns serviços exigem que o cliente realize todas as tarefas necessárias de configuração e gerenciamento de segurança. Outros serviços mais abstratos exigem que os clientes apenas gerenciem os dados e controlem o acesso aos seus recursos. Usando as duas categorias de serviços da AWS, os clientes podem determinar seu nível de responsabilidade para cada serviço da AWS que utilizam.

# 🔐 AWS Identity and Access Management (IAM)

## 🔑 Autenticação e Autorização

Quando você configura o acesso a qualquer conta, dois termos aparecem frequentemente: autenticação e autorização. Embora esses termos possam parecer básicos, é fundamental entendê-los completamente para configurar corretamente a gestão de acesso na AWS.

### 🛡️ Autenticação

Quando você cria sua conta AWS, utiliza a combinação de um endereço de e-mail e uma senha para verificar sua identidade. Se um usuário digitar o endereço de e-mail e a senha corretos, o sistema assume que o usuário está autorizado a entrar e concede acesso. Este é o processo de autenticação.

A autenticação garante que o usuário é quem diz ser. Nomes de usuário e senhas são os tipos mais comuns de autenticação. Mas você também pode trabalhar com outras formas, como autenticação baseada em tokens ou dados biométricos, como uma impressão digital. A autenticação simplesmente responde à pergunta: "Você é quem diz ser?"

### 🛠️ Autorização

Depois de autenticado e dentro da sua conta AWS, você pode se perguntar quais ações pode realizar. É aqui que entra a autorização. A autorização é o processo de dar permissão aos usuários para acessar recursos e serviços da AWS. A autorização determina se um usuário pode realizar determinadas ações, como ler, editar, excluir ou criar recursos. A autorização responde à pergunta: "Quais ações você pode realizar?"

## ❓ O que é o IAM?

AWS Identity and Access Management (IAM) é um serviço da AWS que ajuda a gerenciar o acesso à sua conta e aos recursos da AWS. Ele também fornece uma visão centralizada de quem e o que está autorizado dentro da sua conta AWS (autenticação) e quem e o que tem permissões para usar e trabalhar com seus recursos da AWS (autorização).

Com o IAM, você pode compartilhar o acesso a uma conta e recursos da AWS sem compartilhar suas chaves de acesso ou senha. Você também pode fornecer acesso granular para aqueles que trabalham na sua conta, garantindo que pessoas e serviços tenham permissões apenas para os recursos que precisam. Por exemplo, para fornecer a um usuário da sua conta AWS acesso somente leitura a um serviço específico da AWS, você pode selecionar granularmente quais ações e recursos nesse serviço ele pode acessar.

### 👤 Usuário IAM

Um usuário IAM representa uma pessoa ou serviço que interage com a AWS. Você define o usuário na sua conta AWS. Qualquer atividade feita por esse usuário é faturada à sua conta. Quando você cria um usuário, ele pode fazer login para acessar os recursos da AWS dentro da sua conta.

Você também pode adicionar mais usuários à sua conta conforme necessário. Por exemplo, para o seu aplicativo de fotos de gatos, você poderia criar usuários individuais na sua conta AWS que correspondem às pessoas que estão trabalhando no seu aplicativo. Cada pessoa deve ter suas próprias credenciais de login para evitar o compartilhamento de credenciais entre usuários.

### 👥 Grupos IAM

Um grupo IAM é uma coleção de usuários. Todos os usuários do grupo herdam as permissões atribuídas ao grupo. Isso torna possível dar permissões a vários usuários de uma vez. É uma maneira mais conveniente e escalável de gerenciar permissões para usuários na sua conta AWS. Por isso, o uso de grupos IAM é uma prática recomendada.

Se você tem um aplicativo que está tentando construir e possui vários usuários em uma conta trabalhando no aplicativo, pode organizar os usuários por função de trabalho. Por exemplo, você pode organizar seus grupos IAM por desenvolvedores, segurança e administradores. Então, você poderia colocar todos os seus usuários IAM em seus respectivos grupos.

### 📜 Políticas IAM

Para gerenciar o acesso e fornecer permissões a serviços e recursos da AWS, você cria políticas IAM e as anexa a uma identidade IAM. Sempre que uma identidade IAM faz uma solicitação, a AWS avalia as políticas associadas a ela. Por exemplo, se você tem um desenvolvedor dentro do grupo de desenvolvedores que faz uma solicitação a um serviço da AWS, a AWS avalia qualquer política anexada ao grupo de desenvolvedores e qualquer política anexada ao usuário desenvolvedor para determinar se a solicitação deve ser permitida ou negada.

### 🏅 Melhores Práticas de IAM

Ao longo desta lição, você aprendeu sobre algumas das melhores práticas de IAM. Esta seção resume algumas das mais importantes práticas recomendadas de IAM que você deve conhecer antes de construir soluções na AWS.

- Bloqueie o usuário root da AWS
- Siga o princípio do menor privilégio
- Use o IAM de forma adequada
- Use funções IAM sempre que possível
- Considere usar um provedor de identidade
- Revise e remova regularmente usuários, funções e outras credenciais não utilizadas
***

# Module 2: AWS Compute

# 🖥️ Servidores

O primeiro bloco de construção que você precisa para hospedar uma aplicação é um servidor. Servidores geralmente lidam com solicitações HTTP e enviam respostas para os clientes seguindo o modelo cliente-servidor. Embora qualquer comunicação baseada em API também se enquadre neste modelo.

## 👫 Cliente e Servidor

Um cliente é uma pessoa ou computador que envia uma solicitação. Um servidor que lida com as solicitações é um computador, ou coleção de computadores, conectados à internet, servindo websites para usuários da internet. Servidores alimentam sua aplicação fornecendo CPU, memória e capacidade de rede para processar as solicitações dos usuários e transformá-las em respostas. Para contexto, servidores HTTP comuns incluem os seguintes:

- Opções Windows, como Internet Information Services (IIS)
- Opções Linux, como Apache HTTP Server, Nginx e Apache Tomcat

Para executar um servidor HTTP na AWS, você deve encontrar um serviço que forneça poder de computação no AWS Management Console. Você pode ver a lista completa de serviços de computação da AWS ao fazer login no console.

## 🖱️ Escolhendo a Opção de Computação Correta

Se você é responsável por configurar servidores na AWS para executar sua infraestrutura, tem várias opções de computação. Primeiro, você precisa saber qual serviço de computação usar para cada caso de uso. Em um nível fundamental, três tipos de opções de computação estão disponíveis: máquinas virtuais (VMs), serviços de contêiner e computação serverless.

### 💻 Máquinas Virtuais

Se você tem conhecimento prévio de infraestrutura, uma máquina virtual será frequentemente a opção de computação mais fácil de entender. Isso porque uma máquina virtual emula um servidor físico e permite que você instale um servidor HTTP para executar suas aplicações, por exemplo. Para executar máquinas virtuais, você instala um hipervisor em uma máquina host. Em sua forma mais simples, um hipervisor é um software ou firmware que torna possível compartilhar recursos de hardware físico entre uma ou mais máquinas virtuais. O hipervisor provisiona os recursos para criar e executar suas VMs.

Na AWS, o Amazon Elastic Compute Cloud (Amazon EC2) é um serviço web que fornece capacidade de computação segura e redimensionável na nuvem. Você pode provisionar servidores virtuais chamados instâncias EC2. Nos bastidores, a AWS opera e gerencia as máquinas host e a camada do hipervisor. A AWS também instala o sistema operacional da máquina virtual, chamado sistema operacional convidado.

Sob a superfície, alguns serviços de computação da AWS usam Amazon EC2 ou conceitos de virtualização. Você deve entender este serviço antes de avançar para serviços de contêiner e computação serverless.


# 🌐 Começando com o Amazon EC2

O Amazon EC2 é um serviço web que fornece capacidade de computação segura e redimensionável na nuvem. Com este serviço, você pode provisionar servidores virtuais chamados instâncias EC2.

## 🔧 O que você pode fazer com o Amazon EC2

- 🚀 Provisionar e lançar uma ou mais instâncias EC2 em minutos.
- 🛑 Parar ou desligar instâncias EC2 quando terminar de executar uma carga de trabalho.
- 💰 Pagar por hora ou segundo para cada tipo de instância (mínimo de 60 segundos).
- 💻 Você pode criar e gerenciar instâncias EC2 através do AWS Management Console, AWS CLI, AWS SDKs, ferramentas de automação e serviços de orquestração de infraestrutura.

## 🖥️ Amazon Machine Image (AMI)

Ao lançar uma instância EC2, a primeira configuração que você define é qual sistema operacional você deseja, selecionando uma Amazon Machine Image (AMI).

No mundo da infraestrutura tradicional, iniciar um servidor consiste em instalar um sistema operacional a partir de discos de instalação, drives ou assistentes pela rede. Na Nuvem AWS, a instalação do sistema operacional não é sua responsabilidade. Em vez disso, está embutida na AMI que você escolhe.

Uma AMI inclui o sistema operacional, mapeamento de armazenamento, tipo de arquitetura, permissões de lançamento e qualquer aplicativo de software pré-instalado adicional.

## 🔄 Relação entre AMIs e Instâncias EC2

As instâncias EC2 são instâncias ativas (ou versões) do que é definido em uma AMI, assim como um bolo é uma instância ativa de uma receita de bolo. Se você está familiarizado com o desenvolvimento de software, também pode ver esse tipo de relação entre uma classe e um objeto. Neste caso, a AMI é como você modela e define sua instância. A instância EC2 é a entidade com a qual você interage, onde pode instalar seu servidor web e servir seu conteúdo aos usuários.

Quando você lança uma nova instância, a AWS aloca uma máquina virtual que roda em um hipervisor. Em seguida, a AMI que você selecionou é copiada para o volume do dispositivo raiz, que contém a imagem usada para inicializar o volume. No final, você obtém um servidor ao qual pode se conectar e instalar pacotes e software adicional. No exemplo, você instala um servidor web junto com o código-fonte devidamente configurado de sua aplicação de diretório de funcionários.

Uma vantagem de usar AMIs é que elas são reutilizáveis. Você pode escolher uma AMI baseada em Linux e configurar o servidor HTTP, pacotes de aplicativos e software adicional necessários para executar sua aplicação. Se você quiser criar outra instância EC2 com as mesmas configurações, poderia criar e configurar uma nova instância EC2 para corresponder à primeira instância. Ou você poderia criar uma AMI a partir de sua instância em execução e usar a AMI para iniciar uma nova instância. Dessa forma, sua nova instância teria as mesmas configurações da sua instância atual, pois as configurações definidas nas AMIs são as mesmas.

## ⚙️ Configurando EC2

Agora que você sabe como selecionar um sistema operacional para sua instância EC2, está pronto para escolher outras configurações para criar sua instância EC2, como o tipo de instância, rede e armazenamento.

Para uma aplicação como o diretório de funcionários, você precisa de instâncias com capacidade suficiente para processar solicitações de clientes. O dimensionamento de suas instâncias dependerá tanto das demandas de sua aplicação quanto do tamanho previsto de sua base de usuários.

Prever a capacidade do servidor para uma aplicação local requer decisões difíceis envolvendo despesas de capital significativas antecipadas. Em contraste, mudanças na alocação de seus serviços baseados na nuvem podem ser feitas com uma simples chamada de API. Por causa do modelo de pagamento conforme o uso da AWS, você pode ajustar a capacidade de sua infraestrutura à demanda de sua aplicação, em vez do contrário.

# 🚀 Ciclo de Vida de uma Instância EC2

Uma instância EC2 transita entre diferentes estados desde o momento em que você a cria até sua terminação. A transição entre diferentes estados de instância EC2 ocorre desde o lançamento até a terminação.

## ⚙️ Estados da Instância EC2

- **⏳ Pending (Pendente)**: Quando você lança uma instância, ela entra no estado pending. Nesta fase, a cobrança não começou. A instância está se preparando para entrar no estado running. Durante o estado pending, a AWS executa todas as ações necessárias para configurar uma instância, como copiar o conteúdo da AMI para o dispositivo raiz e alocar os componentes de rede necessários.
  
- **🏃‍♂️ Running (Em Execução)**: Quando sua instância está running, ela está pronta para uso, e a cobrança começa. Neste estágio, você pode executar outras ações na instância, como reboot, terminate, stop e stop-hibernate.

- **🔄 Reboot (Reiniciar)**: Reiniciar uma instância é diferente de executar uma ação stop e depois start. Reiniciar uma instância é equivalente a reiniciar um sistema operacional. A instância mantém seu nome DNS público (IPv4) e os endereços IPv4 privado e público. Um endereço IPv6 (se aplicável) permanece no mesmo host e mantém seu endereço IP público e privado, além de qualquer dado nos volumes de armazenamento da instância.

- **🛑 Stop (Parar)**: Quando você para sua instância, ela entra no estado stopping e depois no estado stopped. Isso é similar a quando você desliga seu laptop. Você pode parar e iniciar uma instância se ela tiver um volume Amazon Elastic Block Store (Amazon EBS) como dispositivo raiz. Ao parar e iniciar uma instância, ela pode ser colocada em um novo servidor físico subjacente. Sua instância mantém seus endereços IPv4 privados e, se tiver um endereço IPv6, mantém o endereço IPv6.

- **⏸️ Stop-Hibernate (Parar-Hibernar)**: Quando você coloca a instância em stop-hibernate, a instância entra no estado stopped, mas salva as últimas informações ou conteúdo na memória, para que o processo de inicialização seja mais rápido.

- **❌ Terminate (Terminar)**: Quando você termina uma instância, os armazenamentos da instância são apagados e você perde o endereço IP público e privado da máquina. A terminação de uma instância significa que você não pode mais acessar a máquina. Assim que o status de uma instância muda para shutting down ou terminated, você para de incorrer em cobranças por essa instância.

## 🔍 Diferença entre Stop e Stop-Hibernate

- **Stop (Parar)**: Quando você para uma instância, ela entra no estado stopping até alcançar o estado stopped. A AWS não cobra pelo uso ou pelas taxas de transferência de dados para sua instância após você pará-la. No entanto, o armazenamento para quaisquer volumes Amazon EBS ainda é cobrado. Enquanto sua instância estiver no estado stopped, você pode modificar alguns atributos, como o tipo de instância. Quando você para sua instância, os dados da memória da instância (RAM) são perdidos.

- **Stop-Hibernate (Parar-Hibernar)**: Quando você para-hiberna uma instância, o Amazon EC2 sinaliza o sistema operacional para realizar a hibernação (suspensão para disco), o que salva os conteúdos da memória da instância (RAM) no volume raiz EBS. Você pode hibernar uma instância apenas se a hibernação estiver ativada e a instância atender aos pré-requisitos de hibernação.

## 💰 Preços

Uma das maneiras de reduzir custos com o Amazon EC2 é escolher a opção de preços certa para a forma como suas aplicações funcionam. A AWS oferece uma variedade de opções de preços para atender a diferentes cenários de carga de trabalho.

- **On-Demand Instances**: Pague pela capacidade de computação por hora ou por segundo sem compromissos de longo prazo ou pagamentos antecipados. Ideal para cargas de trabalho com picos de demanda imprevisíveis.
  
- **Spot Instances**: Compre capacidade de computação não utilizada a preços significativamente mais baixos. Ideal para cargas de trabalho que são flexíveis quanto ao momento de execução e podem ser interrompidas.
  
- **Savings Plans**: Comprometa-se com uma quantidade específica de uso (medida em dólares por hora) para obter descontos significativos. Ideal para cargas de trabalho estáveis e previsíveis.
  
- **Reserved Instances**: Reserve capacidade para um período de um ou três anos com pagamento antecipado, parcial ou sem pagamento antecipado, para obter descontos significativos. Ideal para cargas de trabalho de longo prazo.
  
- **Dedicated Hosts**: Alugue um servidor físico completo dedicado ao seu uso. Ideal para cargas de trabalho que precisam de isolamento físico ou possuem requisitos específicos de licenciamento de servidor.

# 🐳 Serviços de Contêiner

A AWS oferece um amplo espectro de ofertas de computação que lhe dão a flexibilidade de escolher a ferramenta certa para o trabalho. Como mencionado anteriormente, as três principais categorias de computação são máquinas virtuais (VMs), contêineres e serverless. Não existe um serviço de computação único que atenda a todos, pois depende de suas necessidades específicas.

A chave é entender o que cada opção oferece. Assim, você pode construir uma arquitetura de nuvem adequada para seu caso de uso. Nesta seção, você aprenderá sobre contêineres e como executá-los.

Contêineres podem hospedar uma variedade de diferentes cargas de trabalho, incluindo aplicações web, migrações lift and shift, aplicações distribuídas e a otimização de ambientes de desenvolvimento, teste e produção.

## 📦 Contêineres

Embora frequentemente referidos como uma tecnologia nova, a ideia dos contêineres começou na década de 1970 com certos kernels UNIX que tinham a capacidade de separar seus processos por meio de isolamento. Na época, isso era configurado manualmente, tornando as operações complexas.

Com a evolução da comunidade de software de código aberto, os contêineres evoluíram. Hoje, os contêineres são usados como uma solução para problemas de computação tradicional, incluindo a questão de fazer o software rodar de forma confiável quando é movido de um ambiente de computação para outro.

Um contêiner é uma unidade padronizada que empacota seu código e suas dependências. Este pacote é projetado para rodar de forma confiável em qualquer plataforma, pois o contêiner cria seu próprio ambiente independente. Com contêineres, as cargas de trabalho podem ser transportadas de um lugar para outro, como do desenvolvimento para a produção ou de ambientes on-premises para a nuvem.

Um exemplo de plataforma de conteinerização é o Docker. O Docker é um runtime de contêiner popular que simplifica a gestão de toda a stack do sistema operacional necessária para o isolamento do contêiner, incluindo rede e armazenamento. O Docker ajuda os clientes a criar, empacotar, implantar e rodar contêineres.

## 🆚 Diferença entre VMs e Contêineres

Contêineres compartilham o mesmo sistema operacional e kernel que o host em que existem. Mas as máquinas virtuais contêm seu próprio sistema operacional. Cada máquina virtual deve manter uma cópia de um sistema operacional, o que resulta em um grau de recursos desperdiçados.

Um contêiner é mais leve. Contêineres são iniciados mais rapidamente, quase instantaneamente. Esta diferença no tempo de inicialização torna-se instrumental ao projetar aplicações que devem escalar rapidamente durante picos de I/O.

Contêineres podem fornecer velocidade, mas máquinas virtuais oferecem a força total de um sistema operacional e mais recursos, como instalação de pacotes, kernel dedicado e mais.

## 🛠️ Gerenciando Contêineres com Amazon ECS

O Amazon ECS é um serviço de orquestração de contêineres de ponta a ponta que ajuda você a criar novos contêineres. Com o Amazon ECS, seus contêineres são definidos em uma definição de tarefa (task definition) que você usa para rodar uma tarefa individual ou uma tarefa dentro de um serviço. Você tem a opção de rodar suas tarefas e serviços em uma infraestrutura serverless gerenciada por outro serviço AWS chamado AWS Fargate. Alternativamente, para mais controle sobre sua infraestrutura, você pode rodar suas tarefas e serviços em um cluster de instâncias EC2 que você gerencia.

Quando as instâncias de contêiner do Amazon ECS estão em execução, você pode realizar ações que incluem, mas não se limitam a:

- 🔄 Lançar e parar contêineres
- 📊 Obter o estado do cluster
- 📈 Escalar para cima e para baixo
- 📅 Programar o posicionamento dos contêineres pelo seu cluster
- 🛡️ Atribuir permissões
- ✔️ Atender aos requisitos de disponibilidade

Para preparar sua aplicação para rodar no Amazon ECS, você cria uma definição de tarefa. A definição de tarefa é um arquivo de texto, em formato JSON, que descreve um ou mais contêineres. Uma definição de tarefa é semelhante a um plano que descreve os recursos necessários para rodar um contêiner, como CPU, memória, portas, imagens, armazenamento e informações de rede.

## ⚙️ Usando Kubernetes com Amazon EKS

O Kubernetes é uma plataforma portátil, extensível e de código aberto para gerenciar cargas de trabalho e serviços conteinerizados. Ao reunir o desenvolvimento de software e operações por design, o Kubernetes criou um ecossistema de rápido crescimento que é muito popular e bem estabelecido no mercado.

Se você já usa Kubernetes, pode usar o Amazon EKS para orquestrar as cargas de trabalho na nuvem AWS. O Amazon EKS é um serviço gerenciado que você pode usar para rodar Kubernetes na AWS sem precisar instalar, operar e manter seu próprio plano de controle do Kubernetes ou nós. O Amazon EKS é conceitualmente semelhante ao Amazon ECS, mas com as seguintes diferenças:

- No Amazon ECS, a máquina que roda os contêineres é uma instância EC2 que tem um agente ECS instalado e configurado para rodar e gerenciar seus contêineres. Esta instância é chamada de instância de contêiner. No Amazon EKS, a máquina que roda os contêineres é chamada de nó de trabalho ou nó Kubernetes.

- Um contêiner ECS é chamado de tarefa (task). Um contêiner EKS é chamado de pod.

- O Amazon ECS roda na tecnologia nativa da AWS. O Amazon EKS roda no Kubernetes.

Se você tem contêineres rodando no Kubernetes e quer uma solução de orquestração avançada que possa fornecer simplicidade, alta disponibilidade e controle detalhado sobre sua infraestrutura, o Amazon EKS pode ser a ferramenta ideal para você.

# 🌐 Introdução ao Serverless

## Removendo o Trabalho Pesado Não Diferenciado

Quando você executa seu código no Amazon EC2, a AWS é responsável pelo hardware físico. No entanto, você ainda é responsável pelos controles lógicos, como o sistema operacional convidado, segurança e correções, rede, segurança e escalabilidade.

Como abordado na lição anterior sobre Serviços de Contêineres, você pode optar por ter mais controle executando e gerenciando seus contêineres no Amazon ECS e Amazon EKS. Ao fazer isso, a AWS ainda é responsável por uma parte maior da gestão dos contêineres, como a implantação de contêineres em instâncias EC2 e a gestão do cluster de contêineres. No entanto, ao executar Amazon ECS e Amazon EKS no Amazon EC2, você ainda é responsável por manter as instâncias EC2 subjacentes.

Existe uma maneira de remover parte desse trabalho pesado não diferenciado? Sim! Se você deseja implantar suas cargas de trabalho e aplicações sem ter que gerenciar nenhuma instância EC2, você pode fazer isso na AWS com computação serverless.

## 🚀 Vá para o Serverless

Com a computação serverless, você pode dedicar seu tempo às coisas que diferenciam sua aplicação, em vez de gastar tempo garantindo disponibilidade, escalabilidade e gerenciamento de servidores. Toda definição de serverless menciona os seguintes quatro aspectos:

1. 🚫 Não há servidores para provisionar ou gerenciar.
2. 📈 Escala conforme o uso.
3. 💸 Você nunca paga por recursos ociosos.
4. ⚙️ Disponibilidade e tolerância a falhas estão embutidas.

A AWS desenvolveu serviços serverless para todas as três camadas da stack de aplicação. Vamos cobrir dois serviços, AWS Fargate e AWS Lambda, nas lições seguintes.

## 📦 AWS Fargate

### O Que É?


O Fargate abstrai a instância EC2 para que você não precise gerenciar a infraestrutura de computação subjacente. No entanto, com o Fargate, você pode usar todos os mesmos conceitos do Amazon ECS, APIs e integrações da AWS. Ele se integra nativamente com IAM e Amazon Virtual Private Cloud (Amazon VPC). Com a integração nativa com Amazon VPC, você pode lançar contêineres Fargate dentro da sua rede e controlar a conectividade com suas aplicações.
O AWS Fargate é um mecanismo de computação serverless construído especificamente para contêineres. O AWS Fargate escala e gerencia a infraestrutura, permitindo que os desenvolvedores se concentrem no que fazem de melhor: desenvolvimento de aplicações. Ele consegue isso alocando a quantidade certa de computação, eliminando a necessidade de escolher e gerenciar instâncias EC2, capacidade de cluster e escalabilidade. O Fargate suporta tanto a arquitetura do Amazon ECS quanto a do Amazon EKS, proporcionando isolamento de carga de trabalho e segurança aprimorada por design.

### Principais Benefícios

- **Gerenciamento Simplificado**: Fargate gerencia automaticamente a infraestrutura subjacente, permitindo que você se concentre apenas na construção e execução de suas aplicações.
- **Escalabilidade**: Dimensiona automaticamente seus aplicativos com base na demanda, sem a necessidade de intervenção manual.
- **Pagamento por Uso**: Você paga apenas pelos recursos que suas aplicações consomem, sem custos adicionais por recursos ociosos.

## 🧑‍💻 AWS Lambda

### O Que É?

O AWS Lambda é um serviço de computação serverless que permite executar código sem provisionar ou gerenciar servidores. Com o Lambda, você pode executar código para praticamente qualquer tipo de aplicação ou serviço de backend sem ter que gerenciar nada.

### Principais Benefícios

- **Execução Baseada em Eventos**: Lambda é ideal para cenários onde você precisa de uma execução baseada em eventos, como processamento de dados em tempo real ou resposta a alterações em um banco de dados.
- **Pagamento por Execução**: Você paga apenas pelo tempo de execução do seu código, medido em incrementos de 100 milissegundos.
- **Alta Disponibilidade**: Lambda gerencia automaticamente a tolerância a falhas e a replicação, garantindo alta disponibilidade.

### Cenários Comuns de Uso

- **Processamento de Dados**: Analisar dados em tempo real, processamento de streams e transformação de dados.
- **Automação de Tarefas**: Executar tarefas automatizadas em resposta a eventos específicos, como alterações em um banco de dados ou uploads de arquivos.
- **Desenvolvimento de APIs**: Construir e gerenciar APIs serverless que escalam automaticamente com a demanda.

## 🌟 Conclusão

Escolher entre VMs, contêineres e serverless depende das necessidades específicas da sua aplicação e da quantidade de controle que você deseja manter sobre sua infraestrutura. A computação serverless oferece uma maneira de eliminar a necessidade de gerenciar servidores, escalando automaticamente com a demanda e reduzindo os custos ao pagar apenas pelos recursos utilizados. Explore os serviços como AWS Fargate e AWS Lambda para construir aplicações modernas, escaláveis e eficientes na nuvem.

***
# Module 3: AWS Networking

# Networking definido

Networking é como você conecta computadores ao redor do mundo e permite que eles se comuniquem entre si. Neste curso, você já viu alguns exemplos de networking. Um deles é a Infraestrutura Global da AWS. A AWS construiu uma rede de recursos usando data centers, Zonas de Disponibilidade e Regiões.

## Conceitos básicos de Networking

Uma maneira de pensar em networking é pensar em enviar uma carta. Quando você envia uma carta, você fornece os seguintes três elementos:

- A carta, dentro do envelope
- O endereço do remetente na seção de "de"
- O endereço do destinatário na seção de "para"

Cada endereço deve conter informações específicas:

- Nome do remetente ou destinatário
- Rua
- Cidade
- Estado ou província
- Código postal
- País

Você precisa de todas as partes de um endereço para garantir que sua carta chegue ao seu destino. Sem o endereço correto, os trabalhadores postais não podem entregar corretamente a carta. No mundo digital, os computadores lidam com a entrega de mensagens de maneira semelhante. Isso é chamado de roteamento.

## Endereços IP

Para rotear corretamente suas mensagens para um local, você precisa de um endereço. Assim como cada casa tem um endereço de correspondência, cada computador tem um endereço IP. No entanto, em vez de usar a combinação de rua, cidade, estado, código postal e país, o endereço IP usa uma combinação de bits, 0s e 1s.

Aqui está um exemplo de um endereço de 32 bits no formato binário:

`11000000 10101000 00000001 00011110` é um endereço de 32 bits escrito no formato binário.

É chamado de 32 bits porque você tem 32 dígitos. Sinta-se à vontade para contar!

## Notação IPv4

Normalmente, você não vê um endereço IP em seu formato binário. Em vez disso, ele é convertido para o formato decimal e anotado como um endereço IPv4.

No seguinte diagrama, os 32 bits são agrupados em grupos de 8 bits, também chamados de octetos. Cada um desses grupos é convertido para o formato decimal separado por um ponto.

Um endereço IPv4 é escrito em dígitos decimais constituídos por quatro campos de oito bits separados por um ponto. Por exemplo, `192.168.1.30` é convertido de quatro grupos de oito bits.

No final, isso é chamado de um endereço IPv4. Isso é importante saber ao tentar se comunicar com um único computador. Mas lembre-se, você está trabalhando com uma rede. É aqui que entra o Roteamento Interdomínio Sem Classes (CIDR).

## Notação CIDR

`192.168.1.30` é um único endereço IP. Se você quiser expressar endereços IP entre o intervalo de `192.168.1.0` e `192.168.1.255`, como você pode fazer isso?

Uma maneira é usar a notação CIDR. A notação CIDR é uma forma comprimida de representar um intervalo de endereços IP. Especificar um intervalo determina quantos endereços IP estão disponíveis para você.

Aqui está a notação CIDR.

O número após a barra inclinada denota quantos bits em um endereço IP são fixos.

Começa com um endereço IP inicial e é separado por uma barra inclinada (o caractere /) seguido de um número. O número no final especifica quantos dos bits do endereço IP são fixos. Neste exemplo, os primeiros 24 bits do endereço IP são fixos. O resto (os últimos 8 bits) são flexíveis.

O último número '24' especifica que os primeiros 24 bits do endereço IP são fixos, e os últimos 8 bits são flexíveis. 32 bits no total subtraídos por 24 bits fixos deixam 8 bits flexíveis. Cada um desses bits flexíveis pode ser 0 ou 1, porque são binários. Isso significa que você tem duas escolhas para cada um dos 8 bits, fornecendo 256 endereços IP nesse intervalo de IP.

Quanto maior o número após a /, menor o número de endereços IP em sua rede. Por exemplo, um intervalo de `192.168.1.0/24` é menor que `192.168.1.0/16`.

Ao trabalhar com redes na AWS Cloud, você escolhe o tamanho da sua rede usando a notação CIDR. Na AWS, o menor intervalo de IP que você pode ter é /28, que fornece 16 endereços IP. O maior intervalo de IP que você pode ter é um /16, que fornece 65.536 endereços IP.

# Amazon VPC

Uma rede virtual privada (VPC) é uma rede isolada que você cria na AWS Cloud, similar a uma rede tradicional em um centro de dados. Quando você cria uma Amazon VPC, você deve escolher três principais fatores:

- Nome da VPC
- Região onde a VPC ficará - Uma VPC abrange todas as Zonas de Disponibilidade dentro da Região selecionada.
- Intervalo de IP para a VPC na notação CIDR - Isso determina o tamanho da sua rede. Cada VPC pode ter até cinco CIDRs: um primário e quatro secundários para IPv4. Cada um desses intervalos pode ter entre /28 (em notação CIDR) e /16 de tamanho.

Usando essas informações, a AWS irá provisionar uma rede e endereços IP para essa rede.

## Criando uma sub-rede

Depois de criar sua VPC, você deve criar sub-redes dentro da rede. Pense em sub-redes como redes menores dentro da sua rede base, ou redes locais virtuais (VLANs) em uma rede tradicional local. Em uma rede local, o caso de uso típico para sub-redes é isolar ou otimizar o tráfego de rede. Na AWS, sub-redes são usadas para fornecer alta disponibilidade e opções de conectividade para seus recursos. Use uma sub-rede pública para recursos que precisam estar conectados à internet e uma sub-rede privada para recursos que não precisam estar conectados à internet.

## Alta disponibilidade com uma VPC

Ao criar suas sub-redes, mantenha a alta disponibilidade em mente. Para manter a redundância e a tolerância a falhas, crie pelo menos duas sub-redes configuradas em duas Zonas de Disponibilidade.

Como você aprendeu anteriormente, lembre-se de que "tudo falha o tempo todo". Com a rede de exemplo, se uma das Zonas de Disponibilidade falhar, você ainda terá seus recursos disponíveis em outra Zona de Disponibilidade como backup.

## IPs reservados

Para que a AWS configure sua VPC adequadamente, a AWS reserva cinco endereços IP em cada sub-rede. Esses endereços IP são usados para roteamento, Sistema de Nomes de Domínio (DNS) e gerenciamento de rede.

Por exemplo, considere uma VPC com o intervalo de IP 10.0.0.0/22. A VPC inclui um total de 1.024 endereços IP. Isso é então dividido em quatro sub-redes de tamanho igual, cada uma com um intervalo de IP /24 com 256 endereços IP. De cada um desses intervalos de IP, há apenas 251 endereços IP que podem ser usados porque a AWS reserva cinco.

## Gateways

### Internet Gateway

Para ativar a conectividade à internet para sua VPC, você deve criar um internet gateway. Pense no gateway como semelhante a um modem. Assim como um modem conecta seu computador à internet, o internet gateway conecta sua VPC à internet. Ao contrário do seu modem em casa, que às vezes fica offline, um internet gateway é altamente disponível e escalável. Depois de criar um internet gateway, você o anexa à sua VPC.

### Virtual Private Gateway

Um virtual private gateway conecta sua VPC a outra rede privada. Quando você cria e anexa um virtual private gateway a uma VPC, o gateway atua como âncora no lado da AWS da conexão. Do outro lado da conexão, você precisará conectar um gateway de cliente à outra rede privada. Um dispositivo de gateway de cliente é um dispositivo físico ou aplicativo de software do seu lado da conexão. Quando você tem ambos os gateways, você pode então estabelecer uma conexão de rede privada virtual (VPN) criptografada entre os dois lados.

## AWS Direct Connect

Para estabelecer uma conexão física segura entre seu centro de dados local e sua Amazon VPC, você pode usar o AWS Direct Connect. Com o AWS Direct Connect, sua rede interna está ligada a uma localização do AWS Direct Connect através de um cabo Ethernet de fibra óptica padrão. Essa conexão permite que você crie interfaces virtuais diretamente para serviços AWS públicos ou para sua VPC.

# Tabela de roteamento principal

Ao criar uma VPC, a AWS cria uma tabela de roteamento chamada de tabela de roteamento principal. Uma tabela de roteamento contém um conjunto de regras, chamadas de rotas, que são usadas para determinar para onde o tráfego de rede é direcionado. A AWS assume que quando você cria uma nova VPC com sub-redes, você quer que o tráfego flua entre elas. Portanto, a configuração padrão da tabela de roteamento principal é permitir o tráfego entre todas as sub-redes na rede local. As seguintes regras se aplicam à tabela de roteamento principal:

- Você não pode excluir a tabela de roteamento principal.
- Você não pode definir uma tabela de roteamento de gateway como a tabela de roteamento principal.
- Você pode substituir a tabela de roteamento principal por uma tabela de roteamento de sub-rede personalizada.
- Você pode adicionar, remover e modificar rotas na tabela de roteamento principal.
- Você pode associar explicitamente uma sub-rede à tabela de roteamento principal, mesmo que ela já esteja implicitamente associada.

## Tabelas de roteamento personalizadas

A tabela de roteamento principal é usada implicitamente por sub-redes que não têm uma associação explícita de tabela de roteamento. No entanto, você pode querer fornecer rotas diferentes por sub-rede para que o tráfego acesse recursos fora da VPC. Por exemplo, sua aplicação pode consistir em uma frente e um banco de dados. Você pode criar sub-redes separadas para os recursos e fornecer rotas diferentes para cada um deles.

Se você associar uma sub-rede a uma tabela de roteamento personalizada, a sub-rede a usará em vez da tabela de roteamento principal. Cada tabela de roteamento personalizada que você criar já terá a rota local dentro dela, permitindo que a comunicação flua entre todos os recursos e sub-redes dentro da VPC. Você pode proteger sua VPC associando explicitamente cada nova sub-rede a uma tabela de roteamento personalizada e deixando a tabela de roteamento principal em seu estado padrão original.

*** 
# Module 4: AWS Storage

## Tipos de Armazenamento 📦

Os serviços de armazenamento da AWS são agrupados em três categorias: armazenamento de arquivos, armazenamento em bloco e armazenamento de objetos. No armazenamento de arquivos, os dados são armazenados como arquivos em uma hierarquia. No armazenamento em bloco, os dados são armazenados em blocos de tamanho fixo. E no armazenamento de objetos, os dados são armazenados como objetos em buckets.

### Armazenamento de Arquivos 📁

Você pode estar familiarizado com o armazenamento de arquivos se já interagiu com sistemas de armazenamento de arquivos como o Windows File Explorer ou o Finder no macOS. Os arquivos são organizados em uma hierarquia em forma de árvore que consiste em pastas e subpastas. Por exemplo, se você tem centenas de fotos de gatos no seu laptop, pode criar uma pasta chamada "Fotos de Gatos" e colocar as imagens dentro dessa pasta para organizá-las. Como você sabe que essas imagens serão usadas em uma aplicação, pode querer colocar a pasta "Fotos de Gatos" dentro de outra pasta chamada "Arquivos da Aplicação".

Cada arquivo tem metadados como nome do arquivo, tamanho do arquivo e a data em que o arquivo foi criado. O arquivo também tem um caminho, por exemplo, `computador/Arquivos_da_Aplicação/Fotos_de_Gatos/gatos-03.png`. Quando você precisa recuperar um arquivo, seu sistema pode usar o caminho para encontrá-lo na hierarquia de arquivos.

O armazenamento de arquivos é ideal quando você precisa de acesso centralizado a arquivos que devem ser facilmente compartilhados e gerenciados por vários computadores host. Tipicamente, este armazenamento é montado em vários hosts e requer bloqueio de arquivos e integração com protocolos de comunicação de sistemas de arquivos existentes.

### Armazenamento em Bloco 📦

O armazenamento de arquivos trata os arquivos como uma unidade singular, mas o armazenamento em bloco divide os arquivos em pedaços de dados de tamanho fixo chamados blocos que têm seus próprios endereços. Cada bloco é uma peça individual de armazenamento de dados. Como cada bloco é endereçável, os blocos podem ser recuperados de forma eficiente. Pense no armazenamento em bloco como uma rota mais direta para acessar os dados.

Quando os dados são solicitados, os endereços são usados pelo sistema de armazenamento para organizar os blocos na ordem correta para formar um arquivo completo a ser apresentado ao solicitante. Além do endereço, não há metadados adicionais associados a cada bloco.

#### Alterando um Caractere em um Arquivo de 1 GB com Armazenamento em Bloco 🔠

Se você quiser alterar um caractere em um arquivo, basta mudar o bloco, ou a peça do arquivo, que contém o caractere. Essa facilidade de acesso é a razão pela qual as soluções de armazenamento em bloco são rápidas e usam menos largura de banda.

#### Casos de Uso para Armazenamento em Bloco ⚙️

Como o armazenamento em bloco é otimizado para operações de baixa latência, é a escolha preferida de armazenamento para cargas de trabalho empresariais de alto desempenho e aplicações transacionais, críticas e intensivas em I/O.

### Armazenamento de Objetos 🗃️

No armazenamento de objetos, os arquivos são armazenados como objetos. Objetos, assim como arquivos, são tratados como uma única unidade distinta de dados quando armazenados. No entanto, ao contrário do armazenamento de arquivos, esses objetos são armazenados em um bucket usando uma estrutura plana, o que significa que não há pastas, diretórios ou hierarquias complexas. Cada objeto contém um identificador único. Este identificador, junto com quaisquer metadados adicionais, é agrupado com os dados e armazenado.

#### Alterando um Caractere em um Arquivo de 1 GB com Armazenamento de Objetos 🔄

Alterar apenas um caractere em um objeto é mais difícil do que com armazenamento em bloco. Quando você quer mudar um caractere em um objeto, o objeto inteiro deve ser atualizado.

#### Casos de Uso para Armazenamento de Objetos 🌐

Com o armazenamento de objetos, você pode armazenar quase qualquer tipo de dado e não há limite para o número de objetos armazenados, o que o torna facilmente escalável. O armazenamento de objetos é geralmente útil ao armazenar conjuntos de dados grandes ou não estruturados.

### Relacionando com Sistemas de Armazenamento Tradicionais 💾

Se você trabalhou com armazenamento local, pode já estar familiarizado com armazenamento em bloco, arquivo e objeto. Considere as seguintes tecnologias e como elas se relacionam com sistemas que você pode ter visto antes:

- Armazenamento em bloco na nuvem é análogo ao armazenamento direto (DAS) ou a uma rede de área de armazenamento (SAN).
- Sistemas de armazenamento de arquivos são frequentemente suportados por um servidor de armazenamento conectado à rede (NAS).

Adicionar armazenamento em um data center tradicional é um processo rígido - as soluções de armazenamento devem ser compradas, instaladas e configuradas. Com a computação em nuvem, o processo é mais flexível. Você pode criar, excluir e modificar soluções de armazenamento em questão de minutos.

Aqui está a tradução em português do conteúdo sobre Amazon EFS e Amazon FSx, formatado em Markdown com emojis:

## Armazenamento de Arquivos com Amazon EFS e Amazon FSx 📁💾

### Amazon Elastic File System (Amazon EFS) 🌐

O Amazon Elastic File System (Amazon EFS) é um sistema de arquivos que cresce e encolhe automaticamente à medida que você adiciona e remove arquivos. Não há necessidade de provisionar ou gerenciar capacidade e desempenho de armazenamento. O Amazon EFS pode ser usado com serviços de computação da AWS e recursos locais. Você pode conectar dezenas, centenas e até milhares de instâncias de computação a um sistema de arquivos Amazon EFS ao mesmo tempo, e o Amazon EFS pode fornecer desempenho consistente para cada instância de computação.

Com a interface web simples do Amazon EFS, você pode criar e configurar sistemas de arquivos rapidamente, sem nenhuma taxa mínima ou custo de configuração. Você paga apenas pelo armazenamento usado e pode escolher entre uma variedade de classes de armazenamento projetadas para atender ao seu caso de uso.

### Amazon FSx 📊

O Amazon FSx é um serviço totalmente gerenciado que oferece confiabilidade, segurança, escalabilidade e um conjunto amplo de capacidades que o tornam conveniente e econômico para lançar, executar e escalar sistemas de arquivos de alto desempenho na nuvem. Com o Amazon FSx, você pode escolher entre quatro sistemas de arquivos amplamente usados: Lustre, NetApp ONTAP, OpenZFS e Windows File Server. Você pode escolher com base na sua familiaridade com um sistema de arquivos ou com base nos requisitos de sua carga de trabalho para conjuntos de recursos, perfis de desempenho e capacidades de gerenciamento de dados.

## Armazenamento em Bloco com Amazon EC2 Instance Store e Amazon EBS 📦

### Amazon EC2 Instance Store 🖥️

O Amazon Elastic Compute Cloud (Amazon EC2) instance store fornece armazenamento temporário em nível de bloco para uma instância. Este armazenamento está localizado em discos fisicamente conectados ao computador host. Isso vincula o ciclo de vida dos dados ao ciclo de vida da instância EC2. Se você excluir a instância, o instance store também será excluído. Por causa disso, o instance store é considerado armazenamento efêmero. Leia mais sobre isso na documentação do Amazon EC2 encontrada na seção de recursos no final desta lição.

O instance store é ideal se você hospedar aplicações que replicam dados para outras instâncias EC2, como clusters Hadoop. Para essas cargas de trabalho baseadas em clusters, ter a velocidade dos volumes localmente conectados e a resiliência dos dados replicados ajuda a alcançar a distribuição de dados com alto desempenho. Também é ideal para armazenamento temporário de informações que mudam frequentemente, como buffers, caches, dados de scratch e outros conteúdos temporários.

### Amazon EBS 📂

Como o nome sugere, o Amazon Elastic Block Store (Amazon EBS) é um armazenamento em nível de bloco que você pode anexar a uma instância Amazon EC2. Você pode comparar isso a como você anexa um drive externo ao seu laptop. Este armazenamento anexável é chamado de volume EBS. Os volumes EBS funcionam de maneira semelhante aos drives externos em mais de um aspecto.

- **Destacável**: Você pode desanexar um volume EBS de uma instância EC2 e anexá-lo a outra instância EC2 na mesma Zona de Disponibilidade para acessar os dados nele contidos.
- **Distinto**: O drive externo é separado do computador. Isso significa que, se ocorrer um acidente e o computador falhar, você ainda terá seus dados no drive externo. O mesmo é verdadeiro para os volumes EBS.
- **Limitado em tamanho**: Você está limitado ao tamanho do drive externo, porque ele tem um limite fixo de escalabilidade. Por exemplo, você pode ter um drive externo de 2 TB, o que significa que você pode ter apenas 2 TB de conteúdo nele. Isso também se aplica ao Amazon EBS, porque um volume também tem um limite máximo de quanto conteúdo você pode armazenar nele.
- **Conexão 1-para-1**: A maioria dos volumes EBS só pode ser conectada a um computador por vez. A maioria dos volumes EBS tem uma relação de um-para-um com instâncias EC2, então eles não podem ser compartilhados ou anexados a várias instâncias ao mesmo tempo.

### Escalando Volumes do Amazon EBS 📈

Você pode escalar volumes EBS de duas maneiras:

- **Aumentar o tamanho do volume** 🔍
- **Anexar múltiplos volumes** 🔗

### Casos de Uso do Amazon EBS ⚙️

O Amazon EBS é útil quando você precisa recuperar dados rapidamente e manter os dados persistentes a longo prazo. Os volumes são comumente usados nos seguintes cenários:

- **Sistemas Operacionais**
- **Bancos de Dados**
- **Aplicações Empresariais**
- **Engines de Análise de Big Data**

### Tipos de Volume do EBS 📊

Os volumes EBS são organizados em duas categorias principais: unidades de estado sólido (SSDs) e unidades de disco rígido (HDDs). SSDs são usados para cargas de trabalho transacionais com operações frequentes de leitura/gravação com pequeno tamanho de I/O. HDDs são usados para cargas de trabalho de streaming grandes que precisam de alto desempenho de throughput. A AWS oferece dois tipos de cada.

### Benefícios do Amazon EBS 🌟

#### Alta Disponibilidade 🌐

Quando você cria um volume EBS, ele é automaticamente replicado em sua Zona de Disponibilidade para evitar perda de dados de pontos únicos de falha.

#### Persistência de Dados 🗄️

O armazenamento persiste mesmo quando sua instância não está ativa.

#### Criptografia de Dados 🔒

Quando ativado pelo usuário, todos os volumes EBS suportam criptografia.

#### Flexibilidade 🔄

Os volumes EBS suportam mudanças em tempo real. Modifique o tipo de volume, o tamanho do volume e a capacidade de operações de entrada/saída por segundo (IOPS) sem interromper sua instância.

#### Backups 🗂️

O Amazon EBS oferece a capacidade de criar backups de qualquer volume EBS.

### Snapshots do Amazon EBS 📸

Erros acontecem. Um erro é não fazer backup dos dados e depois inevitavelmente perdê-los. Para evitar que isso aconteça com você, sempre faça backup de seus dados, mesmo na AWS. Como seus volumes EBS consistem nos dados de sua instância EC2, você deve fazer backups desses volumes, chamados snapshots.

Os snapshots do EBS são backups incrementais que salvam apenas os blocos no volume que mudaram após seu snapshot mais recente. Por exemplo, se você tem 10 GB de dados em um volume e apenas 2 GB de dados foram modificados desde seu último snapshot, apenas os 2 GB que foram alterados são gravados no Amazon S3.

Quando você tira um snapshot de qualquer um dos seus volumes EBS, os backups são armazenados de forma redundante em várias Zonas de Disponibilidade usando o Amazon S3. Esse aspecto de armazenar o backup no Amazon S3 é gerenciado pela AWS, então você não precisa interagir com o Amazon S3 para trabalhar com seus snapshots do EBS. Você os gerencia no console do Amazon EBS, que faz parte do console do Amazon EC2.

Os snapshots do EBS podem ser usados para criar múltiplos novos volumes, seja na mesma Zona de Disponibilidade ou em uma diferente. Quando você cria um novo volume a partir de um snapshot, ele é uma cópia exata do volume original no momento em que o snapshot foi tirado.
