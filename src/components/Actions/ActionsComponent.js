import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

function Actions({ actionHandller }) {
  const buttons = [".", "1", "2", "3", "4", "5", "6", "W", "Wide", "No Ball"];
  return (
    <ButtonGroup variant="solid">
      {buttons.map((button) => (
        <Button key={button} onClick={() => actionHandller(button)}>
          {button}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default Actions;
