# Snippets

## Snippets info

Every space inside `{ }` and `( )` means that this is pushed into next line :)
`$` represent each step after `tab`.

<br>

### React Components

### `rafc`

```javascript
import React from 'react';

export const $1 = () => {
  return <div>$0</div>;
};
```

### `rafcp`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const $1 = (props) => {
  return <div>$0</div>;
};

$1.propTypes = {};

export default $1;
```

### `rafce`

```javascript
import React from 'react';

const $1 = () => {
  return <div>$0</div>;
};

export default $1;
```

### `rccp`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  };

  render() {
    return <div>$4</div>;
  }
}
```

### `rcc`

```javascript
import React, { Component } from 'react';

export default class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}
```

### `rce`

```javascript
import React, { Component } from 'react';

export class FileName extends Component {
  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

### `rcep`

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FileName extends Component {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default $1;
```

### `rpce`

```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}

export default FileName;
```

### `rpc`

```javascript
import React, { PureComponent } from 'react';

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>;
  }
}
```

### `rpcp`

```javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FileName extends PureComponent {
  static propTypes = {};

  render() {
    return <div>$2</div>;
  }
}
```

### `rmc`

```javascript
import React, { memo } from 'react';

export default memo(function $1() {
  return <div>$0</div>;
});
```

### `rmcp`

```javascript
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const $1 = memo(function $1(props) {
  return <div>$0</div>;
});

$1.propTypes = {};

export default $1;
```

### `rfc`

```javascript
import React from 'react';

export default function $1() {
  return <div>$0</div>;
}
```

### `rfcp`

```javascript
import React from 'react';
import PropTypes from 'prop-types';

function $1(props) {
  return <div>$0</div>;
}

$1.propTypes = {};

export default $1;
```

### `rfce`

```javascript
import React from 'react';

function $1() {
  return <div>$0</div>;
}

export default $1;
```

## Zustand

### `r-zustand`

```javascript
import { create } from 'zustand';

const $1 = create((set) => ({}));
```

### `r-t-zustand`

```typescript
import { create } from 'zustand';

interface $1 {}

const $2 = create<$1>()((set) => ({
  $3,
}));
```

## React Native Components

### `rnc`

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}
```

### `rnf`

```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
}
```

### `rnfs`

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
```

### `rnfe`

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
};

export default $1;
```

### `rnfes`

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  );
};

export default $1;

const styles = StyleSheet.create({});
```

### `rncs`

```javascript
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
```

### `rnce`

```javascript
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    );
  }
}

export default $1;
```
