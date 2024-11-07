import { Suspense } from "react";
import AddNoteBtn from "~/components/AddNoteBtn";
import addNote from "~/components/AddNoteBtn/addNoteAction";
import NewNoteForm from "~/components/NewNoteForm";
import NotePreviewFetch from "~/components/NotePreviewFetch";
import Sidebar from "~/components/Sidebar";
import SubmitBtn from "~/components/SubmitBtn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <div className="flex">
      <Sidebar {...props} />
      <main className="mt-4 grow">
        <AddNoteBtn submitBtn={<SubmitBtn addNote={addNote} />}>
          <NewNoteForm />
        </AddNoteBtn>
        {noteId ? (
          <Suspense key={noteId} fallback={<p>Loading</p>}>
            <NotePreviewFetch noteId={noteId} />
          </Suspense>
        ) : null}
      </main>
    </div>
  );
}
