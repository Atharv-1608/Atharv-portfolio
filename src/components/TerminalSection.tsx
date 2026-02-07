import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

export const TerminalSection = () => {
  return (
    <div className="pt-9 w-full px-4 md:px-6 lg:px-8">
      <Terminal className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg mx-auto">
        <TypingAnimation className="text-xs sm:text-sm wrap-break-words">
          &gt; whoami
        </TypingAnimation>
        <AnimatedSpan className="text-green-500 text-xs sm:text-sm wrap-break-words">
          ✔ Developer based in Mumbai, India.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500 text-xs sm:text-sm wrap-break-words">
          ✔ Building at the intersection of Web2 and Web3.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500 text-xs sm:text-sm wrap-break-words">
          ✔ Writes code that sometimes works first try.
        </AnimatedSpan>
        <TypingAnimation className="text-blue-500 text-xs sm:text-sm wrap-break-words">
          If you're building cool things, we should talk
        </TypingAnimation>
      </Terminal>
    </div>
  );
};