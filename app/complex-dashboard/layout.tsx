export default function ComplexLayout({
  children,
  users,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div className="w-full p-4 bg-blue-200">
      {children}
      <div className="flex flex-row bg-green-200 w-full">
        <div className="flex flex-col content-center bg-gray-200 w-[50%]">
          <div className="w-full">{users}</div>
          <div className="w-full">{revenue} </div>
        </div>
        <div className="bg-pink-200 flex flex-1 w-[50%]">{notification}</div>
      </div>
    </div>
  );
}
