import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">页面未找到</h2>
      <p className="text-muted-foreground max-w-lg mb-8">
        抱歉，您访问的页面不存在或已被移动。请检查URL是否正确，或尝试通过以下按钮返回主页。
      </p>
      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link href="/">返回首页</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/components/buttons">浏览组件</Link>
        </Button>
      </div>
    </div>
  )
} 