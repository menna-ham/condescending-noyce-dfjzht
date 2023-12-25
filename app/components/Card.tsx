export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="shadow-xl border-1 border-black text-center 
    p-[100px] m-[10px] flex flex-col items-center w-full h-full"
    >
      {children}
    </div>
  );
}
