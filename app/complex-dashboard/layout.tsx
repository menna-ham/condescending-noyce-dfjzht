export default function ComplexLayout({
  children,
  users,
  notification,
  revenue,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogged = false;
  return isLogged ? (
    <div className=" p-4 ">
      {children}
      <div className="flex flex-row  content-between bg-green-300 w-full h-full">
        <div className="flex flex-col bg-blue-200 ">
          <div>{users}</div>
          <div>{revenue} </div>
        </div>
        <div className="flex flex-1 w-full">{notification}</div>
      </div>
    </div>
  ) : (
    login
  );
}
