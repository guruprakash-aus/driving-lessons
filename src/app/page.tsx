import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
// import Image from "next/image";
// import { auth } from "@/auth";

export default async function Home() {
  // const session = await auth();
  return (
    <>
      <Header />
      <HeroSection />
      {/* <h1>{JSON.stringify(session, null, 2)}</h1> */}
    </>
  );
}
