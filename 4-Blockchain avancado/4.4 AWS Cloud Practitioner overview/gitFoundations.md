# 🌟 Resumo Git Foundation

## 📝 Introdução ao Git e GitHub

### 🔄 Controle de Versão
- **Controle de versão**: Sistema que rastreia mudanças no código ao longo do tempo. Exemplo: Ao editar um arquivo de código, o controle de versão salva as alterações feitas, permitindo reverter ou visualizar o histórico.
- **Controle de versão distribuído**: Cada colaborador possui uma cópia completa do repositório, permitindo trabalho offline. Exemplo: Mesmo sem internet, você pode fazer commits e sincronizar mais tarde.
- **Git**: Ferramenta de controle de versão distribuído. Comandos básicos: `git init`, `git add`, `git commit`.
- **GitHub**: Plataforma de hospedagem baseada em Git que facilita a colaboração. Exemplo: Hospedando projetos, realizando revisões de código e contribuindo em projetos open source.
- **Diferença entre Git e GitHub**: Git é o software de controle de versão; GitHub é a plataforma que hospeda repositórios Git.
- **Repositório GitHub**: Local onde o código e seu histórico de versões ficam armazenados. Exemplo: Um projeto completo com seu histórico, branches e issues.
- **Commit**: Registro de uma alteração feita no código. Exemplo: `git commit -m "Corrige bug na função de login"`.
- **Branch**: Linha separada de desenvolvimento. Exemplo: Criar uma branch `feature/login` para desenvolver a funcionalidade de login sem interferir no código principal.
- **Remote**: Repositório remoto que é sincronizado com o local. Exemplo: `origin` geralmente refere-se ao repositório hospedado no GitHub.
- **GitHub Flow**: Fluxo de trabalho simples que envolve criar branches, fazer commits, abrir pull requests e mesclar. Exemplo: A cada nova funcionalidade ou correção, criar uma branch nova e abrir um pull request para revisão.

### 👤 Entidades do GitHub
- **Tipos de contas GitHub**: 
  - **Pessoal**: Contas de usuários individuais.
  - **Organização**: Conta para grupos colaborarem em projetos.
  - **Enterprise**: Soluções para empresas que precisam de segurança e escalabilidade.
- **Produtos GitHub para contas pessoais**:
  - **Free**: Repositórios privados ilimitados, colaboração básica.
  - **Pro**: Recursos avançados como GitHub Actions, repositórios privados com mais ferramentas.
- **Produtos GitHub para organizações**:
  - **Free for Organizations**: Funcionalidades básicas de colaboração.
  - **Teams**: Colaboração em equipe com permissões avançadas e ferramentas de CI/CD.
- **Opções de implantação do GitHub Enterprise**:
  - **GitHub Enterprise Cloud**: Hospedado na nuvem GitHub.
  - **GitHub Enterprise Server**: Instalado em servidores privados da empresa.
- **Perfil de usuário**: Metadados, conquistas (badges), README no perfil, repositórios favoritos e fixados, estrelas em projetos que você gosta.

### 📝 Markdown no GitHub
- **Barra de formatação de texto**: Disponível ao comentar em issues ou pull requests. Exemplo: Ao responder uma issue, você pode utilizar negrito, listas e links diretamente.
- **Markdown**: Linguagem simples para formatação de texto. Exemplo:
  - **Título**: `# Título`
  - **Lista**: `- Item`
  - **Link**: `[Texto](URL)`
- **Comandos `/` (slash)**: Atalhos para interagir rapidamente. Exemplo: `/assign @usuario` para atribuir uma issue a alguém.

### 💻 GitHub Desktop e Mobile
- **Diferença entre GitHub Desktop e GitHub.com**: 
  - **GitHub Desktop**: Aplicativo local que facilita commits e push/pull com uma interface gráfica.
  - **GitHub.com**: Interface web onde você visualiza e gerencia seu repositório.
- **Recursos do GitHub Desktop**: Sincronização com repositórios GitHub, visualização de diffs, commits e gerenciamento de branches.
- **Recursos do GitHub Mobile**: Revisão de pull requests, gerenciamento de notificações, respostas rápidas.

## 📂 Trabalhando com Repositórios GitHub

### 🏗️ Entendendo Repositórios GitHub
- **Componentes de um bom README**: 
  - Explicação do projeto
  - Como instalar e usar
  - Links para documentação, guias e licenças
  - Exemplo: `README.md` explicando como configurar um ambiente local.
- **Navegação básica**: Visualize branches, commits, contribuições e projetos.
- **Criação de um repositório**: Diretamente pelo GitHub com nome, descrição, licença e visibilidade (público/privado).
- **Templates de repositório**: Modelos reutilizáveis para criar novos projetos com estrutura pré-definida.
- **Manutenção de repositório**: Atualizações constantes, gerenciar issues, revisar pull requests.
- **Clonar repositório**: `git clone <url-do-repositório>` para fazer uma cópia local.
- **Criação de branch**: `git checkout -b nome-da-branch` para criar uma nova branch de desenvolvimento.
- **Adicionar arquivos ao repositório**: `git add <arquivo>` e `git commit` para salvar as mudanças.
- **Insights de repositório**: Gráficos que mostram contribuições, frequência de commits e atividade geral.
- **Estrela no repositório**: Use `Star` para salvar repositórios interessantes.

## 🤝 Funcionalidades de Colaboração

### 📝 Issues
- **Linkar PR a uma issue**: Relacione um pull request a uma issue usando palavras-chave como `Closes #issue`.
- **Criar uma issue**: Relatar bugs ou sugerir melhorias.
- **Diferença entre issue, discussão e PR**: 
  - **Issue**: Problema ou sugestão.
  - **PR**: Solicitação para mesclar código.
  - **Discussão**: Tópico aberto para diálogo.
- **Criar branch a partir de uma issue**: Facilita o rastreamento do progresso de uma tarefa.
- **Gerenciamento de issues**: Atribuir, marcar como resolvida, ou criar labels para categorizá-las.

### 🔄 Pull Requests
- **Pull Request (PR)**: Solicitação para mesclar código de uma branch para outra.
- **Branches `base` e `compare`**: `base` é a branch de destino; `compare` é a branch com as mudanças.
- **Commits no PR**: Mudanças associadas ao PR. Cada commit pode ser revisado separadamente.
- **Revisão de código**: Revisores podem usar `CODEOWNERS` para identificar responsáveis por partes do código. Opções de revisão: comentar, aprovar, solicitar mudanças.

### 💬 Discussões
- **Conversão de Discussões para Issues**: Transforme uma discussão em uma issue quando ela evoluir para uma tarefa.

### 🔔 Notificações
- **Gerenciamento de notificações**: Escolha o que seguir, seja mencionado em discussões e colabore em tempo real.

### 📝 Gists, Wikis e GitHub Pages
- **Gist**: Compartilhe pequenos trechos de código.
- **Wikis GitHub**: Documentação colaborativa interna.
- **GitHub Pages**: Publicação de sites estáticos diretamente de repositórios.

## 🚀 Desenvolvimento Moderno

### ⚙️ GitHub Actions
- **GitHub Actions**: Automatize testes, builds e deploys diretamente no GitHub.
- **Eventos que disparam Actions**: Commits, pull requests, issues fechadas.

### 🤖 GitHub Copilot
- **GitHub Copilot**: Assistente de código com inteligência artificial que sugere trechos de código enquanto você digita.

### 🛠️ GitHub Codespaces
- **GitHub Codespaces**: Ambientes de desenvolvimento na nuvem com suporte para dev containers.

## 📅 Gerenciamento de Projetos

### 📋 GitHub Projects
- **GitHub Projects**: Ferramenta de gerenciamento de tarefas em estilo kanban.
- **Labels e Milestones**: Organize issues com tags e datas importantes.
- **Automação com GitHub Actions**: Integre fluxos de trabalho de CI/CD diretamente com os projetos.

## 🔒 Privacidade, Segurança e Administração

### 🔐 Autenticação e Segurança
- **Segurança com 2FA**: Autenticação de dois fatores para proteger sua conta.
- **Permissões de acesso**: Controle granular sobre quem pode ver ou editar repositórios.

### 🛠️ Administração GitHub
- **Permissões de repositório**: Defina quem pode fazer o quê (leitura, escrita, admin).
- **Colaboradores**: Gerencie contribuições e revise permissões.

## 🌐 Benefícios da Comunidade GitHub

### 🔓 Open Source e GitHub Sponsors
- **Open Source**: Projetos abertos ao público para colaboração.
- **GitHub Sponsors**: Apoio financeiro a projetos open source.
- **InnerSource**: Práticas open source aplicadas dentro de uma empresa para melhorar a colaboração interna.
- **Repositórios Descobertos**: Aumente a visibilidade de seus projetos com boas práticas de README e organização.
