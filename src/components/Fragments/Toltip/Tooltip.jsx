export default function Tooltip({ title }) {
  return (
    <div class="relative mx-2">
      <div class="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
        {title}
        <svg
          class="absolute text-black h-2 w-full left-0 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xml:space="preserve"
        >
          <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
}
