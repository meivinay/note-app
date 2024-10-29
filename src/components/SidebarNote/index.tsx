import { format } from "date-fns";
import NoteAccordian from "../SidebarNoteAccordian";

type Props = {
  title: string;
  body: string;
  updatedDate: Date;
};

const SidebarNote: React.FC<Props> = (props) => {
  const { title, updatedDate, body } = props;

  const displayDate = format(updatedDate, "dd/MM/yyyy");

  return (
    <NoteAccordian expandedChild={<p>{body}</p>}>
      <>
        <p>{title}</p>
        <p className="text-sm">{displayDate}</p>
      </>
    </NoteAccordian>
  );
};

export default SidebarNote;
