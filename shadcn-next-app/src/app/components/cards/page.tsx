import SiteLayout from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function CardsPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">卡片组件</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            卡片是一个UI容器，用于组织相关内容和操作，为用户提供一致且可预测的布局方式。
          </p>

          <Tabs defaultValue="examples" className="mb-12">
            <TabsList className="mb-4">
              <TabsTrigger value="examples">示例</TabsTrigger>
              <TabsTrigger value="variants">变体</TabsTrigger>
              <TabsTrigger value="usage">用法</TabsTrigger>
            </TabsList>
            
            <TabsContent value="examples">
              <Card>
                <CardHeader>
                  <CardTitle>基本卡片</CardTitle>
                  <CardDescription>
                    最简单的卡片布局，包含标题、内容和底部操作。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>卡片内容区域可以包含文本、图像、列表和其他UI元素。</p>
                </CardContent>
                <CardFooter>
                  <Button>操作按钮</Button>
                </CardFooter>
              </Card>
              
              <div className="mt-8 rounded-md bg-gray-50 dark:bg-gray-900 p-4">
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                  <code>{`<Card>
  <CardHeader>
    <CardTitle>基本卡片</CardTitle>
    <CardDescription>卡片描述文本</CardDescription>
  </CardHeader>
  <CardContent>
    <p>卡片内容区域</p>
  </CardContent>
  <CardFooter>
    <Button>操作按钮</Button>
  </CardFooter>
</Card>`}</code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="variants">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">渐变边框卡片</h3>
                  <div className="relative p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                    <Card className="rounded-[calc(0.5rem-1px)]">
                      <CardHeader>
                        <CardTitle>渐变边框</CardTitle>
                        <CardDescription>使用渐变色作为卡片边框</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>通过使用相对定位和padding技巧创建漂亮的渐变边框效果。</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
                          查看详情
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">阴影悬浮卡片</h3>
                  <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>悬浮效果</CardTitle>
                      <CardDescription>鼠标悬浮时带有动画效果</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>当用户与卡片交互时，提供微妙的反馈以增强用户体验。</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">了解更多</Button>
                    </CardFooter>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">渐变顶部卡片</h3>
                  <Card className="overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"></div>
                    <CardHeader>
                      <CardTitle>渐变顶部</CardTitle>
                      <CardDescription>带有渐变色顶部的卡片</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>通过添加渐变条纹，可以使卡片更具视觉吸引力，并轻松区分不同类型的卡片。</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="secondary">查看详情</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="usage">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-medium mb-4">产品卡片</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">产品图片</span>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>高级蓝牙耳机</CardTitle>
                            <CardDescription>无线降噪技术</CardDescription>
                          </div>
                          <Badge className="bg-green-500 hover:bg-green-600">新品</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold mb-4">¥899</div>
                        <div className="flex items-center space-x-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-500">(121)</span>
                        </div>
                        <ul className="space-y-1 text-sm mb-4">
                          <li>• 高清音质，深沉低音</li>
                          <li>• 主动降噪技术</li>
                          <li>• 长达30小时续航时间</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">加入购物车</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="overflow-hidden">
                      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">产品图片</span>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>智能手表</CardTitle>
                            <CardDescription>健康监测与运动追踪</CardDescription>
                          </div>
                          <Badge className="bg-blue-500 hover:bg-blue-600">热销</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold mb-4">
                          <span className="line-through text-gray-400 text-lg mr-2">¥1299</span>
                          ¥999
                        </div>
                        <div className="flex items-center space-x-1 mb-4">
                          {[1, 2, 3, 4].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 text-yellow-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-gray-300"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-500">(89)</span>
                        </div>
                        <ul className="space-y-1 text-sm mb-4">
                          <li>• 24小时心率监测</li>
                          <li>• GPS定位与运动追踪</li>
                          <li>• 超长续航，防水设计</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">加入购物车</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">价格方案卡片</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>基础版</CardTitle>
                        <CardDescription>适合个人使用</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-4">¥99<span className="text-sm font-normal text-gray-500">/月</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>基本功能</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>5GB存储空间</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>电子邮件支持</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">选择方案</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card className="border-blue-500 shadow-lg relative">
                      <div className="absolute top-0 right-0 -mt-2 -mr-2">
                        <Badge className="bg-blue-500">推荐</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>专业版</CardTitle>
                        <CardDescription>适合专业人士和小团队</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-4">¥199<span className="text-sm font-normal text-gray-500">/月</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>所有基础功能</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>50GB存储空间</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>优先支持</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>高级分析</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">选择方案</Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>企业版</CardTitle>
                        <CardDescription>适合大型团队和企业</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold mb-4">¥599<span className="text-sm font-normal text-gray-500">/月</span></div>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>所有专业版功能</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>无限存储空间</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>24/7专属支持</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>自定义部署</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            <span>高级安全功能</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">选择方案</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SiteLayout>
  );
} 