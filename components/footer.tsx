import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              Developed by Alhibb
            </p>
            <p className="text-sm mt-2">
              © 2025. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
  <Link 
    href="https://hackmd.io/@Alhibb/Agentipy" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm hover:underline"
  >
    Documentation
  </Link>
  <Link 
    href="https://discord.com/invite/agentipy" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm hover:underline"
  >
    Community
  </Link>
  <Link 
    href="https://hackmd.io/@Alhibb/Agentipy_code" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm hover:underline"
  >
    Code Tutorials
  </Link>
  <Link 
    href="https://github.com/niceberginc/agentipy" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm hover:underline"
  >
    GitHub
  </Link>
</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://github.com/Alhibb" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://x.com/I_Bakondare" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/in/alhibb/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

