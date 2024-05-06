# Binary Searcher (binary-searcher-nareshnandam)

Binary Searcher is a Node.js package that provides efficient binary search algorithms for searching elements in sorted arrays. It offers both iterative and recursive implementations of binary search.

## Installation

You can install Binary Searcher via npm:

```
npm install binary-searcher-nareshnandam
```

## Usage

```javascript
const { binarySearchIterative, binarySearchRecursive } = require('binary-searcher-nareshnandam');

const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 11;

// Iterative binary search
const indexIterative = binarySearchIterative(array, target);
console.log('Index found using iterative binary search:', indexIterative);

// Recursive binary search
const indexRecursive = binarySearchRecursive(array, target);
console.log('Index found using recursive binary search:', indexRecursive);
```

## Features

- Provides efficient binary search algorithms for sorted arrays.
- Supports both iterative and recursive implementations.
- Easy to integrate into existing Node.js projects.

## Documentation

For detailed documentation and examples, please refer to the [GitHub repository](https://github.com/nareshkumarnandam/binary-searcher-package.git).

## Contributing

Contributions are welcome! If you find any bugs, want to suggest improvements, or add new features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/nareshkumarnandam/binary-searcher-package.git).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
