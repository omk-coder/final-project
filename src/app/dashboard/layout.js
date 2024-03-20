import Sidebar from './Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="flex flex-col w-full h-screen bg-gray-100">
        {/* Header -> Logo and brand name*/}
        <div className="flex items-center gap-2 px-10 py-3 ">
          <img src="/imgs/finalLogo.jpg"  className="h-10 text-white rounded"></img>
          <div className="text-black text-3xl font-manrope font-bold text-white">Chain-Checkmate</div>
        </div>
        <Sidebar>{children}</Sidebar>
      </div>
    </div>
  );
}
