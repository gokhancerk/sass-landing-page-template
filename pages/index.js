import Button from "../components/button";
import Layout from "../components/layout";
import styles from "./index.module.css";
import Link from "next/link";

function HomePage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.hero_left}>
          <h1 className={styles.audience}>Grow your subscription business</h1>
          <p className="font-mulish text-dark-gray mt-12">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div className={styles.cta}>
            <Button appearance="audience_btn">Get Started</Button>

            <div className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#19191B"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.hero_right}>
          <img src="/images/hero.svg" alt="hero-person" />
        </div>
      </div>

      <div
        className="flex mt-28 sm:pt-16 justify-around sm:space-x-7
    
    "
      >
        <div>
          <img src="/images/logo1.svg" alt="logo" />
        </div>
        <div>
          <img src="/images/logo2.svg" alt="logo" />
        </div>
        <div>
          <img src="/images/logo3.svg" alt="logo" />
        </div>
        <div>
          <img src="/images/logo4.svg" alt="logo" />
        </div>
        <div>
          <img src="/images/logo5.svg" alt="logo" />
        </div>
      </div>

      <div className="flex mt-36 sm:mt-10 justify-evenly items-center">
        <div>
          <img src="/images/content2.svg" alt="person" />
        </div>
        <div className="w-75 h-56 sm:text-center sm:break-words">
          <h1
            className="font-bold font-dm_sans text-5xl sm:text-xl sm:text-center
         text-dark-black"
          >
            Subscription index
          </h1>
          <p className="font-mulish text-dark-gray w-82 sm:w-auto break-words mb-9">
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </p>
          <Link href="/">
            <a className="text-blue-custom">Learn More</a>
          </Link>
        </div>
      </div>

      <div className="flex mt-20 justify-around items-center">
        <div className="sm:text-center">
          <h1
            className="font-bold font-dm_sans text-5xl sm:text-xl sm:text-center
         text-dark-black"
          >
            In-depth metrics
          </h1>
          <p className="font-mulish text-dark-gray w-82 sm:w-auto break-words mb-7 ">
            Accurate, real-time reporting at your fingertips. Getting data has
            never been easier.
          </p>
          <Link href="/">
            <a className="text-blue-custom">Learn More</a>
          </Link>
        </div>
        <div>
          <img src="/images/content3.svg" alt="person" />
        </div>
      </div>

      <div className="flex mt-36 justify-around sm:flex-col">
        <div className="sm:text-center flex flex-col items-center">
          <img src="/images/benchmarks.svg" alt="benchmarks" />
          <h1 className="text-dark-black font-dm_sans font-bold text-2xl sm:text-sm">
            Benchmarks
          </h1>
          <p className="font-normal font-mulish text-dark-gray w-80 text-center">
            See how you stack up against comparable companies in similar stages.
          </p>
        </div>
        <div className="sm:text-center flex flex-col items-center">
          <img src="/images/pricing.svg" alt="pricing" />
          <h1 className="text-dark-black font-dm_sans font-bold text-2xl sm:text-sm ">
            Pricing Audit
          </h1>
          <p className="font-normal font-mulish text-dark-gray w-80 text-center">
            Benchmark the health of your monetization and pricing strategy.
          </p>
        </div>
        <div className="sm:text-center flex flex-col items-center">
          <img src="/images/retention.svg" alt="retention" />
          <h1 className="text-dark-black font-dm_sans font-bold text-2xl sm:text-sm">
            Retention Audit
          </h1>
          <p
            className="font-normal font-mulish text-dark-gray w-80 text-center
      "
          >
            Audit where revenue leakage exists and where you can increase
            retention.
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-40 justify-center">
      
        <div className="flex justify-between items-center pl-40 pr-72 sm:pl-0 sm:pr-0
          sm:flex-col
        ">
          <h1 className="font-bold font-dm_sans text-5xl w-82 sm:text-sm text-center 
          ">Get the right plan for future product</h1>
         
          <div className="bg-gray-300 w-80 rounded-xl text-dark-black font-bold
  font-dm_sans text-center text-base flex justify-between items-center">
          
          <div className="bg-blue-custom text-white rounded-l-xl cursor-pointer w-40 h-14 
          text-center flex flex-row items-center justify-center ml-2">
            <span>Yearly</span>
          </div>
         
         <div className="cursor-pointer mr-14">Montly</div>

          </div>
        </div>
        
        
        
        <div className="flex mt-20 justify-evenly sm:flex-col sm:items-center ">
          
          <div className="bg-light-gray w-80 h-96 rounded-xl sm:mb-4">
            <div className="flex flex-col mt-10 items-center">
              <span className="text-dark-gray  font-bold font-dm_sans">Starter</span>
              <h1 className="text-free-color text-6xl  font-bold font-dm_sans">Free</h1>

              <span className="text-dark-gray font-normal font-mulish text-free
              
              ">1 Website</span>      

              <span className="text-dark-gray font-normal font-mulish text-free ">5 GB Hosting</span>      

              <span className="text-dark-gray font-normal font-mulish text-free ">Limited Support</span>      

              <Button appearance="get_started_white">Get Started</Button>
            </div>
          </div>
        
        
          <div className="bg-orange w-96 h-73 rounded-xl sm:mb-4">
            <div className="flex flex-col mt-10 items-center">
              <span className="text-white font-bold font-dm_sans">Premium</span>
              <h1 className="text-white text-5xl mb-4 font-bold font-dm_sans">$29 Month</h1>

              <span className="text-white font-normal font-mulish text-free
                
              ">10 Website</span>      

              <span className="text-white font-normal font-mulish text-free">15 GB Hosting</span>      

              <span className="text-white font-normal font-mulish text-free mb-7">Premium Support</span>      

              <Button appearance="get_started_premium">Get Started</Button>
            </div>
          </div>

         
          <div className="bg-light-gray w-80 h-96 rounded-xl ">
            <div className="flex flex-col mt-10 items-center">
              <span className="text-dark-gray font-bold font-dm_sans">Starter</span>
              <h1 className="text-free-color text-6xl font-bold font-dm_sans">Free</h1>

              <span className="text-dark-gray font-normal font-mulish text-free
                
              ">1 Website</span>      

              <span className="text-dark-gray font-normal font-mulish text-free ">5 GB Hosting</span>      

              <span className="text-dark-gray font-normal font-mulish text-free ">Limited Support</span>      

              <Button appearance="get_started_white">Get Started</Button>
            </div>
          </div>
        
        
        
        </div>
     
      </div>

    </Layout>
  );
}

export default HomePage;
