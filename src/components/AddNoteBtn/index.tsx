"use client";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  submitBtn: React.ReactNode;
};
const AddNoteBtn: React.FC<Props> = ({ children, submitBtn }) => {
  const [textAreaVisi, setTextAreaVisi] = useState<boolean>(false);
  return (
    <section className="flex flex-col ">
      <div className="mb-4">
        <button
          className="border py-1 px-4 rounded-xl mr-4"
          onClick={() => setTextAreaVisi((prev) => !prev)}
          type="button"
        >
          {textAreaVisi ? "Discard" : "NEW"}
        </button>
        {textAreaVisi ? submitBtn : null}
      </div>

      {textAreaVisi ? children : null}
    </section>
  );
};

export default AddNoteBtn;
