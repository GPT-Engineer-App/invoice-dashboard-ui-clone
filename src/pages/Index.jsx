import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
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
            <Tr>
              <Td>1</Td>
              <Td>John Doe</Td>
              <Td>€250.00</Td>
              <Td>
                <HStack spacing={2}>
                  <Badge colorScheme="blue">receive</Badge>
                  <Badge colorScheme="red">Action Required</Badge>
                </HStack>
              </Td>
              <Td><Checkbox isChecked /></Td>
              <Td>
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} mr={2} onClick={openModal} />
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} onClick={openDrawer} />
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Jane Smith</Td>
              <Td>€150.00</Td>
              <Td><Badge colorScheme="green">paid</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} onClick={openDrawer} />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Michael Johnson</Td>
              <Td>€350.00</Td>
              <Td><Badge colorScheme="yellow">pending</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} onClick={openDrawer} />
              </Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>Sarah Lee</Td>
              <Td>€450.00</Td>
              <Td><Badge colorScheme="green">paid</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} onClick={openDrawer} />
              </Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>David Kim</Td>
              <Td>€550.00</Td>
              <Td><Badge colorScheme="green">paid</Badge></Td>
              <Td><Checkbox /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} onClick={openDrawer} />
              </Td>
            </Tr>
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

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Slide Panel</DrawerHeader>
          <DrawerBody>
            {/* Content for the slide panel */}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeDrawer}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Index;