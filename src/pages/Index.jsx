import { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Flex, Spacer, Text, SimpleGrid } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye, FaFilter, FaSort } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customDatePickerStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "8px",
    borderColor: "#CBD5E0",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#3182CE",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#A0AEC0",
  }),
};

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW="container.xl" py={10}>
      
      <VStack spacing={4} align="stretch">
        <Flex w="100%" align="center" mb={4} mt={4}>
          <Text fontSize="2xl" fontWeight="bold">Invoice Dashboard</Text>
          <Spacer />
          <HStack spacing={4}>
            <Button leftIcon={<FaFilter />} colorScheme="teal" variant="solid">Filter</Button>
            <Button leftIcon={<FaSort />} colorScheme="teal" variant="solid">Sort</Button>
          </HStack>
        </Flex>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Sender</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>CEO-Check</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>John Doe</Td>
              <Td>€250.00</Td>
              <Td>
                <HStack spacing={2}>
                  <Badge colorScheme="blue">empfangen</Badge>
                  <Badge colorScheme="red">Action Required</Badge>
                </HStack>
              </Td>
              <Td><Checkbox isChecked={isFirstCheckboxChecked} onChange={() => setIsFirstCheckboxChecked(!isFirstCheckboxChecked)} /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} onClick={openModal} mr={2} />
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Jane Smith</Td>
              <Td>€150.00</Td>
              <Td><Badge colorScheme="green">übertragen</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Michael Johnson</Td>
              <Td>€350.00</Td>
              <Td><Badge colorScheme="yellow">kontiert</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Sarah Lee</Td>
              <Td>€450.00</Td>
              <Td><Badge colorScheme="green">übertragen</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>David Kim</Td>
              <Td>€550.00</Td>
              <Td><Badge colorScheme="green">übertragen</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay 
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
        <ModalContent 
          minW={{ base: "90%", md: "75%" }} 
          mx="auto" 
          my="auto"
        >
          <ModalHeader>Kontierungstempel</ModalHeader>
          <Text fontSize="md" color="gray.600">Fill in the required fields</Text>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl>
                <FormLabel>eingegangen_am:</FormLabel>
                <DatePicker
                  selected={new Date()}
                  onChange={(date) => console.log(date)}
                  placeholderText="Pick a date"
                  styles={customDatePickerStyles}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Konto:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Konstellee:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>EP/VP:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>VB:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Belegtext:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Kommentar:</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>fällig_am:</FormLabel>
                <DatePicker
                  selected={new Date()}
                  onChange={(date) => console.log(date)}
                  placeholderText="Pick a date"
                  styles={customDatePickerStyles}
                />
              </FormControl>
              <FormControl>
                <FormLabel>gebucht:</FormLabel>
                <DatePicker
                  selected={new Date()}
                  onChange={(date) => console.log(date)}
                  placeholderText="Pick a date"
                  styles={customDatePickerStyles}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Ticket Number:</FormLabel>
                <Input type="text" />
              </FormControl>
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Save
            </Button>
            <Button variant="ghost" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;