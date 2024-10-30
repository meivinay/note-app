"use server";
import db from "~/db";

const addNote = async (formData: FormData) => {
  const title = formData.get("note-title");
  try {
    await db.query(
      "insert into notes (title, body, created_at, updated_at) values ($1, $2, $3, $3) returning id",
      [title, "static for right now", new Date()]
    );
  } catch (e) {
    console.log(e);
  }
};

export default addNote;
