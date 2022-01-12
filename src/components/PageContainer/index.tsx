import { ReactElement } from 'react'

import styles from './styles.module.css'

type PageContainerProps = {
  children: ReactElement
}

export function PageContainer({ children }: PageContainerProps) {
  return (
      <div className={styles.pageContainer}>
        {children}
      </div>
  )
}