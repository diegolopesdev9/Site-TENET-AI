import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "Como funciona a segurança dos meus dados?",
    answer:
      "Seus dados são completamente isolados de outros clientes através de arquitetura multi-tenant segura. Utilizamos criptografia de ponta a ponta e seguimos todas as diretrizes da LGPD. Os dados são armazenados em servidores no Brasil e nunca são compartilhados com terceiros.",
  },
  {
    id: "q2",
    question: "Quanto tempo leva para configurar um agente?",
    answer:
      "A configuração básica de um agente leva apenas 15 minutos. Você pode personalizar as respostas, tom de voz e regras de negócio diretamente no painel. Para configurações mais avançadas com RAG (base de conhecimento), o processo pode levar até 1 hora dependendo da quantidade de documentos.",
  },
  {
    id: "q3",
    question: "Preciso ter conhecimento técnico?",
    answer:
      "Não! A plataforma foi projetada para ser intuitiva e fácil de usar. Você configura seus agentes através de uma interface amigável, sem necessidade de programação. Nosso suporte também está disponível para ajudar em qualquer etapa.",
  },
  {
    id: "q4",
    question: "Como funciona a integração com WhatsApp?",
    answer:
      "Utilizamos a API oficial do WhatsApp Business. Basta conectar seu número comercial ao nosso painel e seus agentes estarão prontos para atender. A conexão é segura e você mantém total controle sobre as conversas.",
  },
  {
    id: "q5",
    question: "O que acontece se eu exceder meu limite de conversas?",
    answer:
      "Você será notificado quando estiver próximo do limite. Caso exceda, as conversas adicionais serão cobradas de acordo com a tabela de excedentes ou você pode fazer upgrade do plano a qualquer momento. Nenhuma conversa é perdida.",
  },
  {
    id: "q6",
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel. Seus dados ficam disponíveis por 30 dias após o cancelamento para download.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-anthracite-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-section-faq">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
              Frequentes
            </span>
          </h2>
          <p className="text-silver/70 text-lg">
            Tire suas dúvidas sobre a Tenet AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-anthracite/80 border border-white/5 rounded-md px-6 data-[state=open]:border-cyan-500/30 transition-colors"
                data-testid={`faq-item-${faq.id}`}
              >
                <AccordionTrigger className="text-white text-left font-medium hover:text-cyan-400 transition-colors py-5 [&[data-state=open]>svg]:text-cyan-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-silver/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
