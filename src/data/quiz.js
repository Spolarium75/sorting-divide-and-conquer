// Quiz content lives here so the quiz team can update questions
// without needing to modify the React components.

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
    explanation:
      'Selection Sort repeatedly finds the smallest element in the unsorted portion and places it in its correct position.',
  },

  2: {
    question: 'What is the typical time complexity of Selection Sort?',
    options: ['O(log n)', 'O(n)', 'O(n²)', 'O(n log n)'],
    answer: 2,
    explanation:
      'Selection Sort performs roughly the same number of comparisons regardless of the input order, giving it O(n²) time complexity.',
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
    explanation:
      'Insertion Sort grows a sorted portion by taking the next element and inserting it into its correct position.',
  },

  4: {
    question: 'What is the best-case time complexity of Insertion Sort?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(n log n)'],
    answer: 0,
    explanation:
      'When the array is already sorted, Insertion Sort only needs to make a linear pass through the elements, giving O(n).',
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
    explanation:
      'Divide-and-conquer solves a problem by breaking it into smaller subproblems, solving them, and combining their results.',
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
    explanation:
      'Merge Sort repeatedly divides the array into smaller subarrays before merging the sorted pieces back together.',
  },

  7: {
    question: 'What is the time complexity of Merge Sort?',
    options: ['O(n²)', 'O(n)', 'O(log n)', 'O(n log n)'],
    answer: 3,
    explanation:
      'Merge Sort has O(log n) levels of division and processes O(n) elements at each level, resulting in O(n log n).',
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
    explanation:
      'The best sorting algorithm depends on factors such as input size, ordering, memory constraints, and required performance.',
  },
}
