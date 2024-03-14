export default function Image({ src, alt, classname }) {
  return <img className={classname} src={src} alt={alt} />;
}
