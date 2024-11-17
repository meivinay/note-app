import { Suspense } from "react";
import AddNoteBtn from "~/components/AddNoteBtn";
import addNote from "~/components/AddNoteBtn/addNoteAction";
import DeleteBtn from "~/components/DeleteBtn";
// import EditNoteBtn from "~/components/EditNoteBtn";
import NewNoteForm from "~/components/NewNoteForm";
import NotePreviewFetch from "~/components/NotePreviewFetch";
import Sidebar from "~/components/Sidebar";
import SubmitBtn from "~/components/SubmitBtn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NewNote(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <main className="mt-4 flex flex-col gap-y-4 h-full m-3">
      <section className="flex flex-col bg-white p-4 rounded-xl grow">
        <AddNoteBtn submitBtn={<SubmitBtn addNote={addNote} />}>
          <NewNoteForm />
        </AddNoteBtn>
        {/* {noteId > -1 ? <EditNoteBtn /> : null} */}
        {/* {noteId > -1 ? <DeleteBtn noteId={noteId} /> : null} */}
      </section>
    </main>
  );
}
