import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import useContent from "../hooks/useContents";
import UserProfile from "../components/userProfile";
import LoanUserForm from "../components/LoanUserForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import config from "../../config";

function generateUniqueId() {
  // Generate a unique ID using the current timestamp and a random number
  const timestamp = new Date().getTime().toString(16);
  const random = Math.random().toString(16).slice(2); // Remove '0.' from the beginning

  // Concatenate the timestamp and random number
  const uniqueId = timestamp + random;

  return uniqueId;
}

const Content = () => {
  const { data, username, postData, fetchData, updateData, deleteData, error } =
    useContent();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    Customer_ID: generateUniqueId(),
    Gender: "Male",
    Married: "Yes",
    Dependents: 0,
    Education: "Graduate",
    ApplicantIncome: 1000,
    Property_Area: "Urban",
    Username: username,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e, isUpdate = false) => {
    e.preventDefault();

    formData["Dependents"] = formData["Dependents"].toString();

    let result;
    if (isUpdate) {
      // If it's an update, use the updateData function
      result = await updateData(config.coreApiUrl + `customers/`, formData);
    } else {
      // If it's a post, use the postData function
      result = await postData(config.coreApiUrl + "customers", formData);
    }

    if (result.success) {
      // Optionally, you can redirect or perform additional actions after successful submission
      await fetchData(config.coreApiUrl + "customers/" + formData.Username);
    } else {
      console.error("Error submitting form:", result.error);
    }
  };

  const handleDelete = async () => {
    const result = await deleteData(
      config.coreApiUrl + "customers/" + username
    );

    if (result.success) {
      // Data deleted successfully, you can handle the result.data if needed
      console.log("Data deleted successfully:", result.data);
    } else {
      // Error occurred during deletion, handle the error
      console.error("Error deleting data:", result.error);
    }
  };

  return (
    <>
      <main className="content">
        {data && (
          <>
            <p className="headingM">Welcome {username}</p>

            {data["Customer_ID"] ? (
              <>
                <UserProfile data={data} />
                <Button
                  colorScheme="blue"
                  margin="4"
                  width="5rem"
                  onClick={onOpen}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="blue"
                  width="5rem"
                  margin="4"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </>
            ) : (
              <div>
                <h1 className="headingL">Form</h1>
                <LoanUserForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isUpdate={false}
                />
              </div>
            )}
          </>
        )}
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Data</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <LoanUserForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isUpdate={true}
                  onClose={onClose}
                />
              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </>
      </main>
    </>
  );
};

export default Content;
