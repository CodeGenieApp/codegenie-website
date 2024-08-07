import { motion } from 'framer-motion'

export const FeaturesDiagonal = ({ children }) => {
  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="custom-bg-dark1"></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              <span className="text-3xl leading-4 mr-2">🏗️</span> <span className="align-text-bottom">Built for you</span>
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              <span className="gradient-text">Relevant source code</span> based on your{' '}
              <span className="gradient-text">data model or idea</span>
            </h2>
            <p className="mb-16 text-customGrayText leading-loose text-justify">
              Provide Code Genie with your application's data model, and it will generate application source code to meet your requirements.
              Don't have a data model? Simply tell Code Genie your "wish" (app idea/description) and it'll do its best to design an initial
              data model for you!
            </p>
            <a href="/docs/guides/getting-started" className="w-[210px] h-12 custom-button-colored unstyled">
              Get Started
            </a>
          </div>
          <div className="w-4/5 lg:w-full lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">{children}</div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="custom-bg-dark1"></path>
        </svg>
      </div>
    </section>
  )
}
