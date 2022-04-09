import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Zadacha} from "./Zadacha";
import {action, actions} from "@storybook/addon-actions";


export default {
    title: 'Example/Zadacha',
    component: Zadacha,
} as ComponentMeta<typeof Zadacha>;


const baseArgs={
   clickRemoveCb: action('zadacha was removed'),
    clickCheckBox: action('checkBox was  changed was removed')
}

const Template: ComponentStory<typeof Zadacha> = (args) => <Zadacha {...args} />;

export const ZadachaNotActive = Template.bind({});
ZadachaNotActive.args = {
   ...baseArgs,
    task:{id:'123', text:'Zadacha', active:false},
    clickRemoveBtn: baseArgs.clickRemoveCb,
    clickCheckBox: baseArgs.clickCheckBox
};
export const ZadachaisActive = Template.bind({});
ZadachaisActive.args = {
    ...baseArgs,
    task:{id:'333', text:'Zadacha is Active', active:true},
    clickRemoveBtn: baseArgs.clickRemoveCb,
    clickCheckBox: baseArgs.clickCheckBox
};
