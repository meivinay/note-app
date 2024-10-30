import Form from "next/form";
import addNote from "../AddNoteBtn/addNoteAction";
import SubmitBtn from "../SubmitBtn";

const NewNoteForm = () => {
  return (
    <Form action={addNote}>
      <input
        type="text"
        name="note-title"
        placeholder="Add your title"
        className="rounded-2xl border border-solid border-gray-300 rounded mt-4 ml-4 px-4"
      />
      <input
        type="text"
        name="note-description"
        placeholder="Add your Description"
        className="rounded-2xl border border-solid border-gray-300 rounded mt-4 ml-4 px-4"
      />
      <SubmitBtn addNote={addNote} />
    </Form>
  );
};

export default NewNoteForm;
