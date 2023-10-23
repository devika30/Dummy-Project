import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return items within 30 days...",
    }, {
        question: "How can I track my order?",
        answer: "You can track your order by logging into your account...",
      },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  const handleAccordionChange = (panel: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleAccordionChange(index)}
        >
          <AccordionSummary expandIcon={expanded === index ? <RemoveIcon /> : <AddIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
