import Link from 'next/link'

export function Header() {
  return (
    <header
      className={`fixed z-10 w-full h-16 top-0 flex items-center bg-blue-800`}
    >
      <div className="m-auto max-w-[1280px] w-full sm:px-10">
        <nav>
          <ul className="flex justify-between sm:justify-normal w-full sm:w-auto px-5 sm:px-0 gap-5 sm:gap-10">
            <li>
              <Link
                href="https://baratapedro.github.io/portfolios/#home"
                scroll={false}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://baratapedro.github.io/portfolios/#portfolios"
                scroll={false}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfólios
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
