export default function Header() {
  return (
    <header className="p-4 flex flex-col items-center bg-[#0e1425]">
        <h1 className="text-4xl font-bold text-white">React Props Explainer</h1>
        <p className="mt-2 text-[#f6fcff]">A comprehensive guide to understand React Props.</p>
        <div className="m-4 rounded-full bg-[#1b2535]">
            <p className="font-medium px-4 py-1 text-xs text-white">Built with NPM + Vite + React + Tailwind CSS</p>
        </div>
    </header>
  );
}