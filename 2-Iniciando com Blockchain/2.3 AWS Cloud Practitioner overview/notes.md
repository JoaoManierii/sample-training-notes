# 📘 AWS Essentials Técnicos

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
