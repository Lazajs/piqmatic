export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-minMobile lg:p-small pt-0 pb-larger">
      {children}
    </main>
  )
}
