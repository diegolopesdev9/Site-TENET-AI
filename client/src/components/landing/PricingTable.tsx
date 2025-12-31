import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "119,90",
    description: "Ideal para começar a automatizar",
    popular: false,
    features: [
      { text: "1 Agente", included: true },
      { text: "300 conversas/mês", included: true },
      { text: "300k tokens", included: true },
      { text: "Suporte por email", included: true },
      { text: "Integração CRM", included: false },
      { text: "RAG (Base de Conhecimento)", included: false },
      { text: "API Access", included: false },
      { text: "White-label", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "349,90",
    description: "Para equipes em crescimento",
    popular: true,
    features: [
      { text: "3 Agentes", included: true },
      { text: "1.500 conversas/mês", included: true },
      { text: "1.5M tokens", included: true },
      { text: "Suporte prioritário", included: true },
      { text: "Integração CRM", included: true },
      { text: "RAG (Base de Conhecimento)", included: false },
      { text: "API Access", included: false },
      { text: "White-label", included: false },
    ],
  },
  {
    id: "tenet",
    name: "Tenet",
    price: "499,90",
    description: "Solução completa enterprise",
    popular: false,
    features: [
      { text: "5 Agentes", included: true },
      { text: "5.000 conversas/mês", included: true },
      { text: "5M tokens", included: true },
      { text: "Suporte dedicado", included: true },
      { text: "Integração CRM", included: true },
      { text: "RAG (100 páginas)", included: true },
      { text: "API Access", included: true },
      { text: "White-label", included: true },
    ],
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

export function PricingTable() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-section-precos">
            Planos e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Preços
            </span>
          </h2>
          <p className="text-silver/70 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Cancele quando quiser, sem
            fidelidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div key={plan.id} variants={cardVariants}>
              <Card
                className={`relative bg-anthracite-light/50 p-6 lg:p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? "border-cyan-500/50 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
                    : "border-white/5 hover:border-white/10"
                }`}
                data-testid={`card-pricing-${plan.id}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-anthracite font-semibold px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-silver/60 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1" data-testid={`text-price-${plan.id}`}>
                    <span className="text-silver/60 text-lg">R$</span>
                    <span className="font-heading text-4xl lg:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-silver/60 text-sm">/mês</span>
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-3 text-sm ${
                          feature.included ? "text-silver-light" : "text-silver/40"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 ${
                            feature.included ? "text-cyan-400" : "text-silver/30"
                          }`}
                        />
                        <span className={!feature.included ? "line-through" : ""}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-cyan-500 hover:bg-cyan-400 text-anthracite"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                  asChild
                >
                  <a
                    href="https://app.tenetai.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`button-assinar-${plan.id}`}
                  >
                    Começar Agora
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
