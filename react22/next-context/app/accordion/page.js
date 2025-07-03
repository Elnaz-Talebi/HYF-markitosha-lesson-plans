// import Accordion from "@/app/accordion/Accordion";

// export default function Page() {
//     return <div>
//         Accordion page
//         <Accordion />
//     </div>
// }

"use client";
import { UserProvider } from "../user/context/UserContext";
import Accordion from "./Accordion";
import { AccordionProvider } from "./AccordionContext";

export default function Page() {
  return (
    <AccordionProvider>
      <Accordion />
    </AccordionProvider>
  );
}
