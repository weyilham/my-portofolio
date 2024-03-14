export default function NavIcon({ children }) {
  return (
    <div className="navIcon w-14 h-14 bg-slate-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-400 group">
      {children}
    </div>
  );
}
