import { useContext } from "react";
import { Box, Skeleton } from "@mui/material";

import { SortedDataContext } from "contexts/SortedDataContext";

import { IconButton } from "./IconButton";

export const TableFooter = () => {
  const { data, pagination, onPageChange } = useContext(SortedDataContext);

  if (!pagination || !data?.length) {
    return <Skeleton variant="rounded" width="100%" height={200} />;
  }

  const dataIds = data.map((item) => item.id);
  const firstItem = Math.min(...dataIds);
  const lastitem = Math.max(...dataIds);

  return (
    <tr className="pagination">
      <td colSpan={7}>
        <Box className="flex justifyRight fullWidth alignCenter spacing-medium">
          <Box className="flex spacing-small">
            <span>
              {firstItem} - {lastitem}
            </span>
            <span>of</span>
            <span>
              <strong>{pagination?.total}</strong>
            </span>
          </Box>

          <IconButton
            disabled={pagination?.page === 1}
            imgSrc={
              pagination?.page === 1
                ? "/images/disabled-left-arrow.png"
                : "/images/left-arrow.png"
            }
            imgAlt="left-arrow"
            onClick={() => onPageChange(pagination?.page - 1)}
          />
          <Box>
            <span>
              Page: <strong>{pagination?.page}</strong> of{" "}
              {pagination?.totalPages}
            </span>
          </Box>
          <IconButton
            disabled={pagination?.page === pagination?.totalPages}
            imgSrc={
              pagination?.page === pagination?.totalPages
                ? "/images/disabled-right-arrow.png"
                : "/images/right-arrow.png"
            }
            imgAlt="right-arrow"
            onClick={() => onPageChange(pagination?.page + 1)}
          />
        </Box>
      </td>
    </tr>
  );
};
