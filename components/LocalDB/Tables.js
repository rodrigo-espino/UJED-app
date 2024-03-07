export const TableCreationDB = [
    `CREATE TABLE IF NOT EXISTS FES1(
    CVE_INC varchar(10) primary key,
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
    Precision_ float,
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
    Observaciones varchar(200),
    OnServer boolean`,

`CREATE TABLE IF NOT EXISTS FES2 (
    id int PRIMARY KEY,
    FES1_ID varchar(255)
    );`,
      
    `CREATE TABLE IF NOT EXISTS FES2_TR (
    Id int PRIMARY KEY,
    FES2_ID int,
    TR int,
    Pino int,
    Encino int,
    Otros int,
    H int,
    Pendiente int
    );`,
      
    `CREATE TABLE FES2_3 (
    Id int PRIMARY KEY,
    FEST2_ID int,
    Tipo varchar(255),
    No int,
    Value float
    );`,
      
    `CREATE TABLE FES3 (
    Id int PRIMARY KEY,
    FEST1_ID varchar(255)
    );`,
      
      `CREATE TABLE FES3_2 (
        Id int PRIMARY KEY,
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
        id int PRIMARY KEY,
        FEST1_ID varchar(255)
      );`,
      
      `CREATE TABLE FES4_2 (
        id int PRIMARY KEY,
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
        id int PRIMARY KEY,
        FEST1_ID varchar(255)
      );`,
      
      `CREATE TABLE FES5_2(
        Id int PRIMARY KEY,
        FES5_ID int,
        No int,
        Genero_Especie varchar(255),
        AZM int,
        DIST float,
        DAP float,
        Dia_NS float,
        Dia_OE floatt,
        Alt_Htotal float,
        Alt_Hmar float,
        Alt_Hneg float,
        Alt_Hcht float,
        Sof_NEG int,
        Sof_MAR int,
        Sof_VER int,
        Sof_CSH int,
        Sof_REB int,
        Estatus int,
        Observaciones varchar(255)
      );`,
      
      `CREATE TABLE FES6 (
        id int PRIMARY KEY,
        FEST1_ID varchar(255)
      );`,
      
      `CREATE TABLE FES6_2 (
        id int PRIMARY KEY,
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
      
      
      `ALTER TABLE FES2 ADD FOREIGN KEY (FES1_ID) REFERENCES FES1 (id);`,
      `ALTER TABLE FES2_TR ADD FOREIGN KEY (FES2_ID) REFERENCES FES2 (id);`,
      `ALTER TABLE FES2_3 ADD FOREIGN KEY (FEST2_ID) REFERENCES FES2 (id);`,
      `ALTER TABLE FES3 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (id);`,
      `ALTER TABLE FES4 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (id);`,
      `ALTER TABLE FES5 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (id);`,
      `ALTER TABLE FES6 ADD FOREIGN KEY (FEST1_ID) REFERENCES FES1 (id);`,
      `ALTER TABLE FES3_2 ADD FOREIGN KEY (FEST3_ID) REFERENCES FES3 (Id);`,
      `ALTER TABLE FES4_2 ADD FOREIGN KEY (FES4_ID) REFERENCES FES4 (id);`,
      `ALTER TABLE FES5_2 ADD FOREIGN KEY (FES5_ID) REFERENCES FES5 (id);`,
      `ALTER TABLE FES6_2 ADD FOREIGN KEY (FEST6_ID) REFERENCES FES6 (id);`,


    
]