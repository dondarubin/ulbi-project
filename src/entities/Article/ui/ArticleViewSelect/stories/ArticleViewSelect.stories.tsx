import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSelect } from '../ArticleViewSelect';

export default {
  title: 'entities/Article/ArticleViewSelect',
  component: ArticleViewSelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleViewSelect>;

const Template: ComponentStory<typeof ArticleViewSelect> = (args) => <ArticleViewSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
