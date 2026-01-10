import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "TIME PERIOD FOR CONSTRUCTION?",
    answer:
      "A Minimum period of 10 months is necessary for construction. But it may vary upto 18 months based on plot size and various other aspects.",
  },
  {
    question: "WHAT ABOUT OTHER ADDITIONAL CHARGES?",
    answer:
      "No such additional charges are billed unless and until there are specific upgradations and additional works required by the client in addition to the agreement.",
  },
  {
    question: "HOW TO TAKE APPROVAL OF PLAN AND ELECTRIC CONNECTIONS?",
    answer:
      "The assistance will be given by our team for sanction plan and temporary electrical connection and other government related works but the fees for the government to be taken care by the client.",
  },
  {
    question: "WHAT IS THE SQUARE FOOT COST OF CONSTRUCTION?",
    answer:
      "The cost of construction starts from 1999* per SQFT and ranges upto 2499* per SQFT but you will be surprised to see the quality of materials used and the workmanship at the price you pay us compared to other competitors.",
  },
  {
    question: "COMPANY IS NEWLY ESTABLISHED IS THE TEAM EXPERIENCED?",
    answer:
      "Definitely, the team consists of qualified engineers with more than 7 years of experience at site and a design team with more than 10 years of experience in the field. They can deal and handle all the challenges at site and can adopt to the new tech emerging in the market.",
  },
];

const FAQ = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 right-0 w-96 h-96 bg-vivid-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-heading text-foreground transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          F.A.Q.
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="premium-card border border-border rounded-lg px-6 bg-card shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                  >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80 font-heading text-sm md:text-base py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
