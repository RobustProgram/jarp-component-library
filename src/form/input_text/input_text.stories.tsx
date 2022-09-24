import { Story, Meta } from '@storybook/react';
import React from 'react';
import { InputText, InputTextProps } from './input_text';

export default {
  title: 'Form Components/InputText',
  component: InputText,
} as Meta;

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {};
