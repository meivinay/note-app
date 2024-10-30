import React, { Suspense } from "react";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";

type Props = {
  searchText?: string;
  searchParams: Promise<{ q: string }>;
};

const Sidebar: React.FC<Props> = (props) => {
  return (
    <aside className="flex flex-col gap-y-4 mt-4 mx-3">
      <Search />
      <Suspense fallback={<p>Loading</p>}>
        <NotesList {...props} />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
