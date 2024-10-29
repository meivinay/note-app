import React, { Suspense } from "react";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";
import AddNoteBtn from "../AddNoteBtn";

const Sidebar: React.FC = (props) => {
  return (
    <>
      <Search />
      <AddNoteBtn />
      <Suspense fallback={<p>Loading</p>}>
        <NotesList {...props} />
      </Suspense>
    </>
  );
};

export default Sidebar;
