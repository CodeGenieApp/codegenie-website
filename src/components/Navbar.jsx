import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { CodeGenieLogo } from '../assets/logos/CodeGenieLogo'
import { GithubIcon } from '../assets/icons/GithubIcon'

const navbarLinks = [
  { label: 'Home', href: '#home', ariaLabel: 'Home' },
  { label: 'Features', href: '#features', ariaLabel: 'Features' },
  { label: 'Pricing', href: '#pricing', ariaLabel: 'Pricing' },
  // { label: 'Feedback', href: '#feedback', ariaLabel: 'Feedback' },
  { label: 'FAQ', href: '#FAQ', ariaLabel: 'FAQ' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="w-11/12 xl:w-10/12 2xl:w-[1280px] flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[180px]">
            <a className="unstyled navbar-link" href="#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <CodeGenieLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Code Genie
                </div>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden md:flex h-full pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="unstyled navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden md:flex w-[180px]">
            {/* <a
              className="unstyled text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="https://github.com/matt765/Tidestream"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
              <span className="pt-px">Source code</span>
            </a> */}
          </div>
        </motion.div>
        <div
          className="md:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link unstyled"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              {/* <a
                className="unstyled text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <GithubIcon />
                Source code
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
