/**
 * 代码片段类型
 */
export interface SnippetType<T> {
  key: keyof T;
  prefix: T[keyof T];
  body: string[];
  description?: string;
}

/**
 * 占位符
 */
export const Placeholders = {
  FirstTab: 'first',
  SecondTab: 'second',
  ThirdTab: 'third',
  Capitalize: 'capitalize',
  FileName: 'file',
};

/**
 * 生成代码片段可识别的占位符
 */
export const SnippetPlaceholders = {
  FirstTab: '${1:first}',
  SecondTab: '${2:second}',
  ThirdTab: '${3:third}',
  Capitalize: '${1/(.*)/${1:/capitalize}/}',
  FileName: '${1:${TM_FILENAME_BASE}}',
};
