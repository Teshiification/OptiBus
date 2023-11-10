"use client"
const LandingPage = () => {
  return (
  <div className="flex flex-col w-full h-full gap-3 bg-blue-900 ">
     <h1 className="flex flex-col w-124 h-10 self-center bg-slate-200 font-serif text-2xl text-black">Entdecken Sie neue Reiseziele mit OptiBus</h1>

     <form onSubmit={()=>{alert("Absenden")}} className="flex flex-col gap-4 w-10/12 h-24 bg-orange-900"> 
      <div className="flex flex-row justify-between w-1/2 bg-pink-900">
        <label className="">Einfache Fahrt <input type="checkbox"/></label>
        <label className="">Hin- & Rückfahrt<input type="checkbox"/></label>
      </div>
      <div className="flex flex-row justify-between bg-green-800 gap-2">
        <div className="relative w-1/2">
        <label className="absolute text-black -mt-3 ml-4 bg-white"> 
        Von
        </label>
        <input className="w-full text-black border-2 border-black p-1" type="text"/>
        </div>
        <div className="relative w-1/2">
        <label className="absolute text-black -mt-3 ml-4 bg-white">
          Nach
        </label>
        <input className="w-full text-black border-2 border-black p-1" type="text"/>
        </div>
      </div>
        <button type="submit" className="flex flex-row justify-center w-40 h-5 bg-black"> Buchung verwalten</button>
     </form>
     <div className="flex flex-col w-10/12 h-80 bg-yellow-800">
      <h1 className="flex flex-col justify-center w-80 h-10 font-bold self-center underline">Günstige Tickets mit OptiBus!</h1>
      <p className="flex flex-col font-sans">OptiBus bietet günstige Tickets für jedermann</p>
      <h1 className="flex flex-col justify-center w-80 h-10 font-bold self-center underline">Warum OptiBus wählen?</h1>
      <p className="flex flex-col font-sans">Viele Busreisen mit unterschiedlichen Busarten</p>
     </div>
 
  </div>)
};

export default LandingPage;
