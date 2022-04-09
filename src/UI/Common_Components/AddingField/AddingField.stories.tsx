import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AddingField} from "./AddingField";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/AddingField',
    component: AddingField,
   argTypes: {
       onClickAddHandler: { description: 'Cd for Button `Add` ' },
    },
} as ComponentMeta<typeof AddingField>;

const Template: ComponentStory<typeof AddingField> = (args) => <AddingField {...args} />;

export const AddingFieldExample = Template.bind({});
AddingFieldExample.args = {
    onClickAddHandler: action('Button `Add` was clicked, text  send'),
    onEnterHandler: action('Button `Enter` was clicked, text  send'),
    inputText: 'Задача на сегодня...'
};

export const AddingFieldExampleWithError = Template.bind({});
AddingFieldExampleWithError.args = {
    inputText:'',
    onClickAddHandler: action('Button `Add` was clicked, text not send'),
    onEnterHandler: action('Button `Enter` was clicked, text not send'),
    error:'Пустое поле'
};