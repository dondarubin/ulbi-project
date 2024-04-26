import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleImageContentComponent } from '../ArticleImageContentComponent';

export default {
  title: 'entities/ArticleImageContentComponent',
  component: ArticleImageContentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageContentComponent>;

const Template: ComponentStory<typeof ArticleImageContentComponent> = (args) => <ArticleImageContentComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
