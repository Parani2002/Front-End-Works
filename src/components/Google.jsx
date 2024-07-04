import React from "react";

const Google = () => {
  return (
    <>
      <div className="flex justify-end p-3 space-x-5 text-sm items-center">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <div className="p-2 hover:bg-slate-200 hover:rounded-full">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 2C5.10457 2 6 2.89543 6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2ZM12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2ZM22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6C21.1046 6 22 5.10457 22 4ZM4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM20 10C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10ZM6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20ZM12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18ZM22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20Z"
              fill="#000000"
            />
          </svg>
        </div>
        <button className="bg-blue-600 rounded-3xl px-4 py-2 text-white font-medium hover:shadow-lg">
          Sign in
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col p-24">
          <div className="flex justify-center mt-5 mb-5">
            <img
              src="src/assets/google.png"
              alt="google"
              className="w-1/2 md:w-1/5 h-20"
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              type="text"
              className="border rounded-3xl border-gray-400 w-1/2 h-12 mb-10"
            />
            <div className="flex space-x-4">
              <button className="bg-slate-100 border-none rounded px-4 py-2 text-sm">
                Google Search
              </button>
              <button className="bg-slate-100 border-none rounded px-4 py-2 text-sm">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
          <div className="flex mt-10 justify-center gap-2 text-sm space-x-2">
            <span className=" text-center">Google offered in:</span>
            <div className="flex flex-wrap gap-2 text-blue-800">
              <a class="hover:underline" href="#">
                हिन्दी
              </a>
              <a class="hover:underline" href="#">
                বাংলা
              </a>
              <a class="hover:underline" href="#">
                తెలుగు
              </a>
              <a class="hover:underline" href="#">
                मराठी
              </a>
              <a class="hover:underline" href="#">
                தமிழ்
              </a>
              <a class="hover:underline" href="#">
                ગુજરાતી
              </a>
              <a class="hover:underline" href="#">
                ಕನ್ನಡ
              </a>
              <a class="hover:underline" href="#">
                ಕನ್ನಡ
              </a>
              <a class="hover:underline" href="#">
                ಕನ್ನಡ
              </a>
              <a class="hover:underline" href="#">
                ਪੰਜਾਬੀ
              </a>
            </div>
          </div>
        </div>
      </div>

    {/* FOOTER SECTION */}
    <div class="fixed bottom-0 bg-gray-200 w-full p-3 text-gray-900 text-sm">
        <div class="p-2 border-b border-gray-400">
            <span>India</span>
        </div>
        <div class="p-2 flex flex-col md:flex-row md:justify-between">
            <div class="p-3 flex justify-center gap-5">
                <span>About</span>
                <span>Advertising</span>
                <span>Business</span>
                <span>How Search works</span>
            </div>
            <div class="p-3 flex justify-center gap-5">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Settings</span>
            </div>
        </div>
    </div>
    </>
  );
};
export default Google;
