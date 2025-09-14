import type { Meta, StoryFn } from "@storybook/react-vite";
import Button from "..";
import type { IButtonProps } from "../types/Button.types";

// 1️⃣ Meta configuration
const meta: Meta<IButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    variation: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    label: { control: "text" },
    className: { control: false },
  },
};

export default meta;

// 2️⃣ Reusable template
const Template: StoryFn<IButtonProps> = (args) => <Button {...args} />;

// 3️⃣ Individual stories

export const TextSmallPrimary = Template.bind({});
TextSmallPrimary.args = {
  label: "Click Me",
  variant: "text",
  variation: "small",
  color: "primary",
};

export const OutlinedMediumSecondary = Template.bind({});
OutlinedMediumSecondary.args = {
  label: "Submit",
  variant: "outlined",
  variation: "medium",
  color: "secondary",
};

export const ContainedLargePrimary = Template.bind({});
ContainedLargePrimary.args = {
  label: "Continue",
  variant: "contained",
  variation: "large",
  color: "primary",
};
