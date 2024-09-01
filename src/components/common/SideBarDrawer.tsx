"use client"
import React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import {TiThMenu} from "react-icons/ti"
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Separator } from '../ui/separator';
import SideNavBar from './SideNavBar';
import { UserRoutes } from './routes';

type Props = {}

const SideBarDrawer = (props: Props) => {
  return (
    <Drawer>
    <DrawerTrigger className="rounded-full bg-violet-100 p-2 text-violet-500">
      <TiThMenu size={24} />
    </DrawerTrigger>
    <DrawerContent className="fixed inset-0 mt-0 h-screen w-40">
      <DrawerHeader>
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage src="/panda.jpg" alt="de-mawo" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          {/* <Image src="/panda.jpg" width={50} height={50} alt="logo"/> */}
        </div>
      </DrawerHeader>
      <SideNavBar items={UserRoutes} className="p-4" />
      <Separator className="my-4" />
      <div className="space-y-3 p-4">
        Side Nav Items
        {/* <ThemeToggle/>
        <LogOutButton withTooltip/> */}
      </div>
    </DrawerContent>
  </Drawer>
  )
}

export default SideBarDrawer