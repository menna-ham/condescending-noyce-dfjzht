export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 shadow-xl border-[1px] border-gray-400 text-center my-2 w-full h-full">
      {children}
    </div>
  );
}
