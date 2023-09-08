import { Ticket } from '@/lib/database';
import { FC } from 'react';

export interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: FC<TicketCardProps> = (props: TicketCardProps) => {
  const ticket = props.ticket;
  return (
    <div className="group relative flex flex-col w-full max-h-60 md:w-60 rounded-md bg-slate-800 overflow-hidden font-semibold cursor-pointer select-none">
      <p className="absolute z-10 w-full bg-blue-500/80 text-slate-100 text-md font-medium font-serif px-2 py-1">
        {ticket.destination || 'Destination'}
      </p>

      <div className="absolute z-10 flex justify-between bottom-0 left-0 w-full">
        <p className="bg-green-500 rounded-tr-md p-1">{`💺${
          ticket.seat_number || '???'
        }`}</p>
        <p className="bg-yellow-500 rounded-tl-md p-1">
          {`🕙${ticket.departure_date || '??:??'}`}
        </p>
      </div>
      <img
        className="scale-100 group-hover:scale-105 w-full h-full object-cover transition ease-in-out duration-500"
        src={`${
          ticket.img ||
          'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg'
        }`}
      />
    </div>
  );
};

export default TicketCard;
