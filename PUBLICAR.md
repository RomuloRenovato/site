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

- **Textos dos serviços**, em `src/data/servicos.ts`. Buffet, tendas, mobiliário, credenciamento, transmissão, recursos humanos, bandas, identidade visual e os itens de "O que inclui" foram escritos de forma geral: confirmar se descrevem o que é oferecido de fato. Faltam fatos concretos (equipamentos, tamanhos de LED, maior público atendido).
- **Fotos e eventos**, em `src/data/fotos.ts` e `src/data/eventos.ts`: as 20 fotos enviadas em 03/11/2026 entraram com a descrição dada pela BobSom (evento, cidade, o que foi feito). O Encontro da Rede Nacional de Comunicação Pública (EBC, Rio de Janeiro) veio sem a descrição do serviço e aparece só com a cidade. Falta o **ano** de cada evento. Algumas fotos mostram marcas de terceiros (Sebrae, Unimed, Bluefit, Camilo dos Santos, IF Sudeste MG, EBC) e pessoas identificáveis (palestrantes e equipe): confirmar que podem aparecer.
- **Fotos da ficha do Google** que continuam no site (`src/assets/fotos/*.jpg`): tenda, buffet e salões ilustram os serviços de tendas, buffet e mobiliário.
- **Depoimentos**, em `src/data/depoimentos.ts`. São trechos reais do Google, com nome abreviado.
- **Facebook**: preencher `facebook` em `src/data/site.ts` com o endereço da página. Enquanto estiver vazio, o link não aparece.
- **Nota no Google**: "5,0" é texto fixo em `src/pages/index.astro`. Atualize se mudar.
- **Cidades** em `src/data/site.ts` (`regioes`): as da lista original (Uberaba, Lavras, Montes Claros, Viçosa) mais as cidades dos eventos enviados.

## Como atualizar

- **Eventos:** cada evento em `src/data/eventos.ts` tem nome, cidade, o que a BobSom fez, a foto e os slugs dos serviços relacionados (aparecem em "Onde já fizemos" na página do serviço). A ordem da lista é a ordem da galeria; a home mostra cinco deles (`mosaico` em `src/pages/index.astro`).
- **Clientes:** `src/data/clientes.ts`, só em texto. Logo de cliente, só com autorização dele.
- **Fotos:** coloque o arquivo em `src/assets/fotos/` (webp ou jpg, no tamanho original) e registre em `src/data/fotos.ts`; depois ligue a um evento ou a um serviço.
- **Contatos e link de avaliação:** `src/data/site.ts` e `src/data/google.json`. O QR é refeito a cada build.
- **Testar localmente:** `npm install` e depois `npm run dev`.
