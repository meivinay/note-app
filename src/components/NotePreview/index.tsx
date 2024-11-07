type Props = {
  title?: string;
  description?: string;
};

const NotePreview: React.FC<Props> = (props) => {
  return (
    <section className="flex flex-col">
      <h3 className="text-3xl py-3 px-2 self-start mb-4">Preview</h3>
      <p className="text-5xl mb-1 text-zinc-900">{props.title}</p>
      <p className="text-3xl text-gray-800">{props.description}</p>
    </section>
  );
};

export default NotePreview;
