
export const dynamic = 'force-dynamic'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
   <main>
    Header
    {children}</main>
  );
}
