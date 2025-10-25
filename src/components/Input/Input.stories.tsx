import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: { control: "select", options: ["outlined", "filled"] },
    inputSize: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Outlined: Story = {
  args: {
    label: "Email",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    label: "Search",
    variant: "filled",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    errorMessage: "Invalid email format",
    error: "true",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Email",
    variant: "standard",
  },
};
