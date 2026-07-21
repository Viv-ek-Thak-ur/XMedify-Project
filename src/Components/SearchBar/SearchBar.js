import { useState, useRef, useEffect } from "react";
import Search_Icon from "../../assets/Icon.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar({
  id,
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
   className={styles.container}
  id={id}
  ref={dropdownRef}
  onClick={() => setOpen((prev) => !prev)}
  
>
      <img src={Search_Icon} alt="search" height="16" />

      
        <>
          <div className={styles.searchText}
              
          >
            {value || `Select ${placeholder}`}
          </div>

          {open && (
            <ul className={styles.list}
             
            >
             {options.length ? (options.map((option) => (
               <li
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(option);
                  }}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {option}
                </li>
              ))): (
                  <li style={{ padding: "10px", color: "#666" }}>
                    Loading...
                  </li>
                )}
            </ul>
          )}
        </>
      
    </div>
  );
}