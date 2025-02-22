import GamePanel from '../GamePanel';

export default function ArenaLayout({ children }) {
  return (
    <div className="flex flex-col w-full h-screen">
      <GamePanel gameType="standard">{children}</GamePanel>
    </div>
  );
}
