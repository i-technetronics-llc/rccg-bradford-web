import { GiSpinningRibbons } from "react-icons/gi";

export default function UnitCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="max-w-[300px] h-[200px] overflow-hidden p-3 rounded-lg shadow-md bg-gradient-to-r from-primaryF to-secondaryF flex items-start gap-4">
      <GiSpinningRibbons className="w-[10%]" />
      <div className="w-[90%] flex flex-col gap-1 overflow-hidden">
        <p className="text-[#333] font-semibold">{title.toUpperCase()}</p>
        <p className="text-[#333] text-sm font-[600] w-full h-full overflow-hidden text-ellipsis line-clamp">
          {desc}
        </p>
      </div>
    </div>
  );
}
