# Como colocar o site no ar

O site é publicado no **GitHub Pages** a partir do repositório `RomuloRenovato/site`: a cada push na `main`, o workflow em `.github/workflows/deploy.yml` compila o Astro e publica a pasta `dist`. O arquivo `public/CNAME` mantém o domínio bobsom.com.

## 1. Regularizar o domínio

Em 31/10/2026, o bobsom.com estava com os nameservers `NS1/NS2.VERIFICATION-HOLD.SUSPENDED-DOMAIN.COM`: suspensão por verificação pendente do e-mail do titular (registro feito pela HostGator/PublicDomainRegistry em 06/04/2026, vence em 06/04/2027). Enquanto isso não for resolvido, o domínio não abre em lugar nenhum.

1. No Portal do Cliente da HostGator, procure o aviso de verificação do domínio e reenvie o e-mail, ou abra um chamado.
2. Confirme o e-mail de verificação (olhe o spam).
3. Depois que os nameservers voltarem aos da HostGator, configure o DNS do passo 3.

## 2. GitHub Pages

Em **Settings > Pages** do repositório:

- **Source:** GitHub Actions (não "Deploy from a branch").
- **Custom domain:** bobsom.com.
- **Enforce HTTPS:** ligar assim que o DNS estiver certo (o GitHub emite o certificado sozinho).

## 3. DNS (Zone Editor do cPanel, ou onde estiver a zona do domínio)

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | bobsom.com | 185.199.108.153 |
| A | bobsom.com | 185.199.109.153 |
| A | bobsom.com | 185.199.110.153 |
| A | bobsom.com | 185.199.111.153 |
| CNAME | www | romulorenovato.github.io |

Remova qualquer registro A antigo de `bobsom.com` apontando para a HostGator (69.6.248.131). Os registros de e-mail (MX) ficam como estão.

## 4. Publicar

```bash
git push --force -u origin main
```

A aba **Actions** mostra o andamento. O primeiro deploy leva uns 2 minutos; enquanto o DNS não estiver pronto, o site já fica acessível em https://romulorenovato.github.io/site/ só se o domínio personalizado for removido, então o teste real é pelo bobsom.com.

## 5. Depois de no ar

- Em Google Business Profile, preencha o site da ficha com https://bobsom.com.
- Cadastre o sitemap `https://bobsom.com/sitemap-index.xml` no Google Search Console.
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
