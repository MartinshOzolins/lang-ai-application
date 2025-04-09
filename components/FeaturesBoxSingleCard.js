export default function FeaturesBox({ title, body, emoji }) {
  return (
    <div className="w-full h-62 sm:h-80 bg-white shadow-lg rounded-md flex flex-col ">
      <div className="h-1/2 bg-linear-to-t from-white-500 to-gray-300 rounded-xl"></div>
      <div className="h-1/2 px-2 flex flex-col justify-start">
        <h2 className="font-semibold">{title}</h2>
        <p>
          <span className="">{emoji} </span>
          {body}
        </p>
      </div>
    </div>
  );
}
