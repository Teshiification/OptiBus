import Link from 'next/link';
import {
  AreaChart,
  Book,
  Bus,
  Coins,
  LucideIcon,
  Plane,
  ShieldBan,
  ShipWheel,
  User,
  User2,
  UserCog
} from 'lucide-react';

import { buttonVariants } from '@/components/core/button';
import { Key } from 'react';
import { ScrollArea } from '../scroll-area';
import { Separator } from '../separator';

type NavData = {
  name: string;
  link: string;
  icon: LucideIcon;
};

const navDatas: NavData[] = [
  {
    name: 'dashboard',
    link: '',
    icon: AreaChart
  },
  {
    name: 'bookings',
    link: 'booking',
    icon: Book
  },
  {
    name: 'buses',
    link: 'bus',
    icon: Bus
  },
  {
    name: 'drivers',
    link: 'driver',
    icon: ShipWheel
  },
  {
    name: 'employees',
    link: 'employee',
    icon: User
  },
  {
    name: 'payments',
    link: 'payment',
    icon: Coins
  },
  {
    name: 'trips',
    link: 'trip',
    icon: Plane
  },
  {
    name: 'customers',
    link: 'user',
    icon: UserCog
  }
];

const NavButton = ({ navData }: { navData: NavData }) => {
  return (
    <Link href={'/admin/' + navData.link} rel="noreferrer" prefetch>
      <div
        className={
          (buttonVariants({
            variant: 'ghost'
          }),
          'text-sm group flex p-3 my-2 w-full gap-4 justify-start font-medium cursor-pointer border border-transparent hover:shadow hover:bg-primary/20 hover:border hover:border-primary/40 rounded-lg transition hover:active:scale-95 scale-100 hover:shadow-primary/20')
        }
      >
        <div className="flex flex-1 items-center capitalize">
          <navData.icon className="size-5 mr-3 transition-all duration-500 group-hover:text-current text-primary" />
          <p>{(navData.name as string).toUpperCase()}</p>
        </div>
      </div>
    </Link>
  );
};

const AdminSidebar = () => {
  return (
    <div className="flex h-full flex-col items-center overflow-hidden border-r border-r-transparent shadow transition-all duration-300 ease-in-out hover:border-primary/30 hover:shadow hover:shadow-primary/30 dark:border-accent dark:hover:border-primary/30 dark:hover:shadow dark:hover:shadow-primary/30 md:m-4 md:rounded-lg md:border md:border-accent">
      <Link href="/admin" className="my-4 flex items-center">
        <div className="relative mr-4 flex gap-2">
          <div className="mt-1 flex size-8 rounded bg-primary p-1 align-middle">
            <ShieldBan className="size-6 self-center stroke-accent" />
          </div>
          <div className="flex text-3xl tracking-tighter">
            <h1 className="font-light">OptiBus</h1>
            <h1 className="font-bold text-primary">ADMIN</h1>
          </div>
        </div>
      </Link>
      <Separator />
      <div className="flex w-full flex-col overflow-y-auto">
        <div className="ml-8 mt-4 flex items-center space-x-2">
          <h4 className="text-sm text-muted-foreground">Module</h4>
        </div>
        <ScrollArea className="mb-4 px-4 tracking-widest">
          {navDatas.map((data: NavData, key: Key) => {
            return <NavButton key={key} navData={data} />;
          })}
        </ScrollArea>
      </div>
    </div>
  );
};

export { AdminSidebar };
