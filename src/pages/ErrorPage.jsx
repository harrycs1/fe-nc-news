import { Link } from "react-router-dom"

export const ErrorPage = ({ error = {status: 404, message: 'Page not found'} }) => {
    return (
        <main class="w-full flex flex-col justify-center items-center">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">{error.status}</h1>
            <div class="bg-orange-600 px-2 text-sm rounded rotate-12 absolute">
                {error.message}
            </div>
            <button class="mt-5">
              <a
                class="relative inline-block text-sm font-medium text-orange-600 group active:text-orange-600 focus:outline-none focus:ring rounded-lg"
              >
                <span
                  class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-orange-600 group-hover:translate-y-0 group-hover:translate-x-0 rounded-lg"
                ></span>
        
                <span class="relative block px-8 py-3 bg-secondary border border-current rounded-lg">
                  <Link to="/">Go Home</Link>
                </span>
              </a>
            </button>
        </main>
    )
}