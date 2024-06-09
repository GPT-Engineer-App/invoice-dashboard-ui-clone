import { useState } from "react";
import { Container, VStack, HStack, Flex, Spacer, Text, Button, IconButton, Badge, Checkbox, Table, Thead, Tbody, Tr, Th, Td, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, FormControl, FormLabel, Input, useDisclosure, Box, Progress } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye, FaFilter, FaSort, FaCalendarAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(0);
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(true);
  const [eingegangenAm, setEingegangenAm] = useState(null);
  const [faelligAm, setFaelligAm] = useState(null);
  const [gebucht, setGebucht] = useState(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const openDrawer = () => {
    setEingegangenAm(null);
    setFaelligAm(null);
    setGebucht(null);
    setStep(0);
    onOpen();
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
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} onClick={openDrawer} mr={2} />
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

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            Kontierungstempel
            <Text fontSize="md" color="gray.600">Fill in the required fields</Text>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              {step === 0 && (
                <FormControl>
                  <FormLabel>eingegangen_am:</FormLabel>
                  <HStack>
                    <FaCalendarAlt color="#A0AEC0" />
                    <DatePicker
                      selected={eingegangenAm}
                      onChange={(date) => setEingegangenAm(date)}
                      placeholderText="Pick a date"
                      styles={customDatePickerStyles}
                    />
                  </HStack>
                </FormControl>
              )}
              {step === 1 && (
                <FormControl>
                  <FormLabel>Konto:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 2 && (
                <FormControl>
                  <FormLabel>Kontostelle:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 3 && (
                <FormControl>
                  <FormLabel>EP/VP:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 4 && (
                <FormControl>
                  <FormLabel>VB:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 5 && (
                <FormControl>
                  <FormLabel>Belegtext:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 6 && (
                <FormControl>
                  <FormLabel>Kommentar:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
              {step === 7 && (
                <FormControl>
                  <FormLabel>fällig_am:</FormLabel>
                  <HStack>
                    <FaCalendarAlt color="#A0AEC0" />
                    <DatePicker
                      selected={faelligAm}
                      onChange={(date) => setFaelligAm(date)}
                      placeholderText="Pick a date"
                      styles={customDatePickerStyles}
                    />
                  </HStack>
                </FormControl>
              )}
              {step === 8 && (
                <FormControl>
                  <FormLabel>gebucht:</FormLabel>
                  <HStack>
                    <FaCalendarAlt color="#A0AEC0" />
                    <DatePicker
                      selected={gebucht}
                      onChange={(date) => setGebucht(date)}
                      placeholderText="Pick a date"
                      styles={customDatePickerStyles}
                    />
                  </HStack>
                </FormControl>
              )}
              {step === 9 && (
                <FormControl>
                  <FormLabel>Ticket Number:</FormLabel>
                  <Input type="text" />
                </FormControl>
              )}
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            {step > 0 && (
              <Button leftIcon={<FaArrowLeft />} onClick={prevStep} mr={3}>
                Previous
              </Button>
            )}
            {step < 9 ? (
              <Button rightIcon={<FaArrowRight />} onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={onClose}>
                Save
              </Button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Index;