import React from "react";
import Navbar from "./navbar";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-6 border-t bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Shadcn UI 组件展示</h3>
              <p className="text-sm text-white/80">
                这是一个展示所有Shadcn UI组件的网站，供您探索和学习如何使用这些美观且功能强大的组件。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">链接</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://ui.shadcn.com" className="text-white/80 hover:text-white transition-colors">官方文档</a></li>
                <li><a href="https://github.com/shadcn-ui/ui" className="text-white/80 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="/components" className="text-white/80 hover:text-white transition-colors">组件</a></li>
                <li><a href="/docs" className="text-white/80 hover:text-white transition-colors">文档</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">订阅</h3>
              <p className="text-sm text-white/80 mb-2">
                订阅我们的通讯，获取最新更新和新组件信息。
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="您的邮箱" 
                  className="text-sm px-3 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-white/50 flex-1"
                />
                <button className="px-4 py-2 bg-white text-pink-600 font-medium rounded-md hover:bg-white/90 transition-colors text-sm">
                  订阅
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Shadcn UI 组件展示. 版权所有.
          </div>
        </div>
      </footer>
    </div>
  );
} 