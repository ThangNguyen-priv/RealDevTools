import { Outlet } from 'react-router-dom';
import { SidebarLayout } from '../SideBarLayout';
import { HeaderLayout } from '../HeaderLayout';
import ChatBotLayout from '../ChatBotLayout/ChatBotLayout';


export default function MainLayout() {
  return (
    <div className="h-screen relative">
      <SidebarLayout />
      <HeaderLayout />

      <main className="absolute top-16 left-0 md:left-64 right-0 bottom-0 overflow-auto p-4">
        <div className="h-full p-2">
          <Outlet />
        </div>
      </main>
      <div className='fixed bottom-5 right-5 z-50'>
        <ChatBotLayout />
      </div>
    </div>
  )
}