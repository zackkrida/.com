import * as React from "react"
import Link from "next/link"
import classNames from "./layout.module.css"
import { Sidebar } from "../sidebar"
import { AppColors } from "../../types"
import { Stack } from "../Stack"

export const Layout = ({
  children,
  sidebarChildren,
  accent,
  subtitle,
  title,
}: LayoutProps) => {
  const style = {
    ["--color-subtitle"]: `var(${accent})`,
  } as React.CSSProperties

  return (
    <div className={classNames.App}>
      <Sidebar>
        <Stack>
          <div>
            {subtitle && (
              <h2 style={style} className={classNames.AppSubtitle}>
                {subtitle}
              </h2>
            )}
            {title && <h1>{title}</h1>}
          </div>
          {sidebarChildren}
        </Stack>
      </Sidebar>
      <main className={classNames.AppContent}>{children}</main>
    </div>
  )
}

declare interface LayoutProps {
  accent: AppColors[keyof AppColors]
  subtitle?: string
  title: string
  sidebarChildren: React.ReactNode
  children: React.ReactNode
}
