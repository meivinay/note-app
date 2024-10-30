"use server";
import db from "~/db";

const addNote = async (formData: FormData) => {
  const title = formData.get("note-title");
  const description = formData.get("note-description");
  try {
    await db.query(
      "insert into notes (title, body, created_at, updated_at) values ($1, $2, $3, $3) returning id",
      [title, description, new Date()]
    );
  } catch (e) {
    console.log(e);
  }
};

export default addNote;
