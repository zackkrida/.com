import * as React from "react"
import styles from "./sidebar.module.css"

const Controls = () => {
  return (
    <div className={styles.Controls}>
      <div>Prev</div>
      <div>1 / 2</div>
      <div>Next</div>
    </div>
  )
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <header className={styles.Sidebar}>
      <div className={styles.SidebarContent}>{children}</div>
      <Controls />
    </header>
  )
}

declare interface SidebarProps {
  children: React.ReactNode
}
