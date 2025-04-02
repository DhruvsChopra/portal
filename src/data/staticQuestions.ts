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
  
  export const staticQuestions: Question[] = [
    {
      ID: "q1",
      Title: "Two Sum",
      Description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      Points: 100,
      InputFormat: ["The first line contains an integer `n` (array length).", "The second line contains `n` space-separated integers.", "The third line contains the target integer."],
      Constraints: ["2 <= n <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
      OutputFormat: ["Return two space-separated integers representing the indices."],
      SampleTestInput: ["4\n2 7 11 15\n9"],
      SampleTestOutput: ["0 1"],
      Explanation: ["Because nums[0] + nums[1] = 2 + 7 = 9, we return [0, 1]."],
    },
    {
      ID: "q2",
      Title: "Reverse String",
      Description: "Write a function that reverses a string. The input string is given as an array of characters.",
      Points: 50,
      InputFormat: ["The first line contains a string `s`."],
      Constraints: ["1 <= s.length <= 10^5", "s[i] is a printable ASCII character."],
      OutputFormat: ["Return the reversed string."],
      SampleTestInput: ["hello"],
      SampleTestOutput: ["olleh"],
      Explanation: ["The string 'hello' is reversed to 'olleh'."],
    },
  ];