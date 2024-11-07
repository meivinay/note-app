"use client";
import { useState } from "react";
import Form from "next/form";
import addNote from "../AddNoteBtn/addNoteAction";
import NotePreview from "../NotePreview";

const NewNoteForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <Form
        id="new-note"
        className="flex flex-col gap-y-4 mb-4"
        action={addNote}
      >
        <input
          type="text"
          name="note-title"
          placeholder="Add your title"
          required
          className="rounded-2xl border border-solid border-gray-300 rounded px-4 self-start w-4/6 basis-12"
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
          className="rounded-2xl border border-solid border-gray-300 rounded px-4 self-start w-4/6 min-h-44"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value);
          }}
        />
      </Form>
      <NotePreview title={title} description={description} />
    </>
  );
};

export default NewNoteForm;
