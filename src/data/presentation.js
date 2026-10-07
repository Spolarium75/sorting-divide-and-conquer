export const topics = [
  {
    id: 1,
    title: 'Selection Sort Algorithm',
    shortTitle: 'Selection Sort',
    description:
      'Learn how Selection Sort repeatedly finds the smallest element and places it in its correct position.',
    type: 'algorithm',
  },
  {
    id: 2,
    title: 'Selection Sort Time Complexity',
    shortTitle: 'Selection Complexity',
    description:
      'Analyze the time complexity of Selection Sort and understand why it behaves the same in different input arrangements.',
    type: 'complexity',
  },
  {
    id: 3,
    title: 'Insertion Sort Algorithm',
    shortTitle: 'Insertion Sort',
    description:
      'Explore how Insertion Sort builds a sorted portion of an array one element at a time.',
    type: 'algorithm',
  },
  {
    id: 4,
    title: 'Insertion Sort Time Complexity',
    shortTitle: 'Insertion Complexity',
    description:
      'Understand the best, average, and worst-case performance of Insertion Sort.',
    type: 'complexity',
  },
  {
    id: 5,
    title: 'Recursion and Divide-and-Conquer',
    shortTitle: 'Divide & Conquer',
    description:
      'Discover how large problems can be broken into smaller problems and solved recursively.',
    type: 'concept',
  },
  {
    id: 6,
    title: 'Merge Sort Algorithm',
    shortTitle: 'Merge Sort',
    description:
      'See how Merge Sort divides an array, recursively sorts each half, and combines the results.',
    type: 'algorithm',
  },
  {
    id: 7,
    title: 'Merge Sort Recursion Tree and Time Complexity',
    shortTitle: 'Merge Complexity',
    description:
      'Visualize the recursion tree and understand why Merge Sort runs in O(n log n) time.',
    type: 'complexity',
  },
  {
    id: 8,
    title: 'Comparing and Choosing Sorting Algorithms',
    shortTitle: 'Comparison',
    description:
      'Compare sorting algorithms and learn when each algorithm is most appropriate.',
    type: 'comparison',
  },
]

export const quizzes = {
  1: {
    question: 'What is the main idea behind Selection Sort?',
    options: [
      'Divide the array recursively',
      'Repeatedly find the smallest element',
      'Insert elements into a linked list',
      'Merge two sorted arrays',
    ],
    answer: 1,
  },

  2: {
    question: 'What is the typical time complexity of Selection Sort?',
    options: ['O(log n)', 'O(n)', 'O(n²)', 'O(n log n)'],
    answer: 2,
  },

  3: {
    question: 'How does Insertion Sort build a sorted array?',
    options: [
      'By repeatedly selecting the largest element',
      'By inserting each element into its correct position',
      'By splitting the array into two halves',
      'By randomly swapping elements',
    ],
    answer: 1,
  },

  4: {
    question: 'What is the best-case time complexity of Insertion Sort?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
    answer: 0,
  },

  5: {
    question: 'What is the main idea of divide-and-conquer?',
    options: [
      'Solve everything at once',
      'Randomly rearrange the input',
      'Break a problem into smaller subproblems',
      'Always use recursion',
    ],
    answer: 2,
  },

  6: {
    question: 'What does Merge Sort do before merging?',
    options: [
      'Deletes duplicate elements',
      'Divides the array into smaller parts',
      'Finds the largest element',
      'Reverses the array',
    ],
    answer: 1,
  },

  7: {
    question: 'What is the time complexity of Merge Sort?',
    options: ['O(n²)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 3,
  },

  8: {
    question: 'Which factor should influence your choice of a sorting algorithm?',
    options: [
      'Only the algorithm name',
      'Input size and characteristics',
      'The color of the interface',
      'The number of variables in the code',
    ],
    answer: 1,
  },
}