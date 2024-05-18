import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        // Массив пропсов, которые нужно убрать ['data-testid']
        const forbidden = state.opts.props || [];

        // Проходимся по всем нодам и берём JSXIdentifier
        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            // Если имя ноды равно значению из массива - удаляем
            if (forbidden.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
