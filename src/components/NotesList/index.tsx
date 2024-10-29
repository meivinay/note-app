import db from "~/db";
type Props = {
  searchText?: string;
  searchParams?: Promise<string>;
};

const NotesList = async (props: Props) => {
  const { searchParams } = props;
  const searchText = await searchParams;
  const { q = "" } = searchText;
  const notes = (
    await db.query(
      `select * from notes where title ilike $1 order by id desc`,
      ["%" + q + "%"]
    )
  ).rows;

  return notes.map((note: { id: number; title: string; body: string }) => (
    <ul key={note.id} className="border my-3 mx-4 px-3 py-4 rounded">
      <li>
        <p>{note.title}</p>
        <p>{note.body}</p>
      </li>
    </ul>
  ));
};

export default NotesList;
