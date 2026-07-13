Documentação - Infraestrutura / Publicação

Site institucional CCA Governança Técnica
Domínio oficial: https://www.cca-governancatecnica.com.br/
Stack: React, TanStack Start, Vite, Nitro, Node.js 22.x


1. Infraestrutura / Publicação

A publicação do site institucional da CCA utiliza hospedagem em nuvem com deploy contínuo, domínio próprio em .com.br e certificado SSL automático para acesso seguro via HTTPS.


1.1 Configuração de domínio (DNS)

Domínio principal:

- URL de produção: https://www.cca-governancatecnica.com.br/
- Domínio raiz (apex): cca-governancatecnica.com.br
- Provedor de registro: Registro.br (extensão .com.br)

O domínio está apontado para a plataforma de hospedagem Vercel, que responde pelo site em produção.

Registros DNS configurados:

Registro A (apex - cca-governancatecnica.com.br):
- Tipo: A
- Nome: @ (ou vazio, conforme painel do provedor)
- Valor: 76.76.21.21
- TTL: 3600 (1 hora)

Registro CNAME (www):
- Tipo: CNAME
- Nome: www
- Valor: cname.vercel-dns.com
- TTL: 3600 (1 hora)

Redirecionamento canônico:

- Acessos a https://cca-governancatecnica.com.br/ são redirecionados para https://www.cca-governancatecnica.com.br/
- Garante URL única para SEO, compartilhamento e certificado SSL

Registros adicionais (quando aplicável):

- MX: mantidos no provedor de e-mail corporativo (ex.: Google Workspace ou servidor do domínio cca-engenharia.com.br), sem alteração na migração do site
- TXT: registro SPF/DKIM do e-mail corporativo preservado no painel DNS
- TXT de verificação Vercel: adicionado durante a vinculação do domínio ao projeto (prova de propriedade)

Propagação DNS:

- Tempo estimado: 15 minutos a 48 horas após alteração no Registro.br
- Verificação: painel Vercel (Domains) e ferramentas como dig ou nslookup


1.2 Hospedagem / Deploy em produção

Plataforma de hospedagem:

- Provedor: Vercel
- Tipo: Serverless (funções Node.js + assets estáticos)
- Região de execução: edge global com preferência América do Sul (São Paulo)
- Framework detectado: TanStack Start (configurado em vercel.json)

Repositório e pipeline:

- Código-fonte: repositório Git (branch principal: main)
- Deploy automático: cada push na branch main dispara build e publicação em produção
- Deploy de preview: branches e pull requests geram URLs temporárias para homologação
- Comandos de build (vercel.json):
  - Instalação: npm install
  - Build: npm run build
- Runtime: Node.js 22.x (definido em package.json)

Artefatos gerados no build:

- Assets estáticos (HTML, CSS, JS, imagens) em .vercel/output/static
- Função serverless para SSR e API (POST /api/contact, envio SMTP, captura de leads)

Variáveis de ambiente em produção (painel Vercel):

- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, LEADS_TO_EMAIL
- CRM_WEBHOOK_URL (opcional)
- LEADS_STORAGE_PATH (opcional; em serverless recomenda-se webhook CRM em vez de arquivo local)

Ambientes:

- Produção: https://www.cca-governancatecnica.com.br/ (branch main)
- Preview: URLs geradas pela Vercel (ex.: cca-governanca-site-xxx.vercel.app)
- Desenvolvimento local: npm run dev (porta 8080)

Alternativa de deploy (opcional):

- O projeto inclui wrangler.jsonc para publicação em Cloudflare Workers, caso seja necessário migrar ou manter ambiente secundário
- Deploy principal e documentado: Vercel

Arquivos relacionados:

- Configuração Vercel: vercel.json
- Configuração Cloudflare (opcional): wrangler.jsonc
- Build Vite/Nitro: vite.config.ts
- Variáveis de ambiente modelo: .env.example


1.3 Certificado SSL

O site é servido exclusivamente via HTTPS. O certificado é provisionado e renovado automaticamente pela Vercel.

Características do certificado:

- Emissor: Let's Encrypt (via integração Vercel)
- Tipo: certificado TLS para domínio customizado
- Cobertura: www.cca-governancatecnica.com.br e cca-governancatecnica.com.br
- Renovação: automática, sem intervenção manual
- Protocolo mínimo: TLS 1.2
- Redirecionamento HTTP para HTTPS: habilitado por padrão

Ativação:

1. Domínio adicionado no painel Vercel (Project Settings > Domains)
2. Registros DNS apontando corretamente (item 1.1)
3. Após propagação DNS, a Vercel emite o certificado (geralmente em minutos)

Verificação:

- Acesso a https://www.cca-governancatecnica.com.br/ sem aviso de conexão insegura
- Cadeado ativo no navegador
- Status "Valid" no painel Vercel > Domains

Boas práticas aplicadas:

- HSTS recomendado via configuração Vercel quando o domínio estiver estável
- Links internos e metadados OG utilizam URL HTTPS do domínio oficial
- API /api/contact acessível apenas via HTTPS em produção


Resumo técnico

- Domínio oficial: https://www.cca-governancatecnica.com.br/ - Configurado
- DNS (A + CNAME Vercel): Configurado
- Hospedagem Vercel + deploy contínuo Git: Configurado
- Build TanStack Start / Node 22: Configurado
- Certificado SSL Let's Encrypt: Automático via Vercel
- Redirecionamento apex para www: Configurado


Checklist de publicação

1. Confirmar registros A e CNAME no Registro.br conforme item 1.1.
2. Vincular domínio ao projeto na Vercel e aguardar status Valid.
3. Configurar variáveis SMTP e CRM no painel de Environment Variables (Production).
4. Executar deploy da branch main e validar rotas: /, /contato, /sobre-nos.
5. Testar formulário de contato em produção (POST /api/contact).
6. Validar certificado SSL e redirecionamento HTTPS no domínio oficial.
