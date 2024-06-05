import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={4} align="stretch">
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
            {[...Array(5)].map((_, index) => (
              <Tr key={index} bg={index % 2 === 0 ? useColorModeValue("white", "gray.50") : useColorModeValue("gray.100", "gray.700")}>
                <Td>{index + 1}</Td>
                <Td>{["John Doe", "Jane Smith", "Michael Johnson", "Sarah Lee", "David Kim"][index]}</Td>
                <Td>{["€250.00", "€150.00", "€350.00", "€450.00", "€550.00"][index]}</Td>
                <Td>
                  <HStack spacing={2}>
                    {index === 0 && <Badge colorScheme="blue">receive</Badge>}
                    {index === 0 && <Badge colorScheme="red">Action Required</Badge>}
                    {index === 1 && <Badge colorScheme="green">paid</Badge>}
                    {index === 2 && <Badge colorScheme="yellow">pending</Badge>}
                    {index > 2 && <Badge colorScheme="green">paid</Badge>}
                  </HStack>
                </Td>
                <Td><Checkbox isChecked={index === 0} /></Td>
                <Td>
                  {index === 0 && <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} mr={2} onClick={openModal} />}
                  <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                  <IconButton aria-label="View" icon={<FaEye />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kontierungstempel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Datum:</FormLabel>
              <Input type="text" />
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
              <FormLabel>fällig am:</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>gebucht am:</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Ticket Number:</FormLabel>
              <Input type="text" />
            </FormControl>
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