import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Scoreboard({
  runs,
  wickets,
  wide,
  noball,
  balls,
  totalFours,
  totalSixs,
}) {
  return (
    <Card w="50%">
      <CardBody>
        <Heading size="md" mb="16px">
          Scoreboard
        </Heading>
        <Heading size="lg">
          {runs}/{wickets}
        </Heading>
        <Text>
          Overs - {Math.floor(balls / 6)}.{balls % 6}
        </Text>
        <br />
        <Heading size="md" mb="12px">
          Match Summary
        </Heading>
        <Text>Total 4s - {totalFours} </Text>
        <Text>Total 6s - {totalSixs} </Text>
        <Heading size="sm">Extras - {wide + noball}</Heading>
      </CardBody>
    </Card>
  );
}

export default Scoreboard;
