import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from '../index';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  codeText: 'export default {\n'
    + "  title: 'shared/Code',\n"
    + '  component: Code,\n'
    + '  argTypes: {\n'
    + "    backgroundColor: { control: 'color' },\n"
    + '  },\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n',
};

export const Dark = Template.bind({});
Dark.args = {
  codeText: 'export default {\n'
    + "  title: 'shared/Code',\n"
    + '  component: Code,\n'
    + '  argTypes: {\n'
    + "    backgroundColor: { control: 'color' },\n"
    + '  },\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
