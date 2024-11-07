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
        className={`absolute right-0 h-[24px] w-[24px] ${
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
      {/* <button
        className="absolute top-0 right-0 left-0 bottom-0"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        type="button"
        aria-hidden="true"
        tabIndex={-1}
      /> */}
      {children}
      {isOpen ? props.expandedChild : null}
    </>
  );
};

export default NoteAccordian;
