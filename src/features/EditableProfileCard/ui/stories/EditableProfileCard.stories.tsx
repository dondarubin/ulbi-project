import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { EditableProfileCard } from '../EditableProfileCard';

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

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

export const WithAuth = Template.bind({});
WithAuth.args = { id: '1' };
WithAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: {
    authData: {
      userId: 1,
      userName: 'admin',
    },
  },
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
