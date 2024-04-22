import { CodeGenieLogo } from '../assets/logos/CodeGenieLogo'
import { TwitterIcon } from '../assets/icons/TwitterIcon'
import { GithubIcon } from '../assets/icons/GithubIcon'
import { DiscordIcon } from '../assets/icons/DiscordIcon'
const footerData = [
  {
    title: 'Products',
    items: [
      {
        title: 'Serverless Express',
        href: 'https://github.com/CodeGenieApp/serverless-express',
      },
    ],
  },
  {
    title: 'Important Links',
    items: [
      {
        title: 'Terms & Conditions',
        href: '/terms-and-conditions',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        title: 'Contact Us',
        href: 'mailto:brett@codegenie.codes',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <CodeGenieLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">Code Genie</div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Save months on your next software project
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/CodeGenieCodes"
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://discord.gg/YJ9gQhheyn"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <DiscordIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://github.com/CodeGenieApp"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a className="text-gray-400 hover:text-gray-300" href={item.href}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Important Links</h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a className="text-gray-400 hover:text-gray-300" href={item.href}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a className="text-gray-400 hover:text-gray-300" href={item.href}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2024. Code Genie.
          </p>
        </div>
      </div>
    </footer>
  )
}
