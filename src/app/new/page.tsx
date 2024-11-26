import NewNoteForm from "~/components/NewNoteForm";

export default async function NewNote() {
  return (
    <main className=" m-3 h-full bg-white p-4 rounded-xl">
      <NewNoteForm />
    </main>
  );
}
