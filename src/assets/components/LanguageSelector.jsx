import { Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../../constants";
import { GrAnalytics } from "react-icons/gr";
const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = () => {
  return (
    <Box mb={4}>
      <Text mb={2} fontSize="lg">Language:</Text>
      <Menu>
        <MenuButton as={Button} >
          JavaScript
        </MenuButton>
        <MenuList>
            {
         languages.map(([language,version])=> (
            <MenuItem key={language}>{language}
            &nbsp;
            <Text as="span" color = "gray.600" fontSize="sm">
                {version}
            </Text>
            </MenuItem>
         ))
        }
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;