import Link from 'next/link';

import NavigationBar from '@/components/navigation/navigation-bar';

export default function HomePage() {
  return (
    <main className="bg-home-desktop flex min-h-screen flex-col space-y-8 bg-cover">
      <NavigationBar />
      <article className="flex flex-row px-36 pt-80">
        <div className="text-white w-[45vw] flex-col pr-24">
          <h3 className="text-3xl">So, you want to travel to</h3>
          <h1 className="text-9xl">Space</h1>
          <div className="mt-12">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="flex h-full w-[40vw] items-center justify-end">
          <Link
            href="/crew"
            className="bg-white/0 hover:bg-white/10 flex h-80 w-80 items-center justify-center rounded-full transition-colors duration-200"
          >
            <div className="bg-white flex h-60 w-60 items-center justify-center rounded-full">
              <div className="text-3xl uppercase">Explore</div>
            </div>
          </Link>
        </div>
      </article>
    </main>
  );
}
