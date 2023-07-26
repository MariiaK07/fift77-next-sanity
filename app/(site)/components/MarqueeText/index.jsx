import { playfair_display } from '../../fonts';

function MarqueeText({ text }) {
  const spanClass = `marquee__word title ${playfair_display.variable}`;

  return (
    <>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
      <span className={spanClass}>{text}</span>
    </>
  );
}

export default MarqueeText;
