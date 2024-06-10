import { useState } from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack, HStack, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye, FaFilter, FaSort } from "react-icons/fa";

const Index = () => {
  const [isFirstCheckboxChecked, setIsFirstCheckboxChecked] = useState(true);

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
                  <Badge colorScheme="red">Action Required</Badge>
                </HStack>
              </Td>
              <Td><Checkbox isChecked={isFirstCheckboxChecked} onChange={() => setIsFirstCheckboxChecked(!isFirstCheckboxChecked)} /></Td>
              <Td>
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} mr={2} />
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} mr={2} />
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
    </Container>
  );
};

export default Index;