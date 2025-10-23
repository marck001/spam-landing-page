import { useCurrentYear } from "../hooks/utils";

export default function Footer() {
   const currentYear = useCurrentYear();
  return (
    <div className="text-center mt-8 text-purple-200 text-sm">
      <p> Last updated: October 20, {currentYear}</p>
    </div>
  );
}