import parse, { DOMNode } from "html-react-parser";

export default function Title({
  title,
  text,
  cnTitle,
  cnText,
  singleLine = false,
  subTitle,
  subTitleCn,
  aos = "",
}: {
  title?: string | string[];
  text?: string[] | string;
  cnTitle?: string;
  cnText?: string;
  subTitleCn?: string;
  singleLine?: boolean;
  subTitle?: string;
  aos?: string;
}) {
  const parseJSXString = (jsxString: string, buttonContent?: string) => {
    try {
      const cleanedString = jsxString
        .replace(/^\(\s*/, "")
        .replace(/\s*\)$/, "");

      return parse(cleanedString, {
        replace: (domNode: DOMNode) => {
          if (
            domNode instanceof HTMLElement &&
            domNode.tagName.toLowerCase() === "button"
          ) {
            return (
              <button className="text-primary font-semibold underline">
                {buttonContent || "Saiba mais"}
              </button>
            );
          }
        },
      });
    } catch (error) {
      console.error("Error parsing JSX string:", error);
      return null;
    }
  };

  return (
    <div data-aos={aos} className="flex flex-1 flex-col gap-3">
      {subTitle && (
        <p
          className={`${subTitleCn} max-md:text-sm text-lg font-semibold text-primary-black-950`}
        >
          {subTitle}
        </p>
      )}

      {title && (
        <h1
          className={`${cnTitle} max-md:!text-xl md:text-2xl lg:text-[40px] lg:!leading-[50px] text-primary-black-950 font-semibold`}
        >
          {Array.isArray(title)
            ? title.map((line, index) => (
                <span key={index}>
                  {line
                    .split(/("[^"]+")/g)
                    .map((part, i) =>
                      part.startsWith('"') && part.endsWith('"') ? (
                        <strong key={i}>{part.slice(1, -1)}</strong>
                      ) : (
                        part
                      )
                    )}
                  <br />
                </span>
              ))
            : parseJSXString(title)}
        </h1>
      )}

      {text &&
        (Array.isArray(text) ? (
          singleLine ? (
            <p
              className={`${cnText} font-normal !text-sm lg:text-base text-primary-black-700`}
            >
              {text.join(" ")}
            </p>
          ) : (
            <div
              className={`${cnText} font-normal !text-sm lg:text-base text-primary-black-700`}
            >
              {text.map((line, index) => (
                <span key={index}>
                  {line
                    .split(/("[^"]+")/g)
                    .map((part, i) =>
                      part.startsWith('"') && part.endsWith('"') ? (
                        <strong key={i}>{part.slice(1, -1)}</strong>
                      ) : (
                        part
                      )
                    )}
                  <br />
                </span>
              ))}
            </div>
          )
        ) : (
          <div
            className={`${cnText} font-normal !text-sm lg:text-base text-primary-black-700`}
          >
            {parseJSXString(text)}
          </div>
        ))}
    </div>
  );
}
