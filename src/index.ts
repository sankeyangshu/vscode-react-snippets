import { commands, ConfigurationChangeEvent, window, workspace } from 'vscode';
import { generateSnippets } from './utils/gernerateSnippets';
import { EXTENSION_NAME } from './config';

/**
 * 当配置发生变化时，提示用户重启扩展
 */
const showRestartExtensionMessage = async ({ affectsConfiguration }: ConfigurationChangeEvent) => {
  if (affectsConfiguration(EXTENSION_NAME)) {
    // 提示用户重启扩展
    setTimeout(() => {
      window
        .showWarningMessage(
          'React Snippets: Please restart VS Code to apply snippet formatting changes',
          'Restart VS Code',
          'Ignore'
        )
        .then((action?: string) => {
          if (action === 'Restart VS Code') {
            commands.executeCommand('workbench.action.reloadWindow');
          }
        });
    }, 1000);
  }
};

/**
 * 激活扩展
 */
export async function activate() {
  // 设置配置变化的监听器
  workspace.onDidChangeConfiguration(showRestartExtensionMessage);

  // 生成代码片段
  await generateSnippets();
}

export function deactivate() {}
