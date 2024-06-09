import { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, DrawerBody, DrawerFooter, Button, FormControl, FormLabel, Input, Flex, Spacer, Text, SimpleGrid, Box, useDisclosure, Progress } from "@chakra-ui/react";
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

  const steps = [
    { label: "eingegangen_am", type: "date", value: eingegangenAm, setValue: setEingegangenAm },
    { label: "Konto", type: "text" },
    { label: "Kontostelle", type: "text" },
    { label: "EP/VP", type: "text" },
    { label: "VB", type: "text" },
    { label: "Belegtext", type: "text" },
    { label: "Kommentar", type: "text" },
    { label: "fällig_am", type: "date", value: faelligAm, setValue: setFaelligAm },
    { label: "gebucht", type: "date", value: gebucht, setValue: setGebucht },
    { label: "Ticket Number", type: "text" },
  ];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const openDrawer = () => {
    setEingegangenAm(null);
    setFaelligAm(null);
    setGebucht(null);
    setStep(0);
    onOpen();
  };

  const closeDrawer = () => {
    onClose();
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

      <Drawer isOpen={isOpen} placement="right" onClose={closeDrawer} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Kontierungstempel</DrawerHeader>
          <DrawerBody>
            <Progress value={(step + 1) * (100 / steps.length)} mb={4} />
            {steps[step].type === "date" ? (
              <FormControl>
                <FormLabel>{steps[step].label}:</FormLabel>
                <HStack>
                  <FaCalendarAlt color="#A0AEC0" />
                  <DatePicker
                    selected={steps[step].value}
                    onChange={(date) => steps[step].setValue(date)}
                    placeholderText="Pick a date"
                    styles={customDatePickerStyles}
                  />
                </HStack>
              </FormControl>
            ) : (
              <FormControl>
                <FormLabel>{steps[step].label}:</FormLabel>
                <Input type="text" />
              </FormControl>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={prevStep} isDisabled={step === 0}>
              <FaArrowLeft />
            </Button>
            <Button colorScheme="blue" onClick={nextStep} isDisabled={step === steps.length - 1}>
              <FaArrowRight />
            </Button>
            <Button variant="ghost" onClick={closeDrawer} ml={3}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default Index;