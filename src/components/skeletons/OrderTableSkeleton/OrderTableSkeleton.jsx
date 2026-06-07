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
    <div className="overflow-hidden rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30 hover:bg-muted/30">
            <TableHead>Invoice</TableHead>
            <TableHead>Package</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Ordered At</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 3 }).map((_, index) => (
            <TableRow key={index}>
              {/* Invoice */}
              <TableCell>
                <div className="h-4 w-24 animate-pulse rounded-md bg-muted" />
              </TableCell>

              {/* Package */}
              <TableCell>
                <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />
              </TableCell>

              {/* Price */}
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-16 animate-pulse rounded-md bg-muted" />
                  <div className="h-3 w-10 animate-pulse rounded-md bg-muted" />
                </div>
              </TableCell>

              {/* Ordered At */}
              <TableCell>
                <div className="h-4 w-28 animate-pulse rounded-md bg-muted" />
              </TableCell>

              {/* Payment Method */}
              <TableCell>
                <div className="h-9 w-24 animate-pulse rounded-full bg-muted" />
              </TableCell>

              {/* Status */}
              <TableCell>
                <div className="h-8 w-20 animate-pulse rounded-full bg-muted" />
              </TableCell>

              {/* Action */}
              <TableCell className="text-right">
                <div className="ml-auto h-9 w-28 animate-pulse rounded-md bg-muted" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}