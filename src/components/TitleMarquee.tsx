"use client";

import { useEffect } from "react";

// 브라우저 탭 title은 CSS로 애니메이션할 수 없어서, document.title을
// 일정 간격으로 잘라 보여주며 왼쪽으로 흐르는 것처럼 보이게 합니다.
const FULL_TITLE = "Hyunjin Cho | University of Iowa | Computer Science";
const SEPARATOR = "   •   ";
const WINDOW_SIZE = 32;
const STEP_MS = 300;

export function TitleMarquee() {
  useEffect(() => {
    const loop = FULL_TITLE + SEPARATOR;
    const doubled = loop + loop;
    let offset = 0;

    const tick = () => {
      document.title = doubled.slice(offset, offset + WINDOW_SIZE);
      offset = (offset + 1) % loop.length;
    };

    tick();
    const id = window.setInterval(tick, STEP_MS);

    return () => {
      window.clearInterval(id);
      document.title = FULL_TITLE;
    };
  }, []);

  return null;
}
