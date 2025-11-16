export default function GroovityButton() {
  return (
    <button className="groovity-button" data-testid="button-groovity">
      <a href="/recruiting">
      <p className="groovity-button__text">
        <span style={{ '--index': 0 } as React.CSSProperties}>W</span>
        <span style={{ '--index': 1 } as React.CSSProperties}>E</span>
        <span style={{ '--index': 2 } as React.CSSProperties}>  </span>
        <span style={{ '--index': 3 } as React.CSSProperties}>A</span>
        <span style={{ '--index': 4 } as React.CSSProperties}>R</span>
        <span style={{ '--index': 5 } as React.CSSProperties}>E</span>
        <span style={{ '--index': 6 } as React.CSSProperties}>  </span>
        <span style={{ '--index': 7 } as React.CSSProperties}>R</span>
        <span style={{ '--index': 8 } as React.CSSProperties}>E</span>
        <span style={{ '--index': 9 } as React.CSSProperties}>C</span>
        <span style={{ '--index': 10 } as React.CSSProperties}>R</span>
        <span style={{ '--index': 11 } as React.CSSProperties}>U</span>
        <span style={{ '--index': 12 } as React.CSSProperties}>I</span>
        <span style={{ '--index': 13 } as React.CSSProperties}>T</span>
        <span style={{ '--index': 14 } as React.CSSProperties}>I</span>
        <span style={{ '--index': 15 } as React.CSSProperties}>N</span>
        <span style={{ '--index': 16 } as React.CSSProperties}>G</span>
        <span style={{ '--index': 17 } as React.CSSProperties}>  </span>
      </p>

      <div className="groovity-button__circle">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="groovity-button__icon"
          width="14"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className="groovity-button__icon groovity-button__icon--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      </a>
    </button>
  );
}
