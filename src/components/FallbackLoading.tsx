import { Skeleton } from "@mui/material";

export const FallbackLoading = () => {
  return (
    <>
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", marginBottom: "20px" }}
      />
      <Skeleton variant="rounded" width="100%" height={700} />
    </>
  );
};
