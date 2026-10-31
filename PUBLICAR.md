# Como colocar o site no ar

Siga nesta ordem. Nenhuma senha vai para o repositório.

## 1. Regularizar o domínio

Em 31/10/2026, o bobsom.com estava com os nameservers `NS1/NS2.VERIFICATION-HOLD.SUSPENDED-DOMAIN.COM`. Isso indica suspensão por verificação pendente, normalmente do e-mail do titular. Registrador: PublicDomainRegistry, com expiração em 06/04/2027.

1. Confirme que o domínio é da BobSom ou seu, procurando a compra no painel da HostGator.
2. Procure o e-mail de verificação (inclusive no spam) ou peça o reenvio ao suporte de onde ele foi registrado.
3. Se o domínio não for de vocês, escolha outro e troque `site` em `astro.config.mjs`, `public/robots.txt` e `public/.htaccess`.

## 2. Preparar a HostGator

1. Confirme no plano que bobsom.com é o domínio principal e que o site será servido a partir de `public_html`. Se ele for um domínio adicional, a pasta será outra: use essa pasta no passo 3.
2. Aponte os nameservers do domínio para os indicados no painel da HostGator.
3. Ative o SSL do domínio no cPanel e espere o certificado sair. O `.htaccess` força HTTPS: sem SSL, o site não abre.
4. Em cPanel > Contas FTP, crie uma conta com o diretório `public_html` como raiz.

## 3. Criar o repositório no GitHub

Crie um repositório vazio e, nesta pasta, rode os comandos abaixo trocando `SEU-USUARIO`:

```bash
git add .
```

```bash
git commit -m "Primeira versão do site"
```

```bash
git remote add origin https://github.com/SEU-USUARIO/bobsom-site.git
```

Antes do push, em **Settings > Secrets and variables > Actions**, cadastre:

| Secret | Valor |
| --- | --- |
| `FTP_SERVER` | Servidor FTP indicado no cPanel |
| `FTP_USERNAME` | Usuário completo da conta FTP |
| `FTP_PASSWORD` | Senha da conta FTP |

Depois publique:

```bash
git push -u origin main
```

A aba **Actions** mostra o andamento. A partir daí, cada push na `main` atualiza o site. Se o FTPS falhar por causa do certificado do servidor, troque `protocol: ftps` por `protocol: ftp` em `.github/workflows/deploy.yml` só se o suporte confirmar que não há outra opção.

## 4. Depois de no ar

- Em Google Business Profile, preencha o site da ficha com https://bobsom.com.
- Cadastre o sitemap `https://bobsom.com/sitemap-index.xml` no Google Search Console.
- Aponte a câmera para o QR de `/avaliar/` e confira se abre a avaliação da BobSom.

## O que revisar com a BobSom

- **Textos dos serviços**, em `src/data/servicos.ts`. Buffet, tendas, mobiliário, credenciamento, transmissão, recursos humanos, bandas e os itens de "O que inclui" foram escritos de forma geral: confirmar se descrevem o que é oferecido de fato.
- **Fotos reais**, em `src/assets/fotos/`: vieram da ficha do Google e podem incluir imagens enviadas por clientes. Algumas mostram marcas de terceiros (Sebrae, g1 e a conferência "Mulheres Edificadoras"): confirme se podem aparecer.
- **Fotos ilustrativas** (marcadas com `ilustrativa: true` em `src/data/fotos.ts`): `plateia-palestrante`, `plateia-conferencia`, `plateia-telao`, `transmissao-camera`, `iluminacao-varas`, `iluminacao-palco`, `feira-pavilhao` e `credenciamento-mesas` são do Unsplash (licença livre para uso comercial, sem atribuição). **Não são eventos da BobSom** e por isso não entram na galeria "nossos eventos"; aparecem só como fundo e ilustração dos serviços. Troque pelas fotos originais da empresa assim que tiver, principalmente a da abertura (`plateia-palestrante`).
- **Depoimentos**, em `src/data/depoimentos.ts`. São trechos reais do Google, com nome abreviado.
- **Facebook**: preencher `facebook` em `src/data/site.ts` com o endereço da página. Enquanto estiver vazio, o link não aparece.
- **Nota no Google**: "5,0" e "mais de 60 avaliações" são texto fixo em `src/pages/index.astro`. Atualize se mudarem.

## Como atualizar

- **Clientes e eventos:** a lista em `src/data/clientes.ts` tem os nomes passados em 31/10/2026 (Sesc, Sebrae, Banco do Brasil, Independência Shopping, Trade Hotel, Premier Park Hotel, Serjusmig, Rodoviário Camilo dos Santos e Catedral Metropolitana), só em texto. Logo de cliente, só com autorização dele. Eventos como festival de queijo ou festival de inverno **não** entraram: não achei registro público ligando a BobSom a eles. Quando confirmar o nome exato e o ano de cada um, acrescente na mesma lista com `servicos` (ex.: "Sonorização e palco").
- **Fotos:** coloque o arquivo em `src/assets/fotos/` e registre em `src/data/fotos.ts`.
- **Contatos e link de avaliação:** `src/data/site.ts` e `src/data/google.json`. O QR é refeito a cada build.
- **Testar localmente:** `npm install` e depois `npm run dev`.
