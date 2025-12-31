import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const scrollToPricing = () => {
    const element = document.querySelector("#precos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-anthracite">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
        
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Badge
            variant="outline"
            className="border-cyan-500/30 bg-cyan-500/10 text-cyan-400 px-4 py-2 text-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Google Gemini
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          data-testid="text-hero-headline"
        >
          Automação{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
            24/7
          </span>{" "}
          com
          <br />
          Agentes de IA Especializados
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-silver-light/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-subheadline"
        >
          Plataforma SaaS Enterprise-Ready que funciona como uma fábrica de agentes de IA
          especializados para SDR, Vendas, Suporte e RH — tudo integrado ao WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-anthracite font-semibold px-8 py-6 text-lg"
            onClick={scrollToPricing}
            data-testid="button-comecar-agora"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-silver/30 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-lg"
            asChild
          >
            <a
              href="https://app.tenetai.com.br"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-ver-demo"
            >
              Ver Demo
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-silver/60 text-sm"
        >
          <div className="flex items-center gap-2" data-testid="trust-enterprise-ready">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Enterprise-Ready</span>
          </div>
          <div className="w-1 h-1 bg-silver/30 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2" data-testid="trust-whatsapp-integrado">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span>WhatsApp Integrado</span>
          </div>
          <div className="w-1 h-1 bg-silver/30 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2" data-testid="trust-google-gemini">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Google Gemini AI</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-anthracite to-transparent" />
    </section>
  );
}
