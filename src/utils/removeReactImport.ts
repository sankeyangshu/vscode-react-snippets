import { snippetAllType } from './generateSnippets';

/**
 * 携带 react import的代码片段
 */
const snippetPrefixesWithReactImport = [
  'rafc',
  'rafcp',
  'rafce',
  'rccp',
  'rcc',
  'rce',
  'rcep',
  'rpce',
  'rpc',
  'rpcp',
  'rmc',
  'rmcp',
  'rfc',
  'rfcp',
  'rfce',
];

/***
 * 移除 react import
 */
export const removeReactImport = ({
  body,
  prefix,
}: {
  body: string[];
  prefix: snippetAllType['prefix'];
}) => {
  if (!snippetPrefixesWithReactImport.includes(prefix)) {
    return body;
  }

  let newBody = [...body];

  const reactImportIndex = newBody.findIndex((item) => item.match(new RegExp(/import React/, 'g')));

  // 判断是否有 import React
  if (reactImportIndex !== -1) {
    const line = newBody[reactImportIndex];
    const newLine = line
      .replace(new RegExp(/^import React .*$/, 'g'), '')
      .replace(new RegExp(/^import React, /, 'g'), 'import ');

    newBody[reactImportIndex] = newLine;
    if (!newLine.length) {
      newBody = newBody.filter(Boolean);
    }
  }

  return newBody;
};
