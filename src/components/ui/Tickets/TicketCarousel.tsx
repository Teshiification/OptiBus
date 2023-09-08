import { Ticket } from '@/lib/database';
import TicketCard from './TicketCard';
import { FC } from 'react';

export interface TicketCarouselProps {
  tickets: Ticket[];
}

const TicketCarousel: FC<TicketCarouselProps> = (
  props: TicketCarouselProps
) => {
  const tickets = props.tickets;
  return (
    <div className="flex flex-col py-2">
      <div className="font-medium text-lg">Tickets</div>
      <div className="flex flex-col md:flex-row h-screen md:h-60 gap-4 overflow-x-auto overflow-y-hidden border-2 border-slate-500 p-2 rounded-md">
        {tickets?.map((ticket: Ticket, key: any) => {
          if (key < 3) return <TicketCard key={key} ticket={ticket} />;
        })}
      </div>
      <button className="w-full h-8 font-medium rounded-md">show all</button>
    </div>
  );
};

export default TicketCarousel;
