# Gigante Info Frontend

Crie o front-end de um blog de notícias esportivas chamado "Gigante Info",

totalmente dedicado ao Club de Regatas Vasco da Gama. É um protótipo de

interface — os dados podem ser mockados/estáticos por enquanto.

## Identidade visual

- Paleta: preto e branco como base estrutural, vermelho como cor de

  destaque em badges de categoria, botões primários e detalhes de

  identidade (ex: uma barra fina diagonal). [Opcional: testar variação

  com laranja/âmbar nos botões de CTA, como referência a portais

  esportivos que usam essa cor para diferenciar ações do usuário —

  pode ser testado como alternativa ao vermelho puro.]

- Tipografia: títulos em caixa alta, peso bold/extra-bold, estilo

  condensado e impactante; corpo de texto em sans-serif limpa e legível.

- Logo: placeholder de texto "GIGANTE INFO" em caixa alta no header.

## Estrutura da Home

1. **Barra utilitária fina no topo** (preta), com espaço reservado para

   idioma/links secundários (pode ficar vazia no protótipo).

2. **Header branco**: logo à esquerda; à direita, ícones de redes sociais

   (Instagram, TikTok, YouTube, X) e busca.

3. **Menu secundário** em cinza claro, horizontal: Início, Notícias,

   Elenco, Calendário, Sobre — com dropdown sutil onde fizer sentido.

4. **Hero em carrossel**: 2-3 notícias em destaque, foto grande com

   overlay/gradiente escuro na base para legibilidade, badge de

   categoria em vermelho (ex: "CONTRATAÇÃO", "JOGO", "BASTIDORES"),

   título grande em caixa alta, resumo curto, setas de navegação

   laterais.

5. **Faixa de CTA preta** logo abaixo do hero — pode ser usada para

   divulgar as redes sociais do Gigante Info ("Siga no Instagram",

   "Inscreva-se no YouTube") em vez de conteúdo comercial.

6. **Seção "Top Posts da Semana"**: ranking numerado 1-5, números

   grandes em vermelho, miniatura + título + contador de views —

   como bloco de destaque logo após o CTA, antes do grid de notícias

   (dá mais visibilidade a esse elemento diferencial do blog).

7. **Seção "Notícias"**: título de seção com linha divisória fina,

   grid assimétrico — 2 cards grandes na primeira linha, 3 cards

   menores na segunda — cada card com imagem, badge de categoria,

   título em negrito, data, e botão "Leia mais" em vermelho. Botão

   centralizado "Ver mais notícias" ao final.

8. **Bloco de promoção interna** (3 caixas lado a lado, adaptado do

   conceito visto no site oficial): por exemplo "Siga no Instagram",

   "Inscreva-se no YouTube", "Entre no grupo do WhatsApp" — reaproveita

   a estrutura de 3 blocos promocionais, mas focado em crescimento das

   redes do Gigante Info em vez de produtos do clube.

9. **Banner de destaque editorial**: um espaço grande e visualmente

   forte (pode ser usado futuramente para uma pauta especial, ex:

   "Especial: 10 anos de um título" ou conteúdo em destaque da semana),

   com tipografia grande em caixa alta sobre imagem.

10. **Faixa preta com frase de impacto** em caixa alta — um slogan

    próprio do Gigante Info (ex: algo como "Notícia rápida, opinião

    vascaína" — sugestão, ajuste como quiser).

11. **Footer preto**: colunas de links (Notícias, Categorias, Sobre,

    Contato), ícones de redes sociais, copyright do Gigante Info.

    Sem escudo do clube — usar o wordmark do próprio blog.

## Marcador de visualizações "ao vivo"

- Badge discreto tipo "🔴 342 lendo agora" nos cards de notícia,

  com leve variação simulada periodicamente via JS.

## Comportamento e interatividade

- Hover com leve zoom/sombra nos cards.

- Transições suaves entre seções.

- Skeleton loading ao carregar cards.

## Responsividade

- Mobile-first: hero em carrossel de 1 item por vez, grid de notícias

  vira lista de 1 coluna, Top Posts vira carrossel horizontal, menu

  secundário colapsa em hambúrguer.

- Testar breakpoints mobile, tablet, desktop.

## Tom geral

Estrutura de portal esportivo profissional — com hierarquia clara de

seções (hero → destaque → notícias → institucional/redes → footer) —

mas com identidade e conteúdo 100% autorais do Gigante Info, sem

reproduzir logo, fotos, texto ou parceiros do site oficial do clube.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://gigante-info-portal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c3ba3924-9eec-5343-9a23-941463f5fb6a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
