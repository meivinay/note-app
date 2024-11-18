"use client";
import { useState } from "react";
import Form from "next/form";
import addNote from "../AddNoteBtn/addNoteAction";
// import SubmitBtn from "~/components/SubmitBtn";
import NotePreview from "../NotePreview";

const NewNoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="grid gap-x-4 grid-cols-twoColumn">
      <Form
        id="new-note"
        className="flex flex-col gap-y-4 mb-4 justify-stretch"
        action={addNote}
      >
        <input
          type="text"
          name="note-title"
          placeholder="Add your title"
          required
          className="text-input-colors rounded-2xl border border-solid border-gray-300 p-4 basis-12"
          autoComplete="off"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          value={description}
          name="note-description"
          placeholder="Add your Description"
          className="text-input-colors rounded-2xl border border-solid border-gray-300 p-4 min-h-44"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value);
          }}
        />
        <button
          className="py-3 px-4 rounded-xl text-xl outline  bg-sky-100 text-sky-600 font-bold outline-sky-600 hover:bg-sky-600 hover:text-white transition-colors duration-300"
          type="submit"
        >
          Submit
        </button>
        {/* <SubmitBtn addNote={addNote} /> */}
      </Form>
      <NotePreview className="grow" title={title} description={description} />
    </div>
  );
};

export default NewNoteForm;
