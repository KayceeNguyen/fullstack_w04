import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import Link from 'next/link'

import NextImage from 'next/future/image'

import appIcon from '../../public/app-icon.png'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
  const { navigation, user, onSignIn, onSignOut, Image = NextImage } = props

  const onSearch = (e) => {
    e.preventDefault()
    props.onSearch(e.target.search.value)
  }
  return (
    <Disclosure as="nav" className="bg-dark border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a>
                      <Image
                        className="sm:block h-8 w-auto lg:hidden"
                        src={appIcon}
                        alt="slipshods"
                      />
                      <Image
                        className="hidden h-8 w-auto lg:block"
                        src={appIcon}
                        alt="slipshods"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                      ><a
                        className={link.current ?
                          "rounded-md bg-gray-600 px-3 py-2 text-sm font-medium text-white" :
                          "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        }
                      > {!!link.Icon ? <link.Icon className="block h-6 w-6" /> : link.name}
                        </a></Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center lg:ml-6 lg:justify-end">
               
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    {!user ?
                      <div>
                    
                      </div>
                      :
                      <>
                        <div>
                          <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={user?.image}
                              width={50}
                              height={50}
                              quality={100}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/profile">
                                <a
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                                </Link>
                              )}
                            </Menu.Item>
                            {/* <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href="/settings"
                                  >
                                  <a
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Settings
                                  </a>
                                </Link>
                              )}
                            </Menu.Item> */}
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={onSignOut}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    }
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                >
                  <Disclosure.Button
                    as="a"

                    className={link.current ?
                      "flex justify-center rounded-md bg-gray-600 px-3 py-2 text-base font-medium text-white" :
                      "flex justify-center rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  >
                    {!!link.Icon ? <link.Icon className="block h-6 w-6" /> : link.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              {!user ?
                <Disclosure.Button
                  as="button"
                  onClick={onSignIn}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign In
                </Disclosure.Button>
                :
                <>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={user?.image}
                        width={50}
                        height={50}
                        quality={100}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-white">
                        {user?.name}
                      </div>
                      <div className="text-sm font-medium text-gray-400">
                        {user?.email}
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                      as="a"
                      href="/profile"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Your Profile
                    </Disclosure.Button>
                    {/* <Link
                      href="/settings"
                    >f
                      <Disclosure.Button
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        as="a"
                        href="/settings"
                      >
                        Settings
                      </Disclosure.Button>
                    </Link> */}
                    <Disclosure.Button
                      as="button"
                      onClick={onSignOut}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </>
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
