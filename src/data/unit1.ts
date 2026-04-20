import { type Unit } from './types';

export const unit1: Unit = {
  id: "unit1",
  title: "Unit 1: Introduction to Big Data",
  topics: [
    {
      id: "u1t1",
      title: "What is Big Data? (Introduction)",
      content: "Big Data refers to extremely large amounts of data that are so huge and complex that normal computers and traditional software cannot store, process, or analyze them efficiently. While traditional systems like MySQL work fine for smaller scales (like student records), they fail for global platforms like Instagram, YouTube, or Google.\n\n### Formal Definition:\nBig Data refers to very large, fast-growing, and complex datasets that require special technologies such as distributed computing and parallel processing to process effectively.\n\n### Real-Life Examples:\n- **YouTube:** Millions of hours of video uploads, views, and comments.\n- **WhatsApp:** Billions of messages, images, and voice notes shared daily.\n- **Amazon:** Tracking user behavior, purchases, and providing recommendations.\n- **Aadhaar:** Biometric database for 140+ crore people including fingerprints and iris scans.",
      imageUrl: "https://picsum.photos/seed/bigdata-intro/800/400",
      vivaQuestion: "How would you explain Big Data to an examiner?",
      vivaAnswer: "Sir, Big Data is not only large in size but also generated at high speed and in different formats like text, images, and videos. Traditional databases cannot handle it, so special frameworks like Hadoop and Spark are used.",
      keyTerms: [
        { term: "Zettabyte (ZB)", definition: "A unit of storage equal to 1,024 Exabytes or 1 trillion Gigabytes." },
        { term: "Distributed Processing", definition: "A method where multiple computers work together to solve a single large problem." }
      ]
    },
    {
      id: "u1t2",
      title: "Big Data Features & Challenges",
      content: "Big Data is characterized by features often called the **3 V's**, which describe the inherent properties of these massive datasets.\n\n### The 3 V's of Big Data:\n1. **Volume (Size):** Massive amount of data (TB, PB, EB). Think of the billions of photos on Facebook.\n2. **Velocity (Speed):** Data is generated and must be processed at high speeds. Examples include UPI payments and real-time Google Maps updates.\n3. **Variety (Diversity):** Data comes in multiple formats—structured (tables), semi-structured (XML/JSON), and unstructured (video/audio).\n\n### Major Challenges:\n- **Storage:** Normal hard disks cannot store Petabytes; data centers are required.\n- **Processing:** Traditional DBMS systems process data sequentially and are too slow for Big Data.\n- **Security & Privacy:** Protecting sensitive data like Bank details or Aadhaar from leaks.\n- **Data Quality:** Dealing with duplicate, incomplete, or fake data (like fake social media accounts).",
      diagramSvg: `<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="400" cy="200" r="150" fill="none" stroke="black" stroke-width="1" stroke-dasharray="5,5" opacity="0.1"/>
  <g transform="translate(400, 80)">
    <circle r="70" fill="white" stroke="black" stroke-width="2"/>
    <text y="-5" text-anchor="middle" font-weight="900" font-size="16">VOLUME</text>
    <text y="20" text-anchor="middle" font-size="10" opacity="0.6">Scale & Size</text>
  </g>
  <g transform="translate(560, 240)">
    <circle r="70" fill="white" stroke="black" stroke-width="2"/>
    <text y="-5" text-anchor="middle" font-weight="900" font-size="16">VELOCITY</text>
    <text y="20" text-anchor="middle" font-size="10" opacity="0.6">Speed of Generation</text>
  </g>
  <g transform="translate(240, 240)">
    <circle r="70" fill="white" stroke="black" stroke-width="2"/>
    <text y="-5" text-anchor="middle" font-weight="900" font-size="16">VARIETY</text>
    <text y="20" text-anchor="middle" font-size="10" opacity="0.6">Forms of Data</text>
  </g>
  <circle cx="400" cy="210" r="40" fill="black"/>
  <text x="400" y="215" text-anchor="middle" fill="white" font-weight="900" font-size="12">BIG DATA</text>
</svg>`,
      vivaQuestion: "Briefly explain the 3 V's.",
      vivaAnswer: "Volume represents the massive size, Velocity represents the high speed of generation, and Variety represents different forms of data like text, images, and video.",
    },
    {
      id: "u1t3",
      title: "Problems with Traditional Systems",
      content: "Traditional systems (RDBMS like MySQL or Oracle) were designed for small, structured datasets and fail to scale for Big Data requirements.\n\n### Key Limitations:\n- **Limited Storage:** Traditional DBs reside on a single server which has physical hardware limits.\n- **Slow Processing:** Sequential processing is too slow for millions of simultaneous records.\n- **No Scalability:** Traditional systems use 'Vertical Scaling' (buying a bigger CPU), which is expensive and has a hard limit. Big Data uses 'Horizontal Scaling' (adding more cheap computers).\n- **Schema Rigidity:** RDBMS requires a fixed table structure. Big Data includes social media posts and videos that don't fit into rows and columns.\n- **Single Point of Failure:** If the main RDBMS server crashes, the entire system stops. Big Data systems use replication to prevent this.",
      imageUrl: "https://picsum.photos/seed/server-fail/800/400",
      vivaQuestion: "Why can't we just buy a bigger computer for Big Data?",
      vivaAnswer: "Buying a bigger computer (Vertical Scaling) is expensive and has a physical limit. Big Data frameworks use Horizontal Scaling, where we connect many low-cost computers in a cluster.",
      keyTerms: [
        { term: "Horizontal Scaling", definition: "Increasing capacity by adding more machines to a system." },
        { term: "Sequential Processing", definition: "Processing data one-by-one in a linear order." }
      ]
    },
    {
      id: "u1t4",
      title: "Sources of Big Data",
      content: "Big Data is generated from almost every digital activity today. It doesn't come from one place; it's a mix of human and machine-generated content.\n\n### Primary Sources:\n- **Social Media:** Instagram reels, Facebook comments, Tweets, and WhatsApp messages.\n- **Online Transactions:** UPI payments, ATM logs, and shopping behavior on Amazon/Flipkart.\n- **Sensors & IoT:** Smartwatches (heart rate), CCTV footage, and traffic signals.\n- **Web Data:** Google search history and YouTube browsing behavior.\n- **Machine Logs:** Automated logs from servers, GPS tracking, and CDR (Call Detail Records).\n- **Scientific Research:** Satellite imagery and high-resolution medical scans (MRI/CT).",
      vivaQuestion: "What is the biggest source of unstructured data?",
      vivaAnswer: "Social Media platforms are the largest source, generating massive amounts of photos, videos, and text messages every second.",
    },
    {
      id: "u1t5",
      title: "The 3 V's of Big Data (Deep Dive)",
      content: "The concept of the 3 V's is fundamental to understanding Big Data. While we've mentioned them as features, let's examine them properly for examination-grade answers.\n\n### 1. Volume (Amount of Data)\nVolume refers to the massive amount of data generated and stored. Billions of users are online, contributing to storage needs measured in **Petabytes** and **Exabytes**. A single computer cannot store this much data, so Big Data frameworks use clusters.\n\n### 2. Velocity (Flow Speed)\nVelocity is the speed at which data is produced and processed. Some systems require real-time processing (e.g., UPI payment confirmation, Live cricket scores, or Google Maps traffic updates). If processing is slow, these systems fail.\n\n### 3. Variety (Diverse Formats)\nBig Data is not just tables. It contains text, images, videos, audio, and sensor data. Traditional databases were only designed for 'Structured' data, whereas Big Data tools must manage 'Unstructured' data as well.",
      vivaQuestion: "Explain MapReduce using the 3V framework.",
      vivaAnswer: "While MapReduce isn't a 3V, you can say it handles Volume through distributed storage (HDFS), Variety through flexible schemas, and Velocity through parallel processing across multiple nodes.",
    },
    {
      id: "u1t6",
      title: "Types of Data in Big Data",
      content: "Big Data is classified into three specific types based on how organized the information is. Understanding this is key for NoSQL and Hadoop storage decisions.\n\n### 1. Structured Data\nData organized in rows and columns. It follows a fixed schema and is stored in RDBMS (MySQL/Oracle). Example: Employee salary records, Bank account tables.\n\n### 2. Semi-Structured Data\nData that isn't in a table but contains tags or markers to organize information. Common formats are XML and JSON. Example: Web code (HTML), JSON configuration files.\n\n### 3. Unstructured Data\nData with no fixed format or schema, accounting for 80-90% of Big Data. Traditional databases cannot handle or analyze this. Example: Photos, Videos, Voice notes, CCTV footage.",
      diagramSvg: `<svg viewBox="0 0 800 250" xmlns="http://www.w3.org/2000/svg">
  <line x1="50" y1="180" x2="750" y2="180" stroke="black" stroke-width="2" stroke-dasharray="8,4"/>
  <g transform="translate(100, 40)">
    <rect width="150" height="100" fill="white" stroke="black" stroke-width="2"/>
    <text x="75" y="25" text-anchor="middle" font-weight="900" font-size="12">STRUCTURED</text>
    <rect x="25" y="40" width="100" height="40" fill="none" stroke="black" stroke-width="1"/>
    <line x1="25" y1="53" x2="125" y2="53" stroke="black"/>
    <line x1="25" y1="66" x2="125" y2="66" stroke="black"/>
    <text x="75" y="115" text-anchor="middle" font-size="9" opacity="0.6">Tables / RDBMS</text>
  </g>
  <g transform="translate(325, 40)">
    <rect width="150" height="100" fill="white" stroke="black" stroke-width="2"/>
    <text x="75" y="25" text-anchor="middle" font-weight="900" font-size="12">SEMI-STRUCTURED</text>
    <text x="75" y="60" text-anchor="middle" font-family="monospace" font-size="10">{ "key": "val" }</text>
    <text x="75" y="115" text-anchor="middle" font-size="9" opacity="0.6">XML / JSON / Tags</text>
  </g>
  <g transform="translate(550, 40)">
    <rect width="150" height="100" fill="white" stroke="black" stroke-width="2"/>
    <text x="75" y="25" text-anchor="middle" font-weight="900" font-size="12">UNSTRUCTURED</text>
    <path d="M 40 60 Q 75 30 110 60 Q 130 90 75 80 Q 20 90 40 60" fill="none" stroke="black" stroke-width="1"/>
    <text x="75" y="115" text-anchor="middle" font-size="9" opacity="0.6">Audio / Video / Media</text>
  </g>
</svg>`,
      codeSnippet: `// Example of Semi-Structured (JSON)
{
  "name": "Aayush",
  "course": "B.Tech",
  "skills": ["React", "Node", "MongoDB"]
}`,
      language: "json",
      vivaQuestion: "Which type of data is most common in Big Data?",
      vivaAnswer: "Unstructured data is the most common, accounting for nearly 80-90% of the total digital data generated today.",
    }
  ]
};
