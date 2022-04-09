import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {FilteringButtons} from "./FilteringButtons";
import {action} from "@storybook/addon-actions";
import {activeFilterType} from "../../../APP";

export default {
    title: 'Example/FilteringButtons',
    component: FilteringButtons,
} as ComponentMeta<typeof FilteringButtons>;


const Template: ComponentStory<typeof FilteringButtons> = (args) => <FilteringButtons {...args} />;

export const FilteringButtonsExample = Template.bind({});

FilteringButtonsExample.args = {
    setActiveFilter: action('button was clicked')
};

