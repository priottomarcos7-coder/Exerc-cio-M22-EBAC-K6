Os Testes foram realizados na api do projeto HUB DE LEITURA, segue abaixo comandos utilizados e imagens dos relatórios:

## Executar Smoke Tests
- Validar se a aplicação (api, site, banco, etc.) está no ar

### Configuração do teste
- VUs: 15
- Tempo de 15 sgeundos

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="smoke-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run smoke-test.js

<img width="1884" height="974" alt="image" src="https://github.com/user-attachments/assets/11d7adca-0685-4965-8121-69105cfc4847" />
<img width="1888" height="903" alt="image" src="https://github.com/user-attachments/assets/52de57ce-fc77-49e4-a1a6-e88d238c2543" />
<img width="1887" height="759" alt="image" src="https://github.com/user-attachments/assets/c89cd08d-2cb9-4752-8090-74a9635a508c" />
<img width="1888" height="715" alt="image" src="https://github.com/user-attachments/assets/f23f12cf-7383-45e6-8d47-673f9b4c19f5" />
<img width="1885" height="820" alt="image" src="https://github.com/user-attachments/assets/f1808f6f-25d7-40e5-8bd9-78b8a563935f" />


## Executar Load Test ( Teste de Performance )
- Validar se um fluxo aguenta com um certo número de usuários
- Validar fluxo de login

### Configuração do teste
- VUs: 70
- Tempo de 2 minutos

### Execução via terminal
$env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="load-test-report.html"; $env:K6_WEB_DASHBOARD_PERIOD="5s"; k6 run load-test.js

<img width="1882" height="835" alt="image" src="https://github.com/user-attachments/assets/a1f111ad-283d-4cef-8771-5aaee0033eb4" />
<img width="1886" height="795" alt="image" src="https://github.com/user-attachments/assets/5199720b-0166-4a13-a835-997a2fd46ac1" />
<img width="1891" height="670" alt="image" src="https://github.com/user-attachments/assets/7f9d6810-183a-4652-8b1a-991eb4a4df7d" />
<img width="1891" height="670" alt="image" src="https://github.com/user-attachments/assets/42f73bf2-71f2-4693-889a-0f1091738dc3" />
<img width="1889" height="630" alt="image" src="https://github.com/user-attachments/assets/5e1ff465-06fa-492a-96e8-ea01e8ff9204" />
<img width="1889" height="738" alt="image" src="https://github.com/user-attachments/assets/549c8b9d-f86d-4f8c-a847-2d0aeb455630" />


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

<img width="1886" height="968" alt="image" src="https://github.com/user-attachments/assets/7cd9c537-b05c-4bb5-bd7d-39d30663b896" />
<img width="1888" height="908" alt="image" src="https://github.com/user-attachments/assets/9ab63372-862c-4599-9d5c-1f4c236932b7" />
<img width="1886" height="740" alt="image" src="https://github.com/user-attachments/assets/6e9694d2-5b74-49c7-9902-10a671d4b53d" />
<img width="1890" height="729" alt="image" src="https://github.com/user-attachments/assets/1e93df97-33d2-418f-a563-56782f290317" />
<img width="1890" height="830" alt="image" src="https://github.com/user-attachments/assets/f4441560-a288-4c6a-9868-f48ff88657e5" />


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

<img width="1881" height="965" alt="image" src="https://github.com/user-attachments/assets/5f5288dc-56d1-4d6c-8e23-8e36a96e37d1" />
<img width="1886" height="897" alt="image" src="https://github.com/user-attachments/assets/f2cf0614-8678-4583-af58-069348081e8b" />
<img width="1889" height="721" alt="image" src="https://github.com/user-attachments/assets/c07e3a39-592d-4730-b221-8a715f3d4b0e" />
<img width="1892" height="713" alt="image" src="https://github.com/user-attachments/assets/853f97f0-18f9-46ce-8daf-c9378e9c450c" />
<img width="1888" height="827" alt="image" src="https://github.com/user-attachments/assets/af2242df-bd19-4a7f-aa47-64421a53cea5" />


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

<img width="1886" height="968" alt="image" src="https://github.com/user-attachments/assets/9f1e8b0a-9ba1-4ea5-9cdc-f453e2b7c1af" />
<img width="1886" height="968" alt="image" src="https://github.com/user-attachments/assets/0c977b8d-1264-4150-acb7-af0342f365f4" />
<img width="1884" height="707" alt="image" src="https://github.com/user-attachments/assets/b34373c4-59e2-4486-9740-b59eb5cba33b" />
<img width="1887" height="721" alt="image" src="https://github.com/user-attachments/assets/63b11148-2e73-4a30-b65b-ea9fda0d1d7c" />
<img width="1895" height="828" alt="image" src="https://github.com/user-attachments/assets/9d15c5f8-f0cf-4257-8273-9cf04592375b" />

