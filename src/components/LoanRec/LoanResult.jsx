// LoanResult.jsx

import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  StackDivider,
  Stack,
} from "@chakra-ui/react";

const LoanResult = ({ loanRec, dataDiet }) => {
  return (
    <Stack divider={<StackDivider />} spacing="4">
      <Heading size="md" color="blue">
        {dataDiet["goal"]} Loan
      </Heading>
      <SimpleGrid columns={2} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Default Prediction
          </Heading>
          <Text
            pt="2"
            fontSize="sm"
            style={{
              color:
                loanRec["predicted_class"] === "Default" ? "red" : "inherit",
            }}
          >
            {loanRec["predicted_class"]}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Probability of Default
          </Heading>
          <Text
            pt="2"
            fontSize="sm"
            style={{
              color:
                loanRec["predicted_class"] === "Default" ? "red" : "inherit",
            }}
          >
            {`${(loanRec["probability_of_default"] * 100).toFixed(2)}%`}
          </Text>
        </Box>
        <Box columns={2}>
          <Heading size="xs" textTransform="uppercase">
            Interest Rate
          </Heading>
          <Text pt="2" fontSize="sm">
            {loanRec["InterestRate"]}
          </Text>
        </Box>

        <Box>
          <Heading size="xs" textTransform="uppercase">
            Tenure (Months)
          </Heading>
          <Text pt="2" fontSize="sm">
            {loanRec["TenureMonths"]}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Loan Amount ($)
          </Heading>
          <Text pt="2" fontSize="sm">
            {loanRec["TenureMonths"]}
          </Text>
        </Box>
      </SimpleGrid>
      <Text pt="2" fontSize="sm">
        {loanRec["predicted_class"] === "Default" && (
          <>
            Because your loan is predicted to default, the loan amount is
            reduced by 20%, and the loan period is extended by 20%.
          </>
        )}
      </Text>
    </Stack>
  );
};

export default LoanResult;
