// 'use client';

// import { useState } from "react";
// import clsx from "clsx";

// function Panel({ title, children, onOpen, isOpen, activeIndex }) {
//     const toggle = () => onOpen(activeIndex);

//     return (
//         <div className={'p-2 border-t border-t-black flex flex-col justify-center items-center'}>
//             <h2 className={'text-xl font-bold'}>{title}</h2>
//             <div className={clsx({
//                 hidden: !isOpen,
//             })}>{children}</div>
//             {!isOpen && <button
//                 className={'border border-blue-500 rounded text-blue-500'}
//                 onClick={() => toggle()}
//             >Show more</button>}
//         </div>
//     )
// };

// export default function Accordion() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const onOpen = (index) => {
//         setActiveIndex(index)
//     };

//     return <div className={'flex flex-col border border-black rounded'}>
//         <Panel title={'Section 1'} onOpen={onOpen} activeIndex={1} isOpen={activeIndex === 1}>
//             Content 1
//         </Panel>
//         <Panel title={'Section 2'} onOpen={onOpen} activeIndex={2} isOpen={activeIndex === 2}>
//             Content 2
//         </Panel>
//         <Panel title={'Section 3'} onOpen={onOpen} activeIndex={3} isOpen={activeIndex === 3}>
//             Content 2
//         </Panel>
//     </div>
// }

"use client";

import clsx from "clsx";
import { useAccordionContext } from "./AccordionContext.js";

function Panel({ title, children, index }) {
  const { activeIndex, onOpen } = useAccordionContext();
  const isOpen = activeIndex === index;

  return (
    <div className="p-2 border-t border-t-black flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className={clsx({ hidden: !isOpen })}>{children}</div>
      {!isOpen && (
        <button
          className="border border-blue-500 rounded text-blue-500"
          onClick={() => onOpen(index)}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="flex flex-col border border-black rounded">
      <Panel title="Section 1" index={1}>
        Content 1
      </Panel>
      <Panel title="Section 2" index={2}>
        Content 2
      </Panel>
      <Panel title="Section 3" index={3}>
        Content 3
      </Panel>
    </div>
  );
}
