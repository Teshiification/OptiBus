'use client';

import { useState } from "react";
import Dropdown from "../core/Dropdown/Dropdown";
import Image from "next/image";


const LandingPage = () => {
  const menuItemText=["Alle Verbindungen", "Fahrpläne/Haltestellen", "Lass Dich inspirieren"];
  const [item,setItem] = useState<string>(menuItemText[0])

  return (
    <div className="flex flex-col w-full h-full gap-3 bg-blue-900 ">
      <Dropdown items={menuItemText} text={"Plane deine Reise"} setSelectedItem={setItem}></Dropdown>
 
      <form
        onSubmit={() => {
          alert('Absenden');
        }}
        className="flex flex-col gap-4 w-10/12 h-32 bg-orange-900"
      >
        <div className="flex flex-row justify-between w-1/2 bg-pink-900">
          <label className="">
            Einfache Fahrt <input type="checkbox" />
          </label>
          <label className="">
            Hin- & Rückfahrt
            <input type="checkbox" />
          </label>
        </div>
        <div className="flex flex-row justify-between bg-green-800 gap-2">
          <div className="relative w-1/2">
            <label className="absolute text-black -mt-3 ml-4 bg-white">
              Von
            </label>
            <input
              className="w-full text-black border-2 border-black p-1"
              type="text"
            />
          </div>
          <div className="relative w-1/2">
            <label className="absolute text-black -mt-3 ml-4 bg-white">
              Nach
            </label>
            <input
              className="w-full text-black border-2 border-black p-1"
              type="text"
            />
          </div>
        </div>
        <button
          type="submit"
          className="transition ease-in-out delay-150 bg-blue-500 border-2 border-black w-28 h-20 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
        >
          {' '}
          Suchen
        </button>
      </form>
      <form
        onSubmit={() => {
          alert('Absenden');
        }}
        className="flex flex-col gap-4 w-10/12 h-24 bg-orange-600"
      >
        <div className="flex flex-row justify-between">
          <button
            className=" text-black flex flex-row gap-2 justify-center transition ease-in-out delay-150 bg-blue-500 border-2 border-black w-56 h-20 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
          >
          <Image
        alt={"ticketbild"}
        src={"/icons/ticket-icon.svg"}
        width={25}
        height={25}
        className="self-center"
      />
            <p className="self-center">Buchung verwalten </p>
          </button>
          <button
            className=" text-yellow-50 flex flex-row gap-2 w-72 h-20  justify-center transition ease-in-out delay-150 bg-blue-500 border-2 border-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
          >
          <Image
        alt={"timebild"}
        src={"/icons/time-icon.svg"}
        width={25}
        height={25}
        className="self-center"
      />
          
          <p className="self-center">Echtzeit-Fahrtverfolgung</p>
          </button>
          <button
            className=" text-yellow-50 flex flex-row gap-2 w-48 h-20  justify-center transition ease-in-out delay-150 bg-blue-500 border-2 border-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-700"
          >
          <Image
        alt={"helpbild"}
        src={"/icons/help-icon.svg"}
        width={25}
        height={25}
        className="self-center"
      />
            <p className="self-center">Hilfe</p> 
          </button>
        </div>
      </form>
      <div className="flex flex-col w-10/12 h-72 bg-yellow-800">
        <h1 className="flex flex-col justify-center w-80 h-10 font-bold self-center underline">
          Günstige Tickets mit OptiBus!
        </h1>
        <p className="flex flex-col font-sans">
          OptiBus bietet günstige Tickets für jeden. Durch unsere Begünstigungen
          von Schüler/innen werden Klassenfahrten und Busreisen günstiger.
        </p>
        <h1 className="flex flex-col justify-center w-80 h-10 font-bold self-center underline">
          Warum OptiBus wählen?
        </h1>
        <p className="flex flex-col font-sans">
          Mit OptiBus können Sie viele Busreisen unternehmen. Dabei achten wir
          sehr auf Komfort und Sicherheit. Zusätzlich haben wir eine große
          Auswahl an Busmodellen, welche an jede Reise angepasst wird. Auch
          Klassenfahrten können bei uns gebucht werden.
        </p>
      </div>
    </div>
  );
};
 
export default LandingPage;
 

