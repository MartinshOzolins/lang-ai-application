export default function MainHeader() {
  return (
    <div className="w-full flex justify-center px-3 sm:px-7 py-2 fixed top-3">
      <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-row px-5 py-2 items-center bg-slate-900  text-white rounded-xl h-14 ">
        <h2 className="instrument-serif-regular-italic pr-7 text-xl">
          LangAI{" "}
        </h2>
        <div className="flex text-xs space-x-2 w-full justify-end">
          <p className="hover:cursor-pointer hover:text-gray-100">Features</p>
          <p className="hover:cursor-pointer hover:text-gray-100">FAQ</p>
          <p className="hover:cursor-pointer hover:text-gray-100">Contact</p>
        </div>
      </div>
    </div>
  );
}
