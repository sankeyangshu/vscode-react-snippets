import { Placeholders, SnippetType } from '../types';

/**
 * zustand 代码片段
 */
interface zustandMappingsType {
  zustand: 'r-zustand';
  zustandTypescript: 'r-t-zustand';
}

/**
 * zustand 代码片段类型
 */
export type ZustandSnippetType = SnippetType<zustandMappingsType>;

const zustand: ZustandSnippetType = {
  key: 'zustand',
  prefix: 'r-zustand',
  body: [
    "import { create } from 'zustand'",
    '',
    `const ${Placeholders.FirstTab} = create((set) => ({`,
    `  ${Placeholders.SecondTab}`,
    '',
    '}))',
    '',
  ],
};

const zustandTypescript: ZustandSnippetType = {
  key: 'zustandTypescript',
  prefix: 'r-t-zustand',
  body: [
    "import { create } from 'zustand'",
    '',
    `interface ${Placeholders.FirstTab} {`,
    '',
    '}',
    '',
    `const ${Placeholders.SecondTab} =  create<${Placeholders.Capitalize}>()((set) => ({`,
    `  ${Placeholders.ThirdTab}`,
    '',
    '}))',
    '',
  ],
};

export default [zustand, zustandTypescript];
