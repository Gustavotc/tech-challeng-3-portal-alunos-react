import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IPost } from "../../../../domain/interfaces/IPost";

type PostCardProps = {
  post: IPost;
  isDeleting: boolean;
  onClickEdit: () => void;
  onClickDelete: () => void;
};

export default function MyPostListCard({
  isDeleting,
  post,
  onClickEdit,
  onClickDelete,
}: PostCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const showConfirmDeletePost = () => {
    onOpen();
  };

  const handleDelete = () => {
    onClickDelete();
  };

  const formattedDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(post.date);

  return (
    <Card overflow="hidden" variant="elevated" mb="4" maxW="4xl" w={"100%"}>
      <CardBody>
        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          mb="4"
        >
          <HStack align="center">
            <Avatar size="xs" />

            <Text fontSize="md" color="gray.700">
              {post.author}
            </Text>
          </HStack>

          <Text
            flex={1}
            textAlign={{ base: "left", md: "right" }}
            fontSize={{ base: "sm", md: "md" }}
            color="gray.500"
          >
            {formattedDate}
          </Text>
        </Stack>

        <Heading size="md" color="gray.700" mb="2">
          {post.title}
        </Heading>

        <Text color="gray.700" noOfLines={3}>
          {post.description}
        </Text>
      </CardBody>

      <CardFooter>
        <IconButton
          aria-label="editar"
          icon={<EditIcon />}
          colorScheme="blue"
          onClick={onClickEdit}
          isDisabled={isDeleting}
        />
        <IconButton
          aria-label="Deletar"
          icon={<DeleteIcon />}
          colorScheme="red"
          ml={2}
          onClick={showConfirmDeletePost}
          isLoading={isDeleting}
        />
        <Tag marginLeft="auto">{post.category}</Tag>
      </CardFooter>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar deleção</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Deseja mesmo deletar o post? A ação não poderá ser revertida!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleDelete} colorScheme="red">
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
