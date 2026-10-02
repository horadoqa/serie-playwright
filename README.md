# Playwright — Série de Conceitos

 Uma série de conteúdos práticos sobre **Playwright**, reunindo os principais conceitos, recursos e padrões utilizados na automação de testes de aplicações web.

 O projeto foi criado com o objetivo de servir como um material de consulta e aprendizado para profissionais e estudantes de **QA, Quality Engineering e Automação de Testes**.

---

 ## Sobre o projeto

 Esta série apresenta os conceitos do Playwright de forma progressiva, começando pela instalação e estrutura básica de um teste e avançando para recursos mais específicos da ferramenta.

 A ideia é transformar cada conceito em uma referência simples, visual e prática, com:

 - Explicações objetivas.
- Exemplos de código.
- Comandos utilizados no Playwright.
- Boas práticas de automação.
- Exemplos de uso em cenários reais.
- Observações voltadas para QA.

 O projeto também utiliza uma identidade visual própria do **Hora do QA**, tornando cada conceito uma espécie de ficha de consulta rápida.

---

 ## Conteúdos da série

 A série está organizada em conceitos numerados para facilitar a progressão dos estudos.

 ### Conceito 01 — Instalação e execução

 Apresenta os principais comandos para iniciar um projeto Playwright, instalar os navegadores e executar os testes.

 Principais assuntos:

 - `npm init playwright@latest`
- `npx playwright install`
- `npx playwright test`
- `--headed`
- `--debug`
- `--ui`
- `show-report`

---

 ### Conceito 02 — Estrutura básica

 Apresenta a estrutura fundamental de um teste Playwright.

 Principais conceitos:

 - `test`
- `page`
- `expect`
- `async`
- `await`
- Navegação
- Interação
- Assertions

 Exemplo:

```
import { test, expect } from '@playwright/test';

test('meu teste', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page)
    .toHaveTitle(/Example/);
});
```

---

 ### Conceito 03 — Navegação

 Apresenta os recursos utilizados para controlar a navegação dentro dos testes.

 Principais comandos:

 - `page.goto()`
- `page.goBack()`
- `page.goForward()`
- `page.reload()`
- `page.waitForURL()`
- `page.waitForLoadState()`

---

 ### Conceito 04 — Locators

 Apresenta as principais estratégias para localizar elementos de uma página.

 Principais locators:

 - `getByRole()`
- `getByText()`
- `getByLabel()`
- `getByPlaceholder()`
- `getByTestId()`
- `locator()`

 O conteúdo também apresenta critérios para escolher locators mais estáveis e legíveis.

---

 ### Conceito 05 — Ações

 Apresenta as principais ações utilizadas para interagir com os elementos da aplicação.

 Principais ações:

 - `click()`
- `fill()`
- `press()`
- `check()`
- `uncheck()`
- `selectOption()`
- `setInputFiles()`

---

 ### Conceito 06 — Expect & Assertions

 Apresenta como validar o comportamento esperado da aplicação utilizando `expect()`.

 Principais assertions:

 - `toHaveTitle()`
- `toHaveURL()`
- `toBeVisible()`
- `toBeEnabled()`
- `toBeDisabled()`
- `toHaveText()`
- `toHaveCount()`

 Também são apresentados exemplos de assertions negativas utilizando `.not`.

---

 ### Conceito 07 — Locators avançados

 Apresenta técnicas para trabalhar com elementos semelhantes e tornar a localização mais específica.

 Principais recursos:

 - `filter()`
- `hasText`
- `first()`
- `last()`
- `nth()`
- `and()`

---

 ### Conceito 08 — Frames

 Apresenta como trabalhar com conteúdo localizado dentro de `iframe`.

 Principal recurso:

```
page.frameLocator()
```

 Também são apresentados exemplos de:

 - Localização de frames.
- Interação com elementos internos.
- Frames aninhados.
- Utilização de `getByRole()`.
- Utilização de `getByLabel()`.

---

 ### Conceito 09 — Abas e páginas

 Apresenta como trabalhar com múltiplas páginas e novas abas durante a execução dos testes.

 Principais conceitos:

 - `page.waitForEvent('popup')`
- `context().pages()`
- `context().newPage()`
- `waitForLoadState()`
- Validação de URL.
- Validação de título.

---

 ## Estrutura do projeto

 A estrutura foi organizada para que cada conceito possa ser consultado de maneira independente.

```
playwright-series/
│
├── README.md
├── style.css
├── logo.png
│
├── conceito-01/
│   └── index.html
│
├── conceito-02/
│   └── index.html
│
├── conceito-03/
│   └── index.html
│
├── conceito-04/
│   └── index.html
│
├── conceito-05/
│   └── index.html
│
├── conceito-06/
│   └── index.html
│
├── conceito-07/
│   └── index.html
│
├── conceito-08/
│   └── index.html
│
└── conceito-09/
    └── index.html
```

 > A estrutura acima representa a organização sugerida para os materiais da série. Os nomes das pastas podem ser adaptados à estrutura final do projeto.

---

 ## Objetivo

 O objetivo da série não é apenas apresentar comandos isolados, mas ajudar a construir uma visão prática de como o Playwright pode ser utilizado na automação de testes.

 A progressão dos conteúdos segue uma ideia simples:

```
Instalar
   ↓
Estruturar
   ↓
Navegar
   ↓
Localizar
   ↓
Interagir
   ↓
Validar
   ↓
Refinar
   ↓
Trabalhar com Frames
   ↓
Trabalhar com múltiplas páginas
```

 Dessa forma, cada novo conceito utiliza conhecimentos apresentados anteriormente.

---

 ## Tecnologias

 O projeto utiliza principalmente:

 - **Playwright**
- **JavaScript**
- **TypeScript**
- **HTML**
- **CSS**
- **Node.js**

 A documentação oficial do Playwright é a principal referência técnica para os exemplos apresentados na série.

---

 ## Para quem é este projeto?

 Este material pode ser útil para:

 - Pessoas iniciando em automação de testes.
- QA Engineers.
- Analistas de qualidade.
- Desenvolvedores interessados em testes automatizados.
- Profissionais migrando para automação.
- Estudantes de testes de software.
- Pessoas que desejam revisar conceitos do Playwright.

---

 ## Como utilizar

 Clone o projeto:

```
git clone <URL_DO_REPOSITORIO>
```

 Entre no diretório:

```
cd playwright-series
```

 Caso o projeto também contenha um ambiente Playwright executável, instale as dependências:

```
npm install
```

 Instale os navegadores:

```
npx playwright install
```

 Execute os testes:

```
npx playwright test
```

 Para visualizar o navegador durante a execução:

```
npx playwright test --headed
```

 Para utilizar o modo de depuração:

```
npx playwright test --debug
```

 Para utilizar o UI Mode:

```
npx playwright test --ui
```

---

 ## Filosofia da série

 A proposta do **Hora do QA** é apresentar os conceitos de forma direta, evitando transformar o aprendizado em uma lista de comandos para decorar.

 A ideia é entender:

 > **O que o recurso faz, quando utilizá-lo e como ele se encaixa em um teste automatizado.**

 Por isso, cada conceito procura combinar explicação, código e uma observação de QA.

---

 ## Próximos conceitos

 A série pode continuar evoluindo com outros recursos do Playwright, como:

 - Fixtures.
- Hooks.
- `beforeEach()` e `afterEach()`.
- Contextos de navegador.
- Cookies e armazenamento.
- Screenshots.
- Vídeos.
- Tracing.
- Downloads.
- Uploads avançados.
- APIs e `APIRequestContext`.
- Mocking e interceptação de rede.
- Page Object Model.
- Testes paralelos.
- Projetos e múltiplos browsers.
- Configuração do `playwright.config`.
- Relatórios.
- CI/CD.

---

 ## Hora do QA

 Este projeto faz parte da iniciativa **Hora do QA**, com foco em compartilhar conhecimento sobre **Qualidade de Software, Testes e Automação**.

 A série Playwright foi criada para funcionar como um material de estudo contínuo e também como uma referência rápida para o dia a dia de quem trabalha com automação.

 **Qualidade não é apenas encontrar bugs.\
 É construir confiança no software.**

