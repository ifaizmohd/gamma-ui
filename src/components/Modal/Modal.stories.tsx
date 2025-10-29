import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "./Modal";
import { Button } from "../Button/Button";
import React, { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    open: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          size="md"
          ariaLabel="Example Modal"
        >
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            This modal uses a React portal and disables background scroll.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
