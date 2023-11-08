
export default function Layout({ children }) {
  return (
      <div className="h-full relative">
          <main className="md:pl-72 pb-10">
              {children}
          </main>
      </div>
  )
}