import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-blue-50 m-1 ">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-5 m-1">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            The destination for the best in beauty! <br></br>
            products including makeup, cosmetics, <br></br>skincare, haircare, nails, fragrance and more,

          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Explore our line up of trending brands today. At the lowest prices. 
          </Heading>
        </span>
        <a
          href="/store/"
        >
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Shop Now
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero
