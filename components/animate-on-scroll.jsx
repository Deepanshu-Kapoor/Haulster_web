"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AnimateOnScroll({
  children,
  animation = "animate-fade-up",
  delay = "",
  className = "",
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `${animation} ${delay}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}
