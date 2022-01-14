import { Box, BoxProps } from '@chakra-ui/react'
import { ReactElement } from 'react'

import styles from './styles.module.css'

interface PageContainerProps extends BoxProps {
  children: ReactElement
}

export function PageContainer({ children, mb }: PageContainerProps) {
  return (
    <Box className={styles.pageContainer} mb={mb}>
      {children}
    </Box>
  )
}