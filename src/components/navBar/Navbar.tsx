import { Button, HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/LogoHorizontal.png";
import { useAuthContext } from "../../contexts/AuthContext";
import User from "../../features/auth/domain/models/User";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { user, updateAuthUser } = useAuthContext();

  const isTeacher = User.isTeacher(user);

  const handleSignOut = () => {
    updateAuthUser(null);
  };

  return (
    <HStack
      position="fixed"
      left={0}
      w="full"
      zIndex={100}
      h={"55px"}
      paddingX={{ base: "16px", sm: "40px" }}
      paddingY="8px"
      overflow="hidden"
      bgColor="#FFC832"
    >
      <Link to={"/posts"}>
        <Image alt="Logo" src={logo} width={{ base: "150px", sm: "230px" }} />
      </Link>

      {user && <Link to={"/posts"}>Postagens</Link>}

      {isTeacher && <Link to={"/posts/admin"}>Meus posts</Link>}

      {user && (
        <Button
          variant="ghost"
          colorScheme="red"
          ml="auto"
          onClick={handleSignOut}
        >
          Sair
        </Button>
      )}
    </HStack>
  );
}
