import React, { Suspense } from "react";
import Search from "~/components/Search";
import NotesList from "~/components/NotesList";

type Props = {
  searchParams: Promise<{ q: string }>;
};

const Sidebar: React.FC<Props> = async (props) => {
  const { searchParams } = props;
  const { q = "" } = await searchParams;
  return (
    <aside className="flex flex-col gap-y-4 mt-4 mx-3">
      <Search searchParams={q} />
      <Suspense fallback={<p>Loading</p>}>
        <NotesList {...props} searchParams={q} />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
