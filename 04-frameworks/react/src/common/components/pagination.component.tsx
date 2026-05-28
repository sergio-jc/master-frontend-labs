import { Button } from "@/common/ui/button";

interface Props {
  page: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const PaginationComponent: React.FC<Props> = (props) => {
  const { page, totalPages, onPreviousPage, onNextPage } = props;

  return (
    <div className="flex items-center justify-center gap-2">
      <Button onClick={onPreviousPage} disabled={page === 1}>
        Previous
      </Button>
      <span>
        {page} of {totalPages}
      </span>
      <Button onClick={onNextPage} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default PaginationComponent;
