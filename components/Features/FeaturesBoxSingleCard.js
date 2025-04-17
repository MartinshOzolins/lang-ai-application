export default function FeaturesBox({ title, body, emoji }) {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-4 flex flex-col gap-2 text-sm sm:text-base xl:text-base">
      <span className="text-2xl">{emoji}</span>
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-gray-800">{body}</p>
    </div>
  );
}
