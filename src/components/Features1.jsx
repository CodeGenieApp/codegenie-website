import { motion } from 'framer-motion'

import ui from '../assets/images/ui.webp'
import api from '../assets/images/api.webp'
import auth from '../assets/images/auth.webp'
import database from '../assets/images/database.webp'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { HourGlassIcon } from '../assets/icons/HourGlassIcon'

export const Features1 = () => {
  return (
    <section className="w-full bg-customDarkBg2 mb-10 lg:mb-20" id="features">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-11/12 xl:w-10/12 2xl:w-[1280px] mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full xl:w-2/3 mb-12 lg:mb-0">
            <span className="custom-block-subtitle">
              <span className="text-3xl">🚀</span> Kickstart innovation
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Generate a solid <span className="gradient-text">software foundation</span> instantly
            </h2>
            <p className="mb-10 text-customGrayText leading-loose text-justify">
              Code Genie takes care of the boring stuff so you can focus on what makes your product special. Download the source code for
              your full stack application and deploy to AWS to have a live app in minutes!
            </p>
          </div>
          <div className="w-full mb-12 lg:mb-0 flex justify-between">
            <div className="w-2/3 md:w-1/2 lg:w-1/3">
              <ul className="mb-6 text-white w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>React Web App</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Serverless Express REST API</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Cognito Authentication</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>DynamoDB Database</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Operational Dashboards & Alarms</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>CDK Infrastructure as Code (IAC)</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Continuous Integration/Delivery (CI/CD)</span>
                </li>
                <li className="mb-4 flex">
                  <HourGlassIcon />
                  <span>
                    Unit/Integration Tests <span className="text-xs text-neutral-400">coming soon</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-1/3 md:w-1/2 lg:w-2/3 mx-auto flex-wrap justify-end flex items-center md:items-start">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 px-2 lg:px-0 -mt-10">
                <div className="mb-4 rounded">
                  <img src={ui.src} alt="UI" className="w-full max-w-[120px] mx-auto" />
                </div>
                <div className="rounded">
                  <img src={api.src} alt="API" className="w-full max-w-[120px] mx-auto" />
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 px-2">
                <div className="mb-4 rounded-lg">
                  <img src={auth.src} alt="auth" className="w-full max-w-[120px] mx-auto" />
                </div>
                <div className="rounded-lg">
                  <img src={database.src} alt="database" className="w-full max-w-[120px] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
