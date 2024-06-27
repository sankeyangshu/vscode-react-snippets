import { Placeholders, SnippetType } from '../types';
import {
  exportDefault,
  innerComponent,
  innerComponentReturn,
  react,
  reactComponent,
  reactPropTypes,
  reactPureComponent,
  reactWithMemo,
} from './base';

/**
 * react component 代码片段
 */
interface reactComponentMappingsType {
  reactArrowFunctionComponent: 'rafc';
  reactArrowFunctionComponentWithPropTypes: 'rafcp';
  reactArrowFunctionExportComponent: 'rafce';
  reactClassComponentPropTypes: 'rccp';
  reactClassComponent: 'rcc';
  reactClassExportComponent: 'rce';
  reactClassExportComponentWithPropTypes: 'rcep';
  reactClassExportPureComponent: 'rpce';
  reactClassPureComponent: 'rpc';
  reactClassPureComponentWithPropTypes: 'rpcp';
  reactFunctionMemoComponent: 'rmc';
  reactFunctionMemoComponentWithPropTypes: 'rmcp';
  reactFunctionalComponent: 'rfc';
  reactFunctionalComponentWithPropTypes: 'rfcp';
  reactFunctionalExportComponent: 'rfce';
}

/**
 * react component 代码片段类型
 */
export type ReactComponentSnippetType = SnippetType<reactComponentMappingsType>;

/**
 * react 函数组件
 */
const reactArrowFunctionComponent: ReactComponentSnippetType = {
  key: 'reactArrowFunctionComponent',
  prefix: 'rafc',
  body: [
    ...react,
    '',
    `export const ${Placeholders.FileName} = () => {`,
    ...innerComponent,
    '}',
    '',
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system',
};

const reactArrowFunctionComponentWithPropTypes: ReactComponentSnippetType = {
  key: 'reactArrowFunctionComponentWithPropTypes',
  prefix: 'rafcp',
  body: [
    ...reactPropTypes,
    '',
    `const ${Placeholders.FileName} = props => {`,
    ...innerComponent,
    '}',
    '',
    `${Placeholders.FileName}.propTypes = {}`,
    ...exportDefault,
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system with PropTypes',
};

/**
 * react 函数组件 - 默认导出
 */
const reactArrowFunctionExportComponent: ReactComponentSnippetType = {
  key: 'reactArrowFunctionExportComponent',
  prefix: 'rafce',
  body: [
    ...react,
    '',
    `const ${Placeholders.FileName} = () => {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React Arrow Function Component with ES7 module system',
};

const reactClassComponentPropTypes: ReactComponentSnippetType = {
  key: 'reactClassComponentPropTypes',
  prefix: 'rccp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactComponent,
    '',
    `export default class ${Placeholders.FileName} extends Component {`,
    `  static propTypes = {${Placeholders.SecondTab}: ${Placeholders.ThirdTab}}`,
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with PropTypes and ES7 module system',
};

const reactClassComponent: ReactComponentSnippetType = {
  key: 'reactClassComponent',
  prefix: 'rcc',
  body: [
    ...reactComponent,
    '',
    `export default class ${Placeholders.FileName} extends Component {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportComponent: ReactComponentSnippetType = {
  key: 'reactClassExportComponent',
  prefix: 'rce',
  body: [
    ...reactComponent,
    '',
    `export class ${Placeholders.FileName} extends Component {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportComponentWithPropTypes: ReactComponentSnippetType = {
  key: 'reactClassExportComponentWithPropTypes',
  prefix: 'rcep',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactComponent,
    '',
    `export class ${Placeholders.FileName} extends Component {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactClassExportPureComponent: ReactComponentSnippetType = {
  key: 'reactClassExportPureComponent',
  prefix: 'rpce',
  body: [
    ...reactPureComponent,
    '',
    `export class ${Placeholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React pure component class with ES7 module system export',
};

const reactClassPureComponent: ReactComponentSnippetType = {
  key: 'reactClassPureComponent',
  prefix: 'rpc',
  body: [
    ...reactPureComponent,
    '',
    `export default class ${Placeholders.FileName} extends PureComponent {`,
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React pure component class with ES7 module system',
};

const reactClassPureComponentWithPropTypes: ReactComponentSnippetType = {
  key: 'reactClassPureComponentWithPropTypes',
  prefix: 'rpcp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactPureComponent,
    '',
    `export default class ${Placeholders.FileName} extends PureComponent {`,
    '  static propTypes = {}',
    '',
    ...innerComponentReturn,
    '}',
    '',
  ],
  description: 'Creates a React component class with ES7 module system',
};

const reactFunctionMemoComponent: ReactComponentSnippetType = {
  key: 'reactFunctionMemoComponent',
  prefix: 'rmc',
  body: [
    ...reactWithMemo,
    '',
    `const ${Placeholders.FileName} = memo(() => {`,
    ...innerComponent,
    '})',
    ...exportDefault,
  ],
  description: 'Creates a React Memo Function Component with ES7 module system',
};

const reactFunctionMemoComponentWithPropTypes: ReactComponentSnippetType = {
  key: 'reactFunctionMemoComponentWithPropTypes',
  prefix: 'rmcp',
  body: [
    "import PropTypes from 'prop-types'",
    ...reactWithMemo,
    '',
    `const ${Placeholders.FileName} = memo((props) => {`,
    ...innerComponent,
    '})',
    '',
    `${Placeholders.FileName}.propTypes = {}`,
    ...exportDefault,
  ],
  description: 'Creates a React Memo Function Component with ES7 module system with PropTypes',
};

const reactFunctionalComponent: ReactComponentSnippetType = {
  key: 'reactFunctionalComponent',
  prefix: 'rfc',
  body: [
    ...react,
    '',
    `export default function ${Placeholders.FileName}() {`,
    ...innerComponent,
    '}',
    '',
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

const reactFunctionalComponentWithPropTypes: ReactComponentSnippetType = {
  key: 'reactFunctionalComponentWithPropTypes',
  prefix: 'rfcp',
  body: [
    ...reactPropTypes,
    '',
    `function ${Placeholders.FileName}(props) {`,
    ...innerComponent,
    '}',
    '',
    `${Placeholders.FileName}.propTypes = {}`,
    ...exportDefault,
    '',
  ],
  description: 'Creates a React Functional Component with ES7 module system with PropTypes',
};

const reactFunctionalExportComponent: ReactComponentSnippetType = {
  key: 'reactFunctionalExportComponent',
  prefix: 'rfce',
  body: [
    ...react,
    '',
    `function ${Placeholders.FileName}() {`,
    ...innerComponent,
    '}',
    ...exportDefault,
  ],
  description: 'Creates a React Functional Component with ES7 module system',
};

export default [
  reactArrowFunctionComponent,
  reactArrowFunctionComponentWithPropTypes,
  reactArrowFunctionExportComponent,
  reactClassComponentPropTypes,
  reactClassComponent,
  reactClassExportComponent,
  reactClassExportComponentWithPropTypes,
  reactClassExportPureComponent,
  reactClassPureComponent,
  reactClassPureComponentWithPropTypes,
  reactFunctionMemoComponent,
  reactFunctionMemoComponentWithPropTypes,
  reactFunctionalComponent,
  reactFunctionalComponentWithPropTypes,
  reactFunctionalExportComponent,
];
