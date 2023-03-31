export default function Desktop ({ loading, children }: { children: React.ReactNode, loading: boolean }) {
  if (loading) return null

  else {
    return (
     <section className='lg:flex-col lg:gap-[3rem] hidden lg:flex'>
        {children}
      </section>
    )
  }
}
