"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRecentSales } from "@/utils/payment";
import formatDateTime from "@/utils/formatDate";

const EarningsTable = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const result = await getRecentSales();
      setSales(result);
    };

    fetchSales();
  }, []);

  return (
    <div className="mt-10 w-full px-2 sm:px-4 lg:mt-20 lg:ml-64 mr-20">
      <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>

      <div className="max-w-[800px] overflow-x-auto rounded-md border border-gray-200 shadow-sm ">
        <Table className="min-w-[750px]">
          <TableHeader>
            <TableRow className="bg-slate-700 hover:bg-slate-700">
              <TableHead className="text-white">Book Title</TableHead>
              <TableHead className="text-white">Amount ($)</TableHead>
              <TableHead className="text-white">Content Type</TableHead>
              <TableHead className="text-white">Purchase Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {sales?.length > 0 ? (
              sales.map((sale) => (
                <TableRow key={sale.id}>
                  <TableCell className="font-medium">
                    {sale.book_title}
                  </TableCell>
                  <TableCell className="text-green-700 font-semibold">
                    {parseFloat(sale.amount).toFixed(2)}
                  </TableCell>
                  <TableCell className="capitalize">
                    {sale.content_type}
                  </TableCell>
                  <TableCell>{formatDateTime(sale.purchase_date)}</TableCell>
                  <TableCell>
                    <span
                      className={`${
                        sale.status === "approved"
                          ? "text-green-600"
                          : "text-gray-600"
                      } font-medium`}
                    >
                      {sale.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-slate-500">
                  No recent sales available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EarningsTable;
