"use client";
import React, { useState } from "react";
import { BsX, BsCheck2 } from "react-icons/bs";

const tableData = [
  {
    category: "Hardware Specs",
    specs: [
      {
        name: "RAM",
        values: ["4 GB - 32 GB", "4 GB - 32 GB", "32 GB - 256 GB"],
      },
      { name: "HDD", values: [false, "250 GB - 2 TB", "2x 1 TB - 4x 10 TB"] },
      {
        name: "SSD",
        values: ["100 GB - 500 GB", false, "2x 512 GB - 4x 2 TB"],
      },
      { name: "NVMe SSD", values: [false, false, "2x 1 TB NVMe SSD"] },
      {
        name: "Network",
        values: ["100 Mbit/s", "100 Mbit/s", "Up to 1 Gbit/s"],
      },
      { name: "Virtualization", values: ["None", "None", "None"] },
    ],
  },
  {
    category: "Control Panel",
    specs: [
      { name: "Acronis Backup", values: [true, true, true] },
      { name: "Control Panel: Plesk", values: [true, true, true] },
      { name: "cPanel", values: [true, true, true] },
      { name: "Extra IP", values: [false, true, true] },
    ],
  },
  {
    category: "OS",
    specs: [
      { name: "Windows 2022", values: [true, true, true] },
      { name: "Windows 2019", values: [true, true, true] },
      { name: "Windows 2016", values: [true, true, true] },
      { name: "AlmaLinux 9", values: [true, true, true] },
      { name: "AlmaLinux 8", values: [true, true, true] },
      { name: "Debian 12", values: [true, true, true] },
      { name: "Debian 11", values: [true, true, true] },
      { name: "Ubuntu 24.04 LTS", values: [true, true, true] },
      { name: "Ubuntu 22.04 LTS", values: [true, true, true] },
      { name: "Ubuntu 20.04 LTS", values: [true, true, true] },
      { name: "Ubuntu 18.04 LTS", values: [true, true, true] },
    ],
  },
];

export default function ServerCompare() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full px-5 py-10 text-brand md:container md:mx-auto md:px-0">
      {/* Header */}
      <h2 className="font-inter text-center text-4xl font-bold">
        Virtual Server or Dedicated Server
      </h2>
      <p className="mt-4 text-center text-lg">
        We&apos;ve compared the key performance differences to make your choice
        easier— check it out and make the best call!
      </p>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="border-royal-blue w-full overflow-hidden rounded-lg border shadow-md">
          {/* Table Header */}
          <thead>
            <tr className="bg-royal-blue font-bold text-white">
              <th className="p-3 text-left">Key Facts</th>
              <th className="p-3">Virtual Server SSD</th>
              <th className="p-3">Virtual Server HDD</th>
              <th className="p-3">Dedicated Server</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {(expanded ? tableData : tableData.slice(0, 1)).map(
              (section, index) => (
                <React.Fragment key={index}>
                  {/* Section Header Row */}
                  <tr className="bg-neutral-100">
                    <td className="p-3 font-semibold" colSpan="4">
                      {section.category}
                    </td>
                  </tr>

                  {/* Section Rows */}
                  {section.specs.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-neutral-200 border-t">
                      <td className="p-3 font-semibold">{row.name}</td>
                      {row.values.map((value, colIndex) => (
                        <td key={colIndex} className="p-3 text-center">
                          {value === true ? (
                            <BsCheck2 className="mx-auto text-xl text-green-500" />
                          ) : value === false ? (
                            <BsX className="mx-auto text-3xl text-red-500" />
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ),
            )}
          </tbody>
        </table>
      </div>

      {/* Expand Button */}
      {!expanded && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="cursor-pointer rounded-full border border-brand px-6 py-2 font-semibold transition-all duration-200 ease-linear hover:bg-gray-200">
            {expanded ? "Collapse" : "Expand to see all key facts"}
          </button>
        </div>
      )}
    </div>
  );
}
