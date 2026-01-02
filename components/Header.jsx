import { Button } from "./ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">MyHomeStore</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-stone-700">
            Tiles
          </a>
          <a href="#" className="hover:text-stone-700">
            Flooring
          </a>
          <a href="#" className="hover:text-stone-700">
            Cladding
          </a>
          <a href="#" className="hover:text-stone-700">
            Decking
          </a>
          <a href="#" className="hover:text-stone-700">
            Trade
          </a>
        </nav>
        <Button size="lg">Cart</Button>
      </div>
    </header>
  );
}
