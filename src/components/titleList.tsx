export default function TitleList({
  title,
  text,
  cnTitle,
  cnText,
  text2,
  cnText2,
}: {
  title?: string;
  text?: string;
  cnTitle?: string;
  cnText?: string;
  text2?: string;
  cnText2?: string;
}) {
  return (
    <div className={`flex flex-1 flex-col gap-4`}>
      {title && (
        <h1 className={`${cnTitle} font-semibold text-base text-primary-black-950`}>
          {title}
        </h1>
      )}
      {text && (
        <p className={`${cnText} font-normal text-xs text-primary-black-700`}>
          {text}
        </p>
      )}
      {text2 && (
        <p className={`${cnText2} font-normal text-xs text-primary-black-700`}>
          {text2}
        </p>
      )}
    </div>
  );
}
