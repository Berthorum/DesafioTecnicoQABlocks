# Desafio Técnico (Assistente de QA - Blocks)

## 🌟 Objetivo

O objetivo do desafio é automatizar o fluxo de cadastro de usuários no sistema da empresa Blocks na sua página de registro (https://www.blocksrvt.com/pt/registrar), garantindo que o formulário funcione corretamente nos cenários mínimos obrigatórios exigidos. Poderia ser utilizado para realizar essa automação qualquer framework de automação do ecossistema Node.js (Cypress,
Playwright, Selenium + JavaScript/TypeScript e etc). Foi escolhido o **Playwright** para realizar essa tarefa.

Os cenários de teste (Condições de Teste) mínimos obrigatórios foram os seguintes:

**1. Cadastro com sucesso**
   - Preencher todos os campos corretamente.
   - Aceitar os termos de uso.
   - Submeter o formulário.
   - Validar que o cadastro foi realizado (mensagem, redirecionamento ou
feedback visual).

**2. Email inválido**
 - Informar um email inválido.
 - Validar mensagem de erro.

**3. Senha e confirmação diferentes**
 - Informar senhas diferentes.
 - Validar erro exibido.
  
**4. Termos de uso**
 - Tentar cadastrar sem aceitar os termos.
 - Validar que o cadastro não é realizado.

Foram adicionados uma nova condição de teste (n° 5) e um novo caso de teste para a condição de teste n° 3. Foram elas:

**5. Nome e Sobrenome inválidos**
    
Caso de Teste 01:
 - Informar nome e sobrenome com único caractere.
 - Validar mensagem de erro.

Caso de Teste 02:
 - Preencher formulário com dados válidos porém nome e sobrenome com caractere especial único.
 - Submeter formulário.
 - Validar mensagem de erro.

**Caso de Teste (Informar senha e confirmação de senha diferentes sem ter preenchido campos anteriores do formulário)**
 - Pré-condição de Teste: Não ter preenchido nenhum outro campo do formulário.
 - Informar senhas diferentes.
 - Validar erro exibido.
  

## 💡 Estratégia de Testes

Podemos considerar que uma Estratégia de Testes é uma visão de alto nível e geral do que será testado de um sistema ou funcionalidade(s). Pensando nisso, foi criada uma estratégia de testes avaliando algumas características: Abordagem de Testes, Tipos de Testes, Ferramentas e Massas.

- **Abordagem de Testes**: Foi utilizado Testes Exploratórios como abordagem de testes em virtude de não possuir documentações ou outros artefatos relacionados à aplicação.
- **Tipos de Testes**: Pelo escopo do desafio e condições de teste fornecidas os testes funcionais é o tipo de teste que deve ser escolhido.
- **Ferramentas**: Para IDE (Visual Studio Code), Framework de Automação de Testes (Playwright), Versionamento e Entrega (Git/Github), Planejamento e Criação de Artefatos não relacionados à automação (Google Sheets e Google Docs) Ferramenta de Gestão de Testes (Qase).
- **Massas**: Foram pré-definidas as massas de testes para os casos de teste nas condições de teste descritas, a fim de padronizar a execução dos testes.

Abaixo temos um Mapa Mental que exemplifica as características apresentadas:

![Mapa Mental - Estratégia de Testes](/images/Cadastro%20do%20Usuário.png)

O Mapa de Cobertura, Estratégia de Testes e os arquivos gerados pela plataforma de Gestão de Testes Qase (Roteiro de Testes e Reporte da Execução) podem ser acessados [AQUI](https://drive.google.com/drive/folders/18EYhuq9dHSzK_lwgD3_l6CkpIqrH7Sg0?usp=sharing)


## 📚 Processo de Teste
As etapas do Processo de Teste definido pelo ISTQB utilizadas no projeto foram as seguintes:

- **Planejamento**: Por ter construído uma Estratégia de Testes utilizamos um pouco da Etapa de Planejamento do Processo de Teste.
- **Análise**: Nesta etapa foi criado um Mapa de Cobertura após Análise da aplicação a partir de Testes Exploratórios e Testes de Fumaça.
- **Modelagem**: Foi criado um Roteiro de Testes para os Casos de Testes nesta etapa dentro da plataforma Qase.
- **Implementação**: Por ter utilizado uma ferramenta de Gestão de Testes já estamos realizando aspectos da etapa de implementação. Nesta etapa também foram implementados a Automação dos Testes.
- **Execução e Reporte**: Foram executados os testes automatizados implementados e emitido seus respectivos reports a partir dos relatórios de execução dos testes gerados pelo Framework de Automação de Testes Playwright.

## 🤖Testes Automatizados

Por ter iniciado os estudos sobre o Playwright recentemente, enxerguei o desafio como uma ótima oportunidade de utilizá-lo. Por conta disso, foi o Framework escolhido para a Automação dos Testes.

*"O Playwright é um framework de código aberto para testes de ponta a ponta (end-to-end) confiáveis em aplicações web modernas. É relativamente novo (lançado em 2020), mas mantém um cronograma de lançamentos ativo, adicionando novos recursos e corrigindo bugs em um ritmo acelerado. As tendências de testes do StateOfJS 2022 mostram que o Playwright está crescendo constantemente em popularidade e retenção dentro da comunidade de desenvolvimento web." - [Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/2-introduction-to-playwright)*


### 👨‍💻 Instalação e Configuração

### Pré-requisitos:
- Node 
- Git

### Instalação:

1. **Clone o repositório no diretório desejado**
```bash
git clone <url-repositório>
cd pasta-do-projeto
```


2. **Instale as dependências do Projeto**
   
    Com o repositório clonado, dentro da pasta do projeto, instale as dependências: 
```bash
npm install
```

### ⚙️ Execução dos Scripts de Teste

Os scripts de teste foram desenvolvidos com o Framework de Teste Playwright. Podemos executar os Scripts de diferentes formas nesse Framework

1.0 - **Execução de Todas as Suites de Teste**
```bash
npx playwright test
```

1.1 - **Executar uma Suite de Teste específica**
```bash
 npx playwright test "caminho-do-arquivo"
```
   
**Observações:**

Por padrão o Playwright executa os testes em modo Headless (Sem Interface Gráfica). Para ver o fluxo de execução dos testes na janela via Browser utilize a flag **--headed** no comando de execução dos Testes informado acima.

Outro ponto importante é que o Playwright executa os testes nas Engines de diversos Browsers simultaneamente. Para executar os testes em um browser específico use o seguinte comando:
```bash
 npx playwright test --project "tipo do browser"
```
As opções padrão de browser disponíveis são: **"chromium"** (Para browsers baseados em Chromium), **"firefox"** e **"webkit"**. Você pode configurar quais browsers serão executados no projeto na seção **projects** do arquivo de configuração do Playwright **"playwright.config.ts"**

A fim de facilitar a execução e analise dos scripts do projeto, foi realizada uma série de configurações para a execução das suites de teste, a partir do arquivo de configuração do Playwright **(playwright.config.ts)**. Foram elas:

- Definição de pasta de saída para evidências em vídeo da execução dos testes.
- Configuração de baseURL para ser utilizada em todos os casos de teste.
- Dimensões da Janela no modo Headed e do vídeo exportado pelo framework.
- Modo Headless false por padrão para evitar uso da flag **"--headed"** em todas as execuções via CLI.
- Configuração da Viewport para os principais browsers utilizados.

2 - **Analisar relatório da execução (report) dos Testes**

Para avaliar o report gerado pela execução dos testes basta abrir no browser desejado o arquivo **"index.html"** presente na pasta **"playwright-report"** na raiz do projeto.

Também é possível abrir o report via CLI do Playwright com o comando:

```bash
 npx playwright show-report
```
Com o comando acima ele irá abrir o report no browser padrão do sistema operacional do usuário.

## 🔗 Links Úteis

- [Microsoft Learn Playwright](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/)
- [Documentação Oficial do Playwright](https://playwright.dev/docs/intro)


