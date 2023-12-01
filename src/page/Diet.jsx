import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import useContent from "../hooks/useContents";
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
import DietProfile from "../components/DietProfile";
import DietUserForm from "../components/DietUserForm";
import useDiet from "../hooks/useDiet";

function generateUniqueId() {
  // Generate a unique ID using the current timestamp and a random number
  const timestamp = new Date().getTime().toString(16);
  const random = Math.random().toString(16).slice(2); // Remove '0.' from the beginning

  // Concatenate the timestamp and random number
  const uniqueId = timestamp + random;

  return uniqueId;
}

const Diet = () => {
  const { data, username, postData, fetchData, updateData, deleteData, error } =
    useDiet();
  const { username: usernameP } = useContent();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    user_id: username,
    name: "Ahmad",
    weight_kg: 50,
    height_cm: 160,
    age: 20,
    gender: "Male",
    activity_level: "High",
    goal: "Maintenance",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e, isUpdate = false) => {
    e.preventDefault();

    let result;
    if (isUpdate) {
      // If it's an update, use the updateData function
      result = await updateData(config.dietApiUrl + `user/`, formData);
    } else {
      // If it's a post, use the postData function
      result = await postData(config.dietApiUrl + "user", formData);
    }

    if (result.success) {
      // Optionally, you can redirect or perform additional actions after successful submission
      await fetchData(config.dietApiUrl + "user/" + formData.Username);
    } else {
      console.error("Error submitting form:", result.error);
    }
  };

  const handleDelete = async () => {
    const result = await deleteData(config.dietApiUrl + "user/" + username);

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
        <p className="headingM">Welcome {usernameP}</p>

        {data && (
          <>
            {data["user_id"] ? (
              <>
                <DietProfile data={data} />
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
                <DietUserForm
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
                <DietUserForm
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

export default Diet;
