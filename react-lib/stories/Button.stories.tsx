// components/Button.stories.tsx
import React from 'react';
import { StoryFn } from '@storybook/react';
import Button from '../src/lib/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};

interface ButtonProps {
  primary: boolean;
  label: string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}
