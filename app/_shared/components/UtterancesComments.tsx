"use client";

import { useEffect, useRef } from "react";

interface Props {
  repo: string; // ex: "username/repo"
}

export default function UtterancesComments({ repo }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", "title");
    script.setAttribute("theme", "github-light");
    ref.current?.appendChild(script);
  }, [repo]);

  return <div ref={ref} />;
}
