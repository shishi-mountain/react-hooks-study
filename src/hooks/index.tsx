import { useEffect, useRef } from "react";

export const useAutoResize = (value: string) => {
  // refの作成
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.height = "auto";

    // element.scrollHeightを代入することでtextareaの高さを拡張
    element.style.height = `${element.scrollHeight}px`;
  }, [value]);

  return ref;
};
