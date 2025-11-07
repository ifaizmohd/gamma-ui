import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";
import { Skeleton } from "./Skeleton";
import { Text } from "../Text";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    isLoading: { control: "boolean" },
    adaptive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const ButtonSkeleton: Story = {
  args: { isLoading: true, adaptive: false },
  render: (args) => (
    <Skeleton {...args}>
      <Button>Save</Button>
    </Skeleton>
  ),
};

export const TextSkeleton: Story = {
  args: { isLoading: true },
  render: (args) => (
    <Skeleton {...args}>
      <Text variant="body">Loading text...</Text>
    </Skeleton>
  ),
};

export const CardSkeleton: Story = {
  args: { isLoading: true, adaptive: true },
  render: (args) => (
    <Skeleton {...args} style={{ width: 280 }}>
      <Text variant="h1">User Info</Text>
      <Text variant="body">Lorem ipsum dolor sit amet.</Text>
      <Button style={{ marginTop: 8 }}>Edit</Button>
    </Skeleton>
  ),
};
