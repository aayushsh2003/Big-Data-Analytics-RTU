import { type Unit } from './types';

export const unit3: Unit = {
  id: "unit3",
  title: "Unit 3: Writing MapReduce Programs",
  topics: [
    {
      id: "u3t1",
      title: "MapReduce Concept using Weather Dataset",
      content: "Big Data files are massive (GB, TB, PB). For example, a weather department records temperature, humidity, rainfall, and wind speed every day for 20 years. Finding the maximum temperature for each year from hundreds of GBs of data would take a single computer days.\n\n### What is MapReduce?\nMapReduce is a programming model of Hadoop used to process large datasets in a distributed and parallel manner across multiple machines. Think of it as many computers working together to solve one big problem.\n\n### The Weather Dataset Workflow:\n1. **Map Phase:** Mapper reads records and converts raw results into Key-Value pairs. (Key = Year, Value = Temperature).\n2. **Shuffle & Sort:** Hadoop automatically groups the same keys together.\n3. **Reduce Phase:** Reducer receives grouped data and calculates the final result (e.g., Max Temp per Year).\n\n### Why it's Powerful:\n- **Parallel Processing:** Fast computation on TB/PB data.\n- **Fault Tolerant:** Automatic recovery if a machine fails.",
      diagramSvg: `<svg viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Input File -->
  <g transform="translate(20, 150)">
    <rect width="100" height="60" fill="white" stroke="black" stroke-width="2"/>
    <text x="50" y="35" text-anchor="middle" font-weight="900" font-size="10">INPUT DATA</text>
    <text x="50" y="50" text-anchor="middle" font-size="8" opacity="0.5">(Raw Weather Logs)</text>
  </g>

  <!-- Mappers -->
  <g transform="translate(180, 50)">
    <rect width="120" height="80" fill="white" stroke="black" stroke-width="2"/>
    <text x="60" y="30" text-anchor="middle" font-weight="900" font-size="12">MAPPER 1</text>
    <text x="60" y="55" text-anchor="middle" font-size="9">(2010, 35)</text>
    <text x="60" y="70" text-anchor="middle" font-size="9">(2010, 40)</text>
  </g>
  <g transform="translate(180, 220)">
    <rect width="120" height="80" fill="white" stroke="black" stroke-width="2"/>
    <text x="60" y="30" text-anchor="middle" font-weight="900" font-size="12">MAPPER 2</text>
    <text x="60" y="55" text-anchor="middle" font-size="9">(2011, 38)</text>
    <text x="60" y="70" text-anchor="middle" font-size="9">(2011, 42)</text>
  </g>

  <!-- Shuffle & Sort -->
  <g transform="translate(380, 140)">
    <ellipse cx="60" cy="40" rx="60" ry="40" fill="black" />
    <text x="60" y="35" text-anchor="middle" fill="white" font-weight="900" font-size="10">SHUFFLE</text>
    <text x="60" y="55" text-anchor="middle" fill="white" font-weight="900" font-size="10">& SORT</text>
  </g>

  <!-- Reducers -->
  <g transform="translate(580, 50)">
    <rect width="120" height="80" fill="white" stroke="black" stroke-width="2"/>
    <text x="60" y="30" text-anchor="middle" font-weight="900" font-size="12">REDUCER 1</text>
    <text x="60" y="60" text-anchor="middle" font-size="10" font-weight="bold">MAX: 2010 → 40</text>
  </g>
  <g transform="translate(580, 220)">
    <rect width="120" height="80" fill="white" stroke="black" stroke-width="2"/>
    <text x="60" y="30" text-anchor="middle" font-weight="900" font-size="12">REDUCER 2</text>
    <text x="60" y="60" text-anchor="middle" font-size="10" font-weight="bold">MAX: 2011 → 42</text>
  </g>

  <!-- Connectors -->
  <path d="M 120 180 L 180 100" stroke="black" marker-end="url(#arrowhead)"/>
  <path d="M 120 180 L 180 260" stroke="black" marker-end="url(#arrowhead)"/>
  <path d="M 300 90 L 380 160" stroke="black" marker-end="url(#arrowhead)"/>
  <path d="M 300 260 L 380 200" stroke="black" marker-end="url(#arrowhead)"/>
  <path d="M 500 160 L 580 90" stroke="black" marker-end="url(#arrowhead)"/>
  <path d="M 500 200 L 580 260" stroke="black" marker-end="url(#arrowhead)"/>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
  </defs>
</svg>`,
      vivaQuestion: "Explain MapReduce using the Weather Dataset example.",
      vivaAnswer: "Map phase reads weather logs and produces (Year, Temperature) pairs. Shuffle groups these by year. Reduce phase iterates through these groups to find the maximum temperature for each year.",
      keyTerms: [
        { term: "Shuffle & Sort", definition: "An automatic intermediate step in Hadoop that groups identical keys." },
        { term: "Parallelism", definition: "Executing multiple tasks simultaneously across different machines." }
      ]
    },
    {
      id: "u3t2",
      title: "Hadoop MapReduce API: Old vs New",
      content: "Hadoop provides two APIs: the Old (`mapred`) and the New (`mapreduce`). The New API is the current standard for Hadoop 2.x and 3.x.\n\n### 1. Old API (`org.apache.hadoop.mapred`)\n- Used in Hadoop 1.x.\n- Less flexible and uses Interfaces (like `Mapper` and `Reducer` interfaces).\n- Weak type checking and prone to errors during maintenance.\n\n### 2. New API (`org.apache.hadoop.mapreduce`)\n- Recommended for all modern development.\n- **Type Safe:** Reduces runtime errors.\n- **Easier Coding:** Uses Abstract classes (extends `Mapper`) instead of interfaces.\n- **Context Object:** Uses a single `Context` object for communication with the Hadoop framework.",
      vivaQuestion: "Which package does the modern MapReduce API belong to?",
      vivaAnswer: "It belongs to the 'org.apache.hadoop.mapreduce' package.",
      keyTerms: [
        { term: "Type Safe", definition: "A feature that prevents data type errors during compilation rather than runtime." },
        { term: "Context", definition: "An object used in the New API to relay information between the code and the Hadoop system." }
      ]
    },
    {
      id: "u3t3",
      title: "Basic Program Structure (Driver, Mapper, Reducer)",
      content: "A standard MapReduce application has three functional components:\n\n### 1. Driver Code (The Director)\nThe entry point that configures and submits the job. It specifies the Mapper/Reducer classes and defines input/output HDFS paths.\n\n### 2. Mapper Code (The Worker)\nProcesses input records and converts them into intermediate Key-Value pairs. It runs in parallel on every data block.\n\n### 3. Reducer Code (The Accountant)\nReceives grouped data (all values for a single key) and performs an aggregation like `sum()`, `max()`, or `average()` to produce the final result.",
      codeSnippet: `// Driver Setup Overview\nJob job = Job.getInstance(conf, "Weather Max Temp");\njob.setMapperClass(MaxTempMapper.class);\njob.setReducerClass(MaxTempReducer.class);\njob.setOutputKeyClass(Text.class);\njob.setOutputValueClass(IntWritable.class);`,
      language: "java",
      vivaQuestion: "What is the role of the Driver code?",
      vivaAnswer: "The Driver configures the Job settings, links the Mapper and Reducer classes, and submits the job to the cluster for execution.",
    },
    {
      id: "u3t4",
      title: "Record Reader, Combiner, Partitioner",
      content: "These components are crucial for optimizing data flow:\n\n### 1. Record Reader\nConverts raw input records (like a line from a text file) into Key-Value pairs that the Mapper can understand.\n\n### 2. Combiner (The Mini-Reducer)\nA local reducer that runs on the mapper node. It aggregates data *before* sending it over the network to reduce bandwidth usage.\n\n### 3. Partitioner\nDecides which Reducer will receive which Key. It ensures that all values for a specific key end up at the same reducer, usually using Hashing.",
      diagramSvg: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Mapper -->
  <g transform="translate(50, 50)">
    <rect width="100" height="100" rx="4" fill="white" stroke="black" stroke-width="2"/>
    <text x="50" y="55" text-anchor="middle" font-weight="900" font-size="12">MAPPER</text>
  </g>

  <!-- Combiner -->
  <g transform="translate(250, 50)">
    <rect width="120" height="100" rx="4" fill="#f0f0f0" stroke="black" stroke-width="2" stroke-dasharray="4"/>
    <text x="60" y="-10" text-anchor="middle" font-weight="900" font-size="12">COMBINER</text>
    <text x="60" y="55" text-anchor="middle" font-size="10" font-weight="bold">LOCAL REDUCE</text>
  </g>

  <!-- Partitioner -->
  <g transform="translate(480, 50)">
    <rect width="120" height="100" rx="4" fill="black" />
    <text x="60" y="55" text-anchor="middle" fill="white" font-weight="900" font-size="12">PARTITIONER</text>
    <text x="60" y="80" text-anchor="middle" fill="white" font-size="8" opacity="0.6">Distributes Keys</text>
  </g>

  <!-- Reducer -->
  <g transform="translate(700, 50)">
    <rect width="80" height="100" rx="4" fill="white" stroke="black" stroke-width="2"/>
    <text x="40" y="55" text-anchor="middle" font-weight="900" font-size="12">REDUCER</text>
  </g>

  <!-- Arrows -->
  <path d="M 150 100 L 250 100" stroke="black" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <path d="M 370 100 L 480 100" stroke="black" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <path d="M 600 100 L 700 100" stroke="black" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
  </defs>
</svg>`,
      vivaQuestion: "Difference between Combiner and Reducer?",
      vivaAnswer: "A Reducer performs a global group-by across all mappers, while a Combiner is an optional 'local' reducer that works on a single mapper's output to save network bandwidth.",
      keyTerms: [
        { term: "Network Bottleneck", definition: "The point where the speed of data transfer between machines slows down the whole cluster." },
        { term: "Hashing", definition: "The default algorithm used by the Partitioner to assign keys to reducers." }
      ]
    }
  ]
};
