import { type PYQ } from './types';

export const pyq2021: PYQ = {
  year: "2021",
  questions: [
    {
      section: "PART A: Short Questions with Answers",
      items: [
        { 
          q: "Q1. What is Hadoop Distributed File System (HDFS)?", 
          a: "HDFS is a distributed file system that stores large data across multiple machines and provides fault tolerance through data replication." 
        },
        { 
          q: "Q2. Difference between Pseudo Distributed and Fully Distributed Mode", 
          a: "Pseudo Mode: Single machine, Simulation, For testing. Fully Distributed: Multiple machines, Real cluster, For production." 
        },
        { 
          q: "Q3. What is Pig Script Interfaces?", 
          a: "Pig provides three interfaces: Grunt Shell (interactive), Script Mode (batch), and Embedded Mode (Java integration)." 
        },
        { 
          q: "Q4. What is ABCs of Pig Latin?", 
          a: "Basic Pig commands like: LOAD, FILTER, FOREACH, GROUP, JOIN, ORDER used for data processing." 
        },
        { 
          q: "Q5. What is Mapper Code?", 
          a: "Mapper processes input data and converts it into key-value pairs in MapReduce." 
        },
        { 
          q: "Q6. Features of Configuring XML Files", 
          a: "Define Hadoop settings, Configure HDFS & MapReduce, and Control cluster behavior." 
        },
        { 
          q: "Q7. What is Job Tracker?", 
          a: "Job Tracker is the master node that manages MapReduce jobs and assigns tasks to Task Trackers." 
        },
        { 
          q: "Q8. Types of Data", 
          a: "Structured, Semi-Structured, and Unstructured data." 
        },
        { 
          q: "Q9. What is Google File System (GFS)?", 
          a: "GFS is a distributed file system developed by Google to store large data across clusters with fault tolerance." 
        },
        { 
          q: "Q10. Meaning of Hive Clients", 
          a: "Hive clients are interfaces like CLI, JDBC, and ODBC used to interact with Hive." 
        }
      ]
    },
    {
      section: "PART B: Important Long Answers",
      items: [
        { 
          q: "Q1. How Hive DML Works?", 
          a: "Hive DML includes commands like: LOAD (insert from file), INSERT (add records), INSERT OVERWRITE (replace data), and TRUNCATE (delete all). Hive processes data in batch using MapReduce." 
        },
        { 
          q: "Q2. Application Flow of Pig Latin", 
          a: "Pig script execution flow: Script → Parser → Logical Plan → Optimizer → Physical Plan → MapReduce → Output." 
        },
        { 
          q: "Q3. Explain Hive Clients", 
          a: "Hive clients: CLI (command line), JDBC (Java apps), ODBC (other apps). Used to execute Hive queries." 
        },
        { 
          q: "Q4. Scripting with Pig Latin", 
          a: "Pig Latin allows writing scripts using commands like LOAD, FILTER, GROUP. These scripts are converted into MapReduce jobs automatically." 
        },
        { 
          q: "Q5. Creating & Managing Tables in Hive", 
          a: "Involves CREATE TABLE, LOAD DATA, ALTER TABLE, and DROP TABLE. Supports managed & external tables." 
        },
        { 
          q: "Q6. HDFS Architecture", 
          a: "NameNode manages metadata, DataNode stores data. Data is stored in blocks with replication to provide fault tolerance." 
        },
        { 
          q: "Q7. Raw Comparator for Speed", 
          a: "Raw comparator compares serialized byte data directly without object creation, improving sorting speed in Hadoop." 
        }
      ]
    },
    {
      section: "PART C: Very Important 15 Marks",
      items: [
        { 
          q: "Q1. Building Blocks of Hadoop", 
          a: "Components: NameNode (master), DataNode (storage), Secondary NameNode, JobTracker, and TaskTracker. Handles storage & processing." 
        },
        { 
          q: "Q2. Hadoop API (Old vs New)", 
          a: "Old API (org.apache.hadoop.mapred) vs New API (org.apache.hadoop.mapreduce). New API is type-safe and recommended." 
        },
        { 
          q: "Q3. Raw Comparator Implementation", 
          a: "Used for fast sorting by comparing byte arrays directly. Reduces overhead of object creation, thus improving performance." 
        },
        { 
          q: "Q4. ABCs of Pig Latin + Interfaces", 
          a: "Commands: LOAD, FILTER, GROUP, JOIN. Interfaces: Grunt Shell, Script Mode, and Embedded Mode." 
        },
        { 
          q: "Q5. Hive Structure + Data Types", 
          a: "Hive architecture (Driver, Compiler, Execution Engine) uses Primitive (INT, STRING) and Complex (ARRAY, MAP) data types." 
        }
      ]
    }
  ]
};
