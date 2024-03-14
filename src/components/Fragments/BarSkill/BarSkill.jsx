export default function BarSkill({ title, value }) {
  return (
    <div className="mt-3">
      <div className="persentase flex justify-between items-center">
        <p className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-sm text-samar">
          {title}
        </p>
        <p className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-sm text-samar">
          {value}
          {/* {console.log(parseInt(value))} */}
        </p>
      </div>
      <div className="progress-bar border border-primary w-full rounded-full h-2 mt-1 flex items-center">
        <div
          className={`bg-primary h-[5px] rounded-full mx-[2px]`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
