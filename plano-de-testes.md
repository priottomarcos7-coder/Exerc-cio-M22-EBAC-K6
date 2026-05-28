# Plano de teste de performance

## Criação do report e monitoria
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="html-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run test-report.js

## Executar Smoke Tests
- Validar se a aplicação (api, site, banco, etc.) está no ar

### Configuração do teste
- VUs: 15
- Tempo de 15 sgeundos

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="smoke-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run smoke-test.js

## Executar Load Test ( Teste de Performance )
- Validar se um fluxo aguenta com um certo número de usuários
- Validar fluxo de login

### Configuração do teste
- VUs: 70
- Tempo de 2 minutos

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="load-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run load-test.js

## Executar Stress Test ( Teste de Estresse )
- Validar o limite do sistema, para descobrir até onde aguenta antes de falhar.
- Validar fluxo de login

### Configuração do teste
- VUs: aumento gradativo
- Estágios,
    - rump-up de 1 até 200 virtual users em 3 minutos
    - mantém as 200 VUs durante 8 minutos
    - ramp-down de 200 VUs até 0 em 1 minuto

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="stress-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run stress-test.js

## Executar Spike Test ( Teste de Pico )
- Validar a reacção da aplicação e da infraestrutura com picos de requisições
- Validar fluxo de login

### Configuração do teste
- VUs: aumento repentino
- Estágios,
    - rump-up de 1 até 600 virtual users em 2 minutos
    - ramp-down de 600 VUs até 0 em 40 segundos

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="spike-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run spike-test.js

## Executar Soak Test ( Teste de Estabilidade )
- Validar o limite do sistema, para descobrir até onde aguenta antes de falhar.
- Validar fluxo de login

### Configuração do teste
- VUs: aumento gradativo
- Estágios,
    - rump-up de 1 até 200 virtual users em 1 minuto
    - mantém as 200 VUs durante 1 hora
    - ramp-down de 200 VUs até 0 em 1 minuto

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="soak-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run soak-test.js