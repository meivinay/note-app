"use client";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};
const AddNoteBtn: React.FC<Props> = ({ children }) => {
  const [textAreaVisi, setTextAreaVisi] = useState<boolean>(false);
  return (
    <section className="flex">
      <button
        className="border py-1 px-4 rounded-xl"
        onClick={() => setTextAreaVisi((prev) => !prev)}
        type="button"
      >
        NEW
      </button>
      {textAreaVisi ? children : null}
    </section>
  );
};

export default AddNoteBtn;
