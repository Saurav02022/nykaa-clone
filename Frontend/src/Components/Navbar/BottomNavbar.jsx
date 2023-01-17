import { Box, Flex } from "@chakra-ui/react";

const Links = ["Makeup", "Skin", "Hair", "Bath & Body", "Natural"];

const links = [
  "Mom & Baby",
  "Health & Wellness",
  "Men",
  "Fragrance",
  "Pop Ups",
];

const NavLink = ({ children }) => (
  <Flex
    justifyContent="space-around"
    width={{ lg: "80%", "2xl": "80%", base: "100%", sm: "100%" }}
    margin="auto"
    textAlign={"center"}
    fontSize="14px"
        fontFamily={"Inter,sans-serif"}
        color="grey"
  >
    {children}
  </Flex>
);

const BottomNavbar = () => {
  return (
    <Box borderBottom={"1px solid black"} paddingY="3">
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          "2xl": "row",
        }}
        width="75%"
        margin={"auto"}
      >
        <NavLink>
          {Links.map((link) => (
            <Flex
              key={link}
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#fb94bc",
              }}
            >
              {link}
            </Flex>
          ))}
        </NavLink>
        <NavLink>
          {links.map((link) => (
            <Flex
              key={link}
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#fb94bc",
              }}
            >
              {link}
            </Flex>
          ))}
        </NavLink>
      </Flex>
    </Box>
  );
};
export default BottomNavbar;
