export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <h1 className="text-xl font-bold">GoxSolana</h1>
      <ul className="flex gap-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
