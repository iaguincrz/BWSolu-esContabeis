/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CheckCircle2, 
  TrendingDown, 
  BarChart3, 
  Headphones, 
  Calendar, 
  Building2, 
  Calculator, 
  Users, 
  ShieldCheck, 
  Zap, 
  TrendingUp,
  Target,
  MessageCircle, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'motion/react';
import { services } from '../data/services';

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = prefix + v.toLocaleString('pt-BR', { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 1 
          }) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-matte-texture text-white selection:bg-gold selection:text-primary">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? 'border-b border-white/10 py-3 md:py-4' : 'py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://i.imgur.com/CK0toOc.jpeg" 
              alt="Best Way Soluções Contábeis" 
              className="h-8 md:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback if image is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xs sm:text-sm md:text-xl font-bold tracking-tighter leading-tight">
                BEST WAY <span className="text-gold">SOLUÇÕES CONTÁBEIS</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            {['Serviços', 'Sobre', 'Diferenciais', 'Planos'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-gold transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-primary px-6 py-2 rounded-full font-bold hover:bg-gold-hover transition-all transform hover:scale-105"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
            >
              {['Serviços', 'Sobre', 'Diferenciais', 'Planos'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-lg font-medium text-left hover:text-gold"
                >
                  {item}
                </button>
              ))}
              <a 
                href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gold text-primary px-6 py-3 rounded-xl font-bold text-center"
              >
                WHATSAPP
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-matte-texture">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold tracking-widest uppercase mb-6">
                Contabilidade Estratégica & Consultiva
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                Reduza seus <span className="text-gradient-gold italic">Impostos</span> e Acelere o Crescimento do seu Negócio.
              </h1>
              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
                Não somos apenas contadores. Somos parceiros estratégicos focados em maximizar sua lucratividade através de planejamento tributário inteligente e gestão financeira de alto padrão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gold text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gold-hover transition-all"
                >
                  Falar com especialista no WhatsApp
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => scrollToSection('serviços')}
                  className="px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all"
                >
                  Conhecer nossas soluções
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-matte-texture relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sua empresa enfrenta algum desses <span className="text-gold">desafios</span>?</h2>
            <p className="text-white/60">A contabilidade tradicional muitas vezes ignora o que realmente importa: o seu lucro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingDown, title: "Pagamento excessivo de impostos", desc: "Você sente que trabalha apenas para pagar o governo?" },
              { icon: BarChart3, title: "Falta de controle financeiro", desc: "Dificuldade em enxergar para onde o dinheiro está indo." },
              { icon: Headphones, title: "Contador que não dá suporte", desc: "Demora no atendimento e falta de proatividade." },
              { icon: Calendar, title: "Falta de planejamento", desc: "Decisões tomadas no escuro, sem base em dados reais." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-matte-texture border border-white/10 hover:border-gold/30 transition-all group shadow-lg"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="text-gold" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-medium italic text-white/80">"Você não precisa passar por isso."</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 overflow-hidden bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://i.imgur.com/pCQ84MD.png" 
                  alt="Escritório Best Way" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold p-8 rounded-3xl hidden md:block">
                <p className="text-primary font-bold text-4xl mb-1">+10 Anos</p>
                <p className="text-primary/70 text-sm font-bold uppercase tracking-widest">De Experiência</p>
              </div>
            </div>

            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Posicionamento Premium</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Best Way: Onde a <span className="text-gold">Estratégia</span> encontra a Contabilidade.
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Na Best Way Soluções Contábeis, não entregamos apenas guias de impostos. Entregamos clareza, segurança e caminhos para a expansão do seu patrimônio.
                </p>
                <p>
                  Nossa abordagem é consultiva e estratégica. Analisamos cada detalhe da sua operação para identificar oportunidades de economia legal e otimização de processos que a contabilidade comum deixa passar.
                </p>
                <p>
                  Somos focados em resultados reais. Se o seu negócio não está crescendo com a nossa ajuda, não estamos cumprindo nosso papel.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium"><span className="text-gold">+100 Clientes</span> satisfeitos e em crescimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Soluções que impulsionam seu <span className="text-gold">Sucesso</span></h2>
            <p className="text-white/60 text-lg">Transformamos obrigações burocráticas em ferramentas de gestão e economia para sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-matte-texture border border-white/10 flex flex-col h-full group hover:border-gold/30 transition-all shadow-lg"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="text-gold" size={32} />
                </div>
                <div className="mb-4">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{service.benefit}</span>
                  <h3 className="text-2xl font-bold mt-2">{service.title}</h3>
                </div>
                <p className="text-white/50 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <Link to={`/servicos/${service.slug}`} className="flex items-center gap-2 text-gold font-bold group/btn">
                  Saiba mais <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Por que nos escolher?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">O Padrão <span className="text-gold">Best Way</span> de Atendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Atendimento Estratégico", desc: "Não somos apenas digitadores de dados. Analisamos seus números para sugerir melhorias reais." },
              { title: "Redução Legal de Impostos", desc: "Nossa especialidade é encontrar brechas legais para que você pague o mínimo possível." },
              { title: "Acompanhamento de Marketing", desc: "Diferencial exclusivo: oferecemos suporte estratégico para impulsionar suas vendas (consulte nosso Order Bump)." },
              { title: "Suporte via WhatsApp", desc: "Dúvidas urgentes? Nosso time está a um clique de distância, com respostas rápidas e humanas." },
              { title: "Tecnologia e Inovação", desc: "Processos 100% digitais, seguros e eficientes. Menos papel, mais agilidade para você." },
              { title: "Acompanhamento Próximo", desc: "Reuniões periódicas de alinhamento para garantir que sua empresa esteja sempre no rumo certo." },
              { title: "Transparência Total", desc: "Você sempre saberá exatamente o que está sendo feito e por que, sem letras miúdas." }
            ].map((diff, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{diff.title}</h3>
                <p className="text-white/50 leading-relaxed max-w-xs mx-auto">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-matte-texture border-y border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-gold font-black text-6xl md:text-7xl mb-2 tracking-tighter">
                <Counter value={5450} prefix="+ " />
              </p>
              <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Empresas Atendidas</p>
            </div>
            <div>
              <p className="text-gold font-black text-6xl md:text-7xl mb-2 tracking-tighter">
                <Counter value={2.5} prefix="+R$ " suffix="M" />
              </p>
              <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Economizados em Impostos</p>
            </div>
            <div>
              <p className="text-gold font-black text-6xl md:text-7xl mb-2 tracking-tighter">
                <Counter value={98} suffix="%" />
              </p>
              <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que dizem nossos <span className="text-gold">Parceiros</span></h2>
            <p className="text-white/60">A confiança é a base de todo grande negócio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Ricardo Santos", 
                image: "https://i.imgur.com/BZlRhJy.jpeg",
                text: "A Best Way mudou nossa visão sobre contabilidade. Em apenas 6 meses, conseguimos uma redução de 15% na carga tributária com o planejamento que eles fizeram." 
              },
              { 
                name: "Mariana Costa", 
                image: "https://i.imgur.com/GLv5h96.jpeg",
                text: "O suporte via WhatsApp é sensacional. Sempre que tenho uma dúvida sobre contratação ou impostos, recebo uma resposta clara e rápida. Me sinto muito segura." 
              },
              { 
                name: "André Oliveira", 
                image: "https://i.imgur.com/XoiTI4g.jpeg",
                text: "Profissionalismo impecável. A transição para a Best Way foi tranquila e hoje tenho relatórios financeiros que realmente me ajudam a gerir minha empresa." 
              }
            ].map((test, index) => (
              <div key={index} className="p-10 rounded-3xl bg-matte-texture border border-white/10 relative shadow-lg">
                <div className="text-gold mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-white/70 italic mb-8 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30">
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{test.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos <span className="text-gold">Planos</span></h2>
            <p className="text-white/60 text-lg">Soluções escaláveis que acompanham o crescimento da sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="p-10 rounded-3xl bg-matte-texture border border-white/10 flex flex-col hover:border-gold/30 transition-all shadow-xl">
              <h3 className="text-2xl font-bold mb-2">MEI (Serviços)</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gold">R$ 150 - 300</span>
                <span className="text-white/50 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "DAS mensal",
                  "Declaração Anual",
                  "Suporte básico",
                  "Atividades de Serviço ou Comércio",
                  "Faturamento até 81mil/ano"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20MEI%20%28Servi%C3%A7os%29." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-gold text-gold font-bold text-center hover:bg-gold hover:text-primary transition-all"
              >
                Começar agora
              </a>
            </div>

            {/* Plan 2 - Featured */}
            <div className="p-10 rounded-3xl bg-matte-texture border-2 border-gold flex flex-col relative transform md:scale-105 z-10 shadow-2xl shadow-gold/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-primary text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1 rounded-full">Mais Escolhido</div>
              <h3 className="text-2xl font-bold mb-2">ME (Simples Nacional)</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gold">R$ 500 - 1.200</span>
                <span className="text-white/50 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Fiscal + Pessoal (até 2 funcionários)",
                  "Contabilidade completa",
                  "Suporte por WhatsApp e e-mail",
                  "Simples Nacional",
                  "Pró labore para sócios"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20ME%20%28Simples%20Nacional%29." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gold text-primary font-bold text-center hover:bg-gold-hover transition-all"
              >
                Começar agora
              </a>
            </div>

            {/* Plan 3 */}
            <div className="p-10 rounded-3xl bg-matte-texture border border-white/10 flex flex-col hover:border-gold/30 transition-all shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Empresa com Funcionários</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gold">+ R$ 50 - 100</span>
                <span className="text-white/50 text-sm">/funcionário</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {[
                  "Adicional por cada funcionário cadastrado",
                  "Gestão completa de RH",
                  "eSocial e obrigações",
                  "Folha de pagamento",
                  "Controle de férias e 13º"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Empresa%20com%20Funcion%C3%A1rios." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border border-gold text-gold font-bold text-center hover:bg-gold hover:text-primary transition-all"
              >
                Começar agora
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 text-xs max-w-2xl mx-auto leading-relaxed">
              * Além dos honorários, considere as taxas governamentais: Junta Comercial (R$ 100 - R$ 400), Certificado Digital (PF R$ 160 / PJ R$ 200) e Taxas INPI (conforme enquadramento). 
              <br />
              Nota: Se você for MEI, muitos desses valores de abertura são gratuitos ou drasticamente reduzidos.
            </p>
          </div>

          {/* Certificado Digital Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-between group hover:border-gold/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Certificado Digital PF</h4>
                  <p className="text-white/40 text-xs">Pessoa Física (e-CPF)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-gold">R$ 160</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30">Validade de 1 Ano</p>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-between group hover:border-gold/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Certificado Digital PJ</h4>
                  <p className="text-white/40 text-xs">Pessoa Jurídica (e-CNPJ)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-gold">R$ 200</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30">Validade de 1 Ano</p>
              </div>
            </div>
          </div>

          {/* Order Bump Section */}
          <div className="mt-16 p-8 rounded-3xl bg-matte-texture border border-gold/40 relative overflow-hidden group shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 p-4 bg-gold text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-xl">Diferencial Exclusivo</div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:scale-110 transition-transform">
                  <TrendingUp size={40} className="text-gold" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-lg flex items-center justify-center text-primary shadow-lg">
                  <CheckCircle2 size={20} />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-3">Order Bump</div>
                <h3 className="text-2xl font-bold mb-2">Acompanhamento de Marketing Estratégico</h3>
                <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
                  Diferente de qualquer outra contabilidade, nós ajudamos você a vender mais. Adicione nosso acompanhamento de marketing e receba orientações mensais para escalar seu faturamento.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <div className="bg-gold/20 px-8 py-6 rounded-2xl border border-gold/30 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Investimento Adicional</p>
                  <p className="text-2xl font-bold text-white">Sob Consulta</p>
                  <Link to="/servicos/marketing-estrategico" className="mt-4 block w-full py-2 bg-gold text-primary text-xs font-bold rounded-lg hover:bg-gold-hover transition-colors text-center">
                    Ver Detalhes do Marketing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Combo Gestão 360º */}
          <div className="mt-16 p-8 md:p-12 rounded-[40px] bg-matte-texture border border-gold/30 relative overflow-hidden shadow-2xl shadow-black/50">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} className="text-gold" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">Sugestão de Combo</div>
                <h3 className="text-4xl font-bold mb-6 italic">Gestão 360º</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  A solução definitiva para quem está montando uma proposta para um cliente novo ou quer total tranquilidade na gestão do seu negócio.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "1. Implantação", desc: "Abertura + Registro de Marca." },
                    { title: "2. Manutenção Mensal", desc: "Fiscal + Pessoal + Contábil." },
                    { title: "3. Segurança Extra", desc: "Monitoramento de débitos e parcelamentos automáticos." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 text-primary font-bold">{i+1}</div>
                      <div>
                        <h4 className="font-bold text-gold">{item.title}</h4>
                        <p className="text-sm text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h4 className="text-xl font-bold mb-6">Por que escolher o Gestão 360º?</h4>
                <ul className="space-y-4">
                  {[
                    "Visão completa do negócio",
                    "Redução drástica de riscos fiscais",
                    "Proteção imediata da sua marca",
                    "Suporte prioritário e estratégico",
                    "Economia de escala nos serviços"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-gold" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/servicos/gestao-360" className="mt-8 block w-full py-4 rounded-xl bg-gold text-primary font-bold text-center hover:bg-gold-hover transition-all">Solicitar Proposta 360º</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden bg-matte-texture">
        <div className="absolute inset-0 bg-gold/5" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
              Pare de perder dinheiro com impostos hoje mesmo.
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Agende uma consultoria gratuita com nossos especialistas e descubra quanto sua empresa pode economizar.
            </p>
            <a 
              href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 rounded-2xl font-black text-xl hover:bg-gold-hover transition-all transform hover:scale-105 shadow-2xl shadow-gold/20"
            >
              <MessageCircle size={28} />
              QUERO FALAR COM UM ESPECIALISTA
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-matte-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img 
                  src="https://i.imgur.com/CK0toOc.jpeg" 
                  alt="Best Way Soluções Contábeis" 
                  className="h-10 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold tracking-tighter">
                    BEST WAY <span className="text-gold">SOLUÇÕES CONTÁBEIS</span>
                  </span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Transformando a contabilidade em uma ferramenta estratégica para o crescimento do seu negócio.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-gold transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-gold transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-gold transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('planos')} className="hover:text-gold transition-colors">Planos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Contato</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold shrink-0" />
                  <span>(62) 9459-0572</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold shrink-0" />
                  <span>bwsolucoes062@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-gold">Horário</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li>Aberto 24h</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© 2026 Best Way Soluções Contábeis. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Fale conosco agora!
        </span>
      </a>
    </div>
  );
}
