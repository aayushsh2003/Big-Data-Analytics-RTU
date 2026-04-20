import { type PYQ } from './types';

export const pyq2022: PYQ = {
  year: "2022",
  questions: [
    {
      section: "PART A: Short Answers",
      items: [
        { 
          q: "Q1. What are the three V’s of Big Data?", 
          a: "Volume (size), Velocity (speed), and Variety (types of data)." 
        },
        { 
          q: "Q2. What is Hadoop API?", 
          a: "Hadoop API provides the necessary classes and methods to write MapReduce programs for processing big data." 
        },
        { 
          q: "Q3. Why Hadoop is used in Big Data?", 
          a: "Hadoop handles large data using distributed storage (HDFS) and parallel processing (MapReduce), making it highly scalable." 
        },
        { 
          q: "Q4. Difference between Combiner and Partitioner", 
          a: "Combiner (Local Reducer): Reduces data size locally. Partitioner: Distributes data and assigns it to specific reducers." 
        },
        { 
          q: "Q5. Difference between ObjectWritable and GenericWritable", 
          a: "ObjectWritable can store any object, while GenericWritable is optimized to store multiple predefined Writable types." 
        },
        { 
          q: "Q6. What is Google File System?", 
          a: "GFS is a distributed file system designed by Google for large-scale data storage with built-in fault tolerance." 
        },
        { 
          q: "Q7. What is Driver Code?", 
          a: "Driver code is the main entry point that configures and submits a MapReduce job to the Hadoop cluster." 
        },
        { 
          q: "Q8. Explain Pig Script Interfaces", 
          a: "Pig supports Grunt Shell (interactive), Script Mode (batch processing), and Embedded Mode (Java integration)." 
        },
        { 
          q: "Q9. Issues in Data Stream Processing", 
          a: "Challenges include high data speed, storage limitations, and the need for real-time processing under low latency." 
        },
        { 
          q: "Q10. What is Hive DML?", 
          a: "Hive Data Manipulation Language includes commands like INSERT, LOAD, and TRUNCATE used to manipulate data within tables." 
        }
      ]
    },
    {
      section: "PART B: 8 Marks Answers",
      items: [
        { 
          q: "Q1. What is HDFS? Explain Components", 
          a: "HDFS is a distributed file system consisting of: NameNode (manages metadata), DataNode (stores actual data), and Secondary NameNode (assists in metadata merging)." 
        },
        { 
          q: "Q2. Role of Combiner in MapReduce", 
          a: "A Combiner performs local aggregation to reduce the volume of data sent to the reducer, thus improving network performance and overall speed." 
        },
        { 
          q: "Q3. Raw Comparator for Speed", 
          a: "Compares byte data directly instead of creating Java objects, leading to faster sorting and reduced total processing time." 
        },
        { 
          q: "Q4. Creating & Managing Databases in Hive", 
          a: "Involves CREATE DATABASE, CREATE TABLE, ALTER TABLE, and DROP TABLE. Supports both external and managed (internal) tables." 
        },
        { 
          q: "Q5. Principles of Writing Pig Scripts", 
          a: "Use simple operations, optimize queries, always use FILTER before GROUP, and avoid processing unnecessary data to improve efficiency." 
        },
        { 
          q: "Q6. Application Flow of Pig Latin", 
          a: "The flow follows: Script → Parser → Logical Plan → Optimizer → Physical Plan → Execution Engine → Final Output." 
        },
        { 
          q: "Q7. Creating, Dropping, Altering DB in Hive", 
          a: "Standard management commands: CREATE DATABASE, DROP DATABASE, and ALTER DATABASE are used for logical data storage management." 
        }
      ]
    },
    {
      section: "PART C: 15 Marks",
      items: [
        { 
          q: "Q1. HDFS Architecture", 
          a: "NameNode manages metadata, while DataNodes store data blocks (typically 128MB). A replication factor of 3 ensures high fault tolerance." 
        },
        { 
          q: "Q2. Building Blocks of Hadoop", 
          a: "The core blocks are HDFS for storage and MapReduce for processing, coordinated by NameNodes/DataNodes and JobTracker/TaskTracker." 
        },
        { 
          q: "Q3. MapReduce Word Count Code", 
          a: "Mapper: map(key, value) outputs (word, 1). Reducer: reduce(word, values) outputs the sum of values for each unique word." 
        },
        { 
          q: "Q4. ABCs of Pig + Interfaces", 
          a: "Key commands: LOAD, FILTER, GROUP. Interfaces available are Grunt Shell, Script Mode, and Embedded Mode." 
        },
        { 
          q: "Q5. Wrapper Classes in Hadoop", 
          a: "Classes like IntWritable, Text, and FloatWritable are used as wrappers to facilitate efficient serialization across the cluster." 
        }
      ]
    }
  ]
};
