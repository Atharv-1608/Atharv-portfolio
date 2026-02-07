import { TerminalSection } from "./TerminalSection";

export const Landing = () => {
  return (
    <div className="min-h-screen">
      <div className="font-display font-extrabold pl-5 pt-5 text-xl md:text-2xl">
        AD <span className="text-[#e8743f]">.</span>
      </div>

      <div className="flex flex-col justify-center items-center pt-11 md:pt-16 px-4 w-full">
        <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-display text-center">
          Atharv
        </div>
        <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-display text-[#e8743f] text-center">
          Deorukhkar
        </div>

        <div className="pt-3 font-mono text-base md:text-lg text-center px-4">
          Engineer surrounded by 0's and 1's
        </div>

        <TerminalSection />
      </div>
    </div>
  );
};