import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "rect", "circle"],
    },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: { variant: "text", width: "100px", height: "1em" },
};

export const Circle: Story = {
  args: { variant: "circle", width: 40, height: 40 },
};

export const Rect: Story = {
  args: { variant: "rectangle", width: 200, height: 100 },
};
