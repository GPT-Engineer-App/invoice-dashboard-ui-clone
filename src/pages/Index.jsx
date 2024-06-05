import { Container, Table, Thead, Tbody, Tr, Th, Td, Checkbox, IconButton, Badge, VStack } from "@chakra-ui/react";
import { FaExclamationTriangle, FaTrash, FaEye } from "react-icons/fa";

const Index = () => {
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
              <Td><Badge colorScheme="blue">receive</Badge></Td>
              <Td><Badge colorScheme="red">Action Required</Badge></Td>
              <Td><Checkbox isChecked /></Td>
              <Td>
                <IconButton aria-label="Warning" icon={<FaExclamationTriangle />} mr={2} />
                <IconButton aria-label="Delete" icon={<FaTrash />} mr={2} />
                <IconButton aria-label="View" icon={<FaEye />} />
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
                <IconButton aria-label="View" icon={<FaEye />} />
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
                <IconButton aria-label="View" icon={<FaEye />} />
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
                <IconButton aria-label="View" icon={<FaEye />} />
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
                <IconButton aria-label="View" icon={<FaEye />} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;