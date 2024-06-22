import React from "react";

function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}) {
  return (
    <div
      className={
        ("relative flex flex-col h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        className)
      }
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={
            (` absolute inset-0 pointer-events-none opacity-50 will-change-transform bg-[repeating-linear-gradient(100deg,#ffdee2_0%,#ffdee2_7%,transparent_10%,transparent_12%,#ffdee2_16%),repeating-linear-gradient(100deg,#d3e4fd_10%,#edf0fe_15%,#f4f9ff_20%,#f3f0ff_25%,#eff6ff_30%)] dark:bg-[repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%),repeating-linear-gradient(100deg,#d3e4fd_10%,#edf0fe_15%,# _20%,#f3f0ff_25%,#eff6ff_30%)] bg-[length:300%_200%] bg-center filter blur-lg invert dark:invert-0 `,
            showRadialGradient &&
              ` mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%); `)
          }
        />{" "}
        <div
          className={` absolute inset-0 after:content-[""] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(100deg,#ffdee2_0%,#ffdee2_7%,transparent_10%,transparent_12%,#ffdee2_16%),repeating-linear-gradient(100deg,#d3e4fd_10%,#edf0fe_15%,#f4f9ff_20%,#f3f0ff_25%,#eff6ff_30%)] dark:after:bg-[repeating-linear-gradient(100deg,#000000_0%,#000000_7%,transparent_10%,transparent_12%,#000000_16%),repeating-linear-gradient(100deg,#d3e4fd_10%,#edf0fe_15%,#f4f9ff_20%,#f3f0ff_25%,#eff6ff_30%)] after:bg-[length:400%_400%] after:animate-aurora after:bg-fixed after:mix-blend-lighten `}
        />
      </div>
      {children}
    </div>
  );
}
export default AuroraBackground;
