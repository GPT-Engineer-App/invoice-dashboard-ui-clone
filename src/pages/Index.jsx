import { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Flex, Spacer, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, InputGroup, InputLeftElement, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye, FaFilter, FaSort, FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Index = () => {
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(true);
  const [eingegangenAm, setEingegangenAm] = useState(null);
  const [faelligAm, setFaelligAm] = useState(null);
  const [gebucht, setGebucht] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={4} align="stretch">
        <Flex w="100%" align="center" mb={4} mt={4}>
          <Text fontSize="2xl" fontWeight="bold">Invoice Dashboard</Text>
          <Spacer />
          
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
                  <Badge colorScheme="red" cursor="pointer" onClick={onOpen}>Action Required</Badge>
                </HStack>
              </Td>
              <Td><Checkbox isChecked={isFirstCheckboxChecked} onChange={() => setIsFirstCheckboxChecked(!isFirstCheckboxChecked)} /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} mr={2} onClick={onOpen} />
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
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent minH="100vh" w="33vw">
            <DrawerCloseButton />
            <DrawerHeader>Action Required</DrawerHeader>
            <DrawerBody>
              <FormControl id="eingegangen_am" mb={4}>
                <FormLabel>Eingegangen am</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                  <DatePicker
                    selected={eingegangenAm}
                    onChange={(date) => setEingegangenAm(date)}
                    placeholderText="Pick a date"
                    customInput={
                      <Flex align="center">
                        <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                        <Input />
                      </Flex>
                    }
                    dateFormat="dd/MM/yyyy"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="faellig_am" mb={4}>
                <FormLabel>Fällig am</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                  <DatePicker
                    selected={faelligAm}
                    onChange={(date) => setFaelligAm(date)}
                    placeholderText="Pick a date"
                    customInput={
                      <Flex align="center">
                        <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                        <Input />
                      </Flex>
                    }
                    dateFormat="dd/MM/yyyy"
                  />
                </InputGroup>
              </FormControl>
              <FormControl id="gebucht" mb={4}>
                <FormLabel>Gebucht</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                  <DatePicker
                    selected={gebucht}
                    onChange={(date) => setGebucht(date)}
                    placeholderText="Pick a date"
                    customInput={
                      <Flex align="center">
                        <InputLeftElement pointerEvents="none" children={<FaCalendarAlt color="gray.300" />} />
                        <Input />
                      </Flex>
                    }
                    dateFormat="dd/MM/yyyy"
                  />
                </InputGroup>
              </FormControl>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </VStack>
    </Container>
  );
};

export default Index;