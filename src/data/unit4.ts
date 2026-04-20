import { type Unit } from './types';

export const unit4: Unit = {
  id: "unit4",
  title: "Unit 4: Hadoop I/O",
  topics: [
    {
      id: "u4t1",
      title: "Hadoop Writable Interface",
      content: "Hadoop operates in a distributed environment where data must be transferred between machines and stored in HDFS. Standard Java serialization (int, String) is not efficient for this massive scale, so Hadoop introduced the **Writable Interface**.\n\n### What is Writable?\nWritable is an interface used for **Serialization** (converting objects to bytes) and **Deserialization** (converting bytes to objects). It is optimized for speed and compact storage.\n\n### Why it's Needed:\n- **Efficiency:** Java's default serialization is slow and adds too much metadata overhead (bloat).\n- **Network Performance:** Writable produces a compact binary format that travels faster across the data center network.\n\n### Key Methods:\n1. **write(DataOutput out):** Encodes the object's state into a binary stream.\n2. **readFields(DataInput in):** Decodes the binary stream back into the object's state.\n\n### Parcel Analogy:\nThink of sending a parcel. You can't send loose items (Java objects). You must pack them into a standardized box (Writable) that the shipping company (Hadoop) can handle efficiently.",
      diagramSvg: `<svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(50, 40)">
    <rect width="140" height="100" fill="white" stroke="black" stroke-width="2"/>
    <text x="70" y="25" text-anchor="middle" font-weight="900" font-size="10">JAVA OBJECT</text>
    <path d="M 40 50 L 100 50 M 40 70 L 100 70 M 40 90 L 100 90" stroke="black" stroke-width="1" opacity="0.3"/>
  </g>
  <g transform="translate(250, 70)">
    <rect width="300" height="40" rx="20" fill="black"/>
    <text x="150" y="25" text-anchor="middle" fill="white" font-weight="900" font-size="12">WRITABLE (SERIALIZATION)</text>
    <path d="M -40 20 L 0 20" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
    <path d="M 300 20 L 340 20" stroke="black" stroke-width="2" marker-end="url(#arrowhead)"/>
  </g>
  <g transform="translate(610, 40)">
    <rect width="140" height="100" fill="white" stroke="black" stroke-width="2" stroke-dasharray="4,2"/>
    <text x="70" y="25" text-anchor="middle" font-weight="900" font-size="10">BINARY BYTES</text>
    <text x="70" y="65" text-anchor="middle" font-family="monospace" font-size="14">01101001</text>
    <text x="70" y="85" text-anchor="middle" font-family="monospace" font-size="14">10110001</text>
  </g>
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="black" />
    </marker>
  </defs>
</svg>`,
      vivaQuestion: "Explain the role of write() and readFields() methods.",
      vivaAnswer: "write() converts the object to a byte format for saving or transmission, while readFields() reconstructs the object from binary data.",
      keyTerms: [
        { term: "Serialization", definition: "Process of converting an object to a byte stream." },
        { term: "Metadata Bloat", definition: "Extra information stored by Java that isn't necessary for the actual data." }
      ]
    },
    {
      id: "u4t2",
      title: "WritableComparable & Comparators",
      content: "Hadoop doesn't just store data; it needs to **Sort** it (Shuffle & Sort phase). This is where `WritableComparable` comes in.\n\n### WritableComparable Interface:\nIt is a combination of `Writable` (for storage) and `Comparable` (for sorting). All **Keys** in MapReduce must implement this so Hadoop knows how to order them.\n\n- **Method:** Uses `compareTo()` to determine if one key is greater, smaller, or equal to another.\n\n### Hadoop Comparators:\nComparators provide the logic for comparing keys during the sorting process.\n1. **Default Comparator:** Sorts keys in their natural (usually ascending) order.\n2. **Custom Comparator:** Used when you need specific logic, such as sorting temperature in descending order (highest first).\n\n### Key Logic:\n- **Writable:** Read/Write data.\n- **WritableComparable:** Read/Write + Compare for sorting.",
      vivaQuestion: "Why do we need WritableComparable specifically for Keys?",
      vivaAnswer: "Because Keys must be sorted during the Shuffle and Sort phase. Without the Comparable part, Hadoop wouldn't know the order of the keys.",
    },
    {
      id: "u4t3",
      title: "Common Writable Classes",
      content: "Since Hadoop does not use Java primitive types directly, it provides its own optimized Writable wrapper classes.\n\n### 1. Primitive Wrappers:\nThese correspond to standard Java types but are optimized for HDFS.\n- **IntWritable:** for `int`\n- **LongWritable:** for `long`\n- **FloatWritable / DoubleWritable:** for decimals\n- **BooleanWritable:** for `true/false` values\n\n### 2. Text (String):\nUnlike Java Strings, `Text` is optimized for network transport and handles UTF-8 encoding efficiently.\n\n### 3. Special Purpose Writables:\n- **BytesWritable:** For raw binary data (images, videos).\n- **NullWritable:** Represents no value. Used when only the **Key** is important (e.g., finding unique IDs), saving considerable network bandwidth.\n- **ObjectWritable:** A flexible (but less efficient) class that can store any Java object.",
      vivaQuestion: "Where is NullWritable commonly used?",
      vivaAnswer: "It is used when we only care about the Key and don't need to store a Value, effectively reducing memory and network usage.",
      keyTerms: [
        { term: "Wrapper Class", definition: "A class that encapsulates a primitive data type to give it more functionality." },
        { term: "UTF-8", definition: "A variable-width character encoding used for electronic communication." }
      ]
    },
    {
      id: "u4t4",
      title: "Custom Writable & Raw Comparator",
      content: "For complex data and extreme performance, developers use Custom Writables and Raw Comparators.\n\n### 1. Custom Writables:\nUsed when standard types aren't enough (e.g., storing a Student's Name, Marks, and Age together). You create a class that implements `Writable` and overrides `write()` and `readFields()`.\n\n### 2. Raw Comparator (The Speed Booster):\nNormally, Hadoop converts bytes back into objects before comparing them. **This is slow.**\n- **Raw Comparator** compares the **byte data directly** without creating Java objects.\n- This avoids heavy CPU usage and significantly speeds up the Shuffle & Sort phase for massive datasets.\n\n### Efficiency Flow:\nCustom Data → Custom Writable → Byte Stream → **Raw Comparator** (Fast Sort) → Reducer.",
      imageUrl: "https://picsum.photos/seed/speed-sort/800/400",
      codeSnippet: `public class StudentWritable implements Writable {
  private Text name;
  private IntWritable marks;

  public void write(DataOutput out) throws IOException {
    name.write(out);
    marks.write(out);
  }

  public void readFields(DataInput in) throws IOException {
    name.readFields(in);
    marks.readFields(in);
  }
}`,
      language: "java",
      vivaQuestion: "How does a Raw Comparator improve performance?",
      vivaAnswer: "It compares serialized byte data directly in memory without de-serializing it into Java objects, saving CPU cycles and time during the sorting phase.",
    }
  ]
};
