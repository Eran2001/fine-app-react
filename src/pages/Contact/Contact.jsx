import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-10 home">
        
      </h1>
      <div>
      <section
        className="min-h-screen bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="text-white lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Fine.lk
                </h1>

                <p className="max-w-xl mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem quo aliquid molestiae hic incidunt beatae placeat
                  accusantium! Alias ex quisquam ab tempora. Ratione autem
                  doloremque ducimus numquam doloribus, error sed.
                </p>

                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#070250] rounded-md hover:bg-[#00e3dc] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  Get in Touch
                </button>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5">
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.675 0h-21.35C.586 0 0 .586 0 1.3v21.4c0 .714.586 1.3 1.3 1.3h11.5v-9.3H9.7v-3.7h3.1V8.3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.6.1 3 .1v3.5h-2.2c-1.8 0-2.2.9-2.2 2.2v2.9h4.4l-.6 3.7h-3.8v9.3h7.5c.714 0 1.3-.586 1.3-1.3V1.3c0-.714-.586-1.3-1.3-1.3z" />
                      </svg>
                    </a>
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M23.954 4.57c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.896-.954-2.173-1.55-3.59-1.55-2.717 0-4.92 2.203-4.92 4.917 0 .39.044.765.127 1.124C7.728 8.087 4.1 6.128 1.671 3.149c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.622-.03-.923-.086.623 1.944 2.431 3.36 4.576 3.4-1.676 1.313-3.79 2.097-6.084 2.097-.395 0-.787-.023-1.175-.067 2.179 1.397 4.768 2.211 7.548 2.211 9.051 0 13.998-7.496 13.998-13.986 0-.21 0-.423-.016-.635.962-.695 1.8-1.56 2.46-2.548l-.047-.02z"
                        />
                      </svg>
                    </a>
                    {/* Add other icons with correct paths or links */}
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-[#070250] lg:max-w-xl">
                  <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                    Contact Form
                  </h1>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Ask us everything, and we would love to hear from you.
                  </p>

                  <form className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="block w-full px-5 py-3 mt-2 text-[#000] bg-white border border-gray-200 rounded-md dark:bg-[white] dark:text-[#000] dark:border-[#00e3dc] focus:border-[#00e3dc] focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-[#000] bg-white border border-gray-200 rounded-md dark:bg-[white] dark:text-[#000] dark:border-[#00e3dc] focus:border-[#00e3dc] focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-[#000] placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-[#FFF] dark:text-[#000] dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-[#00e3dc] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  );
};

export default Contact;
