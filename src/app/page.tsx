import Sidebar from "~/components/Sidebar";

export default async function Home(props) {
  return (
    <div className="">
      <Sidebar {...props} />
      <main className=""></main>
    </div>
  );
}
