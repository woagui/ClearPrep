import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Book from "./pages/Book";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold text-lg gradient-text">ClearPrep</Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/book" className="text-sm font-semibold px-4 py-2 rounded-lg gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">
            Book Free Session
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} ClearPrep. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
