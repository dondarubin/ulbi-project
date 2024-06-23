import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RatingCard } from '../RatingCard';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Оцените статью!',
};

export const withFeedback = Template.bind({});
withFeedback.args = {
  title: 'Оцените статью!',
  hasFeedback: true,
  feedbackTitle: 'Напишите пару слов о статье!',
};

export const alreadyRate = Template.bind({});
alreadyRate.args = {
  title: 'Оцените статью!',
  rate: 1,
};
