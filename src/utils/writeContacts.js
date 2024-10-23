import { PATH_DB_CONTACTS } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = (contacts) => {
  writeFile(PATH_DB_CONTACTS, JSON.stringify(contacts, null, 2));
};
