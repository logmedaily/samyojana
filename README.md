<h1 align="center">Welcome to @logmedaily/samyojana 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.16.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9.5.1-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/logmedaily" target="_blank">
    <img alt="Twitter: logmedaily" src="https://img.shields.io/twitter/follow/logmedaily.svg?style=social" />
  </a>
</p>

> samyojana is for custom event library in javascript & nodejs for event driven projects, provides standard interfaces to define register and consume events.

## Prerequisites

- node >=18.16.0
- npm >=9.5.1

## Install

```sh
npm install @logmedaily/samyojana
```
Certainly, Tarun! Apologies for the confusion earlier. Here is the Markdown content you can directly copy and paste into your README file.


## Usage

### Initialization

```javascript
const Samyojana = require('samyojana');
const logger = {
    info: console.log,
    warning: console.warn,
    success: console.log,
    error: console.error
};

const samyojana = new Samyojana();
samyojana.initialize(logger);
```

### Registering Actions

```javascript
samyojana.register('sayHello', (data) => `Hello, ${data.name}!`);
```

### Unregistering Actions

```javascript
samyojana.unregister('sayHello');
```

### Processing Events

```javascript
try {
    const result = samyojana.process('CODE123', 'sayHello', { name: 'Tarun' });
    console.log(result); // Output: Hello, Tarun!
} catch (error) {
    console.error('An error occurred:', error);
}
```

## Run tests

```sh
npm run test
```

## Author

👤 **logmedaily**

* Website: https://github.com/logmedaily
* Twitter: [@logmedaily](https://twitter.com/logmedaily)
* Github: [@logmedaily](https://github.com/logmedaily)
* LinkedIn: [@logmedaily](https://linkedin.com/in/logmedaily)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/logmedaily/samyojana/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_