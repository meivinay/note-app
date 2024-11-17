import React, { Suspense } from "react";
import Image from "next/image";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";
import AddNoteBtn from "~/components/AddNoteBtn";
import NewNoteForm from "~/components/NewNoteForm";
import SubmitBtn from "~/components/SubmitBtn";
import addNote from "~/components/AddNoteBtn/addNoteAction";

const Sidebar: React.FC<Props> = async (props) => {
  const { searchParams } = props;
  const { q = "", note_id: noteId } = await searchParams;
  return (
    <aside className="flex flex-col gap-y-4 bg-white p-4 rounded-xl">
      <div className="flex flex-col gap-y-4">
        <div>
          <p className="flex gap-x-2 items-center">
            <Image
              alt="nextjs logo"
              height="48"
              width="48"
              src="/nextjs-icon-dark-background.svg"
            />
            <strong className="text-2xl">Next Notes</strong>
            <div className="flex flex-col grow">
              <AddNoteBtn submitBtn={<SubmitBtn addNote={addNote} />}>
                <NewNoteForm />
              </AddNoteBtn>
            </div>
          </p>
        </div>
        <Search searchParams={q} />
      </div>
      <Suspense fallback={<p>Loading</p>}>
        <div className="">
          <NotesList {...props} searchParams={q} activeNoteId={noteId} />
        </div>
      </Suspense>
    </aside>
  );
};

export default Sidebar;
