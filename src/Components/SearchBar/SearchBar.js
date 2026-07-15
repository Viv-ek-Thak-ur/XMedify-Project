import Search_Icon from "../../assets/Icon.svg";

export default function SearchBar({ placeholder, value, onChange, options = [] }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        backgroundColor: "#F0F0F0",
        width: "200px",
        height: "32px",
        alignItems: "center",
        borderRadius: "4px",
        padding: "0 8px",
      }}
    >
      <img src={Search_Icon} height="16" alt="search" />
      {options.length > 0 ? (
        <select
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            flex: "1",
            fontSize: "14px",
          }}
        >
          <option value="">{`Select ${placeholder}`}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            flex: "1",
            fontSize: "14px",
          }}
        />
      )}
    </div>
  );
}
