import { access, constants, mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { extensionConfig } from '../config';
import ReactComponentSnippets, { ReactComponentSnippetType } from '../sourceSnippets/components';
import HooksSnippets, { HooksSnippetType } from '../sourceSnippets/hooks';
import { formatSnippetPlaceholders } from './formatters';

/**
 * 代码片段 key 类型
 */
export type SnippetKeysType = ReactComponentSnippetType['key'] | HooksSnippetType['key'];

/**
 * 所有代码片段类型
 */
export type snippetAllType = ReactComponentSnippetType | HooksSnippetType;

/**
 * 代码片段总对象类型
 */
export type snippetsObjType = {
  [key in SnippetKeysType]: snippetAllType;
};

/**
 * 获取代码片段
 * @param {string} scope 支持的语言
 * @param {snippetAllType[]} list 所有代码片段
 * @return 格式化好的代码片段
 */
const getSnippets = (scope: string, list: snippetAllType[]) => {
  const snippets = list.reduce((acc, cur) => {
    acc[cur.key] = Object.assign(cur, {
      body: cur.body,
      scope: scope,
    });
    return acc;
  }, {} as snippetsObjType);

  return formatSnippetPlaceholders(JSON.stringify(snippets, null, 2));
};

/**
 * 生成代码片段
 */
export const generateSnippets = async () => {
  try {
    const { languageScopes } = extensionConfig();

    // 语言列表
    const scopeList = [
      {
        scope: languageScopes,
        list: [...ReactComponentSnippets, ...HooksSnippets],
      },
    ];

    for (let i = 0; i < scopeList.length; i++) {
      const item = scopeList[i];

      const snippetList = getSnippets(item.scope, item.list);

      // 要写入的文件路径
      const tPath = 'react-snippets.json';
      const outputPath = path.join(__dirname, '..', 'dist', 'snippets');

      // 构建 snippets 目录下的 json 文件的路径
      const filePath = path.join(outputPath, tPath);

      // 监测文件是否存在，不存在则创建
      await mkdir(outputPath, { recursive: true });

      // 确保文件可读写
      await access(outputPath, constants.R_OK | constants.W_OK);

      // 写入文件
      await writeFile(filePath, snippetList, 'utf8');
    }
  } catch (err) {
    console.log(err);
  }
};
