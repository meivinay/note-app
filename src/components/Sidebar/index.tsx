import React, { Suspense } from "react";
import Image from "next/image";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
  className: string | undefined;
}

const Sidebar: React.FC<Props> = async (props) => {
  const { searchParams, className = "" } = props;
  const { q = "", note_id: noteId } = await searchParams;
  return (
    <aside
      className={`flex h-full grow flex-col gap-y-4 bg-white p-4 rounded-r-md lg:rounded-xl max-h-svh ${className}`}
    >
      <div className="flex flex-col gap-y-4">
        <div>
          <div className="hidden lg:flex gap-x-2 items-center">
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
        <Search searchParams={q} />
      </div>

      <Suspense fallback={<p>Loading</p>}>
        <div className="flex-grow overflow-y-auto">
          <NotesList {...props} searchParams={q} activeNoteId={noteId} />
        </div>
      </Suspense>
    </aside>
  );
};

export default Sidebar;
