import AddNoteBtn from "~/components/AddNoteBtn";
import addNote from "~/components/AddNoteBtn/addNoteAction";
import NewNoteForm from "~/components/NewNoteForm";
import Sidebar from "~/components/Sidebar";
import SubmitBtn from "~/components/SubmitBtn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(props: any) {
  return (
    <div className="flex">
      <Sidebar {...props} />
      <main className="mt-4 grow">
        <AddNoteBtn submitBtn={<SubmitBtn addNote={addNote} />}>
          <NewNoteForm />
        </AddNoteBtn>
      </main>
    </div>
  );
}
