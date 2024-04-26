import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCodeContentComponent } from '../ArticleCodeContentComponent';

export default {
  title: 'entities/ArticleCodeContentComponent',
  component: ArticleCodeContentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCodeContentComponent>;

const Template: ComponentStory<typeof ArticleCodeContentComponent> = (args) => <ArticleCodeContentComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
