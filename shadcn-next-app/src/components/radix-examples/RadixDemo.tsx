"use client"

import React from 'react'
import * as Toast from '@radix-ui/react-toast'
import * as Toolbar from '@radix-ui/react-toolbar'
import { Icons } from '../icons'

export default function RadixDemo() {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Radix UI 组件演示</h2>
      
      <section>
        <h3 className="text-xl font-medium mb-4">Toast 组件</h3>
        <Toast.Provider swipeDirection="right">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                setOpen(true);
              }, 100);
            }}
          >
            显示通知
          </button>

          <Toast.Root 
            open={open} 
            onOpenChange={setOpen}
            className="bg-background border rounded-md shadow-lg p-4 grid grid-cols-[auto_max-content] gap-4 items-center"
          >
            <Toast.Title className="text-foreground font-medium mb-1 col-span-1">
              通知标题
            </Toast.Title>
            <Toast.Description className="text-muted-foreground text-sm col-span-1">
              这是一个由Radix UI提供的通知示例。
            </Toast.Description>
            <Toast.Action asChild altText="关闭" className="col-span-1 row-span-2">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3">
                关闭
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-2 w-96 max-w-full m-0 list-none z-50" />
        </Toast.Provider>
      </section>

      <section>
        <h3 className="text-xl font-medium mb-4">Toolbar 组件</h3>
        <Toolbar.Root 
          aria-label="格式化选项"
          className="flex p-2 w-full min-w-max rounded-md bg-background border"
        >
          <Toolbar.Button 
            className="flex-none h-9 px-3 rounded-md font-bold text-foreground inline-flex items-center justify-center text-sm leading-none hover:bg-accent focus:relative focus:outline-none focus:ring-2 focus:ring-ring" 
            aria-label="粗体"
          >
            B
          </Toolbar.Button>
          <Toolbar.Button 
            className="flex-none h-9 px-3 rounded-md italic text-foreground inline-flex items-center justify-center text-sm leading-none hover:bg-accent focus:relative focus:outline-none focus:ring-2 focus:ring-ring" 
            aria-label="斜体"
          >
            I
          </Toolbar.Button>
          <Toolbar.Button 
            className="flex-none h-9 px-3 rounded-md underline text-foreground inline-flex items-center justify-center text-sm leading-none hover:bg-accent focus:relative focus:outline-none focus:ring-2 focus:ring-ring" 
            aria-label="下划线"
          >
            U
          </Toolbar.Button>
          <Toolbar.Separator className="w-[1px] bg-border mx-2" />
          <Toolbar.Button 
            className="flex-none h-9 px-3 rounded-md font-medium text-foreground inline-flex items-center justify-center text-sm leading-none hover:bg-accent focus:relative focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <Icons.image className="h-4 w-4 mr-2" />
            添加图片
          </Toolbar.Button>
          <Toolbar.Button 
            className="flex-none h-9 px-3 rounded-md font-medium text-foreground inline-flex items-center justify-center text-sm leading-none hover:bg-accent focus:relative focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <Icons.file className="h-4 w-4 mr-2" />
            添加文件
          </Toolbar.Button>
        </Toolbar.Root>
      </section>
    </div>
  );
} 