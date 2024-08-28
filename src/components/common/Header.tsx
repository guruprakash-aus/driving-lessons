import React from 'react'
import SideBarDrawer from './SideBarDrawer';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-10 rounded-md bg-white shadow-sm dark:bg-black">
    <nav className="p-4 transition-all">
      <div className="mx-8 flex flex-wrap items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-start">
          <SideBarDrawer />
        </div>

        {/* RIGHT SIDE  */}

        <div className="flex items-center space-x-3 md:space-x-6">
          {/* {user ? (
            <>
              <AvatarNav user={user} />
              <NotifyBtn />
              <BasketItem />
            </>
          ) : (
            <DialogWrapper isBtn btnTitle="Sign In">
              <AuthForm callbackUrl="/" />
            </DialogWrapper>
          )} */}
          Right
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header;