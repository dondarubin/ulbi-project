import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ArticleTypes } from 'entities/Article';
import { ArticleTypeTabs } from '../ArticleTypeTabs';

export default {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onChangeType: action('onClickTab'),
  selectedType: ArticleTypes.ALL,
};
