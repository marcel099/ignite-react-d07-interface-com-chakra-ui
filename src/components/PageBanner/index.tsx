import { Box, BoxProps } from "@chakra-ui/react";

interface PageBannerProps extends BoxProps {
  backgroundImageUrl: string
}

export function PageBanner({
  backgroundImageUrl, backgroundPosition, top, h
}: PageBannerProps) {
  return (
    <Box
      position="absolute"
      zIndex="-1"
      top={["3.125rem", null, "6.25rem"]}
      h={h}
      w="100%"
      px="0"

      background={`url(${backgroundImageUrl})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition={backgroundPosition}
      backgroundAttachment="fixed"
    />
  )
}