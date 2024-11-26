"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  submitBtn: React.ReactNode;
};
const AddNoteBtn: React.FC<Props> = ({ children, submitBtn }) => {
  const pathname = usePathname();
  const router = useRouter();
  const textAreaVisi = pathname === "/new" ? true : false;

  return (
    <>
      <div className="self-end">
        <button
          className="rounded-xl text-white font-semibold text-lg"
          onClick={() => {
            if (pathname === "/new") {
              router.back();
            } else {
              router.push("/new");
              // setTextAreaVisi((prev) => !prev);
            }
          }}
          type="button"
          title="add new note"
          aria-label="add new note"
        >
          <Image alt="add note" height="36" width="36" src="/note_add.svg" />
          {/* {textAreaVisi && pathname === "/new" ? "Discard" : "NEW"} */}
        </button>
        {textAreaVisi ? submitBtn : null}
      </div>

      {textAreaVisi ? children : null}
    </>
  );
};

export default AddNoteBtn;
