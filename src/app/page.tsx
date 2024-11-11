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
export default async function Home(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <div className="grid grid-cols-twoColumn h-full">
      <Sidebar {...props} />
      <main className="mt-4">
        <section className="flex items-start">
          <div className="flex flex-col grow">
            <AddNoteBtn submitBtn={<SubmitBtn addNote={addNote} />}>
              <NewNoteForm />
            </AddNoteBtn>
          </div>
          {/* {noteId > -1 ? <EditNoteBtn /> : null} */}
          {noteId > -1 ? <DeleteBtn noteId={noteId} /> : null}
        </section>
        {noteId > -1 ? (
          <Suspense key={noteId} fallback={<p>Loading</p>}>
            <NotePreviewFetch noteId={noteId} />
          </Suspense>
        ) : (
          <p>Click a Note to view the Preview</p>
        )}
      </main>
    </div>
  );
}
