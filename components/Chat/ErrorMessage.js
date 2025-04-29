export default function ErrorMessage({ formState }) {
  return (
    <>
      {formState?.error && (
        <p className="w-full p-4 text-red-600  inter-regular text-base sm:text-lg xl:text-xl">
          {formState.error}
        </p>
      )}
    </>
  );
}
