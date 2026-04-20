import { type PYQ } from './types';

export const pyq2025: PYQ = {
  year: "2025",
  questions: [
    {
      section: "PART A: Short Answers",
      items: [
        { 
          q: "Q1. Key features of Big Data", 
          a: "Volume, Velocity, Variety, Scalability, and Fault tolerance." 
        },
        { 
          q: "Q2. Define 3 V’s with examples", 
          a: "Volume (size: YouTube videos), Velocity (speed: UPI transactions), and Variety (formats: text, video)." 
        },
        { 
          q: "Q3. What is GFS and its purpose?", 
          a: "GFS is a distributed file system by Google designed to store large volumes of data across clusters with reliability." 
        },
        { 
          q: "Q4. Role of NameNode and DataNode", 
          a: "NameNode manages metadata (file hierarchy), while DataNode stores the actual physical data blocks." 
        },
        { 
          q: "Q5. What is Combiner in MapReduce?", 
          a: "A Combiner performs local aggregation of mapper output to reduce the volume of data transferred across the network." 
        },
        { 
          q: "Q6. WritableComparable in Hadoop", 
          a: "WritableComparable is an interface that allows data to be both serialized (Writable) and sorted (Comparable) using the compareTo() method." 
        },
        { 
          q: "Q7. Hive Clients + Types", 
          a: "Hive supports multiple client types to interact with the system: CLI, JDBC, and ODBC." 
        },
        { 
          q: "Q8. What is Pig Latin?", 
          a: "Pig Latin is a high-level scripting language used in Apache Pig for describing data flow transformations on Hadoop." 
        },
        { 
          q: "Q9. Difference between Mapper and Reducer", 
          a: "Mapper: Generates intermediate key-value pairs. Reducer: Aggregates and process those pairs into a final result." 
        },
        { 
          q: "Q10. What is Record Reader?", 
          a: "Record Reader is responsible for converting raw input data from a split into key-value pairs suitable for the mapper." 
        }
      ]
    },
    {
      section: "PART B: 8 Marks Answers",
      items: [
        { 
          q: "Q1. HDFS Architecture", 
          a: "Consists of NameNode (metadata) and DataNodes (block storage). Uses replication to ensure fault tolerance in case of node failure." 
        },
        { 
          q: "Q2. MapReduce Workflow", 
          a: "Data flows through: Input → Mapper → Shuffle & Sort → Reducer → Final Output." 
        },
        { 
          q: "Q3. Writable Class Hierarchy", 
          a: "Includes classes like IntWritable, Text, and BytesWritable. These are part of a hierarchy designed for efficient, lightweight serialization." 
        },
        { 
          q: "Q4. Pig Architecture", 
          a: "The architecture follows: Pig Script → Parser → Logical Plan → Optimizer → Physical Plan → translation into MapReduce tasks." 
        },
        { 
          q: "Q5. MapReduce Partitioning + Role of Partitioner", 
          a: "The Partitioner distributes data to reducers based on the key, ensuring effective load balancing across the cluster nodes." 
        },
        { 
          q: "Q6. HiveQL Query (Create + Insert + Filter)", 
          a: "CREATE TABLE students (name STRING, marks INT); INSERT INTO students VALUES ('Aayush', 85); SELECT * FROM students WHERE marks > 50;" 
        },
        { 
          q: "Q7. Hadoop I/O + Serialization", 
          a: "Hadoop uses the Writable interface to convert complex objects into a compact byte format for storage and network transmission." 
        }
      ]
    },
    {
      section: "PART C: 10 Marks",
      items: [
        { 
          q: "Q1. Building Blocks of Hadoop", 
          a: "The master-slave blocks consist of NameNode, DataNode, JobTracker, and TaskTracker, coordinating storage and processing." 
        },
        { 
          q: "Q2. MapReduce Working", 
          a: "Mapping generates K-V pairs, Shuffling groups keys together, and Reducing performs the final aggregation for output." 
        },
        { 
          q: "Q3. Pig Script (Weather Dataset)", 
          a: "A = LOAD 'data.txt' AS (year, temp); B = GROUP A BY year; C = FOREACH B GENERATE group, MAX(A.temp); DUMP C;" 
        },
        { 
          q: "Q4. Hive Data Types + Queries", 
          a: "Supports types like INT, STRING, and ARRAY. Analysis uses standard SQL clauses like SELECT, GROUP BY, and ORDER BY." 
        },
        { 
          q: "Q5. Differences", 
          a: "(a) Hive (SQL-based) vs Pig (Script-based). (b) HDFS (Distributed/Fault-tolerant) vs Traditional FS (Single). (c) MapReduce (Parallel/Scalable) vs Traditional Processing (Sequential)." 
        }
      ]
    }
  ]
};
