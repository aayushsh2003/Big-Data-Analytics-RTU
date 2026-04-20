import { type Unit } from './types';

export const unit2: Unit = {
  id: "unit2",
  title: "Unit 2: Working with Big Data",
  topics: [
    {
      id: "u2t1",
      title: "Google File System (GFS)",
      content: "Before Hadoop, Google created GFS to handle massive storage for services like Search, Gmail, and YouTube. Traditional single-computer storage was too small, slow, and prone to crashes.\n\n### What is GFS?\nGoogle File System is a distributed file system designed to store huge datasets reliably across clusters of commodity hardware (cheap, standard computers).\n\n### Main Idea:\nInstead of storing a file in one computer, GFS splits it into pieces, stores each piece on different machines, and replicates them for safety.\n\n### Components of GFS:\n1. **Master Server:** The 'Brain' that stores metadata (where files are). It does NOT store actual data.\n2. **Chunk Server:** The 'Workers' that store real data in pieces called **Chunks** (approx. 64MB each).\n3. **Client:** The application that asks the Master for locations and then reads directly from Chunk Servers.\n\n### Replication (Fault Tolerance):\nEvery chunk is copied **3 times** across different machines. If one computer fails, the data is still safe. This is called **Fault Tolerance**.",
      diagramSvg: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <rect x="300" y="20" width="200" height="80" fill="white" stroke="black" stroke-width="2"/>
  <text x="400" y="55" text-anchor="middle" font-weight="900">MASTER SERVER</text>
  <text x="400" y="75" text-anchor="middle" font-size="10" opacity="0.6">(Metadata & Index)</text>
  
  <line x1="300" y1="60" x2="150" y2="150" stroke="black" stroke-dasharray="4,4"/>
  <line x1="500" y1="60" x2="650" y2="150" stroke="black" stroke-dasharray="4,4"/>

  <g transform="translate(50, 180)">
    <rect width="180" height="120" fill="white" stroke="black" stroke-width="2"/>
    <text x="90" y="30" text-anchor="middle" font-weight="900">CHUNK SERVER 1</text>
    <rect x="20" y="50" width="40" height="30" fill="black"/>
    <rect x="70" y="50" width="40" height="30" fill="black"/>
    <text x="90" y="100" text-anchor="middle" font-size="9">Stores 64MB Pieces</text>
  </g>

  <g transform="translate(310, 180)">
    <rect width="180" height="120" fill="white" stroke="black" stroke-width="2"/>
    <text x="90" y="30" text-anchor="middle" font-weight="900">CHUNK SERVER 2</text>
    <rect x="20" y="50" width="40" height="30" fill="black"/>
    <text x="90" y="100" text-anchor="middle" font-size="9">Replicated Data</text>
  </g>

  <g transform="translate(570, 180)">
    <rect width="180" height="120" fill="white" stroke="black" stroke-width="2"/>
    <text x="90" y="30" text-anchor="middle" font-weight="900">CHUNK SERVER 3</text>
    <rect x="70" y="50" width="40" height="30" fill="black"/>
  </g>
</svg>`,
      vivaQuestion: "Does the Master store actual data in GFS?",
      vivaAnswer: "No. The Master stores only metadata (mapping of files to chunks). The actual data is stored on Chunk Servers.",
      keyTerms: [
        { term: "Chunk", definition: "A fixed-size piece of a file in GFS, usually 64MB." },
        { term: "Fault Tolerance", definition: "The ability of a system to continue operating even if one or more components fail." }
      ]
    },
    {
      id: "u2t2",
      title: "Hadoop Distributed File System (HDFS)",
      content: "HDFS is the open-source version of GFS. It acts as the storage layer for Hadoop, making many computers behave like one massive hard disk.\n\n### Core Properties:\n- **Storage Strategy:** It divides files into **Blocks** (Default size = **128 MB**).\n- **Replication Factor:** Each block is copied **3 times** by default to provide high fault tolerance.\n\n### HDFS Architecture:\n1. **NameNode (The Brain):** A master server that maintains metadata, file names, and block locations. If NameNode fails, the entire Hadoop cluster stops.\n2. **DataNode (The Workers):** Actual computers that store data blocks and perform read/write operations as instructed by the NameNode.\n\n### Reading Flow:\nWhen a user requests a file, they first contact the NameNode to get the locations, then read the data directly from the DataNodes. This prevents the master from becoming a bottleneck.",
      imageUrl: "https://picsum.photos/seed/hdfs-storage/800/400",
      vivaQuestion: "What is the default block size and replication factor in HDFS?",
      vivaAnswer: "The default block size is 128 MB and the default replication factor is 3.",
      keyTerms: [
        { term: "Block", definition: "The minimum unit of data that HDFS can read or write (Default 128MB)." },
        { term: "Throughput", definition: "The amount of data moved from one place to another in a given time." }
      ]
    },
    {
      id: "u2t3",
      title: "Building Blocks of Hadoop",
      content: "Hadoop is managed through five key roles divided between storage (HDFS) and processing (MapReduce).\n\n### Storage Blocks (HDFS):\n- **NameNode:** The Master. Manages metadata. If it fails, the system stops.\n- **DataNode:** The Worker. Stores actual blocks and sends 'heartbeats' to NameNode.\n- **Secondary NameNode:** The Assistant. Periodically merges metadata snapshots to help NameNode. **It is NOT a backup/Principal replacement.**\n\n### Processing Blocks (MapReduce):\n- **Job Tracker:** The Master. Receives jobs from users, divides them into tasks, and assigns them to nodes.\n- **Task Tracker:** The Worker. Runs the actual code and processes data.\n\n### School Analogy:\n- **NameNode:** Principal (Knows everything).\n- **Secondary NameNode:** Vice-Principal (Helps but cannot replace).\n- **DataNode:** Classrooms (Store students/data).\n- **Job Tracker:** Exam Controller (Plans the exam).\n- **Task Tracker:** Students (Do the actual writing/work).",
      vivaQuestion: "Is Secondary NameNode a backup for NameNode?",
      vivaAnswer: "No. It is an assistant that helps merge metadata. It cannot take over if the NameNode crashes (though it can help in recovery).",
    },
    {
      id: "u2t4",
      title: "Hadoop Cluster Modes",
      content: "Hadoop can be installed and run in three different environmental setups depending on the goal.\n\n### 1. Local Mode (Standalone)\n- **Setup:** Runs on only one computer.\n- **HDFS:** Not used. Files are stored on local disk.\n- **Purpose:** Learning, testing, and debugging programs.\n\n### 2. Pseudo-Distributed Mode\n- **Setup:** Runs on one computer but simulates a cluster by running each Hadoop service in a separate process.\n- **Features:** HDFS and replication work. \n- **Purpose:** Lab experiments and practicing real Hadoop behavior.\n\n### 3. Fully Distributed Mode\n- **Setup:** Multiple computers connected via a network.\n- **Structure:** One dedicated Master node and many Worker nodes.\n- **Purpose:** Real Big Data production environments used by companies like Facebook or Amazon.",
      diagramSvg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(50, 50)">
    <rect width="180" height="100" rx="4" fill="#f0f0f0" stroke="black"/>
    <text x="90" y="30" text-anchor="middle" font-weight="bold">LOCAL</text>
    <text x="90" y="60" text-anchor="middle" font-size="10">Single Computer</text>
    <text x="90" y="75" text-anchor="middle" font-size="10">Testing/Learning</text>
  </g>
  <g transform="translate(310, 50)">
    <rect width="180" height="100" rx="4" fill="#e0e0e0" stroke="black"/>
    <text x="90" y="30" text-anchor="middle" font-weight="bold">PSEUDO</text>
    <text x="90" y="60" text-anchor="middle" font-size="10">1 PC acts like many</text>
    <text x="90" y="75" text-anchor="middle" font-size="10">Simulated Cluster</text>
  </g>
  <g transform="translate(570, 50)">
    <rect width="180" height="100" rx="4" fill="black" stroke="black"/>
    <text x="90" y="30" text-anchor="middle" font-weight="bold" fill="white">FULLY DISTRIBUTED</text>
    <text x="90" y="60" text-anchor="middle" font-size="10" fill="white">Multiple Networked PCs</text>
    <text x="90" y="75" text-anchor="middle" font-size="10" fill="white">Production Scale</text>
  </g>
</svg>`,
      vivaQuestion: "Which mode is used in companies for actual data processing?",
      vivaAnswer: "Fully Distributed Mode, as it allows for real scaling across many physical machines.",
    },
    {
      id: "u2t5",
      title: "Hadoop XML Configuration Files",
      content: "Hadoop requires specific XML files located in the `etc/hadoop` directory to function. These files provide the 'instructions' for the system.\n\n### The 4 Major Configuration Files:\n1. **core-site.xml:** Basic settings like the NameNode address (e.g., `hdfs://localhost:9000`).\n2. **hdfs-site.xml:** Storage settings and replication factor (e.g., `dfs.replication = 3`).\n3. **mapred-site.xml:** Defines which framework MapReduce will use **(usually YARN)**.\n4. **yarn-site.xml:** Manages CPU/RAM resources and scheduling for jobs.\n\n### Why are these needed?\nWithout these files, Hadoop wouldn't know where the master is, how many copies of data to make, or how to allocate memory.",
      codeSnippet: `<!-- Example hdfs-site.xml -->
<configuration>
  <property>
    <name>dfs.replication</name>
    <value>3</value>
  </property>
</configuration>`,
      language: "xml",
      vivaQuestion: "Which file contains the replication factor setting?",
      vivaAnswer: "The replication factor is configured in the hdfs-site.xml file.",
    }
  ]
};
