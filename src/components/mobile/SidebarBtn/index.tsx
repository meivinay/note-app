"use client";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
type Props = {
  children: React.ReactElement;
};

const SidebarBtn = (props: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Image alt="menu" height={24} width={24} src="/menu_icon.svg" />
      </button>
      {isOpen
        ? createPortal(
            <>
              <button
                type="button"
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                className="fixed inset-0 bg-black/50"
              />
              <div className="fixed top-0 bottom-0 left-0 right-1/4 flex ">
                {props.children}
              </div>
            </>,
            document.body
          )
        : null}
    </>
  );
};
export default SidebarBtn;
