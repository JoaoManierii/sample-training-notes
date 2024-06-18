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

O Amazon Elastic Compute Cloud (Amazon EC2) instance store fornece armazenamento temporário em nível de bloco para uma instância. Este armazenamento está localizado em discos fisicamente conectados ao computador host. Isso vincula o ciclo de vida dos dados ao ciclo de vida da instância EC2. Se você excluir a instância, o instance store também será excluído. Por causa disso, o instance store é considerado armazenamento efêmero.

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

Aqui está a tradução em português do conteúdo sobre Amazon S3, formatado em Markdown com emojis:

## Armazenamento de Objetos com Amazon S3 🌐

### Amazon S3 ☁️

Ao contrário do Amazon EBS, o Amazon Simple Storage Service (Amazon S3) é uma solução de armazenamento independente que não está vinculada ao computação. Com o Amazon S3, você pode recuperar seus dados de qualquer lugar na web. Se você já usou um serviço de armazenamento online para fazer backup dos dados do seu computador local, provavelmente usou um serviço semelhante ao Amazon S3. A grande diferença entre esses serviços de armazenamento online e o Amazon S3 é o tipo de armazenamento.

O Amazon S3 é um serviço de armazenamento de objetos. O armazenamento de objetos armazena dados em uma estrutura plana. Um objeto é um arquivo combinado com metadados. Você pode armazenar quantos desses objetos quiser. Todas as características do armazenamento de objetos também são características do Amazon S3.

### Conceitos do Amazon S3 📝

No Amazon S3, você armazena seus objetos em contêineres chamados buckets. Você não pode carregar um objeto, nem mesmo uma única foto, no Amazon S3 sem criar primeiro um bucket. Quando você armazena um objeto em um bucket, a combinação de um nome de bucket, chave e ID de versão identifica exclusivamente o objeto.

Ao criar um bucket, você especifica, no mínimo, dois detalhes: o nome do bucket e a Região AWS onde deseja que o bucket resida.

### Nomes de Buckets do Amazon S3 🏷️

O Amazon S3 suporta buckets globais. Portanto, cada nome de bucket deve ser único em todas as contas AWS em todas as Regiões AWS dentro de uma partição. Uma partição é um agrupamento de Regiões, das quais a AWS atualmente possui três: Regiões Padrão, Regiões da China e AWS GovCloud (EUA). Ao nomear um bucket, escolha um nome que seja relevante para você ou sua empresa. Por exemplo, você deve evitar usar AWS ou Amazon no nome do bucket.

A seguir estão alguns exemplos das regras que se aplicam para nomear buckets no Amazon S3.

- Os nomes dos buckets devem ter entre 3 (mínimo) e 63 (máximo) caracteres de comprimento.
- Os nomes dos buckets podem consistir apenas em letras minúsculas, números, pontos (.) e hifens (-).
- Os nomes dos buckets devem começar e terminar com uma letra ou número.
- Os buckets não devem ser formatados como um endereço IP.
- Um nome de bucket não pode ser usado por outra conta AWS na mesma partição até que o bucket seja excluído.
- Se seu aplicativo cria automaticamente buckets, escolha um esquema de nomeação de buckets que seja improvável causar conflitos de nomeação e escolha um nome de bucket diferente, caso um não esteja disponível.

### Casos de Uso do Amazon S3 🛠️

O Amazon S3 é um serviço de armazenamento amplamente utilizado, com muitos mais casos de uso do que caberiam em uma tela. 

- **Backup e armazenamento** 📂
- **Hospedagem de mídia** 📺
- **Entrega de software** 📦
- **Lakes de dados** 🌊
- **Sites estáticos** 🌐
- **Conteúdo estático** 📜

### Segurança no Amazon S3 🔒

Tudo no Amazon S3 é privado por padrão. Isso significa que todos os recursos do Amazon S3, como buckets e objetos, só podem ser visualizados pelo usuário ou pela conta AWS que criou esse recurso. Os recursos do Amazon S3 são todos privados e protegidos desde o início.

Se você decidir que quer que todos na internet vejam suas fotos, você pode optar por tornar seus buckets e objetos públicos. Um recurso público significa que todos na internet podem vê-lo. Na maioria das vezes, você não quer que suas permissões sejam tudo ou nada. Normalmente, você quer ser mais granular na forma como fornece acesso aos seus recursos.

### Amazon S3 e Políticas IAM 🛡️

Anteriormente, você aprendeu sobre a criação e uso de políticas do AWS Identity and Access Management (IAM). Agora você pode aplicar esse conhecimento ao Amazon S3. Quando as políticas IAM são anexadas aos seus recursos (buckets e objetos) ou a usuários, grupos e funções IAM, as políticas definem quais ações eles podem realizar. As políticas de acesso que você anexa aos seus recursos são chamadas de políticas baseadas em recursos e as políticas de acesso anexadas aos usuários em sua conta são chamadas de políticas de usuário.

Você deve usar políticas IAM para buckets privados nos seguintes dois cenários:

- Você tem muitos buckets com diferentes requisitos de permissão. Em vez de definir muitas políticas diferentes para buckets do S3, você pode usar políticas IAM.
- Você quer que todas as políticas estejam em um local centralizado. Usando políticas IAM, você pode gerenciar todas as informações de políticas em um único local.

### Políticas de Buckets do Amazon S3 📜

Assim como as políticas IAM, as políticas de buckets do S3 são definidas em um formato JSON. Ao contrário das políticas IAM, que são anexadas a recursos e usuários, as políticas de buckets do S3 só podem ser anexadas a buckets do S3. A política que é colocada no bucket se aplica a cada objeto nesse bucket. As políticas de buckets do S3 especificam quais ações são permitidas ou negadas no bucket.

Você deve usar políticas de buckets do S3 nos seguintes cenários:

- Você precisa de uma maneira simples de fazer acesso entre contas ao Amazon S3, sem usar funções IAM.
- Suas políticas IAM ultrapassam o limite de tamanho definido. As políticas de buckets do S3 têm um limite de tamanho maior.

Para exemplos de políticas de buckets, veja o link de Exemplos de Políticas de Buckets aqui ou na seção de recursos.

### Criptografia no Amazon S3 🔑

O Amazon S3 reforça a criptografia em trânsito (à medida que viaja para e do Amazon S3) e em repouso. Para proteger os dados, o Amazon S3 criptografa automaticamente todos os objetos no upload e aplica criptografia do lado do servidor com chaves gerenciadas pelo S3 como o nível base de criptografia para cada bucket no Amazon S3, sem custo adicional.

### Classes de Armazenamento do Amazon S3 📂

Quando você carrega um objeto no Amazon S3 e não especifica a classe de armazenamento, você o carrega na classe de armazenamento padrão, frequentemente chamada de armazenamento padrão. Em lições anteriores, você aprendeu sobre a classe de armazenamento padrão do Amazon S3.

As classes de armazenamento do Amazon S3 permitem que você mude seu nível de armazenamento quando as características dos seus dados mudarem. Por exemplo, se você está acessando suas fotos antigas com pouca frequência, pode querer mudar a classe de armazenamento das fotos para economizar custos.

### Versionamento do Amazon S3 🗃️

Como descrito anteriormente, o Amazon S3 identifica objetos em parte pelo uso do nome do objeto. Por exemplo, quando você carrega uma foto de um funcionário no Amazon S3, você pode nomear o objeto como employee.jpg e armazená-lo em um bucket chamado employees. Sem o versionamento do Amazon S3, toda vez que você carregar um objeto chamado employee.jpg no bucket employees, ele sobrescreverá o objeto original.

Isso pode ser um problema por várias razões, incluindo as seguintes:

- **Nomes comuns**: O nome do objeto employee.jpg é um nome comum para um objeto de foto de funcionário. Você ou outra pessoa que tenha acesso ao bucket pode não ter a intenção de sobrescrevê-lo; mas uma vez sobrescrito, o objeto original não pode ser acessado.
- **Preservação de versões**: Você pode querer preservar diferentes versões de employee.jpg. Sem versionamento, se você quisesse criar uma nova versão de employee.jpg, precisaria carregar o objeto e escolher um nome diferente para ele. Ter vários objetos com pequenas diferenças nos nomes pode causar confusão e desordem nos buckets do S3.

Para evitar esses problemas, você pode usar o versionamento do Amazon S3. O versionamento mantém várias versões de um único objeto no mesmo bucket. Isso preserva versões antigas de um objeto sem usar nomes diferentes, o que ajuda na recuperação de objetos de exclusões acidentais, sobrescritas acidentais ou falhas de aplicativos.

Se você habilitar o versionamento para um bucket, o Amazon S3 gera automaticamente um ID de versão exclusivo para o objeto. Em um bucket, por exemplo, você pode ter dois objetos com a mesma chave, mas diferentes IDs de versão, como employeephoto.jpg (versão 111111) e employeephoto.jpg (versão 121212).

Usando buckets com versionamento habilitado, você pode recuperar objetos de exclusões ou sobrescritas acidentais. A seguir estão alguns exemplos:

- **Exclusão de um objeto**: Não remove o objeto permanentemente. Em vez disso, o Amazon S3 coloca um marcador no objeto que mostra que você tentou excluí-lo. Se você quiser restaurar o objeto, pode remover o marcador e o objeto será reinstalado.
- **Sobrescrever um objeto**: Resulta em uma nova versão do objeto no bucket. Você ainda tem acesso às versões anteriores do objeto.

### Estados de Versionamento 🚦

Os buckets podem estar em um dos três estados. O estado de versionamento se aplica a todos os objetos no bucket. Custos de armazenamento são incorridos para todos os objetos no seu bucket, incluindo todas as versões. Para reduzir sua conta do Amazon S3, você pode querer

Aqui está a tradução em português do conteúdo sobre bancos de dados na AWS, formatado em Markdown com emojis:

# Introdução aos Bancos de Dados na AWS 📚

## Histórico dos Bancos de Dados Empresariais

Escolher um banco de dados costumava ser uma decisão simples. Os clientes tinham poucas opções para escolher. Normalmente, eles consideravam alguns fornecedores e então, inevitavelmente, escolhiam um para todas as suas aplicações. As empresas muitas vezes selecionavam uma tecnologia de banco de dados antes de entender completamente seu caso de uso. Desde a década de 1970, o tipo de banco de dados mais comumente selecionado pelas empresas era o banco de dados relacional.

## Bancos de Dados Relacionais

Um banco de dados relacional organiza dados em tabelas. Os dados em uma tabela podem se ligar aos dados de outras tabelas para criar relações—daí o nome "relacional".

Uma tabela armazena dados em linhas e colunas. Uma linha, frequentemente chamada de registro, contém todas as informações sobre uma entrada específica. As colunas descrevem atributos de uma entrada.
A imagem a seguir mostra uma tabela de livros, uma tabela de vendas e uma tabela de autores. Na tabela de livros, cada linha inclui o ISBN (International Standard Book Number), título, autor e formato. Cada um desses atributos é armazenado em sua própria coluna. A tabela de livros tem algo em comum com as outras duas tabelas—o atributo autor. Essa coluna comum cria uma relação entre as tabelas.

As tabelas, linhas, colunas e as relações entre elas são chamadas de esquema lógico. Com bancos de dados relacionais, um esquema é fixo. Depois que o banco de dados está operacional, torna-se difícil alterar o esquema. Por causa disso, a maior parte da modelagem de dados é feita antecipadamente, antes de o banco de dados estar ativo.

## Sistema de Gerenciamento de Banco de Dados Relacional (RDBMS)

Com um sistema de gerenciamento de banco de dados relacional (RDBMS), você pode criar, atualizar e administrar um banco de dados relacional. Alguns exemplos comuns de RDBMS incluem:

- MySQL
- PostgreSQL
- Oracle
- Microsoft SQL Server
- Amazon Aurora

Você se comunica com um RDBMS usando consultas em linguagem de consulta estruturada (SQL), semelhante ao exemplo a seguir:

```sql
SELECT * FROM table_name;
```

Esta consulta seleciona todos os dados de uma tabela específica. No entanto, o poder das consultas SQL está em criar consultas mais complexas que extraem dados de várias tabelas para identificar padrões e respostas para problemas empresariais. Por exemplo, consultar a tabela de vendas e a tabela de livros juntas para ver as vendas em relação aos livros de um autor. Consultar tabelas juntas para entender melhor suas relações é possível graças a um "join".

## Benefícios dos Bancos de Dados Relacionais

Para saber mais sobre os benefícios de usar bancos de dados relacionais, veja os cartões a seguir.

### Cartões de Benefícios

- **Consultas SQL Complexas** 🔄: Com SQL, você pode unir várias tabelas para entender melhor as relações entre seus dados.
- **Redução de Redundância** ➗: Você pode armazenar dados em uma tabela e referenciá-los em outras tabelas em vez de salvar os mesmos dados em diferentes lugares.
- **Familiaridade** 📖: Como os bancos de dados relacionais são uma escolha popular desde a década de 1970, os profissionais técnicos geralmente têm familiaridade e experiência com eles.
- **Precisão** ✅: Bancos de dados relacionais garantem que seus dados tenham alta integridade e adiram ao princípio ACID (atomicidade, consistência, isolamento e durabilidade).

## Casos de Uso de Bancos de Dados Relacionais

Grande parte do mundo funciona com bancos de dados relacionais. Na verdade, eles estão no núcleo de muitas aplicações críticas, algumas das quais você pode usar no seu dia a dia.

### Exemplos de Casos de Uso

- **Aplicações com um Esquema Fixo** 📊: Aplicações que têm uma estrutura de dados que não muda com frequência.
- **Aplicações que Precisam de Armazenamento Persistente** 💾: Aplicações que requerem que os dados persistam mesmo após a interrupção ou falha do sistema.

## Escolha entre Bancos de Dados Gerenciados e Não Gerenciados

Se você quiser trocar seu banco de dados local por um banco de dados relacional na AWS, primeiro você precisa escolher como deseja executá-lo—gerenciado ou não gerenciado. Os serviços gerenciados e não gerenciados são tratados de forma semelhante ao modelo de responsabilidade compartilhada. O modelo de responsabilidade compartilhada distingue entre as responsabilidades de segurança da AWS e as responsabilidades de segurança do cliente. Da mesma forma, gerenciado em comparação com não gerenciado pode ser entendido como uma troca entre conveniência e controle.

### Bancos de Dados Não Gerenciados

Se você opera um banco de dados relacional localmente, você é responsável por todos os aspectos da operação. Isso inclui segurança do data center e eletricidade, gerenciamento das máquinas host, gerenciamento do banco de dados, otimização de consultas e gerenciamento de dados dos clientes. Você é responsável por absolutamente tudo, o que significa que você tem controle sobre absolutamente tudo.

Agora, suponha que você queira transferir parte do trabalho para a AWS executando seu banco de dados relacional no Amazon Elastic Compute Cloud (Amazon EC2). Se você hospeda um banco de dados no Amazon EC2, a AWS implementa e mantém a infraestrutura física e o hardware e instala o sistema operacional (OS) da instância EC2. No entanto, você ainda é responsável por gerenciar a instância EC2, gerenciar o banco de dados nesse host, otimizar consultas e gerenciar os dados dos clientes.

Esta é chamada de opção de banco de dados não gerenciado. Nesta opção, a AWS é responsável e tem controle sobre o hardware e a infraestrutura subjacente. Você é responsável e tem controle sobre o gerenciamento do host e do banco de dados.

### Bancos de Dados Gerenciados

Para transferir mais trabalho para a AWS, você pode usar um serviço de banco de dados gerenciado. Esses serviços fornecem a configuração da instância EC2 e do banco de dados, além de sistemas para alta disponibilidade, escalabilidade, patching e backups. No entanto, neste modelo, você ainda é responsável pela afinação do banco de dados, otimização de consultas e garantir que seus dados de clientes estejam seguros. Esta opção oferece a máxima conveniência, mas o menor controle em comparação com as duas opções anteriores.

### 🚀 Bancos de Dados Projetados para Fins Específicos

#### 📊 Bancos de dados projetados para todas as necessidades de aplicativos

No passado, os bancos de dados relacionais eram a escolha padrão e eram amplamente utilizados em quase todas as aplicações. Um banco de dados relacional é como uma ferramenta multifuncional. Ele pode fazer muitas coisas, mas não é perfeitamente adequado para nenhuma tarefa específica. Com o tempo, tornou-se evidente que essa abordagem de "tamanho único" não funcionava para todas as necessidades empresariais. Isso levou ao surgimento de bancos de dados projetados para fins específicos.

A AWS oferece um amplo portfólio de bancos de dados projetados para atender a diversos modelos de dados, permitindo que os desenvolvedores escolham o banco de dados que melhor se adapta às necessidades de suas aplicações. Isso possibilita a construção de aplicativos escaláveis e distribuídos, focando em resolver problemas específicos de maneira eficiente e afastando-se de bancos de dados comerciais restritivos.

#### 🗂️ Amazon DynamoDB

DynamoDB é um banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e consistente em qualquer escala. Ele possui um modelo de cobrança flexível, integração estreita com infraestrutura como código (IaC) e um modelo operacional sem intervenção. DynamoDB tornou-se o banco de dados preferido para duas categorias de aplicações: aplicações de alta escala e aplicações serverless. No entanto, pode funcionar para quase todas as cargas de trabalho de processamento de transações online (OLTP).

#### 🔄 Amazon ElastiCache 

ElastiCache é uma solução de cache em memória totalmente gerenciada que oferece suporte para dois mecanismos de cache em memória de código aberto: Redis e Memcached. Você não é responsável por falhas de instância, backups e restaurações ou atualizações de software.

#### 🧠 Amazon MemoryDB for Redis

MemoryDB é um serviço de banco de dados em memória durável e compatível com Redis que oferece desempenho ultrarrápido. Com MemoryDB, você pode obter latência de leitura em microssegundos, latência de gravação em milissegundos de dígitos únicos, alta taxa de transferência e durabilidade Multi-AZ para aplicações modernas, como aquelas construídas com arquiteturas de microsserviços.

#### 📄 Amazon DocumentDB (compatível com MongoDB)

Amazon DocumentDB é um banco de dados de documentos totalmente gerenciado da AWS. Um banco de dados de documentos é um tipo de banco de dados NoSQL que você pode usar para armazenar e consultar documentos ricos em sua aplicação. Esses tipos de bancos de dados funcionam bem para casos de uso como sistemas de gerenciamento de conteúdo, gerenciamento de perfis e aplicações web e móveis.

#### 🔑 Amazon Keyspaces (para Apache Cassandra)

Amazon Keyspaces é um serviço de banco de dados gerenciado, altamente disponível e escalável, compatível com Apache Cassandra. É uma boa opção para aplicações de alto volume com padrões de acesso simples, permitindo executar cargas de trabalho Cassandra na AWS usando o mesmo código CQL, drivers licenciados Apache 2.0 e ferramentas que você já usa hoje.

#### 🌐 Amazon Neptune

Neptune é um banco de dados gráfico totalmente gerenciado oferecido pela AWS. Um banco de dados gráfico é uma boa escolha para dados altamente conectados com uma variedade rica de relacionamentos. Empresas costumam usar bancos de dados gráficos para motores de recomendação, detecção de fraudes e gráficos de conhecimento.

#### ⏱️ Amazon Timestream

Timestream é um serviço de banco de dados de séries temporais rápido, escalável e sem servidor para aplicações de Internet das Coisas (IoT) e operacionais. Facilita o armazenamento e análise de trilhões de eventos por dia até 1.000 vezes mais rápido e por um décimo do custo dos bancos de dados relacionais.

#### 🔒 Amazon Quantum Ledger Database (Amazon QLDB)

Com bancos de dados tradicionais, você pode sobrescrever ou excluir dados, por isso desenvolvedores usam técnicas como tabelas de auditoria e trilhas de auditoria para ajudar a rastrear a linhagem dos dados. Essas abordagens podem ser difíceis de escalar e colocam a responsabilidade de garantir que todos os dados sejam registrados no desenvolvedor da aplicação. Amazon QLDB é um banco de dados de ledger projetado especificamente que fornece um histórico completo e criptograficamente verificável de todas as mudanças feitas nos dados da sua aplicação.

### 🌟 Amazon DynamoDB

#### 🔍 Visão Geral do DynamoDB

DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e previsível com escalabilidade contínua. Com o DynamoDB, você pode descarregar os encargos administrativos de operar e escalar um banco de dados distribuído. Você não precisa se preocupar com provisionamento de hardware, configuração, replicação, aplicação de patches de software ou escalonamento de clusters.

#### 🔧 Com o DynamoDB, você pode fazer o seguinte:

- 📦 Criar tabelas de banco de dados que podem armazenar e recuperar qualquer quantidade de dados e atender a qualquer nível de tráfego de solicitações.
- 📈 Escalar para cima ou para baixo a capacidade de throughput de suas tabelas sem tempo de inatividade ou degradação de desempenho.
- 📊 Monitorar o uso de recursos e métricas de desempenho usando o Console de Gerenciamento da AWS.

DynamoDB distribui automaticamente os dados e o tráfego de suas tabelas sobre um número suficiente de servidores para atender às suas necessidades de throughput e armazenamento, mantendo desempenho rápido e consistente. Todos os seus dados são armazenados em SSDs e replicados automaticamente em várias zonas de disponibilidade em uma região, proporcionando alta disponibilidade e durabilidade de dados embutidas.

#### 🧩 Componentes principais do DynamoDB

No DynamoDB, tabelas, itens e atributos são os componentes principais com os quais você trabalha. Uma tabela é uma coleção de itens, e cada item é uma coleção de atributos. O DynamoDB usa chaves primárias para identificar exclusivamente cada item em uma tabela e índices secundários para fornecer mais flexibilidade nas consultas.

#### 🔄 Casos de uso do DynamoDB

DynamoDB é um serviço totalmente gerenciado que lida com o trabalho operacional. Você pode descarregar os encargos administrativos de operar e escalar bancos de dados distribuídos para a AWS. 

Você pode considerar usar o DynamoDB nas seguintes circunstâncias:

- 📈 Você está enfrentando problemas de escalabilidade com outros sistemas de banco de dados tradicionais.
- 💻 Você está ativamente desenvolvendo um aplicativo ou serviço.
- 💼 Você está lidando com uma carga de trabalho OLTP.
- 🚀 Você está implantando um aplicativo crítico que deve estar altamente disponível o tempo todo sem intervenção manual.
- 🔒 Você exige um alto nível de durabilidade de dados, independentemente de sua estratégia de backup e restauração.

DynamoDB é usado em uma ampla gama de cargas de trabalho devido à sua simplicidade, desde operações de baixa escala até operações de ultra alta escala, como aquelas demandadas pela Amazon.com.

#### 🛡️ Segurança do DynamoDB

DynamoDB fornece uma série de recursos de segurança a serem considerados ao desenvolver e implementar suas próprias políticas de segurança. Eles incluem:

- 💾 DynamoDB fornece uma infraestrutura de armazenamento altamente durável projetada para armazenamento de dados críticos e primários. Os dados são armazenados de forma redundante em vários dispositivos em várias instalações em uma região do DynamoDB.
- 🔐 Todos os dados do usuário armazenados no DynamoDB são totalmente criptografados em repouso. A criptografia em repouso do DynamoDB oferece segurança aprimorada criptografando todos os seus dados em repouso usando chaves de criptografia armazenadas no AWS Key Management Service (AWS KMS).
- 👥 Administradores do IAM controlam quem pode ser autenticado e autorizado a usar recursos do DynamoDB. Você pode usar o IAM para gerenciar permissões de acesso e implementar políticas de segurança.
- 🌐 Como um serviço gerenciado, o DynamoDB é protegido pelos procedimentos de segurança da rede global da AWS.

### 🔍 Choosing the Right Database Service

#### 🗂️ AWS Database Services

A AWS oferece uma variedade de opções de banco de dados para diferentes casos de uso. A tabela a seguir fornece uma visão rápida do portfólio de banco de dados da AWS:

| **AWS Service(s)** | **Database Type** | **Use Cases** |
|--------------------|-------------------|---------------|
| Amazon RDS, Aurora, Amazon Redshift | Relational | Traditional applications, ERP, CRM, ecommerce |
| DynamoDB | Key-value | High-traffic web applications, ecommerce systems, gaming applications |
| Amazon ElastiCache for Memcached, Amazon ElastiCache for Redis | In-memory | Caching, session management, gaming leaderboards, geospatial applications |
| Amazon DocumentDB | Document | Content management, catalogs, user profiles |
| Amazon Keyspaces | Wide column | High-scale industrial applications for equipment maintenance, fleet management, route optimization |
| Neptune | Graph | Fraud detection, social networking, recommendation engines |
| Timestream | Time series | IoT applications, Development Operations (DevOps), industrial telemetry |
| Amazon QLDB | Ledger | Systems of record, supply chain, registrations, banking transactions |

#### 🔄 Breaking Up Applications and Databases

À medida que a indústria evolui, as aplicações e bancos de dados também mudam. Hoje, com aplicações maiores, não se vê mais apenas um banco de dados suportando-as. Em vez disso, as aplicações são divididas em serviços menores, cada um com seu próprio banco de dados construído para um propósito específico. Essa mudança elimina a ideia de um banco de dados único para todos os casos e a substitui por uma estratégia de banco de dados complementar. Você pode fornecer a cada banco de dados a funcionalidade apropriada, desempenho e escala que a carga de trabalho exige.

#### 🌟 Benefícios da Estratégia de Banco de Dados Complementar

- 📈 **Desempenho otimizado:** Cada banco de dados pode ser ajustado para o tipo específico de dados e carga de trabalho.
- ⚖️ **Escalabilidade:** Bancos de dados individuais podem ser escalados independentemente, conforme necessário.
- 🛠️ **Funcionalidade especializada:** Usar bancos de dados específicos para diferentes partes da aplicação permite funcionalidades avançadas que seriam difíceis de implementar em um único banco de dados.

### 🎯 Exemplos de Casos de Uso

- **Aplicações tradicionais:** Use Amazon RDS ou Aurora para aplicações como ERP e CRM.
- **Aplicações de alto tráfego:** DynamoDB é ideal para sistemas de ecommerce e aplicações de jogos.
- **Cache e gerenciamento de sessão:** Amazon ElastiCache para Memcached ou Redis.
- **Gerenciamento de conteúdo:** Amazon DocumentDB para catálogos e perfis de usuários.
- **Aplicações industriais de alta escala:** Amazon Keyspaces para manutenção de equipamentos e otimização de rotas.
- **Detecção de fraudes e redes sociais:** Neptune para motores de recomendação.
- **Dados de séries temporais:** Timestream para aplicações de IoT e telemetria industrial.
- **Transações bancárias e registros:** Amazon QLDB para sistemas de registro e cadeia de suprimentos.

## 🛠️ Monitoramento

### 🎯 Propósito do Monitoramento

Ao operar um site como o aplicativo de diretório de funcionários na AWS, você pode ter perguntas como as seguintes:

- 📈 Quantas pessoas estão visitando meu site dia a dia?
- 📊 Como posso rastrear o número de visitantes ao longo do tempo?
- 🖥️ Como saberei se o site está tendo problemas de desempenho ou disponibilidade?
- ⚡ O que acontece se minha instância do Amazon Elastic Compute Cloud (Amazon EC2) ficar sem capacidade?
- 🚨 Serei alertado se meu site cair?

Você precisa de uma maneira de coletar e analisar dados sobre a saúde operacional e o uso de seus recursos. O ato de coletar, analisar e usar dados para tomar decisões ou responder a perguntas sobre seus recursos e sistemas de TI é chamado de monitoramento.

O monitoramento fornece um pulso quase em tempo real do seu sistema e ajuda a responder às perguntas anteriores. Você pode usar os dados que coleta para observar problemas operacionais causados por eventos como uso excessivo de recursos, falhas de aplicativos, configuração incorreta de recursos ou eventos relacionados à segurança. Pense nos dados coletados por meio do monitoramento como saídas do sistema, ou métricas.

### 📊 Usar Métricas para Resolver Problemas

Os recursos da AWS que hospedam suas soluções criam várias formas de dados que você pode estar interessado em coletar. Cada ponto de dados individual que um recurso cria é uma métrica. Métricas que são coletadas e analisadas ao longo do tempo se tornam estatísticas, como a média de utilização de CPU ao longo do tempo mostrando um pico.

Uma maneira de avaliar a saúde de uma instância EC2 é através da utilização de CPU. De maneira geral, se uma instância EC2 tem alta utilização de CPU, isso pode significar uma inundação de solicitações ou refletir um processo que encontrou um erro e está consumindo muito da CPU. Ao analisar a utilização da CPU, tome um processo que excede um limite específico por um tempo incomum. Use esse evento anormal como um sinal para resolver manual ou automaticamente o problema através de ações como escalar a instância.

A utilização de CPU é um exemplo de métrica. Outros exemplos de métricas que as instâncias EC2 possuem são a utilização de rede, desempenho do disco, utilização de memória e os logs criados pelos aplicativos executados em cima do Amazon EC2.

### 🛠️ Tipos de Métricas

Diferentes recursos na AWS criam diferentes tipos de métricas. Para ver exemplos de métricas associadas a diferentes recursos, vire cada um dos seguintes flashcards escolhendo-os. 

| **Frente do Cartão** | **Verso do Cartão** |
|----------------------|---------------------|
| Métricas do Amazon Simple Storage Service (Amazon S3) | Tamanho dos objetos armazenados em um bucket, Número de objetos armazenados em um bucket, Número de solicitações HTTP feitas a um bucket |
| Métricas do Amazon Relational Database Service (Amazon RDS) | Conexões de banco de dados, Utilização de CPU de uma instância, Consumo de espaço em disco |
| Métricas do Amazon EC2 | Utilização de CPU, Utilização de rede, Desempenho do disco, Verificações de status |

Esta não é uma lista completa de métricas para qualquer um dos serviços mencionados, mas você pode ver como diferentes recursos criam diferentes métricas. Você pode estar interessado em uma ampla variedade de métricas, dependendo de seus recursos, objetivos e perguntas.

### 🌟 Benefícios do Monitoramento

O monitoramento dá visibilidade aos seus recursos, mas a pergunta agora é: "Por que isso é importante?" Esta seção descreve alguns dos benefícios do monitoramento.

#### ⚙️ Responder Proativamente
#### 🚀 Melhorar Desempenho e Confiabilidade
#### 🔒 Reconhecer Ameaças e Eventos de Segurança
#### 📊 Tomar Decisões Baseadas em Dados
#### 💰 Criar Soluções Custo-efetivas

## 🌩️ Amazon CloudWatch

### 🌐 Visibilidade usando o CloudWatch

Recursos da AWS criam dados que você pode monitorar através de métricas, logs, tráfego de rede, eventos e mais. Esses dados vêm de componentes que são distribuídos por natureza, o que pode dificultar a coleta dos dados necessários se você não tiver um local centralizado para revisar tudo. A AWS centraliza a coleta de dados para você com um serviço chamado CloudWatch.

CloudWatch é um serviço de monitoramento e observabilidade que coleta seus dados de recursos e fornece insights acionáveis sobre suas aplicações. Com o CloudWatch, você pode responder a mudanças de desempenho em todo o sistema, otimizar o uso de recursos e obter uma visão unificada da saúde operacional.

Você pode usar o CloudWatch para:

- 🔍 Detectar comportamentos anômalos em seus ambientes.
- 🚨 Definir alarmes para alertá-lo quando algo estiver errado.
- 📊 Visualizar logs e métricas com o Console de Gerenciamento da AWS.
- 🔄 Tomar ações automatizadas como escalar.
- 🛠️ Solucionar problemas.
- 🔎 Descobrir insights para manter suas aplicações saudáveis.

### ⚙️ Como o CloudWatch Funciona

Com o CloudWatch, tudo o que você precisa para começar é uma conta AWS. É um serviço gerenciado que você pode usar para monitoramento sem gerenciar a infraestrutura subjacente. O aplicativo de diretório de funcionários é construído com vários serviços AWS trabalhando juntos como blocos de construção. Monitorar os serviços individualmente pode ser desafiador. Felizmente, o CloudWatch atua como um local centralizado onde métricas são coletadas e analisadas. Muitos serviços AWS enviam automaticamente métricas para o CloudWatch gratuitamente a uma taxa de 1 ponto de dados por métrica a cada 5 minutos. Isso é chamado de monitoramento básico, e dá visibilidade aos seus sistemas sem custo extra. Para muitas aplicações, o monitoramento básico é adequado.

Para aplicações executando em instâncias EC2, você pode obter mais granularidade postando métricas a cada minuto em vez de a cada 5 minutos usando uma funcionalidade chamada monitoramento detalhado. O monitoramento detalhado tem um custo adicional. Para mais informações sobre preços, consulte "Amazon CloudWatch Pricing" na seção de Recursos no final desta lição.

### 📈 Métricas Personalizadas

Suponha que você tenha uma aplicação e queira registrar o número de visualizações de página que seu site recebe. Como você registraria essa métrica com o CloudWatch? Primeiro, é uma métrica a nível de aplicação. Isso significa que não é algo que a instância EC2 enviaria ao CloudWatch por padrão. É aí que entram as métricas personalizadas. Com métricas personalizadas, você pode publicar suas próprias métricas no CloudWatch.

Se você quiser obter uma visibilidade mais granular, pode usar métricas personalizadas de alta resolução, que permitem coletar métricas personalizadas com resolução de até 1 segundo. Isso significa que você pode enviar 1 ponto de dados por segundo por métrica personalizada.

Alguns exemplos de métricas personalizadas incluem:

- ⏱️ Tempos de carregamento da página web.
- ❌ Taxas de erro de solicitação.
- 🔢 Número de processos ou threads em sua instância.
- 📊 Quantidade de trabalho realizada pela sua aplicação.

### 🖥️ Dashboards do CloudWatch

Uma vez que você provisiona seus recursos AWS e eles estão enviando métricas para o CloudWatch, você pode visualizar e revisar esses dados usando os dashboards do CloudWatch. Dashboards são páginas iniciais personalizáveis que você pode configurar para visualização de dados para uma ou mais métricas através de widgets, como gráficos ou texto.

### 🚨 Alarmes do CloudWatch

Você pode criar alarmes do CloudWatch para iniciar automaticamente ações com base em mudanças de estado sustentadas de suas métricas. Você configura quando os alarmes são acionados e a ação que é realizada.

## 📈 Otimização da Solução

### 📊 Disponibilidade

A disponibilidade de um sistema é normalmente expressa como uma porcentagem de tempo de atividade em um ano determinado ou como um número de noves. A tabela a seguir lista as porcentagens de disponibilidade com base no tempo de inatividade por ano e sua notação em noves:

| Disponibilidade (%) | Tempo de Inatividade por Ano | Notação em Nines |
|---------------------|-----------------------------|------------------|
| 90.0%               | 36.5 dias                   | 1 nine           |
| 99.0%               | 3.65 dias                   | 2 nines          |
| 99.9%               | 8.76 horas                  | 3 nines          |
| 99.99%              | 52.56 minutos               | 4 nines          |
| 99.999%             | 5.26 minutos                | 5 nines          |
| 99.9999%            | 31.5 segundos               | 6 nines          |

### 🤔 Por que melhorar a disponibilidade da aplicação?

Na aplicação atual, uma instância EC2 hospeda a aplicação. As fotos são servidas a partir do Amazon S3, e os dados estruturados são armazenados no Amazon DynamoDB. Essa única instância EC2 é um ponto único de falha para a aplicação.

Mesmo que o banco de dados e o Amazon S3 sejam altamente disponíveis, os clientes não têm como se conectar se a única instância se tornar indisponível. Uma maneira de resolver essa questão do ponto único de falha é adicionar mais um servidor em uma segunda Zona de Disponibilidade.

### 🛠️ Como melhorar a disponibilidade?

Para aumentar a disponibilidade da aplicação e eliminar o ponto único de falha, você pode implementar as seguintes melhorias:

1. **Adicionar uma Instância em Outra Zona de Disponibilidade:**
    - Distribuir a carga de trabalho entre várias instâncias EC2 em diferentes Zonas de Disponibilidade pode proteger sua aplicação contra falhas em uma única instância ou Zona de Disponibilidade.
  
2. **Utilizar Elastic Load Balancer (ELB):**
    - O ELB pode distribuir o tráfego de rede de entrada entre várias instâncias EC2 em uma ou mais Zonas de Disponibilidade, aumentando a tolerância a falhas.

3. **Configurar Auto Scaling:**
    - Com o Auto Scaling, você pode garantir que sua aplicação sempre tenha o número certo de instâncias EC2 em execução para lidar com a carga atual, aumentando automaticamente o número de instâncias durante picos de demanda e diminuindo durante períodos de baixa demanda.

4. **Implementar Backup e Recuperação:**
    - Configurar backups regulares dos dados no Amazon S3 e Amazon DynamoDB garante que, em caso de falha, você pode restaurar rapidamente os dados e minimizar o tempo de inatividade.

5. **Monitoramento e Alerta:**
    - Usar serviços como Amazon CloudWatch para monitorar métricas de desempenho e definir alarmes para alertar sobre problemas pode permitir ações proativas para manter a disponibilidade da aplicação.

Ao seguir essas práticas, você pode melhorar significativamente a disponibilidade da sua aplicação e proporcionar uma experiência mais confiável para seus usuários.

```markdown
## 🔄 Roteamento de Tráfego com Balanceamento de Carga Elástico (ELB)

### ⚖️ Balanceadores de Carga

O balanceamento de carga refere-se ao processo de distribuir tarefas entre um conjunto de recursos. No caso da aplicação do Diretório de Funcionários, os recursos são instâncias EC2 que hospedam a aplicação, e as tarefas são as solicitações enviadas. Você pode usar um balanceador de carga para distribuir as solicitações entre todos os servidores que hospedam a aplicação.

Para fazer isso, o balanceador de carga precisa pegar todo o tráfego e redirecioná-lo para os servidores de backend com base em um algoritmo. O algoritmo mais popular é o round robin, que envia o tráfego para cada servidor, um após o outro.

Um pedido típico para uma aplicação começa no navegador do cliente. A solicitação é enviada para um balanceador de carga. Em seguida, é enviada para uma das instâncias EC2 que hospedam a aplicação. O tráfego de retorno passa de volta pelo balanceador de carga e volta para o navegador do cliente.

Embora seja possível instalar sua própria solução de balanceamento de carga em instâncias EC2, a AWS fornece o serviço ELB para você.

### 🔧 Funcionalidades do ELB

O serviço ELB oferece uma grande vantagem sobre o uso de sua própria solução de balanceamento de carga. Principalmente, você não precisa gerenciar ou operar o ELB. Ele pode distribuir o tráfego de aplicação de entrada entre instâncias EC2, contêineres, endereços IP e funções Lambda. Outras funcionalidades principais incluem:

- **Modo Híbrido** – Como o ELB pode balancear a carga para endereços IP, ele pode funcionar em um modo híbrido, o que significa que também balanceia a carga para servidores on-premises.
- **Alta Disponibilidade** – O ELB é altamente disponível. A única opção que você deve garantir é que os alvos do balanceador de carga sejam implantados em várias Zonas de Disponibilidade.
- **Escalabilidade** – Em termos de escalabilidade, o ELB escala automaticamente para atender à demanda do tráfego de entrada. Ele lida com o tráfego de entrada e o envia para sua aplicação de backend.

### ✅ Verificações de Saúde

O monitoramento é uma parte importante dos balanceadores de carga porque eles devem direcionar o tráfego apenas para instâncias EC2 saudáveis. É por isso que o ELB suporta dois tipos de verificações de saúde:

- Estabelecendo uma conexão com uma instância EC2 de backend usando TCP e marcando a instância como disponível se a conexão for bem-sucedida.
- Fazendo uma solicitação HTTP ou HTTPS para uma página da web que você especificar e validando que um código de resposta HTTP é retornado.

Levar tempo para definir uma verificação de saúde adequada é crítico. Verificar apenas se a porta de uma aplicação está aberta não significa que a aplicação está funcionando. Também não significa que fazer uma chamada para a página inicial de uma aplicação é a maneira correta.

Por exemplo, a aplicação do Diretório de Funcionários depende de um banco de dados e do Amazon S3. A verificação de saúde deve validar todos os elementos. Uma maneira de fazer isso é criar uma página de monitoramento, como /monitor. Ela fará uma chamada para o banco de dados para garantir que pode se conectar, obter dados e fazer uma chamada para o Amazon S3. Em seguida, você aponta a verificação de saúde no balanceador de carga para a página /monitor.

### 🖥️ Tipos de Balanceadores de Carga

Existem três tipos de balanceadores de carga: Application Load Balancer (ALB), Network Load Balancer (NLB) e Gateway Load Balancer (GLB).

### 📌 Selecionando Entre os Tipos de ELB

Você pode selecionar entre os tipos de serviço ELB determinando quais funcionalidades são necessárias para sua aplicação. A tabela a seguir apresenta uma lista de algumas das principais funcionalidades dos balanceadores de carga. Para uma lista completa, consulte "Elastic Load Balancing features" na seção de Recursos no final desta lição.

| Funcionalidade                   | ALB       | NLB       | GLB                                 |
|----------------------------------|-----------|-----------|-------------------------------------|
| Tipo de Balanceador de Carga     | Camada 7  | Camada 4  | Gateway de Camada 3 e Balanceamento de Carga de Camada 4 |
| Tipo de Alvo                     | IP, instância, Lambda | IP, instância, ALB | IP, instância |
| Protocolo de Ouvintes            | HTTP, HTTPS | TCP, UDP, TLS | IP |
| Endereço IP Estático e Elastic IP| Sim       | Sim       | Sim                                 |
| Preservar Endereço IP de Origem  | Sim       | Sim       | Sim                                 |
| Resposta Fixa                    | Sim       |           |                                     |
| Autenticação de Usuário          | Sim       |           |                                     |
```
## 🔄 Amazon EC2 Auto Scaling

### ⚙️ Problemas de Capacidade

Você pode melhorar a disponibilidade e a acessibilidade adicionando mais um servidor. No entanto, todo o sistema pode se tornar indisponível novamente se houver um problema de capacidade. Esta seção aborda problemas de carga para sistemas ativos-passivos e ativos-ativos. Esses problemas são resolvidos por meio de escalonamento.

### 📈 Aumentar o Tamanho da Instância

Se muitas solicitações forem enviadas para um único sistema ativo-passivo, o servidor ativo ficará indisponível e, com sorte, falhará para o servidor passivo. Mas isso não resolve nada. Com sistemas ativos-passivos, você precisa de escalonamento vertical, o que significa aumentar o tamanho do servidor. Com instâncias EC2, você seleciona um tipo maior ou diferente de instância. Isso só pode ser feito enquanto a instância está em estado de parada. Neste cenário, os seguintes passos ocorrem:

1. Pare a instância passiva. Isso não impacta a aplicação, pois ela não está recebendo tráfego.
2. Mude o tamanho ou tipo da instância e, em seguida, inicie a instância novamente.
3. Direcione o tráfego para a instância passiva, tornando-a ativa.
4. Pare, altere o tamanho e inicie a instância ativa anterior, pois ambas as instâncias devem corresponder.

Quando o número de solicitações diminui, você deve realizar a mesma operação. Embora não haja muitos passos envolvidos, isso é na verdade muito trabalho manual. Outra desvantagem é que um servidor só pode escalar verticalmente até um certo limite. Quando esse limite é atingido, a única opção é criar outro sistema ativo-passivo e dividir as solicitações e funcionalidades entre eles. Isso pode exigir uma reescrita massiva da aplicação.

### 🔄 Sistema Ativo-Ativo

O sistema ativo-ativo pode ajudar quando há muitas solicitações, permitindo que você escale horizontalmente adicionando mais servidores. Para a aplicação funcionar em um sistema ativo-ativo, ela já foi criada como stateless, não armazenando sessões de clientes no servidor. Isso significa que ter dois ou quatro servidores não exigiria mudanças na aplicação. Seria apenas uma questão de criar mais instâncias quando necessário e desligá-las quando o tráfego diminuir. O serviço Amazon EC2 Auto Scaling pode cuidar dessa tarefa, criando e removendo automaticamente instâncias EC2 com base em métricas do Amazon CloudWatch.

### 🔄 Escalabilidade Tradicional vs. Auto Scaling

Com uma abordagem tradicional de escalabilidade, você compra e provisiona servidores suficientes para lidar com o tráfego em seu pico. No entanto, isso significa que, durante a noite, por exemplo, você pode ter mais capacidade do que tráfego, desperdiçando dinheiro. Desligar seus servidores à noite ou em momentos de tráfego mais baixo economiza apenas na eletricidade.

### ⚙️ Funcionalidades do Amazon EC2 Auto Scaling

O serviço Amazon EC2 Auto Scaling adiciona e remove capacidade para manter um desempenho estável e previsível ao menor custo possível. Ao ajustar a capacidade exatamente ao que sua aplicação usa, você paga apenas pelo que sua aplicação precisa. Isso significa que o Amazon EC2 Auto Scaling ajuda a escalar sua infraestrutura e garantir alta disponibilidade.

### 🌟 Funcionalidades do Auto Scaling

- **Escalabilidade Automática**: Escala automaticamente para dentro e para fora com base na demanda.
- **Escalabilidade Programada**: Escala com base em horários definidos pelo usuário.
- **Gerenciamento de Frota**: Substitui automaticamente instâncias EC2 não saudáveis.
- **Escalabilidade Preditiva**: Usa machine learning (ML) para ajudar a agendar o número ideal de instâncias EC2.
- **Opções de Compra**: Inclui vários modelos de compra, tipos de instância e Zonas de Disponibilidade.

### 🚀 Componentes do Amazon EC2 Auto Scaling

Existem três componentes principais do Amazon EC2 Auto Scaling, cada um respondendo a uma pergunta principal:

- **Template ou Configuração de Lançamento**: Quais recursos devem ser escalados automaticamente?
- **Grupos de Auto Scaling do Amazon EC2**: Onde os recursos devem ser implantados?
- **Políticas de Escalonamento**: Quando os recursos devem ser adicionados ou removidos?

### 📜 Templates e Configurações de Lançamento

Vários parâmetros são necessários para criar instâncias EC2—ID da Amazon Machine Image (AMI), tipo de instância, grupo de segurança, volumes adicionais do Amazon EBS e mais. Todas essas informações também são necessárias para o Amazon EC2 Auto Scaling criar a instância EC2 em seu nome quando houver necessidade de escalonamento. Essas informações são armazenadas em um template de lançamento.

Você pode usar um template de lançamento para lançar manualmente uma instância EC2 ou para usar com o Amazon EC2 Auto Scaling. Ele também suporta versionamento, que pode ser usado para rollback rápido se houver um problema ou a necessidade de especificar uma versão padrão do template. Dessa forma, enquanto iterando em uma nova versão, outros usuários podem continuar lançando instâncias EC2 usando a versão padrão até que você faça as alterações necessárias.

### 📈 Políticas de Escalonamento

Por padrão, um grupo de Auto Scaling será mantido na sua capacidade desejada inicial. Embora seja possível alterar manualmente a capacidade desejada, você também pode usar políticas de escalonamento.

Na lição de Monitoramento, você aprendeu sobre métricas e alarmes do CloudWatch. Você usa métricas para manter informações sobre diferentes atributos da sua instância EC2, como a porcentagem de CPU. Você usa alarmes para especificar uma ação quando um limite é atingido. Métricas e alarmes são o que as políticas de escalonamento usam para saber quando agir. Por exemplo, você pode configurar um alarme que indica quando a utilização da CPU está acima de 70% em toda a frota de instâncias EC2. Ele então invocará uma política de escalonamento para adicionar uma instância EC2.