import NewNoteForm from "~/components/NewNoteForm";

export default async function NewNote(props: any) {
  const { searchParams } = props;
  const { note_id: noteId = -1 } = await searchParams;
  return (
    <main className=" m-3 h-full bg-white p-4 rounded-xl">
      <NewNoteForm />
    </main>
  );
}
