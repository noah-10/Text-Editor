import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic for editing the content of the content to store in indexDB
export const putDb = async (content) => {

  // Creates a connection to the database
  const contactDb = await openDB('jate', 1);

  // Create a new transaction with the database and the permission
  const tx = contactDb.transaction('jate', 'readwrite');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Store and update the content
  const request = store.put({ id: 1, value: content });

  // get confirmation on the request
  const result = await request;

  console.log('Data saved to the database', result);
};

// Logic for getting all of the content from the database
export const getDb = async () => {
  // Creates a connection to the database
  const contactDb = await openDB('jate', 1);

  // Create a new transaction with the database and the permission
  const tx = contactDb.transaction('jate', 'readonly');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Get all data from database
  const request = store.getAll();

  // get confirmation on the request
  const result = await request;

  console.log('result.value', result);
  return result.value;
};

initdb();
