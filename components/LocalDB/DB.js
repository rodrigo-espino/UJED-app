import * as SQLite from 'expo-sqlite';

// Open a database, creating it if it doesn't exist
const db = SQLite.openDatabase('Forestales.db');

const TableCreationDB = [

  `CREATE TABLE IF NOT EXISTS FES0 (
    CVE_INC varchar(10) primary key,
    Alias varchar(20),
    Descripcion varchar(255)
    );`,

  `CREATE TABLE IF NOT EXISTS FES1(
    CVE_INC varchar(10) primary key,
    FES0_ID varchar,
    Sitio_ID varchar(20),
    CAT varchar(20),
    responsable varchar(100),
    Paraje varchar(100),
    Predio varchar(100),
    Municipio varchar(100),
    Estado varchar(100),
    Altitud float,
    Waypoint_ID varchar(50),
    CoordX float,
    CoordY float,
    PrecisionF float,
    Exposicion int,
    Pendiente float,
    DPF int,
    Fecha varchar(20),
    Hr_Inicio varchar(10),
    Hr_Termino varchar(10),
    CGE_CAR float,
    CGE_CHE float,
    CGE_CRE float,
    CGE_CSE float,
    CGE_CRO float,
    CGE_CAS float,
    Observaciones varchar(200),
    OnServer boolean
    );`,

  `CREATE TABLE IF NOT EXISTS FES2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FEST1_ID varchar(10)
    );`,

  `CREATE TABLE IF NOT EXISTS FES2_TR (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FES2_ID int,
    TR int,
    Pino1 int,
    Encino1 int,
    Otros1 int,
    Pino10 int,
    Encino10 int,
    Otros10 int,
    Pino100 int,
    Encino100 int,
    Otros100 int,
    Pendiente float
    );`,

  `CREATE TABLE FES2_3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FEST2_ID int,
   TR int,
    SSP varchar(255),
    DAP float,
    PDR varchar(255)

    );`,

  `CREATE TABLE FES3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FEST1_ID varchar(10)
    );`,

  `CREATE TABLE FES3_2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        FEST3_ID int,
        CDR varchar(255),
        Cob_HER int,
        Cob_HOJ int,
        Cob_SUE int,
        Cob_ROE int,
        Cob_CEN int,
        CobSev_0 int,
        CobSev_1 int,
        CobSev_2 int,
        CobSev_3 int,
        CobSev_4 int,
        CobSev_5 int,
        Prof_HOJ int,
        Prof_FER int,
        Prof_CEN int,
        Prof_PHP int,
        Prof_PHQ int,
        Observaciones varchar(255)
      );`,

  ` CREATE TABLE FES4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FEST1_ID varchar(10)
    
    );`,

  `CREATE TABLE FES4_2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FES4_ID int,
    Subsitio int,
    No int,
    Genero_Especie varchar(255),
    FRE int,
    CAP int,
    TIR varchar(255),
    Cob_SBQ int,
    Cob_REG int,
    Cob_HER int,
    Cob_HOJ int,
    Cob_SUE int,
    Cob_ROE int,
    HHT float,
    Observaciones varchar(255)
      );`,

  `CREATE TABLE FES5 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        FEST1_ID varchar(10)
      );`,

  `CREATE TABLE FES5_2(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    FES5_ID int,
    No int,
    Genero_Especie varchar(255),
    AZM int,
    DIST float,
    DAP float,
    Dia_NS float,
    Dia_OE float,
    Alt_Htotal float,
    Alt_Hmar float,
    Alt_Hneg float,
    Alt_Hcht float,
    Alt_Hcopa float,
    Sof_NEG int,
    Sof_MAR int,
    Sof_VER int,
    Sof_CSH int,
    Sof_REB int,
    Estatus int,
    Observaciones varchar(255)
      );`,

  `CREATE TABLE FES6 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        FEST1_ID varchar(10)
      );`,

  `CREATE TABLE FES6_2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        FEST6_ID int,
        No int,
        Genero_Especie varchar(255),
        FRE int,
        CDB int,
        Dia_NS float,
        Dia_OE float,
        Alt_Htotal float,
        Alt_Hcopa float,
        Sof_NEG int,
        Sof_MAR int,
        Sof_VER int,
        Sof_CSH int,
        Sof_REB int,
        CRF int,
        Observaciones varchar(255)
      );`,
];

const foreingKeys = [
  `ALTER TABLE FES2 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (CVE_INC);`,
  `ALTER TABLE FES2_TR ADD FOREIGN KEY (FES2_ID) REFERENCES FES2 (id);`,
  `ALTER TABLE FES2_3 ADD FOREIGN KEY (FEST2_ID) REFERENCES FES2 (id);`,
  `ALTER TABLE FES3 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (CVE_INC);`,
  `ALTER TABLE FES4 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (CVE_INC);`,
  `ALTER TABLE FES5 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (CVE_INC);`,
  `ALTER TABLE FES6 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (CVE_INC);`,
  `ALTER TABLE FES3_2 ADD FOREIGN KEY (FEST3_ID) REFERENCES FES3 (id);`,
  `ALTER TABLE FES4_2 ADD FOREIGN KEY (FES4_ID) REFERENCES FES4 (id);`,
  `ALTER TABLE FES5_2 ADD FOREIGN KEY (FES5_ID) REFERENCES FES5 (id);`,
  `ALTER TABLE FES6_2 ADD FOREIGN KEY (FEST6_ID) REFERENCES FES6 (id);`,
];



// Function to create a table
export const initializeDatabase = () => {
  // Crear tablas primero
  db.transaction(tx => {
    TableCreationDB.forEach(query => {
          tx.executeSql(query);
      });
  }, (err) => console.log('Error al crear tablas', err), () => {
      console.log('Todas las tablas creadas exitosamente');
      // Después de crear todas las tablas, añadir llaves foráneas
      db.transaction(tx => {
        foreingKeys.forEach(query => {
              tx.executeSql(query);
          });
      }, (err) => console.log('Error al añadir llaves foráneas', err), () => {
          console.log('Todas las llaves foráneas añadidas exitosamente');
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

export const getItems = async (table, columns) => {
  // Verificar si el array columns tiene elementos, si no, seleccionar todo (*), seleccionar columnas las columnas de acuerdo al id 
  const columnsToSelect = columns.length > 0 ? columns.join(', ') : '*';

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        
        `SELECT ${columnsToSelect} FROM ${table}`, 
        [], 
        (_, { rows }) => {
          // Resolver la promesa con los datos obtenidos
          resolve(rows._array);
        },
        (_, error) => {
          // Rechazar la promesa si hay un error
          console.log('Error selecting items', error);
          reject(error);
        }
      );
    });
  });
};


export const getItembyId = async (table, columns, column_id, id) => {
  // Ensure the ID value is properly quoted if it is a string
  const quotedId = typeof id === 'string' ? `'${id}'` : id;
  // console.log(`SELECT ${columns} FROM ${table} WHERE ${column_id} = ${quotedId}`);
  
  const columnsToSelect = columns.length > 0 ? columns.join(', ') : '*';

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT ${columnsToSelect} FROM ${table} WHERE ${column_id} = ${quotedId}`, 
        [], 
        (_, { rows }) => {
          // Resolve the promise with the fetched data
          resolve(rows._array);
        },
        (_, error) => {
          // Reject the promise if there's an error
          console.log('Error selecting items', error);
          reject(error);
        }
      );
    });
  });
}

// Create a function to truncate a table
export const truncateTable = (table) => {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM ${table}`,
      [],
      () => console.log('Table truncated successfully'),
      (_, error) => console.log('Error truncating table', error)
    );
  });
};

export const updateItem = (table, data, id, column_id) => {
  const columns = Object.keys(data).map(column => `${column} = ?`).join(', ');
  const values = Object.values(data);
  const query = `UPDATE ${table} SET ${columns} WHERE ${column_id} = '${id}'`;

  db.transaction(tx => {
    tx.executeSql(
      query,
      [...values, id],
      () => console.log('Item updated successfully'),
      (_, error) => console.log('Error updating item', error)
    );
  });
}


import * as FileSystem from 'expo-file-system';
import { SQLiteDatabase, openDatabase } from 'expo-sqlite';

// Asumiendo que 'mi-database.db' es el nombre de tu base de datos
const dbPath = `${FileSystem.documentDirectory}SQLite/Forestales.db`;

export const eliminarBaseDeDatos = async () => {
  try {
    await FileSystem.deleteAsync(dbPath);
    console.log('Base de datos eliminada con éxito.');
  } catch (e) {
    console.error('Hubo un error al eliminar la base de datos:', e);
  }
};


export const CreateFS_Connected = (tableName, FS1_ID, placeholders) => {
  // Consulta para verificar si ya existe un registro con el mismo FEST1_ID
  const query_check_existence = `SELECT * FROM ${tableName} WHERE FEST1_ID = ?`;
  values = [FS1_ID]
  db.transaction(tx => {
    // Primero, verificamos la existencia de un registro
    tx.executeSql(
      query_check_existence,
      [FS1_ID],
      (_, { rows }) => {
        // Si no hay registros, procedemos a insertar uno nuevo
        if (rows.length === 0) {
          // Prepara la consulta para insertar el nuevo registro
          const query_insert = `INSERT INTO ${tableName} (FEST1_ID) VALUES (${placeholders})`;

          tx.executeSql(
            query_insert,
            values,
            () => console.log('Item inserted successfully'),
            (_, error) => console.log('Error inserting item', error)
          );
        } else {
          console.log('Record already exists with FEST1_ID:', FS1_ID);
        }
      },
      (_, error) => console.log('Error checking existence', error)
    );
  });
}
