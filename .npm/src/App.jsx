import useLocalStorage from "./hooks/useLocalStorage";
import useWindowResize from "./hooks/useWindowResize";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { width } = useWindowResize();

  const isMobile = width < 768;
  const currentTheme = isMobile ? "light" : theme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const appStyle = {
    backgroundColor: currentTheme === "dark" ? "#1f1d1d" : "#fff",
    color: currentTheme === "dark" ? "#fff" : "#000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h1>მიმდინარეს არის: {currentTheme.toUpperCase()} mode</h1>
      
      {isMobile && <p style={{ color: "gray" }}>mobile versioon </p>}

      <button 
        onClick={toggleTheme} 
        disabled={isMobile}
        style={{ padding: "10px 20px", cursor: isMobile ? "not-allowed" : "pointer" }}
      >
        mode-ის ცვლილება 
      </button>
    </div>
  );
}

export default App;