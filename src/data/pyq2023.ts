import { type PYQ } from './types';

export const pyq2023: PYQ = {
  year: "2023",
  questions: [
    {
      section: "PART A: Short Answers",
      items: [
        { 
          q: "Q1. What is HDFS?", 
          a: "HDFS is a distributed file system that stores large data across multiple machines with fault tolerance using replication." 
        },
        { 
          q: "Q2. Difference between Job Tracker and Task Tracker", 
          a: "Job Tracker: Master node that assigns tasks. Task Tracker: Worker node that executes tasks." 
        },
        { 
          q: "Q3. What is Driver Code?", 
          a: "Driver code is the main program that configures, controls, and submits MapReduce jobs to the Hadoop cluster." 
        },
        { 
          q: "Q4. Explain Hadoop MapReduce", 
          a: "MapReduce processes big data in two phases: Map (transforms input into key-value pairs) and Reduce (aggregates the results into a final output)." 
        },
        { 
          q: "Q5. Writable Collections", 
          a: "Collections like ArrayWritable and MapWritable are used in Hadoop to store and serialize multiple Writable objects together." 
        },
        { 
          q: "Q6. Custom Comparators", 
          a: "Custom comparators allow users to define their own specific sorting logic for keys in Hadoop MapReduce." 
        },
        { 
          q: "Q7. ABCs of Pig Latin", 
          a: "These are basic data processing commands: LOAD, FILTER, FOREACH, GROUP, JOIN, and ORDER." 
        },
        { 
          q: "Q8. Scripting with Pig Latin", 
          a: "Pig Latin scripts simplify data processing using high-level commands that are automatically converted into underlying MapReduce jobs." 
        },
        { 
          q: "Q9. What are Hive Clients?", 
          a: "Hive clients are interfaces such as CLI, JDBC, and ODBC used by users and applications to interact with Hive." 
        },
        { 
          q: "Q10. Hive Data Types & Difference with Pig", 
          a: "Hive is SQL-based for structured data management, while Pig is a scripting language designed for defining data flow transformations." 
        }
      ]
    },
    {
      section: "PART B: 8 Marks Answers",
      items: [
        { 
          q: "Q1. Define Big Data + Challenges", 
          a: "Big Data refers to large, fast, and complex data. Primary challenges include storage capacity, processing speed, security, and data quality maintenance." 
        },
        { 
          q: "Q2. Weather Dataset + Mapper/Reducer", 
          a: "Mapper: map(year, temp). Reducer: reduce(year → max temp). This logic is used to find the maximum temperature for each year in a dataset." 
        },
        { 
          q: "Q3. Writable Interface + Classes", 
          a: "The Writable interface is used for efficient serialization in Hadoop. Common classes include IntWritable, Text, and BytesWritable." 
        },
        { 
          q: "Q4. Pig Script Interfaces", 
          a: "Pig can be executed via: Grunt Shell (interactive), Script Mode (batch processing), and Embedded Mode (within Java programs)." 
        },
        { 
          q: "Q5. Hive + Creating Tables", 
          a: "Hive is a SQL-based tool for data warehousing. Standard commands include CREATE TABLE, LOAD DATA, and DROP TABLE." 
        },
        { 
          q: "Q6. Hadoop Core Components", 
          a: "The core components are HDFS (storage), MapReduce (processing), and the coordination between NameNode/DataNode." 
        },
        { 
          q: "Q7. Hadoop API", 
          a: "These are the programming interfaces used to write MapReduce programs, consisting of the legacy mapred and the modern mapreduce APIs." 
        }
      ]
    },
    {
      section: "PART C: 15 Marks",
      items: [
        { 
          q: "Q1. HDFS Architecture", 
          a: "Architecture involving NameNode (metadata management) and DataNode (block storage). Replication factor ensures high fault tolerance." 
        },
        { 
          q: "Q2. Mapper Code + Why MapReduce is Slow", 
          a: "Mapper generates intermediate key-value pairs. MapReduce can be slow due to excessive disk I/O, multiple stages, and network data transfer." 
        },
        { 
          q: "Q3. Writable Wrappers + Custom Writable", 
          a: "Standard Wrappers include IntWritable and Text. A Custom Writable is created by implementing the write() and readFields() methods." 
        },
        { 
          q: "Q4. Limitations of Pig + Modes", 
          a: "Limitations: not real-time and can be slow. Implementation Modes include Local (single machine) and Distributed (Hadoop cluster)." 
        },
        { 
          q: "Q5. Short Notes", 
          a: "(a) Querying & Analyzing: Using SELECT, GROUP BY, ORDER. (b) Hive: SQL-based big data warehousing tool. (c) Hive DML: INSERT, LOAD, and TRUNCATE operations." 
        }
      ]
    }
  ]
};
