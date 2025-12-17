/* FOOTER */
export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">MyHomeStore</h4>
          <p className="text-sm">
            Premium tiles, flooring & renovation materials.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>Tiles</li>
            <li>Flooring</li>
            <li>Cladding</li>
            <li>Decking</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Delivery & Freight</li>
            <li>Returns</li>
            <li>Order Samples</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Showrooms</h4>
          <p className="text-sm">Melbourne · Sydney · Brisbane</p>
        </div>
      </div>
    </footer>
  );
}
