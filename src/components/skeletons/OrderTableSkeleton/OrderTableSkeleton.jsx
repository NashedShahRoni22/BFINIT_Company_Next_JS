import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function OrderTableSkeleton() {
  return (
    <div className="w-full border border-gray-200 rounded-xl p-4">
      <Table className="w-full border-separate border-spacing-y-4">
        <TableHeader>
          <TableRow className="bg-brand/20">
            <TableHead>#</TableHead>
            <TableHead>Package Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Starts</TableHead>
            <TableHead>Invoice</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 5 }).map((_, idx) => (
            <TableRow
              key={idx}
              className="bg-white shadow-sm border border-gray-200 rounded-lg">
              <TableCell className="rounded-l-lg">
                <div className="h-4 w-6 animate-pulse rounded bg-gray-200" />
              </TableCell>

              <TableCell>
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
              </TableCell>

              <TableCell>
                <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
              </TableCell>

              <TableCell>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              </TableCell>

              <TableCell>
                <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              </TableCell>

              <TableCell>
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              </TableCell>

              <TableCell className="rounded-r-lg">
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
