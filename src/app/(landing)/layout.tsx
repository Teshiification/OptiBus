import { AdminSidebar } from '@/components';
import LandingNav from '@/components/ui/landing-nav';
import { ReactNode } from 'react';

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col gap-4 h-screen w-screen p-4">
      <div className="hidden w-screen flex-col md:flex">
        <LandingNav />
      </div>
      <div className="flex-1 size-full justify-center items-center">
        {children}
      </div>
    </main>
  );
};
export default LandingLayout;
