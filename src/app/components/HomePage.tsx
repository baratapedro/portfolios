import Link from 'next/link'

import { Linkedin, Github, FileText } from 'lucide-react'

export function HomePage() {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-full bg-gradient-to-t from-blue-400 to-blue-800"
    >
      <div className="m-auto max-w-[1280px] w-full px-5 sm:px-10">
        <div className="flex flex-col gap-5">
          <div className="text-white font-bold text-sm sm:text-xl ml-2">
            OI 👋 EU SOU PEDRO
          </div>
          <div>
            <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
              <div className="font-extrabold text-white text-[40px] sm:text-[100px] md:text-[125px] lg:text-[150px] leading-none">
                REACT
              </div>
              <Link
                href="https://www.linkedin.com/in/pedro-barata-2a4851239/"
                target="_blank"
                className="hover:pb-10 transition-all group"
              >
                <Linkedin className="group-hover:text-white text-gray-300 w-5 h-5 sm:w-7 sm:h-7 md:w-12 md:h-12 " />
              </Link>
              <Link
                href="https://github.com/baratapedro"
                target="_blank"
                className="hover:pb-10 transition-all group"
              >
                <Github className="group-hover:text-white text-gray-300 w-5 h-5 sm:w-7 sm:h-7 md:w-12 md:h-12 " />
              </Link>
              <a
                href="https://baratapedro.github.io/portfolios/curriculo.pdf"
                download
                className="hover:pb-10 transition-all group"
              >
                <FileText className="group-hover:text-white text-gray-300 w-5 h-5 sm:w-7 sm:h-7 md:w-12 md:h-12 " />
              </a>
            </div>

            <div className="font-extrabold text-white text-[40px] sm:text-[100px] md:text-[125px] lg:text-[150px] leading-none">
              DEVELOPER
            </div>
          </div>

          <div className="w-full flex justify-end">
            <div className="w-[400px] md:w-[500px] text-white font-bold md:text-lg sm:text-sm text-xs">
              <span className="text-right w-full sm:block">
                TENHO 25 ANOS E SOU DESENVOLVEDOR FRONTEND
              </span>
              <span className="text-left w-full sm:block">
                {' '}
                COM EXPERIENCIA PROFISSIONAL DE 7 MESES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
