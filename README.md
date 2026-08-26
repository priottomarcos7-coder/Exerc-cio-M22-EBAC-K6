# Testes de Performance com K6 — Hub de Leitura

## Objetivo

Projeto de testes de performance realizado na API do Hub de Leitura, com o objetivo de avaliar o comportamento do sistema sob diferentes níveis de carga e identificar possíveis riscos relacionados a desempenho e estabilidade.

## O que desenvolvi

Neste projeto desenvolvi diferentes tipos de testes de performance utilizando K6:

- Smoke Test para verificar se a aplicação está disponível.
- Load Test para avaliar o comportamento com carga controlada.
- Stress Test para investigar o limite do sistema.
- Spike Test para avaliar a reação a aumentos repentinos de carga.
- Soak Test para avaliar estabilidade durante execução prolongada.
- Fluxos relacionados ao login da aplicação.
- Geração de dashboards e relatórios HTML do K6.
- Análise dos resultados e métricas apresentadas pelos testes.

## Tecnologias

- K6
- JavaScript
- API REST
- Hub de Leitura

## Pré-requisitos

- K6 instalado e disponível no PATH.
- API do Hub de Leitura disponível para os testes.
- Terminal PowerShell no Windows para os comandos com variáveis de ambiente utilizados neste projeto.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/priottomarcos7-coder/Exerc-cio-M22-EBAC-K6.git
cd Exerc-cio-M22-EBAC-K6
```

O K6 deve ser instalado conforme o sistema operacional. Depois, confirme a instalação:

```bash
k6 version
```

## Execução dos testes

### Smoke Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="smoke-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run smoke-test.js
```

Configuração utilizada: 15 VUs durante 15 segundos.

### Load Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="load-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run load-test.js
```

Configuração utilizada: 70 VUs durante 2 minutos.

### Stress Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="stress-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run stress-test.js
```

O teste utiliza aumento gradual até 200 VUs, manutenção da carga e posterior redução.

### Spike Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="spike-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run spike-test.js
```

O teste avalia a reação da aplicação a um aumento repentino até 600 VUs.

### Soak Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="soak-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run soak-test.js
```

O teste mantém aproximadamente 200 VUs por período prolongado para avaliar estabilidade.

## Estratégia de testes

Os testes foram planejados para avaliar diferentes dimensões de performance: disponibilidade, comportamento sob carga, limite de capacidade, resposta a picos e estabilidade prolongada.

## Resultado esperado

Os relatórios do K6 apresentam métricas de requisições, duração, erros e comportamento da aplicação durante cada cenário, servindo como base para análise de performance.

## Repositório

https://github.com/priottomarcos7-coder/Exerc-cio-M22-EBAC-K6

## Autor

Marcos Priotto

Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software na EBAC.