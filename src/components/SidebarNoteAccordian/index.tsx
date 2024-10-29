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
      <button
        className="absolute right-0"
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        ^
      </button>
      {children}
      {isOpen ? props.expandedChild : null}
    </>
  );
};

export default NoteAccordian;
