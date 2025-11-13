import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "@ui/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    delay: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
    placement: "top",
    children: <Button variant="primary">Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    ...Default.args,
    placement: "bottom",
  },
};

export const Left: Story = {
  args: {
    ...Default.args,
    placement: "left",
  },
};

export const Right: Story = {
  args: {
    ...Default.args,
    placement: "right",
  },
};
