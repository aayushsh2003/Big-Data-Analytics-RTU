import { type PYQ } from './types';

export const pyq2024: PYQ = {
  year: "2024",
  questions: [
    {
      section: "PART A: Short Answers",
      items: [
        { 
          q: "Q1. Define Big Data", 
          a: "Big Data refers to large, complex, and fast-growing data that cannot be processed using traditional data management systems." 
        },
        { 
          q: "Q2. Characteristics of Big Data Applications", 
          a: "Key characteristics include large volume, high velocity, variety of data types, and horizontal scalability." 
        },
        { 
          q: "Q3. What is MapReduce Programming Model?", 
          a: "MapReduce is a programming model used for processing large-scale data in parallel through Map (transform) and Reduce (aggregate) functions." 
        },
        { 
          q: "Q4. What is Hadoop?", 
          a: "Hadoop is an open-source framework that provides distributed storage (HDFS) and distributed processing (MapReduce) for big data." 
        },
        { 
          q: "Q5. What is Pig?", 
          a: "Pig is a high-level scripting platform that simplifies Hadoop programming by using a scripting language called Pig Latin." 
        },
        { 
          q: "Q6. Define Custom Comparators", 
          a: "Custom comparators are used to define user-specific sorting logic for keys in a Hadoop environment." 
        },
        { 
          q: "Q7. What is Apache Hive?", 
          a: "Hive is a data warehouse system that enables users to query and analyze large datasets using a SQL-like language called HiveQL." 
        },
        { 
          q: "Q8. Difference between Pig and Hive (2 points)", 
          a: "Pig: Scripting language focusing on data flow. Hive: SQL-based tool focusing on declarative querying." 
        },
        { 
          q: "Q9. Define Cluster", 
          a: "A cluster is a group of connected computers (nodes) that work together as a single, powerful system for data processing." 
        },
        { 
          q: "Q10. What is Google File System?", 
          a: "GFS is a proprietary distributed file system developed by Google to provide scalable and fault-tolerant storage for massive data clusters." 
        }
      ]
    },
    {
      section: "PART B: 8 Marks Answers",
      items: [
        { 
          q: "Q1. Features of Big Data", 
          a: "The core features are Volume (size), Velocity (speed), Variety (types), Scalability (growth), and Fault Tolerance (reliability)." 
        },
        { 
          q: "Q2. Nature of Data & Applications", 
          a: "Data can be Structured or Unstructured. Major applications include social media analytics, healthcare records, and financial risk modeling." 
        },
        { 
          q: "Q3. Storage Considerations in Big Data", 
          a: "Storage must account for distributed systems, massive scalability, data replication for safety, and high fault tolerance against hardware failure." 
        },
        { 
          q: "Q4. MapReduce Application Development", 
          a: "The development cycle involves writing the Mapper code, writing the Reducer code, creating the Driver program, and then compiling/running the job on Hadoop." 
        },
        { 
          q: "Q5. Execution Modes in Pig", 
          a: "Pig can run in two primary modes: Local Mode (on a single machine) and Distributed Mode (on a Hadoop cluster)." 
        },
        { 
          q: "Q6. Custom Writable Implementation", 
          a: "To create a custom Writable, a class must implement the Writable interface and specifically define the write() and readFields() methods for serialization." 
        },
        { 
          q: "Q7. HiveQL + Features of Hive", 
          a: "HiveQL is a SQL-like language. Hive features include easy querying for analysts, massive data processing capacity, and seamless integration with Hadoop storage." 
        }
      ]
    },
    {
      section: "PART C: 15 Marks",
      items: [
        { 
          q: "Q1. Steps to Setup Hadoop Cluster + XML Config", 
          a: "The process involves installing Hadoop, configuring critical XML files like core-site.xml (URI) and hdfs-site.xml (replication), and then starting the cluster daemons." 
        },
        { 
          q: "Q2. HDFS + NameNode, DataNode, Block", 
          a: "NameNode manages the metadata, DataNode performs the actual block storage, and files are split into standard blocks (typically 128MB) for distribution." 
        },
        { 
          q: "Q3. Writable Interface + Comparator + Scale Out", 
          a: "The Writable interface handles serialization, Comparators handle sorting logic, and Scale-out refers to adding more machines horizontally to improve system performance." 
        },
        { 
          q: "Q4. Pig Data Types + Operators", 
          a: "Common types include int and chararray. Essential operators are LOAD (read), FILTER (select rows), and GROUP (grouping records)." 
        },
        { 
          q: "Q5. Hive Architecture + HiveQL", 
          a: "The architecture consists of the Driver, Compiler, and Execution Engine. HiveQL allows for querying these structures using standard SQL patterns." 
        }
      ]
    }
  ]
};
