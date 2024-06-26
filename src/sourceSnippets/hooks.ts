import { Placeholders, SnippetType } from '../types';

/**
 * react hook 代码片段
 */
interface hookMappingsType {
  useState: 'useStateSnippet';
  useCallback: 'useCallbackSnippet';
  useContext: 'useContextSnippet';
  useEffect: 'useEffectSnippet';
  useImperativeHandle: 'useImperativeHandleSnippet';
  useLayoutEffect: 'useLayoutEffectSnippet';
  useMemo: 'useMemoSnippet';
  useReducer: 'useReducerSnippet';
  useRef: 'useRefSnippet';
}

/**
 * react hook 代码片段类型
 */
export type HooksSnippetType = SnippetType<hookMappingsType>;

const useEffect: HooksSnippetType = {
  key: 'useEffect',
  prefix: 'useEffectSnippet',
  body: [
    'useEffect(() => {',
    `  ${Placeholders.FirstTab}`,
    '',
    '  return () => {',
    `    ${Placeholders.SecondTab}`,
    '  }',
    `}, [${Placeholders.ThirdTab}])`,
    '',
  ],
};

const useContext: HooksSnippetType = {
  key: 'useContext',
  prefix: 'useContextSnippet',
  body: [`const ${Placeholders.FirstTab} = useContext(${Placeholders.SecondTab})`],
};

const useState: HooksSnippetType = {
  key: 'useState',
  prefix: 'useStateSnippet',
  body: [
    `const [${Placeholders.FirstTab}, set${Placeholders.Capitalize}] = useState(${Placeholders.SecondTab})`,
  ],
};

const useReducer: HooksSnippetType = {
  key: 'useReducer',
  prefix: 'useReducerSnippet',
  body: [
    `const [state, dispatch] = useReducer(${Placeholders.FirstTab}, ${Placeholders.SecondTab}, ${Placeholders.ThirdTab})`,
  ],
};

const useCallback: HooksSnippetType = {
  key: 'useCallback',
  prefix: 'useCallbackSnippet',
  body: [
    'useCallback(',
    '  () => {',
    `    ${Placeholders.FirstTab}`,
    '  },',
    `  [${Placeholders.SecondTab}],`,
    ')',
    '',
  ],
};

const useMemo: HooksSnippetType = {
  key: 'useMemo',
  prefix: 'useMemoSnippet',
  body: [`useMemo(() => ${Placeholders.FirstTab}, [${Placeholders.SecondTab}])`],
};

const useRef: HooksSnippetType = {
  key: 'useRef',
  prefix: 'useRefSnippet',
  body: [`const ${Placeholders.FirstTab} = useRef(${Placeholders.SecondTab})`],
};

const useImperativeHandle: HooksSnippetType = {
  key: 'useImperativeHandle',
  prefix: 'useImperativeHandleSnippet',
  body: [
    'useImperativeHandle(',
    `  ${Placeholders.FirstTab},`,
    '  () => {',
    `    ${Placeholders.SecondTab}`,
    '  },',
    `  [${Placeholders.ThirdTab}],`,
    ')',
  ],
};

const useLayoutEffect: HooksSnippetType = {
  key: 'useLayoutEffect',
  prefix: 'useLayoutEffectSnippet',
  body: [
    'useLayoutEffect(() => {',
    `  ${Placeholders.FirstTab}`,
    '',
    '  return () => {',
    `    ${Placeholders.SecondTab}`,
    '  };',
    `}, [${Placeholders.ThirdTab}])`,
  ],
};

export default [
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
];
