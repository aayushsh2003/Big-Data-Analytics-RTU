export interface KeyTerm {
  term: string;
  definition: string;
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  vivaQuestion?: string;
  vivaAnswer?: string;
  keyTerms?: KeyTerm[];
  visualAidDesc?: string;
  diagramSvg?: string;
  imageUrl?: string;
  codeSnippet?: string;
  language?: string;
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface PYQ {
  year: string;
  questions: {
    section: string;
    items: {
      q: string;
      a: string;
    }[];
  }[];
}
