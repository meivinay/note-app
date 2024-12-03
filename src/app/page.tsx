import { Suspense } from "react";

// import DeleteBtn from "~/components/DeleteBtn";
// import EditNoteBtn from "~/components/EditNoteBtn";
import NotePreviewFetch from "~/components/NotePreviewFetch";
import Sidebar from "~/components/Sidebar";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <div className="grid lg:grid-cols-twoColumn-lg grid-cols-twoColumn-md  h-full m-3 gap-x-4">
      <div className="hidden lg:block">
        <Sidebar {...props} />
      </div>
      <div className="lg:hidden">
        <Image alt="menu" height={24} width={24} src="/menu_icon.svg" />
      </div>
      <main className="flex flex-col gap-y-4  h-full">
        {/* <section className="flex items-start bg-white p-4 rounded-xl">
          {noteId > -1 ? <EditNoteBtn /> : null}
          {noteId > -1 ? <DeleteBtn noteId={noteId} /> : null}
        </section> */}
        <section
          className={`grow bg-white p-4 rounded-xl ${
            noteId > -1 ? "" : "flex justify-center items-center"
          }`}
        >
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
