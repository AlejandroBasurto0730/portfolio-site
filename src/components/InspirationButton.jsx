import { useRef, useState } from "react";
import { quotes } from "../data/quotes";

export default function InspirationButton() {
  const [quote, setQuote] = useState(null);
  const lastIndex = useRef(-1);

  const pickQuote = () => {
    let i = Math.floor(Math.random() * quotes.length);
    while (i === lastIndex.current && quotes.length > 1) {
      i = Math.floor(Math.random() * quotes.length);
    }
    lastIndex.current = i;
    setQuote(quotes[i]);
  };

  return (
    <div className="inspiration-widget">
      {quote && (
        <div className="inspiration-card" key={quote.text}>
          <button
            className="inspiration-close"
            onClick={() => setQuote(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <p className="inspiration-text">“{quote.text}”</p>
          <span className="inspiration-author">— {quote.author}</span>
        </div>
      )}
      <button className="inspiration-button" onClick={pickQuote}>
        Inspire me
      </button>
    </div>
  );
}
