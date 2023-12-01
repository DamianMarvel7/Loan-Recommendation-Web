import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  NumberDecrementStepper,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  VStack,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import useContent from "../hooks/useContents";
import useDiet from "../hooks/useDiet";
import useGym from "../hooks/useGym";
import DietPlanDisplay from "../components/LoanRec/DietPlanDisplay";
import LoanForm from "../components/LoanRec/LoanForm";
import LoanResult from "../components/LoanRec/LoanResult";
import LoanBenefit from "../components/LoanRec/LoanBenefit";

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const LoanRec = () => {
  const { data, username, postLoanRecommendation } = useContent();
  const { data: dataDiet, dataDietRec } = useDiet();
  const { data: dataGym } = useGym();

  const randomClass = dataGym ? getRandomItem(dataGym) : null;
  const randomDiet = dataDietRec["diet_recommendation"]
    ? getRandomItem(dataDietRec["diet_recommendation"])
    : null;

  const [loanData, setLoanData] = useState({
    loan_amount: 1000,
    loan_amount_term: 100,
  });
  const [loanRec, setLoanRec] = useState(null);
  const handleInputChange = (name, value) => {
    setLoanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(dataDietRec);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postLoanRecommendation(loanData);
    setLoanRec(result["data"]);
    if (result.success) {
      console.log("Loan recommendation submitted successfully:", result.data);
    } else {
      console.error("Error submitting loan recommendation:", result.error);
    }
  };

  return (
    <div>
      <p className="headingM">Welcome {username}</p>

      {data["Customer_ID"] && dataDiet["user_id"] ? (
        <LoanForm
          loanData={loanData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          data={data}
          dataDiet={dataDiet}
        />
      ) : (
        <>
          <h1 className="headingL">
            Please complete your data information initially
          </h1>
          <a href="/">
            <Button colorScheme="blue" margin="4">
              Navigate to home
            </Button>
          </a>
          <a href="/diet">
            <Button colorScheme="blue" margin="4">
              Navigate to diet
            </Button>
          </a>
        </>
      )}
      {loanRec && (
        <div className="loan-detail">
          <Card>
            <CardHeader>
              <Heading size="xl">Loan Recommendation</Heading>
            </CardHeader>

            <CardBody>
              <SimpleGrid columns={2} spacing="4">
                <LoanResult loanRec={loanRec} dataDiet={dataDiet} />
                <LoanBenefit dataDiet={dataDiet} randomClass={randomClass} />
              </SimpleGrid>
            </CardBody>
          </Card>
          <DietPlanDisplay username={username} randomDiet={randomDiet} />
        </div>
      )}
    </div>
  );
};

export default LoanRec;
