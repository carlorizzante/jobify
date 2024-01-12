import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo.svg';
import LandingImg from '@/assets/main.svg';
import { Button } from '@/components/ui/button';

//  className="flex min-h-screen flex-col items-center justify-center gap-4 p-24"

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="grid lg:grid-cols-[1fr,400px] items-center max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">Job <span className="text-primary">Tracking</span> App</h1>
          <p className="leading-loose max-w-md mt-4">Lucide react exports a dynamic import map dynamicIconImports. Useful for applications that want to show icons dynamically by icon name. For example when using a content management system with where icon names are stored in a database.</p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  )
}
