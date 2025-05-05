// Constant SVGs
import { CloseIconSvg, HamburgerButtonSvg } from "../../../constants/svgs";

export default function MobileNavToggle({
  isSmallNavBarOpen,
  setIsSmallNavBarOpen,
}) {
  return (
    <div className="text-xs space-x-2 w-full justify-end flex sm:hidden">
      {!isSmallNavBarOpen ? (
        <HamburgerButtonSvg
          onClick={() => setIsSmallNavBarOpen(!isSmallNavBarOpen)}
        />
      ) : (
        <CloseIconSvg
          onClick={() => setIsSmallNavBarOpen(!isSmallNavBarOpen)}
        />
      )}
    </div>
  );
}
