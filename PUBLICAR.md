# Como colocar o site no ar

O site fica hospedado na **HostGator** (plano P, cPanel `romul670`, servidor `sh00224.hostgator.com.br`), na pasta `public_html`. O código mora no repositório `RomuloRenovato/site`: a cada push na `main`, o workflow em `.github/workflows/deploy.yml` compila o Astro e envia a pasta `dist` por FTPS. O `public/.htaccess` força HTTPS e tira o `www`.

Histórico: em 31/10/2026 o site foi ao ar pelo GitHub Pages, mas o certificado do GitHub ficou preso num cache de DNS (o domínio tinha acabado de sair de uma suspensão por verificação do titular). Em 01/11/2026 a hospedagem voltou para a HostGator, que já tinha AutoSSL para os subdomínios.

## 1. DNS (Zone Editor do cPanel)

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | bobsom.com | 69.6.248.131 (IP compartilhado do plano) |
| CNAME | www | bobsom.com |

Os registros de e-mail (MX/SPF/DKIM do Titan), o TXT `google-site-verification=...` e o `_acme-challenge` do AutoSSL ficam como estão. Feito em 01/11/2026.

## 2. Certificado

Em cPanel > **SSL/TLS Status**, marque `bobsom.com` e clique em **Run AutoSSL**. Os subdomínios (`www`, `mail`, `cpanel`...) já tinham certificado; o do domínio raiz só pôde ser emitido depois que o A voltou para a HostGator. Renova sozinho.

## 3. Primeira publicação (feita à mão em 01/11/2026)

`npm run build`, zip da pasta `dist` (incluindo o `.htaccess`), upload pelo **Gerenciador de arquivos** do cPanel em `public_html` e **Extrair**. Sirva só para o primeiro envio; depois disso, o push cuida.

## 4. Publicação automática (FTP)

1. cPanel > **Contas de FTP**: crie uma conta (ex.: `site@bobsom.com`) com o diretório `public_html` como raiz.
2. No GitHub, em `RomuloRenovato/site` > Settings > Secrets and variables > Actions, cadastre `FTP_SERVER` (`bobsom.com` ou `69.6.248.123`, o "Hostname FTP" do Portal do Cliente), `FTP_USERNAME` e `FTP_PASSWORD`.
3. Push na `main`. A aba **Actions** mostra o envio; o action só manda o que mudou.

```bash
git push -u origin main
```

Só a conta `RomuloRenovato` tem acesso ao repositório.

## 5. Depois de no ar (feito em 31/10/2026)

- Google Business Profile: site https://bobsom.com e Instagram @bobsom.jf cadastrados (ficam "pendentes" até a revisão do Google, normalmente 10 minutos).
- Search Console: propriedade de domínio `bobsom.com` verificada por TXT no DNS (registro `google-site-verification=...` na zona: não remover) e sitemap `https://bobsom.com/sitemap-index.xml` enviado. Se a primeira leitura mostrar 0 páginas, reenvie o sitemap depois que o HTTPS estiver ativo.
- O repositório `RomuloRenovato/site` ainda tem o GitHub Pages ligado com o domínio bobsom.com; pode ser desligado em Settings > Pages (**Unpublish site**), já que o DNS não aponta mais para lá.
- Aponte a câmera para o QR de `/avaliar/` e confira se abre a avaliação da BobSom.

## O que revisar com a BobSom

- **Textos dos serviços**, em `src/data/servicos.ts`. Buffet, tendas, mobiliário, credenciamento, transmissão, recursos humanos, bandas e os itens de "O que inclui" foram escritos de forma geral: confirmar se descrevem o que é oferecido de fato.
- **Fotos reais**, em `src/assets/fotos/`: vieram da ficha do Google e podem incluir imagens enviadas por clientes. Algumas mostram marcas de terceiros (Sebrae, g1 e a conferência "Mulheres Edificadoras"): confirme se podem aparecer.
- **Fotos ilustrativas** (marcadas com `ilustrativa: true` em `src/data/fotos.ts`): `plateia-palestrante`, `plateia-conferencia`, `plateia-telao`, `transmissao-camera`, `iluminacao-varas`, `iluminacao-palco`, `feira-pavilhao` e `credenciamento-mesas` são do Unsplash (licença livre para uso comercial, sem atribuição). **Não são eventos da BobSom** e por isso não entram na galeria "nossos eventos"; aparecem só como fundo e ilustração dos serviços. Troque pelas fotos originais da empresa assim que tiver, principalmente a da abertura (`plateia-palestrante`).
- **Depoimentos**, em `src/data/depoimentos.ts`. São trechos reais do Google, com nome abreviado.
- **Facebook**: preencher `facebook` em `src/data/site.ts` com o endereço da página. Enquanto estiver vazio, o link não aparece.
- **Nota no Google**: "5,0" é texto fixo em `src/pages/index.astro`. Atualize se mudar.

## Como atualizar

- **Clientes e eventos:** a lista em `src/data/clientes.ts` tem os nomes passados em 31/10/2026 (Sesc, Sebrae, Banco do Brasil, Independência Shopping, Trade Hotel, Premier Park Hotel, Serjusmig, Rodoviário Camilo dos Santos e Catedral Metropolitana), só em texto. Logo de cliente, só com autorização dele. Eventos como festival de queijo ou festival de inverno **não** entraram: não achei registro público ligando a BobSom a eles. Quando confirmar o nome exato e o ano de cada um, acrescente na mesma lista com `servicos` (ex.: "Sonorização e palco").
- **Fotos:** coloque o arquivo em `src/assets/fotos/` e registre em `src/data/fotos.ts`.
- **Contatos e link de avaliação:** `src/data/site.ts` e `src/data/google.json`. O QR é refeito a cada build.
- **Testar localmente:** `npm install` e depois `npm run dev`.
