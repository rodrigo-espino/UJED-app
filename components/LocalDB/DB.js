import * as SQLite from 'expo-sqlite';
import TableCreationDB from './Tables';
// Open a database, creating it if it doesn't exist
const db = SQLite.openDatabase('Forestales.db');

// Function to create a table
export const initializeDatabase = () => {
    db.transaction(tx => {
      TableCreationDB.forEach(query => {
        tx.executeSql(
          query,
          [],
          () => console.log("Table created successfully"),
          (_, error) => console.log("Error creating table", error)
        );
      });
    });
  };

// Function to insert an item
export const insertItem = (tableName, data) => {
    // Construir las partes de la consulta SQL
    const columns = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).fill('?').join(', ');
    const values = Object.values(data);
  
    // Consulta SQL
    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
  
    db.transaction(tx => {
      tx.executeSql(
        query,
        values,
        () => console.log('Item inserted successfully'),
        (_, error) => console.log('Error inserting item', error)
      );
    });
  };

// Function to query all items
export const queryAllItems = (table) => {
  db.transaction(tx => {
    tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
      console.log(JSON.stringify(rows));
    });
  });
};

export const getItems = (table, columns) => {
  // Verificar si el array columns tiene elementos, si no, seleccionar todo (*)
  const columnsToSelect = columns.length > 0 ? columns.join(', ') : '*';
  
  db.transaction(tx => {
    tx.executeSql(
      `SELECT ${columnsToSelect} FROM ${table}`, 
      [], 
      (_, { rows }) => {
        console.log(JSON.stringify(rows));
      },
      (_, error) => console.log('Error selecting items', error)
    );
  });
};
