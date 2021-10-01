import React from "react";
import { Modal, Header, Icon } from "semantic-ui-react";

export default function MessageModal({ onClose, onOpen, open, content }) {
  return (
    <Modal
      basic
      dimmer
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      size="small"
    >
      <Header icon as="h2" className="orbitron">
        <Icon name="check circle outline" />
        {content}
      </Header>
    </Modal>
  );
}
