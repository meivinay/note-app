import AddNoteBtn from "~/components/AddNoteBtn";
import NewNoteForm from "~/components/NewNoteForm";
import Sidebar from "~/components/Sidebar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home(props: any) {
  return (
    <div className="flex">
      <Sidebar {...props} />
      <main className="mt-4">
        <AddNoteBtn>
          <NewNoteForm />
        </AddNoteBtn>
      </main>
    </div>
  );
}
