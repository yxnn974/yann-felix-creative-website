import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Index />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;