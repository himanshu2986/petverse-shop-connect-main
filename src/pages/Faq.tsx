import { PageBanner } from "@/components/PageBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your shipping options?",
    answer: "We offer standard, expedited, and overnight shipping. You can select your preferred option at checkout.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase. Please visit our returns page for more information.",
  },
  {
    question: "How can I track my order?",
    answer: "You can track your order using the tracking number provided in your shipping confirmation email or by visiting our track order page.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries. International shipping rates and times vary.",
  },
  {
    question: "How do I contact customer service?",
    answer: "You can contact us via email at support@petverse.com or by phone at 1-800-PET-VERSE.",
  },
];

const Faq = () => {
  return (
    <div>
      <PageBanner title="Frequently Asked Questions" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
