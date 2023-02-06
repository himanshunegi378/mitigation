const { Link, useColorModeValue } = require("@chakra-ui/react");
import NextLink from "next/link";
export const NavLink = ({ children, ...props }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    {...props}
  >
    {children}
  </Link>
);
