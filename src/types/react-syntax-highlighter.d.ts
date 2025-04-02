declare module 'react-syntax-highlighter' {
    import { ComponentType } from 'react';
  
    // Define the props interface for Prism
    interface PrismProps {
      language: string;
      style?: Record<string, unknown>; // Style object, loosely typed for flexibility
      children: string;
      className?: string; // Optional, based on usage in QuestionComponent.tsx
      [key: string]: unknown; // Allow additional props for flexibility
    }
  
    export const Prism: ComponentType<PrismProps>;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus' {
    // Define the style object as a record of style properties
    const vscDarkPlus: Record<string, unknown>; // Could be more specific if you know the structure
    export default vscDarkPlus;
  }