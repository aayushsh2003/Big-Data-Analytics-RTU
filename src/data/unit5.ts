import { type Unit } from './types';

export const unit5: Unit = {
  id: "unit5",
  title: "Unit 5: Apache Pig Analysis",
  topics: [
    {
      id: "u5t1",
      title: "Pig: Hadoop Programming Made Easier",
      content: "Writing MapReduce in Java is lengthy, complex, and time-consuming. A simple word count can take 50–100 lines of code. **Apache Pig** was created to solve this problem.\n\n### What is Pig?\nApache Pig is a high-level platform for processing large datasets on Hadoop using a simple scripting language called **Pig Latin**.\n\n### Why Pig is Used:\nInstead of full MapReduce Java code, developers write simple scripts (similar to SQL) that are automatically converted into MapReduce jobs behind the scenes.\n\n### MapReduce vs. Pig (Analogy):\n- **MapReduce:** Building a house by hand, brick by brick (Complex & Slow).\n- **Pig:** Using a pre-built house kit where you just assemble the parts (Easy & Fast).\n\n### Key Features:\n- **Less Coding:** Reduces development time significantly.\n- **Hadoop Integration:** Runs directly on top of HDFS.\n- **Multi-Data Support:** Handles structured, semi-structured, and unstructured data.",
      vivaQuestion: "Why is Pig preferred over MapReduce for common data tasks?",
      vivaAnswer: "Because it requires significantly less code (1 line of Pig often replaces 100 lines of Java) and is much faster to develop and debug.",
      keyTerms: [
        { term: "Pig Latin", definition: "The scripting language used in Apache Pig." },
        { term: "Abstraction", definition: "Hiding complex internal details to provide a simpler interface to the user." }
      ]
    },
    {
      id: "u5t2",
      title: "Pig Architecture",
      content: "Pig Architecture explains how your simple scripts are turned into complex Hadoop jobs. Internally, a script goes through several layers before execution.\n\n### 1. The Core Components:\n- **Parser:** Checks your script for syntax errors. If clean, it moves to the plan phase.\n- **Logical Plan:** The 'Blueprint.' It lists the step-by-step operations (LOAD, FILTER, etc.) without actually executing them.\n- **Optimizer:** The 'Brain.' It improves the plan by removing redundant steps or reordering tasks for speed.\n- **Physical Plan:** The 'Execution Map.' It maps the logical steps into actual physical resources.\n- **Execution Engine:** Converts the physical plan into MapReduce jobs and submits them to Hadoop.\n\n### Architecture Flow:\nScript → Parser → Logical Plan → Optimizer → Physical Plan → Execution Engine → Hadoop (MapReduce).",
      diagramSvg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
  <rect x="300" y="20" width="200" height="40" rx="4" fill="#f0f0f0" stroke="black"/>
  <text x="400" y="45" text-anchor="middle" font-weight="900">PIG LATIN SCRIPT</text>

  <g transform="translate(300, 80)">
    <rect width="200" height="40" rx="4" fill="white" stroke="black"/>
    <text x="100" y="25" text-anchor="middle" font-weight="bold">PARSER</text>
  </g>

  <g transform="translate(300, 140)">
    <rect width="200" height="40" rx="4" fill="white" stroke="black"/>
    <text x="100" y="25" text-anchor="middle" font-weight="bold">LOGICAL PLAN</text>
  </g>

  <g transform="translate(300, 200)">
    <rect width="200" height="40" rx="4" fill="white" stroke="black" stroke-dasharray="4"/>
    <text x="100" y="25" text-anchor="middle" font-weight="bold">OPTIMIZER</text>
  </g>

  <g transform="translate(300, 260)">
    <rect width="200" height="40" rx="4" fill="white" stroke="black"/>
    <text x="100" y="25" text-anchor="middle" font-weight="bold">PHYSICAL PLAN</text>
  </g>

  <g transform="translate(300, 320)">
    <rect width="200" height="40" rx="4" fill="black" />
    <text x="100" y="25" text-anchor="middle" fill="white" font-weight="bold">EXECUTION ENGINE</text>
  </g>

  <g transform="translate(300, 380)">
    <rect width="200" height="40" rx="4" fill="#eee" stroke="black"/>
    <text x="100" y="25" text-anchor="middle" font-weight="bold">HADOOP (MAPREDUCE)</text>
  </g>
  
  <path d="M 400 60 L 400 80 M 400 120 L 400 140 M 400 180 L 400 200 M 400 240 L 400 260 M 400 300 L 400 320 M 400 360 L 400 380" stroke="black" stroke-width="1.5"/>
</svg>`,
      vivaQuestion: "What happens during the Optimization phase in Pig?",
      vivaAnswer: "Pig analyzes the logical plan to remove unnecessary operations and reorders them to improve the overall performance of the resulting MapReduce jobs.",
    },
    {
      id: "u5t3",
      title: "Pig Latin Application Flow",
      content: "The application flow describes the dynamic execution process of a Pig program from the moment you run it until you get the output in HDFS.\n\n### Step-by-Step Process:\n1. **Submit Script:** User runs the script via the command line or an interface.\n2. **Parsing & Validation:** Pig verifies the syntax and ensures the data source exists.\n3. **Logical & Physical Planning:** Pig builds the internal maps for how to process the data.\n4. **MapReduce Conversion:** The plan is translated into Java-based MapReduce jobs.\n5. **Task Execution:** Jobs are distributed across the Hadoop cluster.\n6. **Result Generation:** Data is processed and the final output is saved to the specified HDFS location.",
      vivaQuestion: "Where is the final output of a Pig script usually stored?",
      vivaAnswer: "It is typically stored in HDFS (Hadoop Distributed File System) using the STORE command, though it can also be saved to a local file system.",
    },
    {
      id: "u5t4",
      title: "ABCs of Pig Latin (Basic Commands)",
      content: "Pig Latin works using simple operators. Understanding these 'ABCs' allows you to build complex data pipelines.\n\n### Core Commands:\n- **LOAD:** Read data from HDFS into a relation (e.g., `A = LOAD 'data.txt'`).\n- **FILTER:** Select specific rows based on a condition (e.g., `marks > 50`).\n- **FOREACH:** Process each record individually to pick or transform columns.\n- **GROUP:** Organize data into clusters based on a specific field.\n- **JOIN:** Combine two different datasets using a common ID.\n- **ORDER:** Sort data in ascending or descending (DESC) order.\n- **STORE/DUMP:** Save results to HDFS or print them directly to the screen.",
      codeSnippet: `-- Complete Pig Script Example\ndata = LOAD 'students.txt' AS (name:chararray, marks:int);\npassed = FILTER data BY marks > 40;\nsorted = ORDER passed BY marks DESC;\nSTORE sorted INTO 'to_ppers';`,
      language: "sql",
      vivaQuestion: "Difference between DUMP and STORE?",
      vivaAnswer: "DUMP prints the result directly to your terminal screen for debugging, while STORE saves the result into a file in HDFS.",
      keyTerms: [
        { term: "Relation", definition: "A table-like structure in Pig where data is stored during processing." }
      ]
    },
    {
      id: "u5t5",
      title: "Local vs Distributed Mode",
      content: "You can run Pig in two primary modes depending on your data size and environment.\n\n### 1. Local Mode (`-x local`):\n- **Environment:** Runs on a single machine (your laptop).\n- **Storage:** Uses local disk, not HDFS.\n- **Purpose:** Best for testing scripts, debugging, and small datasets.\\n\n### 2. Distributed Mode (Default):\n- **Environment:** Runs on a real Hadoop cluster.\n- **Storage:** Uses HDFS for data input and output.\n- **Purpose:** Used for production scale processing of massive (TB/PB) datasets.",
      vivaQuestion: "Which mode is used by default in Pig?",
      vivaAnswer: "The Distributed (Hadoop) mode is the default mode.",
      keyTerms: [
        { term: "-x", definition: "The flag used to specify the execution mode in the Pig command." }
      ]
    },
    {
      id: "u5t6",
      title: "Pig Script Interfaces",
      content: "Pig provides three different ways for users to interact with the engine and run their code.\n\n### 1. Grunt Shell (Interactive Mode):\n- **What it is:** A command-line shell where you type commands line-by-line.\n- **Best for:** Experimentation and quick testing of operators.\n\n### 2. Script Mode (Batch Mode):\n- **What it is:** Writing all commands in a `.pig` file and running them all at once.\n- **Best for:** Automated, large-scale production tasks.\n\n### 3. Embedded Mode:\n- **What it is:** Using Pig directly inside a Java program.\n- **Best for:** Developers building data apps that need Big Data power inside their software logic.",
      vivaQuestion: "What is the Grunt shell?",
      vivaAnswer: "It is Pig's interactive shell that allows users to execute commands one by one and receive immediate feedback.",
    }
  ]
};
