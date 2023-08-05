import { Box } from "@mui/material";

type IconButtonProps = {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
};

export const IconButton = ({
  className,
  imgSrc,
  imgAlt,
  onClick,
  disabled,
  ariaLabel,
}: IconButtonProps) => {
  const cls = [
    "iconButton",
    ...(className ? [className] : []),
    ...(disabled ? ["disabled"] : []),
  ].join(" ");

  // allows keyboard interactions for accessibility
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled && (event.key === "Enter" || event.key === " ")) {
      onClick();
    }
  };

  return (
    <Box
      role="button"
      className={cls}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={ariaLabel}
      aria-disabled={disabled ? "true" : "false"}
    >
      <img src={imgSrc} alt={imgAlt} />
    </Box>
  );
};
