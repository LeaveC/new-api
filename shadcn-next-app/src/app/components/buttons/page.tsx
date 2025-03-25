import SiteLayout from "@/components/layout/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ButtonsPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">按钮组件</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            按钮用于触发操作或事件，如提交表单、打开对话框、取消操作或执行删除操作。
          </p>

          <Tabs defaultValue="examples" className="mb-12">
            <TabsList className="mb-4">
              <TabsTrigger value="examples">示例</TabsTrigger>
              <TabsTrigger value="variants">变体</TabsTrigger>
              <TabsTrigger value="sizes">尺寸</TabsTrigger>
              <TabsTrigger value="usage">用法</TabsTrigger>
            </TabsList>
            
            <TabsContent value="examples">
              <Card>
                <CardHeader>
                  <CardTitle>按钮示例</CardTitle>
                  <CardDescription>
                    基本的按钮组件，用于触发操作。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Button>默认按钮</Button>
                    <Button variant="secondary">次要按钮</Button>
                    <Button variant="destructive">危险按钮</Button>
                    <Button variant="outline">轮廓按钮</Button>
                    <Button variant="ghost">幽灵按钮</Button>
                    <Button variant="link">链接按钮</Button>
                  </div>
                  
                  <div className="rounded-md bg-gray-50 dark:bg-gray-900 p-4">
                    <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                      <code>{`<Button>默认按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="destructive">危险按钮</Button>
<Button variant="outline">轮廓按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="link">链接按钮</Button>`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="variants">
              <Card>
                <CardHeader>
                  <CardTitle>按钮变体</CardTitle>
                  <CardDescription>
                    不同类型的按钮样式，用于不同的场景。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">默认</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>默认按钮</Button>
                      <Button disabled>禁用状态</Button>
                      <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity">渐变按钮</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Secondary</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="secondary">次要按钮</Button>
                      <Button variant="secondary" disabled>禁用状态</Button>
                      <Button variant="secondary" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:opacity-90 transition-opacity">渐变按钮</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Destructive</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="destructive">危险按钮</Button>
                      <Button variant="destructive" disabled>禁用状态</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Outline</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline">轮廓按钮</Button>
                      <Button variant="outline" disabled>禁用状态</Button>
                      <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 hover:text-pink-600">
                        彩色轮廓
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Ghost</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="ghost">幽灵按钮</Button>
                      <Button variant="ghost" disabled>禁用状态</Button>
                      <Button variant="ghost" className="text-purple-500 hover:bg-purple-50 hover:text-purple-600">
                        彩色幽灵
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Link</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="link">链接按钮</Button>
                      <Button variant="link" disabled>禁用状态</Button>
                      <Button variant="link" className="text-blue-500">彩色链接</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sizes">
              <Card>
                <CardHeader>
                  <CardTitle>按钮尺寸</CardTitle>
                  <CardDescription>
                    不同大小的按钮，适应不同的UI场景。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-end flex-wrap gap-4">
                    <Button size="sm">小按钮</Button>
                    <Button>默认尺寸</Button>
                    <Button size="lg">大按钮</Button>
                    <Button size="icon" className="rounded-full">
                      <span className="text-xl">+</span>
                    </Button>
                  </div>
                  
                  <div className="rounded-md bg-gray-50 dark:bg-gray-900 p-4">
                    <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                      <code>{`<Button size="sm">小按钮</Button>
<Button>默认尺寸</Button>
<Button size="lg">大按钮</Button>
<Button size="icon" className="rounded-full">+</Button>`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage">
              <Card>
                <CardHeader>
                  <CardTitle>使用示例</CardTitle>
                  <CardDescription>
                    按钮在不同场景中的使用方式。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">表单提交</h3>
                    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
                      <div className="space-y-4 mb-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">用户名</label>
                          <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="输入用户名" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">密码</label>
                          <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="输入密码" />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity">
                          登录
                        </Button>
                        <Button variant="outline">取消</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">卡片操作</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>高级套餐</CardTitle>
                          <CardDescription>适合小型团队和专业人士</CardDescription>
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
                              <span>高级分析</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span>优先支持</span>
                            </li>
                          </ul>
                          <Button className="w-full">立即订阅</Button>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>企业套餐</CardTitle>
                          <CardDescription>适合大型团队和企业</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold mb-4">¥599<span className="text-sm font-normal text-gray-500">/月</span></div>
                          <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span>所有高级功能</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span>自定义报告</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span>专属客户经理</span>
                            </li>
                          </ul>
                          <Button variant="outline" className="w-full">联系销售</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SiteLayout>
  );
} 