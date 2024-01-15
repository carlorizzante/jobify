import {
  Navbar,
  Sidebar,
} from '@/components';

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar className="hidden lg:block lg:col-span-1 lg:min-h-screen" />
      <div className="lg:col-span-4 bg-red-400">
        <Navbar />
        <main className="">
          { children }
        </main>
      </div>
    </div>
  );
}
