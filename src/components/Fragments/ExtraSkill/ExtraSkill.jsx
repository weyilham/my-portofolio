export default function ExtraSkill({ title, icon }) {
  return (
    <div className="persentase flex flex-row items-center mt-2">
      <p className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-sm text-primary">
        {icon}
      </p>
      <p className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-sm text-samar ml-2">
        {title}
      </p>
    </div>
  );
}
