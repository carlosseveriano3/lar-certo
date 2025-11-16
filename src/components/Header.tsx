import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Home, Search, Info } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors">
            <Home className="w-6 h-6" />
            MoradiaAcessível
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Buscar Moradia
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Sobre
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button>
              Cadastrar
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-4 pb-4 pt-2">
          <NavLink
            to="/"
            className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
            activeClassName="text-primary font-semibold"
          >
            <Home className="w-4 h-4" />
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
            activeClassName="text-primary font-semibold"
          >
            <Search className="w-4 h-4" />
            Buscar
          </NavLink>
          <NavLink
            to="/about"
            className="flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
            activeClassName="text-primary font-semibold"
          >
            <Info className="w-4 h-4" />
            Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
