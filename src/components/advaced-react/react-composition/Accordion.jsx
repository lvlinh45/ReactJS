import React from "react";
// eslint-disable-next-line no-unused-vars
import useToggle from "./useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { AccordionProvider } from "./accordion-context";

// specialized component
// container component

const Accordion = ({ header, children }) => {
  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
  );
};

export default Accordion;
