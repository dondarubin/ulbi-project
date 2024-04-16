import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

// @ts-ignore
const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  profile: {
    profileFormData: {
      username: 'admin',
      firstname: 'Mama',
      lastname: 'Papa',
      age: 22,
      currency: Currency.USD,
      city: 'Saratov',
      country: Country.RUSSIA,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    profileFormData: {
      username: 'admin',
      firstname: 'Mama',
      lastname: 'Papa',
      age: 22,
      currency: Currency.USD,
      city: 'Saratov',
      country: Country.RUSSIA,
    },
  },
})];
