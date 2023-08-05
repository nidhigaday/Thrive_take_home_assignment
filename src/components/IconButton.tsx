import { Box } from "@mui/material";

type IconButtonProps = {
  className?: string;
  imgSrc: string;
  imgAlt: string;
  onClick: () => void;
  disabled?: boolean;
};

export const IconButton = ({
  className,
  imgSrc,
  imgAlt,
  onClick,
  disabled,
}: IconButtonProps) => {
  const cls = [
    "iconButton",
    ...(className ? [className] : []),
    ...(disabled ? ["disabled"] : []),
  ].join(" ");
  return (
    <Box className={cls} onClick={onClick}>
      <img src={imgSrc} alt={imgAlt} />
    </Box>
  );
};
