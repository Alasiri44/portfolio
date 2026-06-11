import { useState, useEffect } from 'react';

export default function useTypewriter(words: string[], speed = 80, pause = 1800): string {
  const [text, setText] = useState<string>("");
  const [wordIdx, setWordIdx] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord = words[wordIdx];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing phase
        setText(currentWord.slice(0, charIdx + 1));
        
        if (charIdx + 1 === currentWord.length) {
          // Finished typing word, wait before deleting
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        // Deleting phase
        setText(currentWord.slice(0, charIdx - 1));
        
        if (charIdx - 1 === 0) {
          // Finished deleting, move to next word
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}