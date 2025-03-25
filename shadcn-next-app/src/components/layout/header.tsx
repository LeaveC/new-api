"use client"

import React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Shadcn UI
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/components/buttons"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              按钮
            </Link>
            <Link
              href="/components/feedback"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              反馈
            </Link>
            <Link
              href="/components/forms"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              表单
            </Link>
            <Link
              href="/components/dialogs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              对话框
            </Link>
            <Link
              href="/components/data-display"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              数据展示
            </Link>
            <Link
              href="/components/navigation"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              导航
            </Link>
            <Link
              href="/components/selection"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              选择器
            </Link>
            <Link
              href="/radix"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Radix
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* 如果需要搜索框,可以在这里添加 */}
          </div>
          <nav className="flex items-center">
            <Link href="https://github.com/shadcn/ui" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="mr-2">
                <Icons.pizza className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
} 