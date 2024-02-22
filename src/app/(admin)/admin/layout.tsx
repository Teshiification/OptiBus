import { AdminSidebar } from '@/components';
import { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col overflow-hidden h-screen w-screen">
      <div className="fixed inset-y-0 z-50 hidden h-screen w-80 flex-col md:flex">
        <AdminSidebar />
      </div>
      <div className="flex-1 md:pl-80 size-full justify-center items-center">
        {children}
      </div>
    </main>
  );
};
export default AdminLayout;
