import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react'

const javaPatterns = [
  { name: 'Singleton', type: 'Criacional', description: 'Garante uma única instância compartilhada e fornece um ponto global de acesso.' },
  { name: 'Strategy', type: 'Comportamental', description: 'Encapsula algoritmos intercambiáveis, mantendo o contexto desacoplado da implementação.' },
  { name: 'Facade', type: 'Estrutural', description: 'Oferece uma interface simplificada para um conjunto complexo de subsistemas.' },
]

const journey = [
  'Apresentação inicial',
  'Padrões de Projeto',
  'Praticando com Java Puro: Singleton',
  'Praticando com Java Puro: Strategy',
  'Praticando com Java Puro: Facade',
  'Praticando com Spring: Introdução',
  'Praticando com Spring: Conhecendo o Projeto Base',
  'Praticando com Spring: Padrões de Projeto em uma API REST',
  'Desafio de Projeto',
  'Entendendo o Desafio',
]

const badges = ['Java', 'Spring Boot', 'Design Patterns', 'REST API', 'Maven', 'Clean Code']

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden="true">
        <div className="absolute -left-32 top-24 size-96 rounded-full bg-[#21c55d]/15 blur-3xl" />
        <div className="absolute right-0 top-0 size-[28rem] rounded-full bg-[#3282b8]/20 blur-3xl" />
      </div>

      <header className="relative border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Navegação principal">
          <a href="#inicio" className="flex items-center gap-3 font-mono text-sm font-bold tracking-tight">
            <span className="grid size-9 place-items-center rounded-lg bg-[#21c55d] text-[#07111f]"><Code2 /></span>
            <span>rafael-tozato<span className="text-[#21c55d]">/</span>patterns</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a className="transition-colors hover:text-white" href="#aprendizados">Aprendizados</a>
            <a className="transition-colors hover:text-white" href="#jornada">Jornada</a>
            <a className="transition-colors hover:text-white" href="#contato">Contato</a>
          </div>
          <a href="https://github.com/rafael-tozato" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold transition-colors hover:border-[#21c55d] hover:text-[#21c55d]"><Code2 data-icon="inline-start" /> GitHub</a>
        </nav>
      </header>

      <section id="inicio" className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pb-28 lg:pt-28">
        <div>
          <div className="mb-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#21c55d]/30 bg-[#21c55d]/10 px-3 py-1 font-mono text-xs text-[#78ef9b]">DESAFIO DE PROJETO · NÍVEL 16</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">XP 20.282 / 22.551</span>
          </div>
          <p className="mb-5 font-mono text-sm text-[#78ef9b]">&lt; consolidando_conhecimento /&gt;</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">Design Patterns com <span className="text-[#21c55d]">Java</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Dos clássicos GoF ao Spring Framework: uma entrega prática para transformar fundamentos de arquitetura em código reutilizável, desacoplado e preparado para produção.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#aprendizados" className="inline-flex items-center gap-2 rounded-lg bg-[#21c55d] px-5 py-3 text-sm font-bold text-[#07111f] transition-transform hover:-translate-y-0.5">Explorar projeto <ArrowUpRight data-icon="inline-end" /></a>
            <a href="https://github.com/digitalinnovationone/lab-padroes-projeto-java" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#21c55d] hover:text-[#78ef9b]"><Code2 data-icon="inline-start" /> Repositório base</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">{badges.map((badge) => <span key={badge} className="rounded-md bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300 ring-1 ring-inset ring-white/10">{badge}</span>)}</div>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-[#0d1b2d] p-5 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-yellow-400" /><span className="size-2.5 rounded-full bg-[#21c55d]" /><span className="ml-auto font-mono text-xs text-slate-500">patterns.java</span></div>
          <pre className="overflow-x-auto py-5 font-mono text-sm leading-7"><code><span className="text-[#c084fc]">public interface</span> <span className="text-[#67e8f9]">DesignPattern</span> {'{'}{`\n`}  <span className="text-[#c084fc]">void</span> <span className="text-[#fbbf24]">apply</span>(<span className="text-[#67e8f9]">Architecture</span> architecture);{`\n`}{'}'}{`\n\n`}<span className="text-[#c084fc]">@RestController</span>{`\n`}<span className="text-[#c084fc]">class</span> <span className="text-[#67e8f9]">PatternsApi</span> {'{'}{`\n`}  <span className="text-[#c084fc]">private final</span> <span className="text-[#67e8f9]">PatternService</span> service;{`\n`}{'}'}</code></pre>
          <div className="flex items-center gap-2 rounded-lg bg-[#21c55d]/10 px-3 py-2 text-xs text-[#78ef9b]"><CheckCircle2 /> Código orientado a boas práticas</div>
        </div>
      </section>

      <section id="aprendizados" className="relative border-y border-white/10 bg-[#0a1728] py-20"><div className="mx-auto max-w-6xl px-6"><div className="mb-12 max-w-2xl"><p className="font-mono text-sm text-[#78ef9b]">01 / FUNDAMENTOS</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">O que foi praticado</h2><p className="mt-4 leading-7 text-slate-400">A implementação percorre padrões GoF clássicos em Java puro e evolui para uma API REST estruturada com a produtividade do Spring.</p></div><div className="grid gap-4 md:grid-cols-3">{javaPatterns.map((pattern, index) => <article key={pattern.name} className="group rounded-xl border border-white/10 bg-[#0d1b2d] p-6 transition-colors hover:border-[#21c55d]/50"><div className="mb-8 flex items-center justify-between"><span className="grid size-10 place-items-center rounded-lg bg-[#21c55d]/10 font-mono text-sm text-[#78ef9b]">0{index + 1}</span><span className="font-mono text-xs text-slate-500">{pattern.type}</span></div><h3 className="text-xl font-bold text-white">{pattern.name}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{pattern.description}</p></article>)}</div></div></section>

      <section id="jornada" className="relative mx-auto max-w-6xl px-6 py-20"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-mono text-sm text-[#78ef9b]">02 / ROTEIRO COMPLETO</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Da teoria à API</h2><p className="mt-5 leading-7 text-slate-400">A entrega segue exatamente a jornada proposta no desafio, consolidando cada etapa em uma visão prática de engenharia de software.</p><div className="mt-8 flex items-center gap-3 rounded-xl border border-[#21c55d]/20 bg-[#21c55d]/5 p-4"><ShieldCheck className="text-[#21c55d]" /><span className="text-sm text-slate-300">Entrega estruturada para estudo e portfólio</span></div></div><ol className="grid gap-3">{journey.map((item, index) => <li key={item} className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"><span className="font-mono text-xs text-[#21c55d]">{String(index + 1).padStart(2, '0')}</span><span className="text-sm text-slate-300">{item}</span><CheckCircle2 className="ml-auto text-slate-600" /></li>)}</ol></div></section>

      <section className="border-y border-white/10 bg-[#0a1728] py-16"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center"><div><p className="font-mono text-sm text-[#78ef9b]">03 / REFERÊNCIAS</p><h2 className="mt-2 text-2xl font-bold text-white">Código aberto para continuar evoluindo</h2></div><div className="flex flex-wrap gap-3"><a href="https://github.com/digitalinnovationone/lab-padroes-projeto-java" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm text-slate-200 hover:border-[#21c55d] hover:text-[#78ef9b]">Java Puro <ExternalLink /></a><a href="https://github.com/digitalinnovationone/lab-padroes-projeto-spring" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm text-slate-200 hover:border-[#21c55d] hover:text-[#78ef9b]">Spring Framework <ExternalLink /></a></div></div></section>

      <footer id="contato" className="relative mx-auto max-w-6xl px-6 py-16"><div className="grid gap-10 md:grid-cols-[1fr_auto]"><div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-lg bg-[#21c55d] text-[#07111f]"><Sparkles /></span><div><p className="font-bold text-white">Rafael Ornelas Tozato</p><p className="text-sm text-slate-500">Full-stack · IA Aplicada · Engenharia de Dados</p></div></div><p className="mt-6 max-w-md text-sm leading-6 text-slate-400">Projeto desenvolvido como entrega do desafio Design Patterns com Java, conectando aprendizado, prática e documentação em um só lugar.</p></div><div><p className="mb-4 font-mono text-xs text-slate-500">ENCONTRE-ME ONLINE</p><div className="flex flex-wrap gap-3"><a aria-label="GitHub" href="https://github.com/rafael-tozato" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-[#21c55d] hover:text-[#78ef9b]"><Code2 /></a><a aria-label="LinkedIn" href="https://linkedin.com/in/rafael-ornelas-tozato" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-[#21c55d] hover:text-[#78ef9b]"><Network /></a><a aria-label="Medium" href="https://medium.com/@rafael-tozato" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-[#21c55d] hover:text-[#78ef9b]"><BookOpen /></a><a aria-label="Vercel" href="https://vercel.com/rafael-ornelas-tozatos-projects" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 hover:border-[#21c55d] hover:text-[#78ef9b]"><Network /></a></div></div></div><div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500"><span>© 2026 Rafael Ornelas Tozato</span><span className="flex items-center gap-2"><Terminal /> Feito com Java, Spring e curiosidade</span></div></footer>
    </main>
  )
}
