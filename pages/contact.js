function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#2e2e2e] via-black to-black text-white">
      {/* main heading */}
      <div className="flex ">
        <p className="leading-normal pt-[34%] sm:pt-[18%] lg:pt-[13%] pl-[6%] pr-[3%] text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
          Let's create one that stands
        </p>
      </div>
      {/* contact me */}
      <div>
        <div className="px-[10%] pt-[10%] md:pt-[8%]">
          {/* contact me heading */}
          <p className="pt-8 pb-3 md:pb-6 font-extrabold text-2xl lg:text-3xl">
            Contact Me
          </p>

          <p className="text-base lg:text-lg">
            I am in a postion to collaborate with companies, individuals, start
            ups to get my knowledge and skills to the buisness world. I want to
            bring the ideas to reality
          </p>
          <p className="text-lg pt-10 pb-5">Feel free to contact me</p>
        </div>
        {/* contact me box */}
        <div className="flex flex-rows justify-center">
          <div
            className="text-black p-5 rounded-sm m-3 sm:p-10 sm:rounded-none
                        transition-all border border-[#504f4f]"
          >
            <form
              action="https://formsubmit.co/malik16603@gmail.com"
              method="POST"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="p-3 sm:p-5">
                  <label>
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="Name"
                      class="mt-2 px-2 py-1 sm:px-3 sm:py-2 sm:mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Name"
                      required
                    />
                  </label>
                </div>
                <div className="p-3 sm:p-5">
                  <label>
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      class="mt-2 px-2 py-1 sm:px-3 sm:py-2 sm:mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="you@mail.com"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="p-3 sm:p-5">
                <label>
                  <span class="block text-sm font-medium text-white">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    class="mt-2 px-2 py-1 sm:px-3 sm:py-2 sm:mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="p-3 sm:p-5">
                <label>
                  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                    Message
                  </span>
                  <textarea
                    type="text"
                    name="message"
                    class="mt-2 px-2 py-1 sm:px-3 sm:py-2 sm:mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-white focus:ring-white block w-full h-40 rounded-md sm:text-sm focus:ring-1"
                    placeholder=""
                    required
                  />
                </label>
              </div>
              <div className="flex justify-center p-3 sm:p-5">
                <button
                  type="submit"
                  className="bg-white text-black p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
