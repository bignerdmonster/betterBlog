import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">All the Things Charly Sowers has called me</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://bigrat.monster"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              "Fat got"
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://blm.org"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              "White Supremacist"
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthomasdonotseal.fandom.com%2Fwiki%2FThe_Holy_Discord_Moderator&psig=AOvVaw0ri8yiMNvj-VGQ8v61TgmW&ust=1737851593901000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND8_OjPj4sDFQAAAAAdAAAAABAE"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              "Greasy"
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://upload.wikimedia.org/wikipedia/en/e/e1/PigPen_%28Peanuts%29.png"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              "Dirty"
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://i.guim.co.uk/img/media/1d7375cb41d9619c68640c972e70844bc8977aa6/475_0_3347_2007/master/3347.jpg?width=465&dpr=1&s=none&crop=none"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              "Neo Nazi"
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="https://upload.wikimedia.org/wikipedia/commons/7/7f/Cavi.jpg"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              "Not Sock Wearing"
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
