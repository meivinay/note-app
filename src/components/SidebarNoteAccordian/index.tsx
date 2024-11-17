"use client";

import { useState } from "react";

type Props = {
  children: React.ReactElement;
  expandedChild: React.ReactElement;
};

const NoteAccordian: React.FC<Props> = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grow">
        {children}
        {isOpen ? props.expandedChild : null}
      </div>
      <button
        className={`hidden group-hover:block ml-auto h-[24px] w-[24px] ${
          isOpen
            ? `bg-[url('/keyboard_arrow_up.svg')]`
            : `bg-[url('/keyboard_arrow_down.svg')]`
        }`}
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        aria-label={isOpen ? "expand note" : "collapse note"}
      />
    </>
  );
};

export default NoteAccordian;
