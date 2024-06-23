import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from '../StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Selected = Template.bind({});
Selected.args = {
  selectedStars: 3,
};

export const Big = Template.bind({});
Big.args = {
  size: 50,
};
