import { Box } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Box
      position="absolute"
      zIndex="-1"
      top="6.25rem"
      h="31.25rem"
      w="calc(100vw - 17px)"
      px="0"

      background="url(https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center bottom"
      backgroundAttachment="fixed"
    />
  )
}