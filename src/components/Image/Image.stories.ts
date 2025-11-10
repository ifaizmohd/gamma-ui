import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    fit: {
      control: "select",
      options: ["cover", "contain", "fill", "none", "scale-down"],
    },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    aspectRatio: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/600/400",
    alt: "Sample image",
    fit: "cover",
    radius: "md",
    aspectRatio: 16 / 9,
  },
};

export const WithLoading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const WithFallback: Story = {
  args: {
    ...Default.args,
    src: "broken-link.jpg",
    fallbackSrc: "https://via.placeholder.com/600x400?text=Fallback",
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    isClickable: true,
  },
};
