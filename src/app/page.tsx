import { Suspense } from "react";

// import DeleteBtn from "~/components/DeleteBtn";
// import EditNoteBtn from "~/components/EditNoteBtn";
import NotePreviewFetch from "~/components/NotePreviewFetch";
import Sidebar from "~/components/Sidebar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <div className="grid grid-cols-twoColumn h-full m-3 gap-x-4">
      <Sidebar {...props} />
      <main className="flex flex-col gap-y-4">
        {/* <section className="flex items-start bg-white p-4 rounded-xl">
          {noteId > -1 ? <EditNoteBtn /> : null}
          {noteId > -1 ? <DeleteBtn noteId={noteId} /> : null}
        </section> */}
        <section className="grow bg-white p-4 rounded-xl">
          {noteId > -1 ? (
            <Suspense key={noteId} fallback={<p>Loading</p>}>
              <NotePreviewFetch noteId={noteId} />
            </Suspense>
          ) : (
            <p className="font-bold text-4xl">
              Click a Note to view the Preview
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
