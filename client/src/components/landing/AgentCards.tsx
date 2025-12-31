import { motion } from "framer-motion";
import { Headphones, Briefcase, Users, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const agents = [
  {
    id: "sdr",
    name: "Tenet SDR",
    description:
      "Qualificação automática de leads 24/7. Captura, qualifica e agenda reuniões enquanto você foca no que importa.",
    icon: Users,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: "sales",
    name: "Tenet Sales",
    description:
      "Conversão inteligente com técnicas de vendas avançadas. Negocia, tira dúvidas e fecha vendas de forma humanizada.",
    icon: Briefcase,
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    id: "support",
    name: "Tenet Support",
    description:
      "Atendimento instantâneo e resolução de problemas. Suporte de primeiro nível com escalonamento inteligente.",
    icon: Headphones,
    gradient: "from-cyan-400 to-emerald-500",
  },
  {
    id: "hr",
    name: "Tenet RH",
    description:
      "Triagem automatizada de candidatos. Coleta informações, aplica filtros e pré-seleciona os melhores perfis.",
    icon: FileCheck,
    gradient: "from-cyan-400 to-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function AgentCards() {
  return (
    <section id="tenets" className="py-16 md:py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-section-tenets">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Tenets
            </span>
          </h2>
          <p className="text-silver/70 text-lg max-w-2xl mx-auto">
            Agentes de IA especializados para cada etapa do seu negócio, trabalhando
            incansavelmente 24 horas por dia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {agents.map((agent) => (
            <motion.div key={agent.id} variants={cardVariants}>
              <Card
                className="group relative bg-anthracite-light/50 border-white/5 p-6 h-full transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                data-testid={`card-agent-${agent.id}`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <agent.icon className="w-6 h-6 text-anthracite" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {agent.name}
                </h3>
                <p className="text-silver/60 text-sm leading-relaxed">
                  {agent.description}
                </p>
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan-500/5 to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
