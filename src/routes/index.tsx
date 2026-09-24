import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Instagram, Menu, Search, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stadium.jpg";
import goalkeeperImage from "@/assets/news-goalkeeper.jpg";
import scenesImage from "@/assets/news-scenes.jpg";
import editorialImage from "@/assets/editorial-stadium.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Gigante Info — Notícias do Vasco" },
    { name: "description", content: "Notícias, análises, jogos e bastidores do Vasco da Gama em um portal independente." },
    { property: "og:title", content: "Gigante Info — Notícias do Vasco" },
    { property: "og:description", content: "Notícia rápida, opinião vascaína e cobertura independente." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Home,
});

type Story = { category: string; title: string; summary: string; image: string; readers: number };
const heroStories: Story[] = [
  { category: "Contratação", title: "Meia brasileiro assina por três temporadas", summary: "Chegada reforça o meio-campo para a sequência da temporada e movimenta os bastidores.", image: heroImage, readers: 342 },
  { category: "Jogo", title: "Time mostra força e decide nos minutos finais", summary: "Uma noite de pressão, entrega e festa da arquibancada em um duelo inesquecível.", image: goalkeeperImage, readers: 287 },
  { category: "Bastidores", title: "Preparação ganha intensidade antes do clássico", summary: "Comissão ajusta detalhes táticos e grupo fecha a semana com confiança renovada.", image: scenesImage, readers: 194 },
];

const topPosts = [
  ["Artilheiro abre a contagem na temporada", "12,4 mil", goalkeeperImage],
  ["Vestiário celebra vitória emocionante", "9,8 mil", scenesImage],
  ["Estratégia muda a escalação titular", "7,1 mil", heroImage],
  ["Arquibancada prepara grande festa", "5,3 mil", editorialImage],
  ["Calendário terá sequência decisiva", "4,0 mil", goalkeeperImage],
];

const news = [
  { category: "Jogo", title: "Defesa salva o resultado nos acréscimos", date: "24 SET 2026", readers: 210, image: goalkeeperImage, position: "center", large: true },
  { category: "Bastidores", title: "Técnico projeta a próxima sequência", date: "23 SET 2026", readers: 98, image: scenesImage, position: "left", large: true },
  { category: "Base", title: "Formação cresce e jovens ganham espaço", date: "22 SET 2026", readers: 64, image: scenesImage, position: "center", large: false },
  { category: "Torcida", title: "Arquibancada prepara festa especial", date: "21 SET 2026", readers: 142, image: scenesImage, position: "right", large: false },
  { category: "Análise", title: "Os números que explicam a evolução", date: "20 SET 2026", readers: 76, image: heroImage, position: "center", large: false },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="flex shrink-0 items-center gap-2" aria-label="Gigante Info">
    <span className="-skew-x-12 bg-primary px-2.5 py-1"><span className={`block skew-x-12 font-display font-semibold text-primary-foreground ${compact ? "text-lg" : "text-xl"}`}>GIGANTE</span></span>
    <span className={`font-display font-medium ${compact ? "text-lg" : "text-xl"}`}>INFO</span>
  </div>;
}

function LiveCount({ base }: { base: number }) {
  const [count, setCount] = useState(base);
  useEffect(() => {
    const timer = window.setInterval(() => setCount((value) => Math.max(12, value + Math.floor(Math.random() * 7) - 3)), 3500);
    return () => window.clearInterval(timer);
  }, []);
  return <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="live-dot size-1.5 rounded-full bg-live" />{count} lendo agora</span>;
}

function Home() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const story = heroStories[slide];
  useEffect(() => {
    const skeleton = window.setTimeout(() => setLoading(false), 850);
    const carousel = window.setInterval(() => setSlide((value) => (value + 1) % heroStories.length), 7000);
    return () => { window.clearTimeout(skeleton); window.clearInterval(carousel); };
  }, []);
  const shift = (direction: number) => setSlide((slide + direction + heroStories.length) % heroStories.length);

  return <div className="min-h-screen bg-background text-foreground antialiased">
    <div className="bg-dark-surface text-primary-foreground/70">
      <div className="mx-auto grid h-8 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 text-[10px] uppercase sm:px-6 sm:text-[11px]">
        <span className="hidden sm:block">Edição da tarde — 24/09/2026</span>
        <span className="flex items-center gap-1.5"><span className="live-dot size-1.5 rounded-full bg-live" />Ao vivo</span>
        <span className="justify-self-end">PT-BR</span>
      </div>
    </div>

    <header className="bg-card">
      <div className="mx-auto grid h-[68px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
        <Brand />
        <div className="flex shrink-0 items-center gap-1 text-muted-foreground sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="icon" aria-label="Instagram"><Instagram size={17} /></Button>
            <Button variant="ghost" size="icon" aria-label="TikTok"><span className="text-xs font-bold">TT</span></Button>
            <Button variant="ghost" size="icon" aria-label="YouTube"><Youtube size={18} /></Button>
            <Button variant="ghost" size="icon" aria-label="X"><X size={17} /></Button>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} aria-label="Abrir busca"><Search size={19} /></Button>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><Menu size={20} /></Button>
        </div>
      </div>
      {searchOpen && <form className="mx-auto flex max-w-7xl gap-2 border-t px-4 py-3 sm:px-6" onSubmit={(event) => event.preventDefault()}>
        <input autoFocus aria-label="Buscar notícias" placeholder="Buscar no Gigante Info..." className="h-10 min-w-0 flex-1 border bg-background px-3 text-sm outline-none focus:border-primary" />
        <Button type="submit">Buscar</Button>
      </form>}
    </header>

    <nav className="border-y bg-secondary">
      <div className="mx-auto hidden h-11 max-w-7xl items-center gap-7 px-6 font-display text-sm font-medium uppercase md:flex">
        <a className="border-b-2 border-primary py-3 text-foreground" href="#inicio">Início</a>
        <a className="flex items-center gap-1 py-3 text-muted-foreground hover:text-primary" href="#noticias">Notícias <ChevronDown size={13} /></a>
        <a className="py-3 text-muted-foreground hover:text-primary" href="#elenco">Elenco</a>
        <a className="py-3 text-muted-foreground hover:text-primary" href="#calendario">Calendário</a>
        <a className="py-3 text-muted-foreground hover:text-primary" href="#sobre">Sobre</a>
      </div>
      {menuOpen && <div className="grid px-4 py-2 font-display text-sm font-medium uppercase md:hidden">{["Início", "Notícias", "Elenco", "Calendário", "Sobre"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b py-3 last:border-0">{item}</a>)}</div>}
    </nav>

    <main>
      <section id="inicio" className="relative overflow-hidden bg-dark-surface">
        <div className="pointer-events-none absolute -right-32 top-0 h-full w-[420px] -skew-x-12 bg-primary/90" />
        <div className="pointer-events-none absolute right-32 top-0 h-full w-20 -skew-x-12 bg-primary-foreground/10" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:py-10">
          <div className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[560px]">
            <img key={story.image} src={story.image} alt="Estádio em noite de jogo" width={1440} height={912} className="absolute inset-0 size-full object-cover transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <span className="mb-3 inline-block -skew-x-12 bg-primary px-2.5 py-1"><span className="block skew-x-12 font-display text-xs font-semibold uppercase text-primary-foreground">{story.category}</span></span>
              <h1 className="headline-balance max-w-[24ch] font-display text-4xl font-semibold uppercase leading-none text-primary-foreground sm:text-5xl lg:text-6xl">{story.title}</h1>
              <p className="mt-3 max-w-[52ch] text-sm text-primary-foreground/75 sm:text-base">{story.summary}</p>
              <div className="mt-4 text-xs text-primary-foreground/80"><LiveCount base={story.readers} /></div>
            </div>
            <div className="absolute right-4 top-4 flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => shift(-1)} className="bg-dark-surface/60 text-primary-foreground hover:bg-primary" aria-label="Notícia anterior"><ChevronLeft /></Button>
              <Button variant="ghost" size="icon" onClick={() => shift(1)} className="bg-dark-surface/60 text-primary-foreground hover:bg-primary" aria-label="Próxima notícia"><ChevronRight /></Button>
            </div>
            <div className="absolute bottom-3 right-4 hidden gap-1 sm:flex">{heroStories.map((_, index) => <button key={index} onClick={() => setSlide(index)} aria-label={`Ir ao destaque ${index + 1}`} className={`h-1 ${index === slide ? "w-8 bg-primary" : "w-4 bg-primary-foreground/30"}`} />)}</div>
          </div>
          <aside className="flex flex-col justify-center gap-4 py-4 text-primary-foreground lg:pl-4">
            <span className="font-display text-xs font-semibold uppercase text-primary">Transmissão ao vivo</span>
            <h2 className="headline-balance font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl">Classificação muda em jogo decisivo</h2>
            <p className="max-w-md text-sm text-primary-foreground/60">Placar, chances e reação da torcida em tempo real enquanto a bola rola.</p>
            <div className="flex flex-wrap gap-3"><Button>Inscreva-se no YouTube</Button><Button variant="outline" className="text-primary-foreground">Siga no Instagram</Button></div>
          </aside>
        </div>
      </section>

      <section className="bg-dark-surface text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <span className="font-display text-sm font-semibold uppercase">Gigante Info nas redes</span>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase text-primary-foreground/55">{["Instagram · 128K", "YouTube · 89K", "X · 42K", "TikTok · 31K"].map((text) => <span key={text} className="border border-primary-foreground/15 px-3 py-1.5">{text}</span>)}</div>
        </div>
      </section>

      <section className="border-b bg-card section-rise">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6">
          <div className="mb-6 flex items-end justify-between"><h2 className="font-display text-3xl font-semibold uppercase">Top Posts da Semana</h2><span className="hidden text-xs uppercase text-muted-foreground sm:block">Ranking 1–5</span></div>
          <div className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-5 md:overflow-visible">
            {topPosts.map(([title, views, image], index) => <article key={title} className="flex min-w-[250px] snap-start gap-3 md:min-w-0">
              <span className="font-display text-5xl font-bold leading-none text-primary">{index + 1}</span>
              <div className="min-w-0"><img src={image} alt="" width={512} height={512} loading="lazy" className="mb-2 size-20 object-cover" /><h3 className="font-display text-sm font-semibold uppercase leading-tight">{title}</h3><span className="text-xs text-muted-foreground">{views} visualizações</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="noticias" className="section-rise">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-7 flex items-center gap-4"><h2 className="font-display text-3xl font-semibold uppercase">Notícias</h2><span className="h-px flex-1 bg-border" /></div>
          {loading ? <div className="grid gap-5 md:grid-cols-2"><div className="skeleton-sheen relative aspect-[16/10] overflow-hidden bg-muted" /><div className="skeleton-sheen relative aspect-[16/10] overflow-hidden bg-muted" /></div> : <div className="grid gap-x-5 gap-y-8 md:grid-cols-6">
            {news.map((item, index) => <article key={item.title} className={`group ${index < 2 ? "md:col-span-3" : "md:col-span-2"}`}>
              <div className={`overflow-hidden ${index < 2 ? "aspect-[16/9]" : "aspect-[4/3]"}`}><img src={item.image} alt="Cena de cobertura esportiva" width={1200} height={704} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-[1.035]" style={{ objectPosition: item.position }} /></div>
              <span className="mt-3 inline-block -skew-x-12 bg-primary px-2 py-0.5"><span className="block skew-x-12 font-display text-[11px] font-semibold uppercase text-primary-foreground">{item.category}</span></span>
              <h3 className={`headline-balance mt-2 font-display font-semibold uppercase leading-tight ${index < 2 ? "text-2xl" : "text-xl"}`}>{item.title}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground"><span>{item.date}</span><LiveCount base={item.readers} /><button className="ml-auto font-display font-semibold uppercase text-primary">Leia mais</button></div>
            </article>)}
          </div>}
          <div className="mt-9 text-center"><Button variant="outline">Ver mais notícias</Button></div>
        </div>
      </section>

      <section className="bg-card section-rise">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3">
          {[{icon:"IG", title:"Siga no Instagram", copy:"Bastidores, fotos e enquetes diárias com a comunidade.", action:"Seguir"},{icon:"YT", title:"Inscreva-se no YouTube", copy:"Análises, entrevistas e debates depois de cada rodada.", action:"Inscrever-se"},{icon:"WA", title:"Entre no WhatsApp", copy:"Notícia rápida direto no seu celular, sem demora.", action:"Entrar"}].map((promo) => <article key={promo.icon} className="border p-6 transition hover:-translate-y-1 hover:editorial-shadow"><span className="font-display text-3xl font-bold text-primary">{promo.icon}</span><h3 className="mt-3 font-display text-xl font-semibold uppercase">{promo.title}</h3><p className="mt-2 text-sm text-muted-foreground">{promo.copy}</p><Button className="mt-5" size="sm">{promo.action}</Button></article>)}
        </div>
      </section>

      <section className="relative min-h-[480px] overflow-hidden bg-dark-surface text-primary-foreground">
        <img src={editorialImage} alt="Estádio lotado durante uma noite especial" width={1920} height={912} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-4 py-16 sm:px-6">
          <span className="w-fit -skew-x-12 bg-primary px-3 py-1"><span className="block skew-x-12 font-display text-xs font-semibold uppercase">Especial da Semana</span></span>
          <h2 className="headline-balance mt-4 max-w-[17ch] font-display text-5xl font-semibold uppercase leading-none sm:text-6xl">A história de uma arquibancada que nunca para</h2>
          <p className="mt-4 max-w-xl text-sm text-primary-foreground/70 sm:text-base">Uma reportagem sobre memórias, personagens e a paixão que atravessa gerações.</p>
          <Button variant="outline" className="mt-6 w-fit text-primary-foreground">Ler o especial</Button>
        </div>
      </section>

      <section className="bg-primary"><p className="mx-auto max-w-7xl px-4 py-7 text-center font-display text-2xl font-semibold uppercase text-primary-foreground sm:text-3xl">Notícia rápida. Opinião vascaína.</p></section>
    </main>

    <footer id="sobre" className="bg-dark-surface text-primary-foreground/55">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Brand compact /><p className="mt-4 max-w-xs text-sm">Portal independente de notícias, opinião e cobertura da torcida.</p></div>
          {[["Notícias","Últimas","Exclusivas","Arquivo"],["Categorias","Jogos","Elenco","Bastidores"],["Contato","Imprensa","Publicidade","Sobre o portal"]].map(([heading,...links]) => <div key={heading}><h3 className="font-display text-sm font-semibold uppercase text-primary-foreground">{heading}</h3><ul className="mt-3 space-y-2 text-sm">{links.map((link) => <li key={link}><a href="#inicio" className="hover:text-primary-foreground">{link}</a></li>)}</ul></div>)}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs"><span>© 2026 Gigante Info — conteúdo independente.</span><div className="flex gap-4"><Instagram size={16} /><Youtube size={17} /><X size={16} /></div></div>
      </div>
    </footer>
  </div>;
}
