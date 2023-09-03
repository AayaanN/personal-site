import {Image} from 'next/image'
import Link from 'next/link'
import Header from './header'
import GlowingEffect from './glowing_effect'
import Projects from './projects/page'
import Work from './work/work'
import AboutMe from './about/about_me'
import Navbar from './navbar/navbar'
import Links from './links'
import Footer from './footer'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pr-24 pl-24 py-24 bg-[#0A1932] w-full">
      <GlowingEffect></GlowingEffect>

      <Navbar></Navbar>
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex flex-col">
        <Header></Header>
        <Links></Links>

        <AboutMe></AboutMe>
        <Work></Work>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </main>
  )
}
