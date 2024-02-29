import { AdminSidebar, SiteHeader } from '@/components';
import { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SiteHeader />
      <main className="flex gap-4 h-screen w-screen p-4">
        <div className="fixed inset-y-0 z-50 pt-16 hidden h-screen w-80 flex-col md:flex">
          <AdminSidebar />
        </div>
        <div className="flex-1 md:pl-80 size-full justify-center items-center">
          {children}
        </div>
      </main>
    </>
  );
};
export default AdminLayout;
