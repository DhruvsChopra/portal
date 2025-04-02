export interface Question {
    ID: string;
    Title: string;
    Description: string;
    Points: number;
    InputFormat?: string[];
    Constraints?: string[];
    OutputFormat?: string[];
    SampleTestInput?: string[];
    SampleTestOutput?: string[];
    Explanation?: string[];
}
export declare const staticQuestions: Question[];
