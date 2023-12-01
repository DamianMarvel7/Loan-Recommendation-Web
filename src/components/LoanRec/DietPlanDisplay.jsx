// DietPlanDisplay.jsx

import React from "react";
import { Box, VStack, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const MealItem = ({ title, description }) => {
  return (
    <Box>
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </Box>
  );
};

const DietPlanDisplay = ({ username, randomDiet }) => {
  
  return (
    <SimpleGrid columns={2} spacing="4" p="5">
      <Box>
        <VStack align="start" spacing={4}>
          <Heading fontSize="xl">{`Diet Plan for User ${username}`}</Heading>
          <Text>{`Calories per Day: ${randomDiet.calories_per_day}`}</Text>
          <Text>{`Protein per Day: ${randomDiet.protein_grams_per_day} grams`}</Text>
          <Text>{`Carbohydrates per Day: ${randomDiet.carbohydrates_grams_per_day} grams`}</Text>
          <Text>{`Fat per Day: ${randomDiet.fat_grams_per_day} grams`}</Text>
          <Text>{`Fiber per Day: ${randomDiet.fiber_grams_per_day} grams`}</Text>
        </VStack>
      </Box>

      <Box>
        <VStack align="start" spacing={4}>
          <Heading fontSize="xl">Meal Plan</Heading>
          <SimpleGrid columns={1} spacing={4}>
            <MealItem title="Breakfast" description={randomDiet.breakfast} />
            <MealItem title="Lunch" description={randomDiet.lunch} />
            <MealItem title="Dinner" description={randomDiet.dinner} />
            <MealItem title="Snack" description={randomDiet.snack} />
          </SimpleGrid>
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default DietPlanDisplay;
