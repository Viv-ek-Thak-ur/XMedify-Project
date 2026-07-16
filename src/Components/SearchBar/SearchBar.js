import { useState, useRef, useEffect } from "react";
import Search_Icon from "../../assets/Icon.svg";

export default function SearchBar({
  placeholder,
  value,
  onChange,
  options = [],
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSelect = (option) => {
    onChange({
      target: {
        value: option,
      },
    });

    setOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "200px",
        height: "40px",
        background: "#F0F0F0",
        borderRadius: "6px",
        padding: "0 10px",
        cursor: options.length ? "pointer" : "text",
      }}
    >
      <img src={Search_Icon} alt="search" height="16" />

      {options.length > 0 ? (
        <>
          <div
            style={{
              flex: 1,
              fontSize: "14px",
            }}
            onClick={() => setOpen(!open)}
          >
            {value || `Select ${placeholder}`}
          </div>

          {open && (
            <ul
              style={{
                position: "absolute",
                top: "42px",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                listStyle: "none",
                margin: 0,
                padding: 0,
                maxHeight: "220px",
                overflowY: "auto",
                zIndex: 1000,
              }}
            >
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleSelect(option)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />
      )}
    </div>
  );
}