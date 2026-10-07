// IMPORTANT:
// - Keep the object structure the same.
// - Replace the [PLACEHOLDER] text with your researched content.
// - Use clear explanations and simple examples.
// - Add reliable references at the bottom of each topic.

export const topics = [
  {
    id: 1,
    title: 'Selection Sort Algorithm',
    shortTitle: 'Selection Sort',
    type: 'algorithm',

    // Short introduction shown on the topic page.
    description:
      'Learn how Selection Sort repeatedly finds the smallest element and places it in its correct position.',

    // Content template for the report.
    content: {
      definition:
        '[Explain what Selection Sort is and what problem it solves.]',

      howItWorks:
        '[Explain the basic idea in simple words. Describe the sorted and unsorted portions of the array.]',

      steps: [
        '[Step 1: Describe what happens first.]',
        '[Step 2: Describe how the minimum element is found.]',
        '[Step 3: Describe the swap.]',
        '[Step 4: Explain how the process repeats.]',
      ],

      example: {
        input: '[Example array, e.g. 64, 25, 12, 22, 11]',
        process: '[Briefly show the important passes/swaps.]',
        output: '[Sorted array]',
      },

      complexity: {
        best: '[Best-case time complexity]',
        average: '[Average-case time complexity]',
        worst: '[Worst-case time complexity]',
        space: '[Space complexity]',
      },

      advantages: [
        '[Advantage 1]',
        '[Advantage 2]',
      ],

      disadvantages: [
        '[Disadvantage 1]',
        '[Disadvantage 2]',
      ],

      practicalExample:
        '[Give a simple real-world or programming use example, if applicable.]',

      keyPoints: [
        '[Important point to remember]',
        '[Important point to remember]',
        '[Important point to remember]',
      ],
    },

    references: [
      '[Reliable textbook, lecture material, documentation, or educational source]',
    ],
  },

  {
    id: 2,
    title: 'Selection Sort Time Complexity',
    shortTitle: 'Selection Complexity',
    type: 'complexity',

    description:
      'Analyze the time complexity of Selection Sort and understand why it behaves similarly across different input arrangements.',

    content: {
      definition:
        '[Explain what time complexity means in the context of Selection Sort.]',

      howItWorks:
        '[Explain why Selection Sort continues scanning the unsorted portion even when the array is already sorted.]',

      steps: [
        '[Explain how many comparisons happen during the first pass.]',
        '[Explain how the number of comparisons changes on later passes.]',
        '[Explain how these comparisons lead to the overall complexity.]',
      ],

      example: {
        input: '[Example array]',
        process: '[Show or calculate the number of comparisons/passes.]',
        output: '[Final sorted array or complexity result]',
      },

      complexity: {
        best: 'O(n²)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: 'O(1) auxiliary space for the usual in-place implementation',
      },

      advantages: [
        '[Advantage related to predictable performance]',
        '[Advantage related to memory usage or swaps]',
      ],

      disadvantages: [
        '[Disadvantage related to O(n²) comparisons]',
        '[Disadvantage compared with more efficient algorithms]',
      ],

      practicalExample:
        '[Explain when predictable O(n²) behavior might still be acceptable.]',

      keyPoints: [
        '[Why best, average, and worst cases are O(n²)]',
        '[How comparisons contribute to the complexity]',
        '[Space complexity]',
      ],
    },

    references: [
      '[Reliable source explaining Selection Sort complexity]',
    ],
  },

  {
    id: 3,
    title: 'Insertion Sort Algorithm',
    shortTitle: 'Insertion Sort',
    type: 'algorithm',

    description:
      'Explore how Insertion Sort builds a sorted portion of an array one element at a time.',

    content: {
      definition:
        '[Explain what Insertion Sort is and how it differs from Selection Sort.]',

      howItWorks:
        '[Explain how the algorithm takes the next element and inserts it into the correct position in the sorted portion.]',

      steps: [
        '[Start with the first element as the initially sorted portion.]',
        '[Choose the next element as the key/current element.]',
        '[Shift larger elements to the right.]',
        '[Insert the key into its correct position.]',
        '[Repeat until all elements are sorted.]',
      ],

      example: {
        input: '[Example array, e.g. 12, 11, 13, 5, 6]',
        process: '[Show how one or two elements are inserted step by step.]',
        output: '[Sorted array]',
      },

      complexity: {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: '[Space complexity]',
      },

      advantages: [
        '[Advantage for small datasets]',
        '[Advantage for nearly sorted data]',
      ],

      disadvantages: [
        '[Disadvantage for large or reverse-sorted datasets]',
        '[Another limitation]',
      ],

      practicalExample:
        '[Give a real-world example, such as sorting playing cards in your hand.]',

      keyPoints: [
        '[Important point about the sorted portion]',
        '[Important point about shifting elements]',
        '[Important point about when it performs well]',
      ],
    },

    references: [
      '[Reliable source explaining Insertion Sort]',
    ],
  },

  {
    id: 4,
    title: 'Insertion Sort Time Complexity',
    shortTitle: 'Insertion Complexity',
    type: 'complexity',

    description:
      'Understand the best, average, and worst-case performance of Insertion Sort.',

    content: {
      definition:
        '[Explain how the arrangement of the input affects Insertion Sort performance.]',

      howItWorks:
        '[Explain why an already sorted array is efficient while a reverse-sorted array requires many shifts.]',

      steps: [
        '[Describe the best-case input and number of operations.]',
        '[Describe the average-case behavior.]',
        '[Describe the worst-case input and number of shifts.]',
        '[Connect the operations to Big-O notation.]',
      ],

      example: {
        input: '[Use examples for sorted, random, and reverse-sorted arrays.]',
        process: '[Compare the amount of work required in each case.]',
        output: '[Summarize the resulting complexities.]',
      },

      complexity: {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: '[Space complexity]',
      },

      advantages: [
        '[Advantage when data is already or nearly sorted]',
        '[Advantage related to simplicity or memory]',
      ],

      disadvantages: [
        '[Disadvantage for large unsorted datasets]',
        '[Disadvantage in the worst case]',
      ],

      practicalExample:
        '[Explain a situation where nearly sorted data makes Insertion Sort useful.]',

      keyPoints: [
        '[Best-case condition and complexity]',
        '[Average-case complexity]',
        '[Worst-case condition and complexity]',
      ],
    },

    references: [
      '[Reliable source explaining Insertion Sort complexity]',
    ],
  },

  {
    id: 5,
    title: 'Recursion and Divide-and-Conquer',
    shortTitle: 'Divide & Conquer',
    type: 'concept',

    description:
      'Discover how large problems can be broken into smaller problems and solved recursively.',

    content: {
      definition:
        '[Define recursion and divide-and-conquer. Explain the relationship between them.]',

      howItWorks:
        '[Explain the three common stages: divide, conquer, and combine.]',

      steps: [
        '[Divide: break the original problem into smaller subproblems.]',
        '[Conquer: solve the smaller subproblems, often recursively.]',
        '[Combine: combine the smaller solutions into the final solution.]',
        '[Explain the base case that stops recursion.]',
      ],

      example: {
        input: '[Example problem that can be divided into smaller problems.]',
        process: '[Show the divide, conquer, and combine stages.]',
        output: '[Final solution]',
      },

      complexity: {
        best: '[Complexity depends on the specific divide-and-conquer algorithm]',
        average: '[Complexity depends on the specific algorithm]',
        worst: '[Complexity depends on the specific algorithm]',
        space: '[Discuss recursion stack or auxiliary space when applicable]',
      },

      advantages: [
        '[Advantage of breaking a large problem into smaller pieces]',
        '[Advantage related to recursive problem solving]',
      ],

      disadvantages: [
        '[Disadvantage or overhead caused by recursion]',
        '[Another limitation]',
      ],

      practicalExample:
        '[Give a simple example such as Merge Sort or another divide-and-conquer problem.]',

      keyPoints: [
        '[Base case]',
        '[Divide, conquer, combine]',
        '[Why recursion can make complex problems easier to solve]',
      ],
    },

    references: [
      '[Reliable source explaining recursion and divide-and-conquer]',
    ],
  },

  {
    id: 6,
    title: 'Merge Sort Algorithm',
    shortTitle: 'Merge Sort',
    type: 'algorithm',

    description:
      'See how Merge Sort divides an array, recursively sorts each half, and combines the results.',

    content: {
      definition:
        '[Explain what Merge Sort is and why it is a divide-and-conquer algorithm.]',

      howItWorks:
        '[Explain how the array is repeatedly divided and how sorted halves are merged.]',

      steps: [
        '[Divide the array into two halves.]',
        '[Recursively divide each half until the subarrays are small enough.]',
        '[Merge the smaller sorted subarrays.]',
        '[Continue merging until one fully sorted array remains.]',
      ],

      example: {
        input: '[Example array, e.g. 38, 27, 43, 3, 9, 82, 10]',
        process: '[Show the splitting and merging stages.]',
        output: '[Sorted array]',
      },

      complexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)',
        space: '[Space complexity, including the usual auxiliary array]',
      },

      advantages: [
        '[Advantage related to predictable O(n log n) performance]',
        '[Advantage for large datasets or linked lists, if applicable]',
      ],

      disadvantages: [
        '[Disadvantage related to additional memory]',
        '[Another limitation]',
      ],

      practicalExample:
        '[Give a practical or programming example where Merge Sort is useful.]',

      keyPoints: [
        '[Divide the array]',
        '[Recursively sort the halves]',
        '[Merge sorted halves]',
      ],
    },

    references: [
      '[Reliable source explaining Merge Sort]',
    ],
  },

  {
    id: 7,
    title: 'Merge Sort Recursion Tree and Time Complexity',
    shortTitle: 'Merge Complexity',
    type: 'complexity',

    description:
      'Visualize the recursion tree and understand why Merge Sort runs in O(n log n) time.',

    content: {
      definition:
        '[Explain what the Merge Sort recursion tree represents.]',

      howItWorks:
        '[Explain how the input size is reduced by about half at every level and how each level processes n elements.]',

      steps: [
        '[Show the root containing n elements.]',
        '[Show how each level splits the problem into smaller subarrays.]',
        '[Explain why the tree has about log₂(n) levels.]',
        '[Explain why each level performs O(n) total merge work.]',
        '[Combine the levels to derive O(n log n).]',
      ],

      example: {
        input: '[Example input size, such as n = 8]',
        process: '[Show the recursion tree levels and the work at each level.]',
        output: 'O(n log n)',
      },

      complexity: {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)',
        space: '[Space complexity and recursion stack]',
      },

      advantages: [
        '[Predictable performance across input arrangements]',
        '[Efficient for large datasets compared with O(n²) sorts]',
      ],

      disadvantages: [
        '[Additional memory requirements in the common implementation]',
        '[Recursion/merge overhead]',
      ],

      practicalExample:
        '[Explain how the recursion tree helps analyze recursive algorithms.]',

      keyPoints: [
        '[Approximately log₂(n) levels]',
        '[O(n) work per level]',
        '[Total O(n log n) time]',
      ],
    },

    references: [
      '[Reliable source explaining Merge Sort recursion tree and complexity]',
    ],
  },

  {
    id: 8,
    title: 'Comparing and Choosing Sorting Algorithms',
    shortTitle: 'Comparison',
    type: 'comparison',

    description:
      'Compare sorting algorithms and learn when each algorithm is most appropriate.',

    content: {
      definition:
        '[Explain why there is no single sorting algorithm that is best for every situation.]',

      howItWorks:
        '[Compare Selection Sort, Insertion Sort, and Merge Sort using time complexity, space, input characteristics, and simplicity.]',

      steps: [
        '[Consider the size of the input.]',
        '[Consider whether the data is already or nearly sorted.]',
        '[Consider memory constraints.]',
        '[Consider required worst-case or average performance.]',
        '[Choose the algorithm that best matches the situation.]',
      ],

      example: {
        input: '[Describe several different input situations.]',
        process: '[Explain which sorting algorithm would be appropriate in each situation and why.]',
        output: '[Final recommendations]',
      },

      complexity: {
        best: '[Compare best-case complexities]',
        average: '[Compare average-case complexities]',
        worst: '[Compare worst-case complexities]',
        space: '[Compare auxiliary space requirements]',
      },

      advantages: [
        '[Explain the strengths of Selection Sort]',
        '[Explain the strengths of Insertion Sort]',
        '[Explain the strengths of Merge Sort]',
      ],

      disadvantages: [
        '[Explain the limitations of Selection Sort]',
        '[Explain the limitations of Insertion Sort]',
        '[Explain the limitations of Merge Sort]',
      ],

      practicalExample:
        '[Give 2–3 realistic situations and recommend an algorithm for each.]',

      keyPoints: [
        '[Input size matters]',
        '[Input arrangement matters]',
        '[Memory requirements matter]',
        '[Performance requirements matter]',
      ],
    },

    references: [
      '[Reliable source for comparing sorting algorithms]',
    ],
  },
]
