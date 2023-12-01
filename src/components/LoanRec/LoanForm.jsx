// LoanForm.jsx

import React from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const LoanForm = ({
  loanData,
  handleInputChange,
  handleSubmit,
  data,
  dataDiet,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl>
        <FormLabel>Loan Amount ($) </FormLabel>
        <NumberInput
          name="loan_amount"
          min={100}
          value={loanData.loan_amount}
          isRequired
          onChange={(_, value) => handleInputChange("loan_amount", value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Minimal Loan 100$</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Loan Period (Month)</FormLabel>
        <NumberInput
          name="loan_amount_term"
          min={10}
          max={360}
          value={loanData.loan_amount_term}
          isRequired
          onChange={(_, value) => handleInputChange("loan_amount_term", value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormHelperText>Minimal Loan Term 10 month</FormHelperText>
      </FormControl>

      <Button colorScheme="blue" margin="4" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoanForm;
