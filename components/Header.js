export default function MainHeader() {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex items-center rounded-xl bg-slate-900 text-white h-14 px-5">
      <h2 className="instrument-serif-regular-italic text-xl">LangAI </h2>
      <div className="flex text-xs space-x-2 w-full justify-end">
        <p className="hover:cursor-pointer hover:text-gray-100">Features</p>
        <p className="hover:cursor-pointer hover:text-gray-100">FAQ</p>
        <p className="hover:cursor-pointer hover:text-gray-100">Contact</p>
      </div>
    </div>
  );
}
