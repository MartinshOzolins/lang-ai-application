export default function ErrorMessage({ formState }) {
  return (
    <>
      {formState?.error && (
        <p className="w-full p-4 text-red-600  inter-semibold">
          {formState.error}
        </p>
      )}
    </>
  );
}
