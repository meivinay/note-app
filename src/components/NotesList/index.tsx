import db from "~/db";
import SidebarNote from "../SidebarNote";

type Props = {
  searchText?: string;
  searchParams: Promise<{ q: string }>;
};

type Note = {
  id: number;
  title: string;
  body: string;
  updated_at: Date;
};

const NotesList = async (props: Props) => {
  const { searchParams } = props;
  const { q = "" } = await searchParams;

  const notes = (
    await db.query(
      `select * from notes where title ilike $1 order by id desc`,
      ["%" + q + "%"]
    )
  ).rows;

  return notes.map((note: Note) => (
    <ul key={note.id} className="border px-3 py-4 rounded">
      <li className="relative">
        <SidebarNote
          title={note.title}
          body={note.body}
          updatedDate={note.updated_at}
        />
      </li>
    </ul>
  ));
};

export default NotesList;
