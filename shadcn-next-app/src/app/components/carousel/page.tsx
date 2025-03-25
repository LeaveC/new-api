"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 text-transparent bg-clip-text mb-4">
          轮播组件展示
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          这个页面展示了Shadcn UI的轮播组件的各种用法和样式。轮播组件支持触摸滑动、键盘导航和自定义插件。
        </p>
      </div>

      <div className="space-y-12">
        {/* 基础轮播 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">基础轮播</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 h-60 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-950 dark:to-indigo-900">
                        <span className="text-4xl font-bold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </section>

        {/* 多项轮播 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">多项轮播</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 h-32 bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-950 dark:to-rose-900">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </section>

        {/* 图片轮播 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">图片轮播</h2>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {[
                "https://images.unsplash.com/photo-1524781289445-ddf8f5695861",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                "https://images.unsplash.com/photo-1448375240586-882707db888b",
                "https://images.unsplash.com/photo-1511300636408-a63a89df3482",
                "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3"
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0 overflow-hidden h-60">
                        <img 
                          src={`${src}?w=800&auto=format&fit=crop&q=60`} 
                          alt={`风景图片 ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </section>
      </div>
    </div>
  )
} 