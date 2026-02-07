import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

export const TerminalSection = () => {
  return (
    <div className="pt-9 w-full px-4 md:px-6 lg:px-8">
      <Terminal className="w-full max-w-xl mx-auto text-sm md:text-base">
        <TypingAnimation>&gt; whoami</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          ✔ Developer based in Mumbai, India.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Building at the intersection of Web2 and Web3.
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          ✔ Writes code that sometimes works first try.
        </AnimatedSpan>
        <TypingAnimation className="text-blue-500">
          If you're building cool things, we should talk
        </TypingAnimation>
      </Terminal>
    </div>
  );
};