# React Native Testing Example App

Example application to show how to unit test React Native components and rewire modules using ES6 import syntax.

Application tested only on iOS but should run on Android as well. Main purpose of this application is to show how to setup unit testing for React Native components using AirBnB's enzyme library. 

Application also utilizes babel-plugin-rewire as an example how to rewire modules which are imported using ES6 syntax instead of CommonJS syntax.

I've written about unit testing React Native components in more depth in [Valuemotive](http://valuemotive.com/) blog: [Unit Testing React Native Components with Mocha and Enzyme](https://blog.valuemotive.com/unit-testing-react-native-components-with-mocha-and-enzyme-1d8a669ece29).

EDIT: Added Jest tests.

## Installation and usage

    $ npm install
    
    All mocha tests:
    $ npm run mocha
    
    Single component on mocha watch mode:
    $ npm run mocha:watch ReactNativeTestingUtils
    
    All jest tests:
    $ npm run jest
    
    Jest watch mode:
    $ npm run jest -- --watch
    
    
## Modules used for testing:

- [mocha](https://mochajs.org/)
- [sinon](http://sinonjs.org/)
- [chai](http://chaijs.com/)
- [enzyme](http://airbnb.io/enzyme/)
- [babel-plugin-rewire](https://www.npmjs.com/package/babel-plugin-rewire)
- [jest](https://facebook.github.io/jest/)


## License

MIT License

Copyright (c) 2017 [VarmaIS](https://varmais.fi)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
