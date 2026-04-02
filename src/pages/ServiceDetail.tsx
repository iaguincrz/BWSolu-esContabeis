import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-matte-texture text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
        <Link to="/" className="text-gold hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar para o início
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-matte-texture text-white selection:bg-gold selection:text-primary">
      {/* Simple Header */}
      <nav className="py-6 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
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
          </Link>
          <Link to="/" className="text-sm font-bold text-gold hover:text-gold-hover transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> VOLTAR
          </Link>
        </div>
      </nav>

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mb-8">
              <Icon className="text-gold" size={40} />
            </div>
            
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              {service.benefit}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {service.title}
            </h1>

            {service.price && (
              <div className="mb-12 p-8 rounded-3xl bg-gold/10 border border-gold/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Valor Médio (Honorários)</p>
                    <p className="text-3xl font-bold">{service.price}</p>
                  </div>
                  {service.observations && (
                    <div className="md:max-w-xs">
                      <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-2">Observações</p>
                      <p className="text-sm text-white/60 leading-relaxed">{service.observations}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-xl text-white/80 leading-relaxed mb-12">
                {service.fullContent}
              </p>

              {service.offerings && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 text-gold">O que podemos oferecer</h2>
                  <div className="grid grid-cols-1 gap-6">
                    {service.offerings.map((offering, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-black/40 border border-white/10 shadow-lg">
                        <h3 className="text-lg font-bold mb-2">{offering.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{offering.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.differentials && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 text-gold">Nossos Diferenciais</h2>
                  <p className="text-white/60 mb-6">Confira abaixo nossos diferenciais!</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.differentials.map((diff, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/10 shadow-md">
                        <CheckCircle2 className="text-gold shrink-0" size={18} />
                        <span className="text-sm font-medium">{diff}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-8 rounded-3xl bg-black/40 border border-white/10 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-gold" size={20} /> Por que contratar?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Nossa abordagem estratégica garante que este serviço não seja apenas uma tarefa burocrática, mas uma alavanca de crescimento para seu negócio.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-black/40 border border-white/10 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-gold" size={20} /> Diferencial BW
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Atendimento personalizado, tecnologia de ponta e foco total na redução legal de impostos e aumento da sua lucratividade.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gold/5 border border-gold/20 rounded-3xl p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Precisa de ajuda com {service.title.toLowerCase()}?</h2>
              <p className="text-white/60 mb-10 max-w-xl mx-auto">
                Nossos especialistas estão prontos para analisar seu caso e propor a melhor solução para sua empresa.
              </p>
              <a 
                href="https://wa.me/556294590572?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-hover transition-all transform hover:scale-105"
              >
                <MessageCircle size={24} />
                Falar com especialista no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/10 text-center text-white/30 text-xs">
        <p>© 2026 Best Way Soluções Contábeis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
