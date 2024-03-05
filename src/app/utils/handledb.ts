import { db } from './db'

export async function getData() {
  const data = await db.query('SELECT * FROM poke')
  return data.rows
}