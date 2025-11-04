import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "underline", "button"],
    },
    external: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Default Link",
    href: "#",
  },
};

export const Underline: Story = {
  args: {
    children: "Underline Link",
    href: "#",
    variant: "underline",
  },
};

export const ButtonLike: Story = {
  args: {
    children: "Button-like Link",
    href: "#",
    variant: "button",
  },
};

export const External: Story = {
  args: {
    children: "Open Google",
    href: "https://google.com",
    external: true,
  },
};
