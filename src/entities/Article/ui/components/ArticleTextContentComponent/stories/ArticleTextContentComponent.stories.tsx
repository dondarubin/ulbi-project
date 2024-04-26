import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleTextContentComponent } from '../ArticleTextContentComponent';

export default {
  title: 'entities/ArticleTextContentComponent',
  component: ArticleTextContentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextContentComponent>;

const Template: ComponentStory<typeof ArticleTextContentComponent> = (args) => <ArticleTextContentComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
