import Image from 'next/image'
import Link from 'next/link'

import pc from '../../assets/pc.png'
import mobile from '../../assets/mobile.svg'

import newsPc from '../../assets/news-pc.png'
import newsMobile from '../../assets/news-mobile.png'

import dogPc from '../../assets/dog-pc.png'
import dogMobile from '../../assets/dog-mobile.png'

export function Portfolios() {
  return (
    <div id="portfolios" className="bg-zinc-50">
      <div className="m-auto max-w-[1280px] w-full py-10 px-5 gap-5 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative justify-self-center hover:bg-white hover:shadow-md p-5 transition-all">
          <div className="relative max-w-[700px]">
            <Image
              src={pc}
              alt="Monitor"
              className="w-full h-[350px] sm:h-[400px]"
            />
            <Image
              src={newsPc}
              alt="Imagem"
              className="absolute top-[12%] left-[11%] w-[78%] h-[63%]"
            />
          </div>

          <div className="w-28 sm:w-32 absolute bottom-64 sm:bottom-32">
            <Image src={mobile} alt="" className="w-full" />
            <Image
              src={newsMobile}
              alt=""
              className="w-[92%] h-[85%] top-[7%] left-[4%] absolute bottom-0"
            />
          </div>
          <div className="mt-5">
            <p className="text-center text-gray-800">Estudo Next JS</p>
            <p className="text-center font-extrabold text-2xl text-gray-800">
              Aplicativo de portal de notícias
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <Link
                href={'https://github.com/baratapedro/news'}
                target="_blank"
                className="border border-blue-900 text-blue-900 px-7 py-3 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
              >
                Ver código
              </Link>
              <Link
                href={'https://news-two-beta.vercel.app/'}
                target="_blank"
                className="border border-blue-900 text-blue-900 px-7 py-3 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
              >
                Visualizar página
              </Link>
            </div>
          </div>
        </div>

        <div className="relative justify-self-center hover:bg-white hover:shadow-md p-5 transition-all">
          <div className="relative max-w-[700px]">
            <Image
              src={pc}
              alt="Monitor"
              className="w-full h-[350px] sm:h-[400px]"
            />
            <Image
              src={dogPc}
              alt="Imagem"
              className="absolute top-[12%] left-[11%] w-[78%] h-[63%]"
            />
          </div>

          <div className="w-28 sm:w-32 absolute bottom-64 sm:bottom-32">
            <Image src={mobile} alt="" className="w-full" />
            <Image
              src={dogMobile}
              alt=""
              className="w-[92%] h-[85%] top-[7%] left-[4%] absolute bottom-0"
            />
          </div>
          <div className="mt-5">
            <p className="text-center text-gray-800">Estudo React JS</p>
            <p className="text-center font-extrabold text-2xl text-gray-800">
              Galeria de fotos de cachorro
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <Link
                href={'https://github.com/baratapedro/react-dog-api'}
                target="_blank"
                className="border border-blue-900 text-blue-900 px-7 py-3 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
              >
                Ver código
              </Link>
              <Link
                href={'https://react-dog-api.vercel.app/'}
                target="_blank"
                className="border border-blue-900 text-blue-900 px-7 py-3 rounded-md hover:bg-blue-900 hover:text-white transition-colors"
              >
                Visualizar página
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
