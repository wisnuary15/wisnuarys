import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { FaHome, FaEnvelope } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { MdForum } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'
import { RiOpenSourceLine } from 'react-icons/ri'
import Link from 'next/link'

export default function Footer({ }) {
  return (
    <footer className="py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-8 flex space-x-4 items-center ml-auto">
            <div className="flex space-x-4">
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mb-2">
          {/* Kolom 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <br />
              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <br />
              <li>
                <a href="/tags" className="hover:text-blue-400">
                  Tags
                </a>
              </li>
              <br />
              <li>
                <a href="/projects" className="hover:text-blue-400">
                  Project
                </a>
              </li>
              <br />
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
            </ul>
          </div>
          {/* Kolom 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul>
              <li>
                <a
                  href="/" //jangan lupa isiiii
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <MdForum className="w-6 h-6 mr-4" /> Forum
                </a>
              </li>
              <br />
              <li>
                <a
                  href="https://github.com/wisnuary15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <AiFillProject className="w-6 h-6 mr-4" /> Projects
                </a>
              </li>
              <br />
              <li>
                <a
                  href="https://github.com/wisnuary15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <RiOpenSourceLine className="w-6 h-6 mr-4" /> Open Source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  FAQs
                </a>
              </li>
              <br />
              <li>
                <a
                  href="sms:+6282245754509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  Privacy policy
                </a>
              </li>
              <br />
              <li>
                <a
                  href="sms:+6282245754509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <ul>
              <li>
                <a
                  href="https://maps.app.goo.gl/xuzRPWorxXgdbvkx9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <FaHome className="w-6 h-6 mr-4" /> Jombang, Jawa Timur, ID
                </a>
              </li>
              <br />
              <li>
                <a
                  href={`mailto:${siteMetadata.email}?subject=Subject%20Here&body=Write%20your%20message%20here`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <FaEnvelope className="w-6 h-6 mr-4" />
                  ary@gmail.com
                </a>
              </li>
              <br />
              <li>
                <a
                  href="sms:+6282245754509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <IoMdCall className="w-6 h-6 mr-4" />
                  +62 822 457 545 09
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-4 max-sm:flex-col max-sm:items-center">
          <div>
            Wisnu Ary Swadana
            <span>{` • `}</span>
            &copy; {new Date().getFullYear()}
          </div>
          <div>
            <Link href="/" className="text-blue-400">
              {' • '} Wisnu Blog
            </Link>
          </div>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}
