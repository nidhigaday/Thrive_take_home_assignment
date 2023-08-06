import { IconButton } from "./IconButton";
import { TableUser } from "../allTypes";

export const TableFooter = () => {
  const dataIds = [].map((item: TableUser) => item.id);
  const firstItem = Math.min(...dataIds);
  const lastitem = Math.max(...dataIds);

  return (
    <tr className="pagination">
      <td colSpan={7}>
        <div className="flex justifyRight fullWidth alignCenter spacing-medium">
          <div className="flex spacing-small">
            <span>
              {firstItem} - {lastitem}
            </span>
          </div>

          <IconButton
            imgSrc={"/images/left-arrow.png"}
            imgAlt="left-arrow"
            onClick={() => {}}
            ariaLabel="Go to the previous page"
          />
          <IconButton
            imgSrc={"/images/right-arrow.png"}
            imgAlt="right-arrow"
            onClick={() => {}}
            ariaLabel="Go to the next page"
          />
        </div>
      </td>
    </tr>
  );
};
