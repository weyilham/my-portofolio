export default function ItemList({ text, value }) {
  return (
    <div className="age flex justify-between items-center mt-1">
      <p className="text-[8px] md:text-[9px] lg:text-sm text-secondary bg-primary py-1 px-2">
        {text}
      </p>
      <p className="text-[8px] md:text-[9px] lg:text-sm text-right">{value}</p>
    </div>
  );
}
