import { format } from "date-fns";
import NoteAccordian from "../SidebarNoteAccordian";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
  updatedDate: Date;
  searchParams: string;
  noteId: number;
};

const SidebarNote: React.FC<Props> = (props) => {
  const { title, updatedDate, body, searchParams, noteId } = props;

  const displayDate = format(updatedDate, "dd/MM/yyyy");

  return (
    <NoteAccordian expandedChild={<p>{body}</p>}>
      <Link
        href={{
          pathname: "",
          query: { note_id: noteId, q: searchParams || undefined },
        }}
      >
        <p className="font-bold text-lg">{title}</p>
        <p className="text-sm">{displayDate}</p>
      </Link>
    </NoteAccordian>
  );
};

export default SidebarNote;
