Documentação - Funcionalidades Web

Site institucional CCA Governança Técnica
Stack: React, TanStack Start, Vite, deploy Vercel/Nitro


2. Funcionalidades Web

2.1 Formulário de contato funcional

O site dispõe de um Portal de Contato Técnico acessível em /contato, integrado à landing page institucional da CCA.

Características principais:

- Seleção inicial do contexto operacional do solicitante:
  - Construtora / Incorporadora (pós-obra e garantia predial)
  - Indústria (inspeção e reabilitação em ambiente operacional)
- Formulário em etapas (wizard), com validação progressiva dos campos obrigatórios
- Coleta estruturada de dados de contato: nome, empresa, cargo, WhatsApp e e-mail
- Coleta de informações qualificadoras conforme o fluxo escolhido (temas de operação, tipos de empreendimento, volume de atendimentos, condições do ativo, setor industrial, entre outros)
- Envio direto pelo navegador, sem dependência do cliente de e-mail do usuário
- Feedback visual de envio (carregando, sucesso ou erro)

Arquivos relacionados:

- Página de contato: src/routes/contato.tsx
- Portal e wizards: src/components/site/ContatoPortal.tsx
- Tipos do payload: src/lib/contact.ts

Tecnologias: React, TanStack Router/Start, componentes de formulário com validação por etapa.


2.2 Envio automático de e-mails (SMTP)

Ao concluir o formulário, os dados são processados no servidor pela rota POST /api/contact, que dispara o envio automático de e-mail via SMTP (protocolo padrão de correio eletrônico).

Fluxo de envio:

1. O usuário finaliza o wizard e confirma o envio
2. O front-end envia os dados em JSON para a API interna
3. O servidor monta o conteúdo do lead e envia e-mail para a caixa comercial/técnica da CCA
4. O e-mail do solicitante é definido como Reply-To, permitindo resposta direta

Conteúdo do e-mail automático:

- Identificador único do lead
- Data e hora do registro
- Fluxo selecionado (Construtora ou Indústria)
- Dados de contato completos
- Respostas de qualificação do formulário

Configuração (variáveis de ambiente):

- SMTP_HOST: servidor SMTP (ex.: smtp.seudominio.com.br)
- SMTP_PORT: porta SMTP (ex.: 587 ou 465)
- SMTP_USER: usuário autenticado no SMTP
- SMTP_PASS: senha ou app password do SMTP
- SMTP_FROM: remetente exibido (ex.: CCA contato@cca-engenharia.com.br)
- LEADS_TO_EMAIL: destinatário dos leads (padrão: contato@cca-engenharia.com.br)

Arquivos relacionados:

- Rota da API: src/routes/api/contact.ts
- Lógica SMTP e leads: src/server/contact-handler.ts
- Modelo de variáveis: .env.example

Stack: Node.js, Nodemailer, API serverless (deploy Vercel/Nitro).


2.3 Captura de leads / CRM

Cada envio do formulário gera um registro estruturado de lead, pronto para acompanhamento comercial e técnico.

Dados capturados por lead:

- ID único (ex.: lead_1710000000000_abc1234)
- Data e hora de criação (createdAt)
- Status inicial: novo
- Origem: portal-contato-web
- Fluxo e perfil (Construtora ou Indústria)
- Dados de contato: nome, empresa, cargo, WhatsApp, e-mail
- Qualificação: respostas do wizard conforme o fluxo escolhido

Integração com CRM - duas opções configuráveis:

1. Webhook CRM (CRM_WEBHOOK_URL)
   Encaminha o JSON do lead para ferramentas como Zapier, Make, HubSpot, Pipedrive ou CRM interno, permitindo automação de funil, notificações e atribuição de responsáveis.

2. Armazenamento em arquivo (LEADS_STORAGE_PATH)
   Persiste cada lead em formato JSON Lines (.jsonl), útil em ambiente de desenvolvimento ou servidor próprio.

Benefícios:

- Leads qualificados desde a primeira interação
- Rastreabilidade da origem (portal web)
- Dados padronizados para triagem comercial e técnica
- Base para follow-up, métricas de conversão e integração com pipeline de vendas


Resumo técnico

- Portal de contato: /contato (ContatoPortal.tsx) - Implementado
- API de envio: POST /api/contact - Implementado
- E-mail SMTP: src/server/contact-handler.ts - Implementado (requer .env)
- Captura de leads: JSON estruturado + webhook/arquivo - Implementado


Implantação em produção

1. Copie .env.example para .env (local) ou configure as variáveis no painel da Vercel (produção).
2. Preencha as credenciais SMTP do domínio cca-engenharia.com.br (ou provedor utilizado).
3. Opcional: configure CRM_WEBHOOK_URL para integrar com o CRM da empresa.
4. Opcional: em desenvolvimento local, use LEADS_STORAGE_PATH=./data/leads.jsonl para inspecionar os registros.

Sem as variáveis SMTP configuradas, o formulário exibirá mensagem de erro ao usuário e sugerirá contato direto por contato@cca-engenharia.com.br.
