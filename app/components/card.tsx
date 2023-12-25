export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-xl border-[1 px] border-gray-400 w-[35%] my-2">
      {children}
    </div>
  );
}
