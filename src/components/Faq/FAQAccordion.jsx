import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="border-y border-customFaqBorder mt-9">
      <AccordionItem value="item-1" className="border-b border-customFaqBorder px-16 py-10" >
        <AccordionTrigger>How do i get a Referral code?</AccordionTrigger>
        <AccordionContent className="pt-5 text-gray-400 text-sm">
        You receive your rewards in ETH instantly once someone you refer makes a transaction!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="border-b border-customFaqBorder px-16 py-10">
        <AccordionTrigger>Do I get rewarded in tokens or ETH when I refer buyers?</AccordionTrigger>
        <AccordionContent className="pt-5 text-gray-400 text-sm">
        You receive your rewards in ETH instantly once someone you refer makes a transaction!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="border-b border-customFaqBorder px-16 py-10">
        <AccordionTrigger>How can get in contact?</AccordionTrigger>
        <AccordionContent className="pt-5 text-gray-400 text-sm">
        You receive your rewards in ETH instantly once someone you refer makes a transaction!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
