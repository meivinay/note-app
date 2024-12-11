import { Suspense } from "react";

// import DeleteBtn from "~/components/DeleteBtn";
// import EditNoteBtn from "~/components/EditNoteBtn";
import NotePreviewFetch from "~/components/NotePreviewFetch";
import Sidebar from "~/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import SidebarBtn from "~/components/mobile/SidebarBtn";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export default async function Home(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <>
      <header className="block bg-white py-3 px-2 m-3 rounded-xl lg:hidden">
        <div className="flex items-center">
          <div className="mr-3">
            <SidebarBtn>
              <Sidebar {...props} />
            </SidebarBtn>
          </div>
          <div className="flex gap-x-2 items-center grow">
            <Image
              alt="nextjs logo"
              height="48"
              width="48"
              src="/nextjs-icon-dark-background.svg"
            />
            <strong className="text-2xl">Next Notes</strong>
            <Link
              href="/new"
              className="rounded-xl text-white font-semibold text-lg ml-auto"
            >
              <Image
                height="36"
                width="36"
                src="/note_add.svg"
                alt="create a new note"
                title="create a new note"
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="grid lg:grid-cols-twoColumn-lg  h-full m-3 gap-x-4">
        <div className="hidden lg:block">
          <Sidebar {...props} />
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
    </>
  );
}
