import db from "~/db";
import NotePreview from "../NotePreview";

type Props = {
  noteId: number;
};

type Note = {
  body: string;
  id: number;
  title: string;
  updated_at: Date;
};

const NotePreviewFetch = async (props: Props) => {
  const { noteId } = props;
  if (noteId > 0) {
    const data = await db.query(`select * from notes where id=${noteId}`);
    const rows: Note[] = data.rows;
    if (rows.length === 0) {
      return <p className="text-red-500 font-bold text-xl">No Data Found</p>;
    }
    return (
      <NotePreview
        key={noteId}
        noteId={noteId}
        title={rows[0].title}
        description={rows[0].body}
        updateTime={rows[0].updated_at}
      />
    );
  }
  return null;
};

export default NotePreviewFetch;
