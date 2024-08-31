import UserStore from '@/stores/userStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function index() {
  const route = useRouter();

  const { user, getUser, deleteUserSession } = UserStore();
  useEffect(() => {
    getUser()
      .then()
      .catch(() => {
        route.push('/');
      });
  }, []);

  return (
    <div className="bg-black h-svh">
      <div className="h-full container mx-auto">
        <div className="flex justify-center h-full">
          <div className="w-1/5 text-white py-4 h-full">
            <div className="px-4">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-white"
                fill="currentColor"
              >
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
            </div>

            <nav className="mt-5 px-2">
              <Link
                href="/"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6 "
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                Home
              </Link>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                </svg>
                Explore
              </a>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                Notifications
              </a>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Messages
              </a>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                Bookmarks
              </a>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Lists
              </a>
              <Link
                href="/profile"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Profile
              </Link>
              <a
                href="#"
                className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-gray-900 text-white"
              >
                <svg
                  className="mr-4 h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                More
              </a>

              <button className="bg-blue-400 mt-5 text-center text-lg w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                Tweet
              </button>
            </nav>

            <div className="flex-shrink-0 flex-col gap-4 flex hover:bg-blue-00 rounded-full p-4 mt-12 mr-2">
              <p className="capitalize">Hi, Darlley!</p>
              <button className="flex-shrink-0 group block border-none bg-transparent">
                <div className="flex items-start flex-col">
                  <div className="flex gap-4 items-center">
                    <p className="text-base leading-6 font-medium text-white">
                      Logout
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="w-1/2 border-x border-gray-900 h-full">
            <div className="flex border-b border-gray-900">
              <div className="flex-1 m-2">
                <h2 className="px-4 py-2 text-xl font-semibold text-white">
                  Home
                </h2>
              </div>
              <div className="flex-1 px-4 py-2 m-2">
                <a
                  href=""
                  className=" text-2xl font-medium rounded-full text-white hover:bg-blue-800 hover:text-blue-300 float-right"
                >
                  <svg
                    className="m-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>

            <form>
              <div className="flex">
                <div className="flex-1 px-6 pt-2 mt-2">
                  <textarea
                    name="text"
                    className=" bg-transparent outline-none focus:ring-1 focus:ring-gray-800 rounded-lg p-3 text-white placholder:text-gray-400 font-medium text-lg w-full"
                    rows={2}
                    cols={50}
                    placeholder="What's happening?"
                  ></textarea>
                </div>
              </div>

              <div className="flex">
                <div className="w-10"></div>

                <div className="w-64 px-2">
                  <div className="flex items-center">
                    <div className="flex-1 text-center px-1 py-1 m-2">
                      <a
                        href="#"
                        className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </a>
                    </div>

                    <div className="flex-1 text-center py-2 m-2">
                      <a
                        href="#"
                        className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </a>
                    </div>

                    <div className="flex-1 text-center py-2 m-2">
                      <a
                        href="#"
                        className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </a>
                    </div>

                    <div className="flex-1 text-center py-2 m-2">
                      <a
                        href="#"
                        className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                      >
                        <svg
                          className="text-center h-7 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <button
                    type="submit"
                    className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </form>

            <div className="border-t border-gray-900">
              <div className="p-8">
                <p className="font-medium leading-6 text-base text-white">
                  Darlley <span className="text-gray-500">@darlley</span>
                </p>
                <p className="flex-shrink font-medium text-base text-white width-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  iure? Voluptate, aliquid soluta repellat debitis sapiente sunt
                  fugiat. Tenetur suscipit dolor, iure ipsa obcaecati officiis
                  nulla incidunt minus exercitationem eum.
                </p>

                <div className="flex">
                  <div className="w-full">
                    <div className="flex items-center">
                      <div className="flex-1 text-center">
                        <a
                          href="#"
                          className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                        >
                          <svg
                            className="h-6 text-center w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                        </a>
                      </div>

                      <div className="flex-1 m-2 py-2 text-center">
                        <a
                          href="#"
                          className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                        >
                          <svg
                            className="text-center w-6 h-7"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
                          </svg>
                        </a>
                      </div>

                      <div className="flex-1 m-2 py-2 text-center">
                        <button className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 group hover:bg-blue-800 hover:text-blue-300">
                          <div>
                            <svg
                              className="flex text-center w-6 h-7"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                          </div>
                          <span className="ml-2">10</span>
                        </button>
                      </div>

                      <div className="flex-1 m-2 py-2 text-center">
                        <a
                          href="#"
                          className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                        >
                          <svg
                            className="text-center w-6 h-7"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="flex-1 m-2 py-2 text-center">
                        <a
                          href="#"
                          className="flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 group hover:bg-blue-800 hover:text-blue-300"
                        >
                          <svg
                            className="text-center w-6 h-7"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="flex-1 m-2 py-2 text-center">
                        <button className="bg-transparent cursor-pointer flex font-medium items-center leading-6 mt-1 px-3 py-2 rounded-full text-base text-gray-500 w-12 curs group hover:bg-red-100 hover:text-red-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-1/4 p-5 h-full">
            <div className="relative text-gray-300 pb-0 w-full">
              <button type="submit" className="absolute ml-4 mt-3 mr-4">
                <svg
                  className="h-4 w-4 fill-current"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>

              <input
                type="search"
                name="search"
                placeholder="Search Twitter"
                className="h-10 px-10 pr-5 rounded-full text-sm focus:outline-none bg-gray-900 shadow w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
