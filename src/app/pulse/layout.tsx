export default function PulseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<div>
    <TabBar/>
    {children}</div>);
}

function TabBar() {
    return (
    <div className="w-full h-30 px-14 border-b-[1px] border-b-[#ffffff]">
    </div>);
}