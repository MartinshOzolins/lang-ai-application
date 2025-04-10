export default function FeaturesBox({ title, body, emoji }) {
  return (
    <div className="w-full h-46 sm:h-64 bg-white shadow-lg rounded-md flex flex-col rounded-xl">
      <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-300 rounded-xl"></div>
      <div className="h-1/2 px-2 flex flex-col justify-start">
        <h2 className="font-semibold pl-1">{title}</h2>
        <p className="text-gray-800 text-xs sm:text-base  xl:text-lg">
          <span className="lg:pr-1">{emoji} </span>
          {body}
        </p>
      </div>
    </div>
  );
}
