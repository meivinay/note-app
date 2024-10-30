import Form from "next/form";
import addNote from "../AddNoteBtn/addNoteAction";

const NewNoteForm = () => {
  return (
    <Form id="new-note" className="flex flex-col gap-y-4" action={addNote}>
      <input
        type="text"
        name="note-title"
        placeholder="Add your title"
        required
        className="rounded-2xl border border-solid border-gray-300 rounded px-4"
        autoComplete="off"
      />
      <textarea
        name="note-description"
        placeholder="Add your Description"
        className="rounded-2xl border border-solid border-gray-300 rounded px-4"
      />
    </Form>
  );
};

export default NewNoteForm;
