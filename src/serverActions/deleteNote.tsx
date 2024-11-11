"use server";
import db from "~/db";
const deleteNote = async (noteId: number) => {
  await db.query(`delete from notes where id=${noteId}`);
  return noteId;
};

export default deleteNote;
