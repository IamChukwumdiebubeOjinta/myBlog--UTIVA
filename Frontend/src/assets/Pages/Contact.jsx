import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-1 w-full min-h-[88vh]">
      <div className="flex-[0.1] px-3 self-center text-end border-r border-base-300"></div>
      <div className="flex-[0.9] flex justify-around">
        <div className="flex-[0.7] border-r border-base-300">
          <h1 className="text-4xl">Contact Us</h1>
          <hr />
          <div className="max-w-[700px] my-5">
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      To be honest
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We would like to be in contact with you and continue to foster a wonderful experience and partnerships with you.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <form action="#">
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div className="col-span-12 sm:col-span-3">
                            <label
                              htmlFor="text-area"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Talk to us
                            </label>
                            <textarea className="textarea textarea-bordered w-[400px] my-2 resize-none" placeholder="Your text here"></textarea>
                          </div>
                        </div>
                        <div className="w-full flex justify-end">
                        <button className="btn btn-outline justify-self-end">
                          Send
                        </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-[0.2] flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Contact;
