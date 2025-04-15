//components
import FeaturesBox from "./FeaturesBoxSingleCard";

export default function FeaturesBoxList() {
  return (
    <>
      <h2
        className="text-center  instrument-serif-regular-italic text-xl sm:text-2xl md:text-3xl pt-20 sm:pt-30 pb-3 sm:pb-5 text-center "
        id="features"
      >
        🛠️ Features
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  sm:text-xl inter-regular sm:max-w-4xl mx-auto ">
        <FeaturesBox
          title={"Custom AI-Generated Tasks"}
          body={
            "Personalized exercises based on your level and learning goals. Choose from translations, sentence corrections, vocabulary matching, and more"
          }
          emoji={"🎯"}
        />
        <FeaturesBox
          title={"Instant PDF Downloads"}
          body={
            "Save and practice offline. Generate your tasks and download them as a neatly formatted PDF to print or use anytime."
          }
          emoji={"📄"}
        />
        <FeaturesBox
          title={"Smart Language Selection"}
          body={
            "Learn in multiple languages. Pick from a range of supported languages and let AI craft exercises tailored to your needs."
          }
          emoji={"🌍"}
        />
        <FeaturesBox
          title={"Refine & Regenerate"}
          body={
            "Not satisfied with the task? Refine AI-generated content to better match your style, or regenerate exercises with a single click"
          }
          emoji={"🔄"}
        />
      </div>
    </>
  );
}
