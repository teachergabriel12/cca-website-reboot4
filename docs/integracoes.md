Documentação - Integrações

Site institucional CCA Governança Técnica
Stack: React, TanStack Start, Vite, deploy Vercel/Nitro


4. Integrações

O site institucional da CCA foi estruturado para se integrar à operação da empresa por meio de persistência de dados e conexão com os módulos da plataforma técnica.


4.1 Integração com banco de dados

A persistência de dados no portal web ocorre de forma flexível, permitindo operação em ambiente serverless (Vercel) ou em servidor próprio, sem acoplar o front-end a um banco relacional específico.

Formas de persistência disponíveis:

1. Armazenamento em arquivo (LEADS_STORAGE_PATH)
   Cada lead enviado pelo formulário de contato é gravado em formato JSON Lines (.jsonl), um registro por linha. Indicado para desenvolvimento, homologação ou servidores com disco persistente.

2. Integração via CRM (CRM_WEBHOOK_URL)
   O lead estruturado é enviado por HTTP POST para um webhook externo (Zapier, Make, HubSpot, Pipedrive ou CRM proprietário), onde os dados são persistidos no banco de dados do sistema de gestão comercial.

3. Registro complementar por e-mail (SMTP)
   Cada lead gera e-mail automático para a equipe CCA, garantindo histórico operacional mesmo quando o armazenamento em arquivo não estiver habilitado.

Estrutura do registro persistido:

- ID único do lead
- Data e hora de criação
- Status inicial: novo
- Origem: portal-contato-web
- Fluxo (construtora ou industria)
- Dados de contato: nome, empresa, cargo, WhatsApp, e-mail
- Qualificação: respostas do wizard conforme o perfil selecionado

Fluxo de gravação:

1. O usuário conclui o formulário no portal de contato (/contato)
2. Os dados são enviados ao servidor (POST /api/contact)
3. O servidor monta o registro estruturado do lead
4. O lead é gravado em arquivo e/ou encaminhado ao CRM (conforme configuração)
5. Um e-mail de notificação é enviado à equipe CCA

Arquivos relacionados:

- Persistência e processamento: src/server/contact-handler.ts
- Tipos de dados: src/lib/contact.ts
- Variáveis de ambiente: .env.example

Variáveis de configuração:

- LEADS_STORAGE_PATH: caminho do arquivo .jsonl para gravação local
- CRM_WEBHOOK_URL: URL do webhook para persistência no CRM ou banco corporativo
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, LEADS_TO_EMAIL: envio de notificação por e-mail

Observação: a camada de persistência foi projetada para evolução futura para banco relacional (PostgreSQL, MySQL ou similar) sem alteração do contrato de dados utilizado pelo portal de contato.


4.2 Integração com módulos da plataforma

O site institucional funciona como vitrine e ponto de entrada para os módulos da operação CCA. A arquitetura front-end é modular e organizada por domínios de negócio.

Módulos e páginas do site:

- Landing institucional (/): apresentação da metodologia, fluxo operacional, pilares, benefícios e sistema técnico
- Portal de contato (/contato): qualificação de leads por perfil (Construtora/Incorporadora ou Indústria)
- Sobre nós (/sobre-nos): posicionamento institucional e áreas de atuação
- Navegação por seções: barra fixa com atalhos sincronizados ao scroll da página

Módulos da plataforma CCA apresentados no site:

- Gestão da garantia predial e pós-obra
- Dashboard com indicadores
- Kanban de chamados
- Chat integrado
- Upload de imagens e arquivos
- Tags e classificação de risco
- Notificações automáticas
- Histórico completo do ativo
- Links para ordens de serviço

Como os módulos se integram hoje:

- O site apresenta os módulos da plataforma nas seções institucionais (Solução, Sistema, Funcionalidades)
- O portal de contato encaminha leads qualificados para triagem comercial e técnica, alimentando o funil de entrada na operação
- A área do cliente (seção institucional) prepara o acesso à plataforma operacional (login e cadastro de operação)
- O mapa de seções (src/lib/siteSections.ts) centraliza a ordem e os identificadores das áreas do site, facilitando manutenção e expansão

Arquivos relacionados:

- Seções da landing: src/components/site/Sections.tsx
- Mapa de seções: src/lib/siteSections.ts
- Portal de contato: src/components/site/ContatoPortal.tsx
- Rotas principais: src/routes/index.tsx, src/routes/contato.tsx, src/routes/sobre-nos.tsx

Evolução prevista:

- Vincular os CTAs da área do cliente à URL da plataforma em produção (painel autenticado da CCA)
- Manter o site como canal de aquisição e a plataforma como ambiente operacional dos módulos técnicos


Resumo técnico

- Persistência de leads em arquivo JSONL: Implementado (opcional via LEADS_STORAGE_PATH)
- Persistência via CRM / banco externo: Implementado (opcional via CRM_WEBHOOK_URL)
- Módulos institucionais do site: Implementado (landing, contato, sobre nós)
- Apresentação dos módulos da plataforma CCA: Implementado (conteúdo e seções)
- Acesso operacional à plataforma autenticada: Previsto (CTAs preparados na área do cliente)


Configuração

1. Opcional: LEADS_STORAGE_PATH=./data/leads.jsonl para gravar leads em arquivo local.
2. Opcional: CRM_WEBHOOK_URL para encaminhar leads ao CRM ou banco de dados corporativo.
3. Configure SMTP no .env ou no painel da Vercel para notificação por e-mail da equipe.
4. Futuro: definir URL da plataforma operacional nos CTAs da área do cliente.
