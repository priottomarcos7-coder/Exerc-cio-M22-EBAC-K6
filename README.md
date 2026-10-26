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
---

# English Version

# Performance Testing with K6 — Reading Hub

## Goal

Performance testing project conducted against the Reading Hub API to evaluate system behavior under different load levels and identify potential performance and stability risks.

## What I Developed

I developed several types of performance tests using K6:

- Smoke test to check whether the application is available.
- Load test to evaluate behavior under controlled load.
- Stress test to investigate system limits.
- Spike test to evaluate the response to sudden increases in load.
- Soak test to evaluate stability during extended execution.
- Flows related to application login.
- K6 dashboards and HTML report generation.
- Analysis of test results and metrics.

## Technologies

- K6
- JavaScript
- REST API
- Reading Hub

## Prerequisites

- K6 installed and available in PATH.
- Reading Hub API available for testing.
- Windows PowerShell for the environment-variable commands used in this project.

## Installation

Clone the repository:

```bash
git clone https://github.com/priottomarcos7-coder/Exerc-cio-M22-EBAC-K6.git
cd Exerc-cio-M22-EBAC-K6
```

Install K6 according to your operating system, then verify the installation:

```bash
k6 version
```

## Running the Tests

### Smoke Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="smoke-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run smoke-test.js
```

Configuration: 15 virtual users (VUs) for 15 seconds.

### Load Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="load-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run load-test.js
```

Configuration: 70 VUs for 2 minutes.

### Stress Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="stress-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run stress-test.js
```

The test gradually increases the load up to 200 VUs, maintains it, and then reduces it.

### Spike Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="spike-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run spike-test.js
```

The test evaluates the application's response to a sudden increase of up to 600 VUs.

### Soak Test

```powershell
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="soak-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run soak-test.js
```

The test maintains approximately 200 VUs for an extended period to evaluate stability.

## Testing Strategy

The tests cover different performance dimensions: availability, behavior under load, capacity limits, response to spikes, and long-term stability.

## Expected Results

K6 reports request metrics, duration, errors, and application behavior during each scenario, providing a basis for performance analysis.

## Repository

https://github.com/priottomarcos7-coder/Exerc-cio-M22-EBAC-K6

## Author

Marcos Priotto

Project developed as part of the Software Quality Engineering training program at EBAC.
