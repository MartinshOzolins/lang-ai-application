export default function FeaturesBox({ title, body }) {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 ">
      <h2 className="font-semibold text-base sm:text-xl lg:text-xl">{title}</h2>
      <p className="text-gray-800 text-sm sm:text-lg">{body}</p>
    </div>
  );
}
