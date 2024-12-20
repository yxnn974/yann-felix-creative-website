import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Index />
      </Router>
    </ThemeProvider>
  );
}

export default App;