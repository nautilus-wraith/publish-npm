# @nautilus/hello-world

A simple hello world NPM package for demonstration purposes.

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/nautilus/publish-npm.git
cd publish-npm
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npm test
```

## Testing Locally

To test the package locally without publishing to npm:

1. In the package directory, create a symlink:
```bash
npm link
```

2. In your test project directory, link to the package:
```bash
npm link @nautilus/hello-world
```

3. Now you can use the package in your test project:
```javascript
const { sayHello } = require('@nautilus/hello-world');

console.log(sayHello()); // Outputs: Hello, World!
console.log(sayHello('John')); // Outputs: Hello, John!
```

4. When you're done testing, unlink the package:

   a. In your test project directory:
   ```bash
   npm unlink @nautilus/hello-world
   ```

   b. In the package directory:
   ```bash
   npm unlink
   ```

## Installation (After Publishing)

Once published, you can install the package using:

```bash
npm install @nautilus/hello-world
```

## Usage

```javascript
const { sayHello } = require('@nautilus/hello-world');

console.log(sayHello()); // Outputs: Hello, World!
console.log(sayHello('John')); // Outputs: Hello, John!
```

## Test packaging before publishing
```
npm pack --dry-run
```

## Installation
- builds `node_modules`

