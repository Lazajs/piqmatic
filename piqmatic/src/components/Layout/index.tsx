export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-w-minMobile">
      {children}
    </main>
  )
}
