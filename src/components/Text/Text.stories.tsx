import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "body", "caption"],
      description: "Visual style of the text element.",
      table: { category: "Appearance" },
    },
    size: {
      control: {
        type: "select",
        labels: {
          50: "12px",
          62: "14px",
          75: "15px",
          87: "16px",
          100: "18px",
          112: "20px",
          125: "22px",
          137: "24px",
          150: "26px",
          162: "28px",
          175: "30px",
          187: "32px",
          200: "34px",
          212: "36px",
          225: "38px",
          237: "40px",
          250: "42px",
          262: "44px",
          275: "46px",
          300: "48px",
        },
      },
      options: [
        "50",
        "62",
        "75",
        "87",
        "100",
        "112",
        "125",
        "137",
        "150",
        "162",
        "175",
        "187",
        "200",
        "212",
        "225",
        "237",
        "250",
        "262",
        "275",
        "300",
      ],
      description: "Font size token (responsive to root font size).",
      table: { category: "Text" },
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
      description: "Font weight.",
      table: { category: "Text" },
    },
    color: {
      control: "color",
      description: "Custom text color (overrides token).",
      table: { category: "Text" },
    },
    children: {
      control: "text",
      description: "Text content.",
      table: { category: "Content" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "body",
    size: "100",
    weight: "regular",
  },
};

export const Heading: Story = {
  args: {
    children: "Typography Scale System",
    variant: "h1",
    size: "300",
    weight: "bold",
  },
};

export const Caption: Story = {
  args: {
    children: "This is a caption text.",
    variant: "caption",
    size: "62",
    weight: "medium",
  },
};
