import { type Unit } from './types';

export const unit6: Unit = {
  id: "unit6",
  title: "Unit 6: Apache Hive Data Tooling",
  topics: [
    {
      id: "u6t1",
      title: "Saying Hello to Hive (Introduction)",
      content: "Hadoop and MapReduce are powerful, but writing Java code for every query is complex and time-consuming. **Apache Hive** was developed to bridge this gap by allowing users to interact with Big Data using SQL.\n\n### What is Hive?\nApache Hive is a **Data Warehouse** system built on top of Hadoop. It allows users to query and analyze large datasets using a SQL-like language called **HiveQL (HQL)**.\n\n### Why Hive is Used:\nInstead of writing 100 lines of Java MapReduce code, you can write a simple 3-line SQL query. Hive automatically converts your SQL into MapReduce or Spark jobs that run on the Hadoop cluster.\n\n### Key Features:\n- **SQL-like Interface:** Easy for anyone who knows MySQL or Oracle.\n- **Scalability:** Handles PetaBytes of data by leveraging Hadoop's distributed power.\n- **Extensibility:** Supports custom functions (UDFs) for complex logic.\n\n### Important Limitation:\nHive is designed for **Batch Processing** (long-running analysis). It is NOT intended for real-time applications or sub-second responses.",
      vivaQuestion: "Is Hive a database like MySQL?",
      vivaAnswer: "No. Hive is a Data Warehouse system that provides a SQL-like interface on top of Hadoop. While it looks like a database, it is optimized for massive batch analysis rather than fast row-level transactions.",
      keyTerms: [
        { term: "HiveQL", definition: "A SQL-like query language used to interact with data in Hive." },
        { term: "Data Warehouse", definition: "A system used for reporting and data analysis of historical data." }
      ]
    },
    {
      id: "u6t2",
      title: "Hive Architecture",
      content: "Hive architecture explains the internal journey of a SQL query—from when you type it to when Hadoop executes it.\n\n### Core Components:\n1. **User Interface (UI):** Where you submit queries (CLI, Web UI, JDBC).\n2. **Driver:** The 'Manager' that coordinates the session and execution flow.\n3. **Compiler:** Checks the syntax and translates your SQL into a logical plan.\n4. **Optimizer:** Refines the plan to make it faster by removing redundancies.\n5. **Execution Engine:** The 'Worker' that converts the plan into MapReduce/Spark jobs.\n6. **Metastore (Very Important):** A separate database (usually MySQL) that stores metadata like table names, column types, and HDFS locations.\n\n### Storage vs. Metadata:\n- **Data:** Stored in HDFS as raw files.\n- **Metadata:** Stored in the Metastore (Schema info).",
      diagramSvg: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="20" width="700" height="50" rx="4" fill="#f8f8f8" stroke="black"/>
  <text x="400" y="50" text-anchor="middle" font-weight="900">USER INTERFACE (CLI / WEB / JDBC)</text>

  <g transform="translate(100, 100)">
    <rect width="400" height="180" rx="4" fill="white" stroke="black" stroke-width="2"/>
    <text x="200" y="30" text-anchor="middle" font-weight="900">THE DRIVER (Engine Room)</text>
    <rect x="25" y="50" width="100" height="40" fill="#eee" stroke="black"/>
    <text x="75" y="75" text-anchor="middle" font-size="10">Compiler</text>
    <rect x="150" y="50" width="100" height="40" fill="#eee" stroke="black"/>
    <text x="200" y="75" text-anchor="middle" font-size="10">Optimizer</text>
    <rect x="275" y="50" width="100" height="40" fill="black"/>
    <text x="325" y="75" text-anchor="middle" fill="white" font-size="10">Engine</text>
  </g>

  <g transform="translate(550, 100)">
    <path d="M 0 10 C 0 0, 150 0, 150 10 L 150 120 C 150 130, 0 130, 0 120 Z" fill="white" stroke="black" stroke-width="2"/>
    <ellipse cx="75" cy="15" rx="75" ry="15" fill="white" stroke="black" stroke-width="2"/>
    <text x="75" y="75" text-anchor="middle" font-weight="900">METASTORE</text>
    <text x="75" y="100" text-anchor="middle" font-size="9" opacity="0.5">(Schema DB)</text>
  </g>

  <g transform="translate(100, 320)">
    <rect width="600" height="60" rx="4" fill="#333" stroke="black"/>
    <text x="300" y="35" text-anchor="middle" fill="white" font-weight="900">HADOOP CLUSTER (HDFS + YARN)</text>
  </g>
  
  <path d="M 400 70 L 400 100 M 300 280 L 300 320 M 500 160 L 550 160" stroke="black" stroke-width="1.5" stroke-dasharray="4"/>
</svg>`,
      vivaQuestion: "What is the purpose of the Hive Metastore?",
      vivaAnswer: "The Metastore stores metadata (table structures, partitioning, locations) so Hive knows how to interpret the raw data files stored in HDFS.",
    },
    {
      id: "u6t3",
      title: "Hive Clients (CLI, JDBC, ODBC)",
      content: "Users can interact with Hive through various interfaces depending on their role (Admin, Developer, or Analyst).\n\n### 1. CLI (Command Line Interface):\n- **Usage:** Writing queries directly in a terminal (Shell).\n- **Best for:** Beginners and administrative tasks.\n\n### 2. JDBC (Java Database Connectivity):\n- **Usage:** Connecting Java-based applications to Hive.\n- **Best for:** Developers building enterprise data applications.\n\n### 3. ODBC (Open Database Connectivity):\n- **Usage:** Connecting non-Java applications like Excel, Python, or Business Intelligence (BI) tools (Tableau, PowerBI) to Hive.\n- **Best for:** Data analysts and reporting specialists.",
      vivaQuestion: "Which client is used to connect visualization tools like Tableau to Hive?",
      vivaAnswer: "ODBC is commonly used for connecting non-Java tools like Tableau and Excel to Hive.",
    },
    {
      id: "u6t4",
      title: "Hive Data Types",
      content: "Hive supports two main categories of data types to handle everything from simple numbers to complex nested structures.\n\n### 1. Primitive Data Types:\nStandard types similar to MySQL.\n- **Numeric:** INT, BIGINT, FLOAT, DOUBLE.\n- **String:** STRING (most common), CHAR, VARCHAR.\n- **Date/Time:** DATE, TIMESTAMP.\n- **Boolean:** BOOLEAN (True/False).\n\n### 2. Complex Data Types:\nUsed for handling nested Big Data structures.\n- **ARRAY:** A list of items (e.g., `[10, 20, 30]`).\n- **MAP:** Key-Value pairs (e.g., `'Math' : 90`).\n- **STRUCT:** Different data types grouped together (e.g., `Name`, `Age` as a single unit).\n- **UNIONTYPE:** Can hold one value from multiple specified types.",
      vivaQuestion: "How do Complex types help in Big Data?",
      vivaAnswer: "They allow us to store semi-structured and nested data directly in columns, avoiding the need for complex joins in some scenarios.",
      keyTerms: [
        { term: "Primitive", definition: "Simple, single-value data types like integers or strings." },
        { term: "Nested Data", definition: "Data structures contained within other data structures." }
      ]
    },
    {
      id: "u6t5",
      title: "Database & Table Management",
      content: "Managing data in Hive involves creating databases and choosing the right table type to protect your information.\n\n### 1. Database Operations:\n- `CREATE DATABASE college;` - Sets up a workspace.\n- `USE college;` - Switches focus to that database.\n- `DROP DATABASE college;` - Deletes the workspace.\n\n### 2. Managed vs. External Tables (CRITICAL):\n- **Managed Table (Default):** Hive 'owns' the data. If you delete the table, the **actual data in HDFS is also deleted.**\n- **External Table:** Hive only points to the data. If you delete the table, **the data in HDFS remains safe.** Only the schema definition is removed.\n\n### Which to use?\nUse **External** for shared data files and **Managed** for temporary or private Hive tables.",
      codeSnippet: `-- Safe way to create tables\nCREATE EXTERNAL TABLE students (\n  name STRING,\n  marks INT\n) LOCATION '/hdfs/data/students';`,
      language: "sql",
      vivaQuestion: "What is the primary risk of using a Managed Table?",
      vivaAnswer: "If someone accidentally drops (deletes) the table, the actual underlying data files in HDFS will be lost permanently.",
    },
    {
      id: "u6t6",
      title: "Hive DML (Data Manipulation Language)",
      content: "DML is used to move and manage data inside your tables. Because Hive is a batch system, it handles data differently than MySQL.\n\n### Core DML Commands:\n- **LOAD DATA:** Moves files from HDFS/Local directly into a Hive table. This is the fastest way to 'insert' millions of rows.\n- **INSERT INTO:** Appends new records to a table (available in newer versions).\n- **INSERT OVERWRITE:** Replaces all existing data in a table with new data. This is very common in Big Data pipelines.\n- **TRUNCATE:** Empties the table but keeps the column definitions (schema) intact.\n\n**Note:** Hive is optimized for **Batch Inserts**. It is not designed for frequent single-row updates or deletes.",
      vivaQuestion: "Difference between LOAD and INSERT?",
      vivaAnswer: "LOAD is a file-moving operation (very fast), while INSERT processes data through a MapReduce job (slower).",
      keyTerms: [
        { term: "Inpath", definition: "The directory path where the source file is located." },
        { term: "Overwrite", definition: "Replacing the old content of a file or table with new content." }
      ]
    },
    {
      id: "u6t7",
      title: "Querying & Analyzing Data",
      content: "This is the most powerful part of Hive, where you turn raw data into business insights using SQL commands.\n\n### Standard SQL Operations:\n- **SELECT:** Retrieve data from tables.\n- **WHERE:** Filter results by a condition.\n- **GROUP BY:** Aggregate data (e.g., finding the average marks per class).\n- **ORDER BY:** Sort the final results.\n- **JOIN:** Combine data from two different tables using a shared key.\n\n### Aggregate Functions:\nEssential for analysis: `COUNT()`, `SUM()`, `AVG()`, `MAX()`, and `MIN()`.\n\n### Complete Analysis Flow:\nStudents List → Filter Passers → Group by Subject → Average Marks → Rank Results.",
      codeSnippet: `-- Advanced Query Example\nSELECT subject, AVG(marks)\nFROM student_data\nWHERE marks > 40\nGROUP BY subject\nORDER BY AVG(marks) DESC;`,
      language: "sql",
      vivaQuestion: "Does Hive support JOIN operations?",
      vivaAnswer: "Yes, Hive supports various types of joins (Inner, Left Outer, Right Outer) to combine data from multiple tables.",
    }
  ]
};
