import clsx from "clsx";
import { IoArrowDownOutline, IoArrowForward } from "react-icons/io5";
import Button from "../Button";
import Heading from "../heading";
import Img from "../Img";

export interface IBlogCard {
  author: string;
  createdAt: string;
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  id: string;
}

const BlogCard = ({
  data,
  variant = "vertical",
  className,
  onClick,
}: {
  data: IBlogCard;
  variant?: "vertical" | "horizontal" | "vertical-list" | "tile";
  className?: string;
  onClick?: () => void;
}) => {
  if (!data) return null;
  const { title, subtitle, image, createdAt, author } = data;

  return (
    <div
      onClick={onClick}
      className={clsx(
        "space-y-4 rounded-2xl group h-full",
        {
          "grid grid-cols-2 gap-6": variant === "horizontal",
          "!rounded-none": variant === "vertical-list",
          "cursor-pointer": onClick,
        },
        className
      )}
    >
      <div
        className={clsx(
          "relative flex justify-center overflow-hidden rounded-lg min-h-[250px] bg-[#1a1a1a]",
          {
            "h-[280px] !rounded-none": variant === "vertical-list",
            "h-[300px]": variant === "vertical",
            hidden: variant === "tile",
          }
        )}
      >
        <>
          <div
            className="bg-cover bg-center w-full h-full blur-xl"
            style={{ backgroundImage: `url(${image})` }}
          />
          <Img
            src={image}
            height={300}
            width={600}
            alt={title}
            className="h-full absolute object-cover object-center"
            priority
          />
        </>
        {variant === "vertical-list" && (
          <div className="h-[70px] px-5 backdrop-blur-md bg-white/30 border-t-white/30 w-full absolute bottom-0 flex justify-between items-center font-medium text-sm text-white">
            <span>{author}</span>
            <span>{createdAt}</span>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <div className="flex gap-x-3 items-start">
          {variant === "tile" && (
            <Img
              src={image}
              height={44}
              width={80}
              alt={title}
              className="rounded-lg h-11 object-cover"
            />
          )}
          <div
            className={clsx(
              variant === "tile" ? "gap-y-1 flex flex-col" : "space-y-2 w-full"
            )}
          >
            <div className="flex justify-between items-center order-last">
              {variant !== "vertical-list" && (
                <Heading className="text-sm text-gray-600" type="normal">
                  {author + " • " + createdAt}
                </Heading>
              )}
              {!["vertical-list", "tile"].includes(variant) && (
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 group-hover:bg-gray-100">
                  <IoArrowForward size={18} />
                </span>
              )}
            </div>
            <Heading
              className={clsx(
                "text-gray-900",
                variant === "tile" ? "text-base line-clamp-2" : "text-xl"
              )}
              type="normal"
            >
              {title}
            </Heading>
          </div>
        </div>
        <p
          className={clsx(
            "text-gray-600",
            variant === "tile" ? "line-clamp-2 text-sm" : "line-clamp-4"
          )}
        >
          {subtitle}
        </p>
        {variant === "vertical-list" && (
          <Button
            size="sm"
            variant="outline"
            className="!p-0 !border-0 !text-violet-900 gap-1"
          >
            Read post
            <IoArrowDownOutline
              size={20}
              className="text-violet-900 -rotate-[135deg]"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
