import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const LoanUserForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  isUpdate,
  onClose,
}) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, isUpdate)}>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <Select
            name="Gender"
            value={formData.Gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Married</FormLabel>
          <Select
            name="Married"
            value={formData.Married}
            onChange={handleInputChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Dependents</FormLabel>
          <NumberInput
            name="Dependents"
            value={formData.Dependents}
            min={0}
            max={5}
            onChange={(_, value) =>
              handleInputChange({ target: { name: "Dependents", value } })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Education</FormLabel>
          <Select
            name="Education"
            value={formData.Education}
            onChange={handleInputChange}
          >
            <option value="Graduate">Graduate</option>
            <option value="Not Graduate">Not Graduate</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Applicant Income</FormLabel>
          <NumberInput
            name="ApplicantIncome"
            value={formData.ApplicantIncome}
            min={1000}
            onChange={(_, value) =>
              handleInputChange({
                target: { name: "ApplicantIncome", value },
              })
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Property Area</FormLabel>
          <Select
            name="Property_Area"
            value={formData.Property_Area}
            onChange={handleInputChange}
          >
            <option value="Urban">Urban</option>
            <option value="Semiurban">Semiurban</option>
            <option value="Rural">Rural</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" margin="4" type="submit" onClick={onClose}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoanUserForm;
