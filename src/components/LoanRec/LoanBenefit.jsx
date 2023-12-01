// LoanBenefit.jsx

import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  StackDivider,
  Stack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

const LoanBenefit = ({ dataDiet, randomClass }) => {
  return (
    <Stack divider={<StackDivider />} spacing="4">
      <Heading size="md" color="blue">
        Benefit
      </Heading>
      <SimpleGrid columns={2} spacing="4">
        <Box display="grid" gridColumn="span 2">
          <Heading size="xs" textTransform="uppercase">
            Diet Recommendation
          </Heading>
          <Text pt="2" fontSize="sm">
            Specially crafted for the purpose of{" "}
            {` ${dataDiet["goal"].toLowerCase()}`}
          </Text>
        </Box>
        <Box display="grid" gridColumn="span 2">
          <Heading size="xs" textTransform="uppercase">
            Class Recommendation Free Trial
          </Heading>
          <Text pt="2" fontSize="sm">
            {randomClass["class_type"]}
          </Text>
        </Box>

        <Box>
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="teal">Show Class Info</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Class Information</PopoverHeader>
              <PopoverBody>
                <Text>ID: {randomClass.class_id}</Text>
                <Text>Type: {randomClass.class_type}</Text>
                <Text>Coach ID: {randomClass.coach_id}</Text>
                <Text>Start Time: {randomClass.start_time}</Text>
                <Text>End Time: {randomClass.end_time}</Text>
              </PopoverBody>
              <Button colorScheme="blue">Send Invitation to Email</Button>
            </PopoverContent>
          </Popover>
        </Box>
      </SimpleGrid>
      <Text pt="2" fontSize="sm">
        <>
          Additionally, you receive extra advantages such as personalized diet
          recommendations and the opportunity to experience a complimentary gym
          class tailored to your fitness goals.
        </>
      </Text>
    </Stack>
  );
};

export default LoanBenefit;
