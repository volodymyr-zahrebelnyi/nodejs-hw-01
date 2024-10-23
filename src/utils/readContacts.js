import { PATH_DB_CONTACTS } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  const data = await readFile(PATH_DB_CONTACTS, 'utf-8');
  return JSON.parse(data);
};
