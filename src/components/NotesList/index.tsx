import db from "~/db";
import SidebarNote from "../SidebarNote";

type Props = {
  searchText: string | undefined;
  searchParams: string;
  activeNoteId: string;
};

type Note = {
  id: number;
  title: string;
  body: string;
  updated_at: Date;
};

const NotesList = async (props: Props) => {
  const { searchParams } = props;

  const notes = (
    await db.query(
      `select * from notes where title ilike $1 order by id desc`,
      ["%" + searchParams + "%"]
    )
  ).rows;

  return (
    <ul className="flex flex-col gap-y-4 ">
      {notes.map((note: Note) => (
        <li
          key={note.id}
          className={`group relative px-3 py-4 rounded flex ${
            Number(props.activeNoteId) === note.id
              ? "bg-cyan-100"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <SidebarNote
            noteId={note.id}
            title={note.title}
            body={note.body}
            updatedDate={note.updated_at}
            searchParams={searchParams}
          />
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
