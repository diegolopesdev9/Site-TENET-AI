import { motion } from "framer-motion";
import { Shield, Database, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    id: "security",
    icon: Shield,
    title: "Segurança Enterprise",
    description:
      "Isolamento completo de dados entre clientes. Criptografia de ponta a ponta e conformidade com LGPD. Sua informação sempre protegida.",
    highlights: ["Isolamento de dados", "Criptografia E2E", "Conformidade LGPD"],
  },
  {
    id: "rag",
    icon: Database,
    title: "Base de Conhecimento (RAG)",
    description:
      "Upload de documentos para treinar seus agentes. Sistema RAG avançado que permite respostas contextualizadas baseadas nos seus dados.",
    highlights: ["Upload de documentos", "Respostas contextualizadas", "Até 100 páginas"],
  },
  {
    id: "testing",
    icon: FlaskConical,
    title: "A/B Testing de Prompts",
    description:
      "Otimize suas conversões com testes A/B. Compare diferentes abordagens e identifique automaticamente os prompts mais eficientes.",
    highlights: ["Testes automatizados", "Métricas de conversão", "Otimização contínua"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TechnicalFeatures() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-anthracite-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-section-diferenciais">
            Diferenciais{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Técnicos
            </span>
          </h2>
          <p className="text-silver/70 text-lg max-w-2xl mx-auto">
            Tecnologia de ponta para garantir performance, segurança e resultados
            mensuráveis para sua empresa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <Card
                className="group relative bg-anthracite/80 border-white/5 p-8 h-full transition-all duration-300 hover:border-cyan-500/30"
                data-testid={`card-feature-${feature.id}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-silver/60 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
