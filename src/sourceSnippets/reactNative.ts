import { Placeholders, SnippetType } from '../types';
import { exportDefault, react, reactComponent, reactPureComponent } from './base';

/**
 * react native 代码片段
 */
interface reactNativeMappingsType {
  reactNativeImport: 'imrn';
  reactNativeStyles: 'rnstyle';
  reactNativeComponent: 'rnc';
  reactNativeComponentWithStyles: 'rncs';
  reactNativeComponentExport: 'rnce';
  reactNativePureComponent: 'rnpc';
  reactNativePureComponentExport: 'rnpce';
  reactNativeFunctionalExportComponent: 'rnfe';
  reactNativeFunctionalExportComponentWithStyles: 'rnfes';
  reactNativeFunctionalComponent: 'rnf';
  reactNativeFunctionalComponentWithStyles: 'rnfs';
}

/**
 * react native 代码片段类型
 */
export type ReactNativeSnippetType = SnippetType<reactNativeMappingsType>;

const reactNativeStylesSnippet = ['const styles = StyleSheet.create({})'];

const reactNativeComponentReturn = [
  '  render() {',
  '    return (',
  '      <View>',
  `        <Text>${Placeholders.FirstTab}</Text>`,
  '      </View>',
  '    )',
  '  }',
];

const reactNativeReturn = [
  '  return (',
  '    <View>',
  `      <Text>${Placeholders.FirstTab}</Text>`,
  '    </View>',
  '  )',
];

const reactNativeImport: ReactNativeSnippetType = {
  key: 'reactNativeImport',
  prefix: 'imrn',
  body: [`import { ${Placeholders.FirstTab} } from 'react-native'`],
};

const reactNativeStyles: ReactNativeSnippetType = {
  key: 'reactNativeStyles',
  prefix: 'rnstyle',
  body: [`const styles = StyleSheet.create({${Placeholders.FirstTab}})`],
};

const reactNativeComponent: ReactNativeSnippetType = {
  key: 'reactNativeComponent',
  prefix: 'rnc',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactComponent,
    '',
    `export default class ${Placeholders.FileName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativeComponentWithStyles: ReactNativeSnippetType = {
  key: 'reactNativeComponentWithStyles',
  prefix: 'rncs',
  body: [
    "import { Text, StyleSheet, View } from 'react-native'",
    ...reactComponent,
    '',
    `export default class ${Placeholders.FileName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeComponentExport: ReactNativeSnippetType = {
  key: 'reactNativeComponentExport',
  prefix: 'rnce',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactComponent,
    '',
    `export class ${Placeholders.FileName} extends Component {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativePureComponent: ReactNativeSnippetType = {
  key: 'reactNativePureComponent',
  prefix: 'rnpc',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactPureComponent,
    '',
    `export default class ${Placeholders.FileName} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
  ],
};

const reactNativePureComponentExport: ReactNativeSnippetType = {
  key: 'reactNativePureComponentExport',
  prefix: 'rnpce',
  body: [
    "import { Text, View } from 'react-native'",
    ...reactPureComponent,
    '',
    `export class ${Placeholders.FileName} extends PureComponent {`,
    ...reactNativeComponentReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponent: ReactNativeSnippetType = {
  key: 'reactNativeFunctionalExportComponent',
  prefix: 'rnfe',
  body: [
    "import { View, Text } from 'react-native'",
    ...react,
    '',
    `const ${Placeholders.FileName} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
  ],
};

const reactNativeFunctionalExportComponentWithStyles: ReactNativeSnippetType = {
  key: 'reactNativeFunctionalExportComponentWithStyles',
  prefix: 'rnfes',
  body: [
    "import { StyleSheet, Text, View } from 'react-native'",
    ...react,
    '',
    `const ${Placeholders.FileName} = () => {`,
    ...reactNativeReturn,
    '}',
    ...exportDefault,
    '',
    ...reactNativeStylesSnippet,
  ],
};

const reactNativeFunctionalComponent: ReactNativeSnippetType = {
  key: 'reactNativeFunctionalComponent',
  prefix: 'rnf',
  body: [
    "import { View, Text } from 'react-native'",
    ...react,
    '',
    `export default function ${Placeholders.FileName}() {`,
    ...reactNativeReturn,
    '}',
  ],
};

const reactNativeFunctionalComponentWithStyles: ReactNativeSnippetType = {
  key: 'reactNativeFunctionalComponentWithStyles',
  prefix: 'rnfs',
  body: [
    "import { StyleSheet, Text, View } from 'react-native'",
    ...react,
    '',
    `export default function ${Placeholders.FileName}() {`,
    ...reactNativeReturn,
    '}',
    '',
    ...reactNativeStylesSnippet,
  ],
};

export default [
  reactNativeComponent,
  reactNativeComponentExport,
  reactNativeComponentWithStyles,
  reactNativeFunctionalComponent,
  reactNativeFunctionalComponentWithStyles,
  reactNativeFunctionalExportComponent,
  reactNativeFunctionalExportComponentWithStyles,
  reactNativeImport,
  reactNativePureComponent,
  reactNativePureComponentExport,
  reactNativeStyles,
];
