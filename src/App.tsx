
import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Toaster } from "./components/ui/toaster";
import Index from "./pages/Index";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Toaster />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
