"use client";

import { useRouter } from "next/navigation";

const SubmitBtn = (props) => {
  const router = useRouter();
  return (
    <button
      className="border py-1 px-4 rounded-xl"
      type="submit"
      formAction={(e) => {
        props.addNote(e);
        router.refresh();
      }}
      form="new-note"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
