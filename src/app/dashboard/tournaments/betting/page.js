'use client';
import styles from '@/app/dashboard/dashboard.module.css';
import GameCard from '@/app/dashboard/GameCard';

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full px-14 py-10 font-space-grotesk space-y-6  bg-[#100303]">
      {/* Heading */}
      <div className="text-3xl font-500 underline decoration-sky-500 underline-offset-8 ">Tournaments</div>
      {/* Game type */}

      <div className="flex flex-col space-y-5 z-10">
        <div className="text-xl font-300">Start your game ...</div>
        <div className="div flex flex-col md:flex-row w-full md:justify-between gap-5">
          {/* Card1 */}
          <GameCard
          img="chesss.png"
            href="/dashboard/arena/betting"
            className={styles.card1Bg}
            btnName="Stake Now"
            cardTitle="Customs for Beginners"
          >
            <div className="text-center text-xs text-ghostwhite max-w-[10rem] mx-[2.5rem]">
              Very Simple Match Whoever Wins get 10$
            </div>
          </GameCard>

          {/* Card2 */}
          <GameCard
          img="chesss2.png"
            href="/dashboard/arena/betting"
            className={styles.card2Bg}
            btnName="Stake Now"
            cardTitle="Customs for Intermediate"
          >
            <div className="text-center text-xs text-ghostwhite max-w-[10rem] mx-[2.5rem]">
              Each Player stake 10$, Winner Earns 20$
            </div>
          </GameCard>

          {/* Card3 */}
          <GameCard
          img="chessIcon.png"
            href="/dashboard/arena/betting"
            className={styles.card3Bg}
            btnName="Stake Now"
            cardTitle="Custom for Advanced"
          >
            <div className="text-center text-xs text-ghostwhite max-w-[10rem] mx-[2.5rem]">
              Each Player stakes 25$, Winner Earns 50$
            </div>
          </GameCard>
        </div>
      </div>

      <div className="w-[20rem] rounded-xl bg-chessboard-bg bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-60">
          <div className="text-2xl font-bold px-10 ">Make Your Ground</div>
          <div className="text-xs text-ghostwhite font-500">Your Game, Your Terms</div>
          <div className="flex items-center-justify-center px-4 py-2 mt-8 mb-5 bg-whitesmoke rounded-md text-black font-bold hover:bg-slate-700 hover:text-whitesmoke">
            Create One
          </div>
        </div>
      </div>

    
    </div>
  );
}
