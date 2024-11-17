import { format } from "date-fns";
import DeleteBtn from "~/components/DeleteBtn";

type Props = {
  title: string | undefined;
  description?: string;
  updateTime?: Date | undefined;
  className?: string | undefined;
  noteId: number;
};

const NotePreview: React.FC<Props> = (props) => {
  return (
    <div className={`flex flex-col ${props.className || ""}`}>
      {/* <h3 className="text-3xl py-3 px-2 self-start mb-4">Preview</h3> */}
      {props.updateTime ? (
        <p className="mb-4 flex">
          <>
            <strong>Last Update On</strong>&nbsp;
            <span>{format(props.updateTime, "d MMM yyyy 'at' h:mm bb")}</span>
          </>
          <DeleteBtn className="ml-auto" noteId={props.noteId} />
        </p>
      ) : null}
      <p className="text-5xl font-bold mb-1 text-zinc-900">{props.title}</p>
      <p className="text-3xl text-gray-800">{props.description}</p>
    </div>
  );
};

export default NotePreview;
