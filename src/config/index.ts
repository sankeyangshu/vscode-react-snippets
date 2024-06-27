import { workspace } from 'vscode';

/**
 * 扩展配置名称
 */
export const EXTENSION_NAME = 'reactSnippets';

/**
 * 扩展配置设置
 */
export const EXTENSION_SETTINGS = 'reactSnippets.settings';

/**
 * 扩展配置类型
 */
export interface ExtensionSettings {
  /**
   * 支持的语言
   */
  languageScopes: string;

  /**
   * 是否顶部导入 React
   */
  importReactOnTop: boolean;

  // TODO： css modules支持
  // cssModules: boolean;
}

/**
 * 获取扩展配置
 * @return 扩展配置
 */
export const extensionConfig = () =>
  workspace.getConfiguration(EXTENSION_SETTINGS) as unknown as ExtensionSettings;
