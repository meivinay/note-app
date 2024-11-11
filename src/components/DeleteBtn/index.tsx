"use client";
import { useRouter } from "next/navigation";
import deleteNote from "~/serverActions/deleteNote";

const DeleteBtn = ({ noteId }: { noteId: number }) => {
  const router = useRouter();
  return (
    <button
      className="border py-1 px-4 rounded-xl mr-4"
      type="button"
      onClick={async () => {
        alert(`are you sure you want to delete ${noteId}?`);
        const deletedNoteId = await deleteNote(noteId);
        alert(`Note ${deletedNoteId} Deleted`);
        router.push("/");
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
