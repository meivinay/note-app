"use client";
import { useState } from "react";
import Form from "next/form";
import addNote from "./addNoteAction";
const AddNoteBtn = () => {
  const [textAreaVisi, setTextAreaVisi] = useState<boolean>(false);
  return (
    <>
      <button
        className="ml-4 border py-1 px-4 rounded-xl"
        onClick={() => setTextAreaVisi((prev) => !prev)}
        type="button"
      >
        Add
      </button>
      {textAreaVisi ? (
        <Form action={addNote}>
          <input
            type="text"
            name="note-input"
            placeholder="Add your note here"
            className="rounded-2xl border border-solid border-gray-300 rounded mt-4 ml-4 px-4"
          />
          <button className="ml-4 border py-1 px-4 rounded-xl" type="submit">
            Submit
          </button>
        </Form>
      ) : null}
    </>
  );
};

export default AddNoteBtn;
