export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-minMobile p-small pt-[7rem]">
      {children}
    </main>
  )
}
