import React, { Suspense } from "react";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";

const Sidebar: React.FC = (props) => {
  return (
    <>
      <Search />
      <Suspense fallback={<p>Loading</p>}>
        <NotesList {...props} />
      </Suspense>
    </>
  );
};

export default Sidebar;
