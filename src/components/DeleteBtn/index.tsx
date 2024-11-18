"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import deleteNote from "~/serverActions/deleteNote";

const DeleteBtn = (props: {
  noteId: number;
  className?: string | undefined;
}) => {
  const { noteId, className = "" } = props;
  const router = useRouter();
  return (
    <button
      className={`${className}`}
      type="button"
      onClick={async () => {
        if (confirm(`are you sure you want to delete ${noteId}?`)) {
          const deletedNoteId = await deleteNote(noteId);
          alert(`Note ${deletedNoteId} Deleted`);
          router.push("/");
        }
      }}
      title="delete note"
      aria-label="delete note"
    >
      <Image
        src="/delete_52.svg"
        height="36"
        width="36"
        alt="delete note"
        title="delete note"
      />
    </button>
  );
};

export default DeleteBtn;
