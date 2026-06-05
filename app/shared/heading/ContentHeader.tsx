import clsx from "clsx";
import Heading from ".";
import Text from "../Text";

const ContentHeader = ({
  title,
  description,
  sectionTitle,
  className,
  styleTitle,
  styleDescription,
  hideLine,
}: {
  title: string;
  description?: string;
  sectionTitle: string;
  className?: string;
  styleTitle?: string;
  styleDescription?: string;
  hideLine?: boolean;
}) => {
  return (
    <div className={clsx("flex flex-col items-center gap-y-5", className)}>
      {/* Section label with optional gradient lines */}
      <div
        className={clsx(
          "flex items-center gap-x-4 w-[100%]",
          !hideLine && "justify-center"
        )}
      >
        {!hideLine && (
          <div className="bg-chip-left-gradient w-[15%] h-[2px] rounded-full" />
        )}
        <Text
          size="sm"
          variant="brand-500"
          type="medium"
          className="text-nowrap uppercase tracking-wider"
        >
          {sectionTitle}
        </Text>
        {!hideLine && (
          <div className="bg-chip-right-gradient w-[15%] h-[2px] rounded-full" />
        )}
      </div>

      {/* Main title - using your funnel-display */}
      <Heading
        type="medium"
        className={clsx(
          "md:text-[48px] text-[36px] md:leading-[1.1] leading-[1.15] text-center font-funnel-display tracking-tight max-w-4xl",
          styleTitle
        )}
      >
        {title}
      </Heading>

      {/* Description */}
      {description && (
        <Text
          type="light"
          className={clsx(
            "max-w-[720px] text-center lg:text-[21px] text-lg leading-relaxed font-satoshi",
            styleDescription
          )}
        >
          {description}
        </Text>
      )}
    </div>
  );
};

export default ContentHeader;