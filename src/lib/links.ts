// links.ts
export interface ExternalLink {
    id: string;
    href: string;
    text: string;
  }
  
  export const externalLinks: ExternalLink[] = [
    { id: 'link1', href: 'https://www.example1.com', text: 'Example1' },
    { id: 'link2', href: 'https://www.example2.com', text: 'Example2' },
    { id: 'link3', href: 'https://www.example3.com', text: 'Example3' },
    // ... other links
  ];
  