import React from 'react'
import RadixDemo from '@/components/radix-examples/RadixDemo'

export default function RadixPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Radix UI 原生组件</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          这个页面展示了一些直接使用Radix UI原语的组件示例，而不是通过shadcn/ui的封装。
          Radix UI提供了无样式但功能完整的可访问性组件，shadcn/ui在此基础上添加了样式和更好的开发体验。
        </p>
        
        <RadixDemo />
      </div>
    </div>
  )
} 