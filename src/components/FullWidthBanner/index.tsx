import { Box, BoxProps } from "@chakra-ui/react";

interface FullWidthBannerProps extends BoxProps {
  backgroundImageUrl: string
}

export function FullWidthBanner({
  backgroundImageUrl, backgroundPosition, top, h
}: FullWidthBannerProps) {
  return (
    <Box
      position="absolute"
      zIndex="-1"
      top={top}
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