import { extensionConfig } from '../config';
import { Placeholders, SnippetPlaceholders } from '../types';
import { snippetAllType } from './generateSnippets';
import { removeReactImport } from './removeReactImport';

/**
 * 格式化代码片段占位符
 * @param {string} snippet 代码片段
 * @return 格式化后的代码片段
 */
export const formatSnippetPlaceholders = (snippet: string) => {
  return String(snippet)
    .replace(new RegExp(Placeholders.FileName, 'g'), SnippetPlaceholders.FileName)
    .replace(new RegExp(Placeholders.FirstTab, 'g'), SnippetPlaceholders.FirstTab)
    .replace(new RegExp(Placeholders.SecondTab, 'g'), SnippetPlaceholders.SecondTab)
    .replace(new RegExp(Placeholders.ThirdTab, 'g'), SnippetPlaceholders.ThirdTab)
    .replace(new RegExp(Placeholders.Capitalize, 'g'), SnippetPlaceholders.Capitalize);
};

/**
 * 格式化代码片段-移除 react import
 * @param {snippetAllType} snippet 代码片段
 * @return 格式化后的代码片段
 */
export const parseSnippetToBody = (snippet: snippetAllType) => {
  const { importReactOnTop } = extensionConfig();

  const body = typeof snippet.body === 'string' ? snippet.body : snippet.body.join('\n');

  const snippetBody = importReactOnTop
    ? body
    : removeReactImport({ body: snippet.body, prefix: snippet.prefix });

  return snippetBody;
};
