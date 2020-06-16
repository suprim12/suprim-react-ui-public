# suprim-react-ui

> Modern and minimalist React UI library, originating from Suprim's design.

[![Build Status](https://travis-ci.com/suprim12/suprim-react-ui.svg?token=nY7pXrDphx6WpYSmhszC&branch=master)](https://travis-ci.com/suprim12/suprim-react-ui) [![Coverage Status](https://coveralls.io/repos/github/suprim12/suprim-react-ui/badge.svg?branch=master)](https://coveralls.io/github/suprim12/suprim-react-ui?branch=master) [![NPM](https://img.shields.io/npm/v/suprim-react-ui.svg)](https://www.npmjs.com/package/suprim-react-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![David](https://img.shields.io/david/suprim12/suprim-react-ui)

## Install

```bash
npm i suprim-react-ui
```

## Usage

```jsx
import React, { Component } from "react";

import { MyComponent ,SuprimThemeProvider, theme } from "suprim-react-ui";

class Example extends Component {
  render() {
    return (
    <SuprimThemeProvider theme={theme.dark}>
      <MyComponent />;
    </SuprimThemeProvider>
  }
}
```

<!-- ## Documentation

- [Document Site](https://suprim-react-ui.netlify.app/) -->

## License

MIT © [suprim12](https://github.com/suprim12)
