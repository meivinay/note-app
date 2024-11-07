import db from "~/db";
import NotePreview from "../NotePreview";

type Props = {
  noteId: number;
};

const NotePreviewFetch = async (props: Props) => {
  const { noteId } = props;
  if (noteId > 0) {
    const data = await db.query(`select * from notes where id=${noteId}`);
    const rows = data.rows;
    return (
      <NotePreview
        key={noteId}
        title={rows[0].title}
        description={rows[0].body}
      />
    );
  }
  return null;
};

export default NotePreviewFetch;
