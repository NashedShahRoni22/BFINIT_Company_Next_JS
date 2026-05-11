const hardwarePrices = [
  {
    id: "server_1",
    name: "BFINIT Home Desktop Server",
    case: "Standard MATX Case",
    board: "Asus P12R-M Motherboard",
    processor: {
      model: "Intel Xeon E-2314",
      core: "4 Core",
      clock: "2.8GHz",
      cache: "8MB Cache",
      tdp: "65Watts"
    },
    cooler: "Intel Socket 1150/1155/1156 Copper Base/Aluminum Heat Sink & 3.5\" Fan w/4-Pin Connector for Intel up to 95W",
    psu: "MSI MAG A550BN 550W 80 PLUS Bronze ATX Power Supply / PSU",
    rams: [
      { id: 1, name: "2 x 8GB DDR4 3200MHz ECC UDIMM Memory" },
      { id: 2, name: "2 x 16GB DDR4 3200MHz ECC UDIMM Memory" },
      { id: 3, name: "2 x 32GB DDR4 3200MHz ECC UDIMM Memory" }
    ],
    ssd: [
      { id: 1, name: "Samsung PM893 960GB 2.5 SATA Enterprise SSD" },
      { id: 2, name: "Samsung PM893 1.92TB 2.5 SATA Enterprise SSD" },
      { id: 3, name: "Samsung PM893 3.84TB 2.5 SATA Enterprise SSD" }
    ],
    price: function(ramId, storageId) {
      if (ramId === 1 && storageId === 1) return 1695;
      if (ramId === 1 && storageId === 2) return 1763;
      if (ramId === 1 && storageId === 3) return 1913;
      if (ramId === 2 && storageId === 1) return 1875;
      if (ramId === 2 && storageId === 2) return 1958;
      if (ramId === 2 && storageId === 3) return 2108;
      if (ramId === 3 && storageId === 1) return 2055;
      if (ramId === 3 && storageId === 2) return 2138;
      if (ramId === 3 && storageId === 3) return 2288;
      return 1695; 
    }
  },
  {
    id: "server_2",
    name: "BFINIT Performance Office Server",
    case: "Standard MATX Case (Phanteks Enthoo Pro Black Tower Chassis)",
    board: "Supermicro X12SPL-F motherboard",
    processor: {
      model: "Intel Xeon Silver 4310",
      core: "12 Core",
      clock: "2.10GHz",
      cache: "18MB Cache",
      tdp: "120 Watts"
    },
    cooler: "Supermicro SNK-P0080AP4 4U Active CPU Heat Sink",
    psu: "Corsair RMe Series RM850e 850W 80 PLUS Gold Fully Modular ATX Power Supply",
    rams: [
      { id: 1, name: "2 x 8GB 3200MHz ECC RDIMM RAM Module" },
      { id: 2, name: "2 x 16GB 3200MHz ECC RDIMM RAM Module" },
      { id: 3, name: "2 x 32GB 3200MHz ECC RDIMM RAM Module" }
    ],
    ssd: [
      { id: 1, name: "Samsung PM893 960GB 2.5 SATA Enterprise SSD" },
      { id: 2, name: "Samsung PM893 1.92TB 2.5 SATA Enterprise SSD" },
      { id: 3, name: "Samsung PM893 3.84TB 2.5 SATA Enterprise SSD" }
    ],
    price: function(ramId, storageId) {
      if (ramId === 1 && storageId === 1) return 2633;
      if (ramId === 1 && storageId === 2) return 2895;
      if (ramId === 1 && storageId === 3) return 3045;
      if (ramId === 2 && storageId === 1) return 2828;
      if (ramId === 2 && storageId === 2) return 3090;
      if (ramId === 2 && storageId === 3) return 3240;
      if (ramId === 3 && storageId === 1) return 3023;
      if (ramId === 3 && storageId === 2) return 3285;
      if (ramId === 3 && storageId === 3) return 3420;
      return 2633; 
    }
  },
  {
    id: "server_3",
    name: "BFINIT Home Storage Server",
    case: "Standard MATX Case",
    board: "Asus P12R-M Motherboard",
    processor: {
      model: "Intel Xeon E-2314",
      core: "4 Core",
      clock: "2.8GHz",
      cache: "8MB Cache",
      tdp: "65Watts"
    },
    cooler: "Intel Socket 1150/1155/1156 Copper Base/Aluminum Heat Sink & 3.5\" Fan w/4-Pin Connector for Intel up to 95W",
    psu: "MSI MAG A550BN 550W 80 PLUS Bronze ATX Power Supply / PSU",
    rams: [
      { id: 1, name: "2 x 8GB DDR4 3200MHz ECC UDIMM Memory" },
      { id: 2, name: "2 x 16GB DDR4 3200MHz ECC UDIMM Memory" },
      { id: 3, name: "2 x 32GB DDR4 3200MHz ECC UDIMM Memory" }
    ],
    storage: [
      { id: 1, name: "Seagate Exos X20 8TB 3.5 SATA Enterprise Hard Drive (HDD)" },
      { id: 2, name: "Seagate Exos X20 18TB 3.5 SATA Enterprise Hard Drive (HDD)" },
      { id: 3, name: "Seagate Exos X20 20TB 3.5 SATA Enterprise Hard Drive (HDD)" }
    ],
    price: function(ramId, storageId) {
      if (ramId === 1 && storageId === 1) return 1598;
      if (ramId === 1 && storageId === 2) return 1763;
      if (ramId === 1 && storageId === 3) return 1913;
      if (ramId === 2 && storageId === 1) return 1793;
      if (ramId === 2 && storageId === 2) return 1958;
      if (ramId === 2 && storageId === 3) return 2108;
      if (ramId === 3 && storageId === 1) return 1988;
      if (ramId === 3 && storageId === 2) return 2153;
      if (ramId === 3 && storageId === 3) return 2303;
      return 1598; 
    }
  },
  {
    id: "server_4",
    name: "BFINIT Office Storage Server",
    case: "Standard MATX Case (Phanteks Enthoo Pro Black Tower Chassis)",
    board: "Supermicro X12SPL-F motherboard",
    processor: {
      model: "Intel Xeon Silver 4310",
      core: "12 Core",
      clock: "2.10GHz",
      cache: "18MB Cache",
      tdp: "120 Watts"
    },
    cooler: "Supermicro SNK-P0080AP4 4U Active CPU Heat Sink",
    psu: "Corsair RMe Series RM850e 850W 80 PLUS Gold Fully Modular ATX Power Supply",
    rams: [
      { id: 1, name: "2 x 8GB 3200MHz ECC RDIMM RAM Module" },
      { id: 2, name: "2 x 16GB 3200MHz ECC RDIMM RAM Module" },
      { id: 3, name: "2 x 32GB 3200MHz ECC RDIMM RAM Module" }
    ],
    storage: [
      { id: 1, name: "Seagate Exos X20 8TB 3.5 SATA Enterprise Hard Drive (HDD)" },
      { id: 2, name: "Seagate Exos X20 18TB 3.5 SATA Enterprise Hard Drive (HDD)" },
      { id: 3, name: "Seagate Exos X20 20TB 3.5 SATA Enterprise Hard Drive (HDD)" }
    ],
    price: function(ramId, storageId) {
      if (ramId === 1 && storageId === 1) return 2730;
      if (ramId === 1 && storageId === 2) return 2895;
      if (ramId === 1 && storageId === 3) return 3045;
      if (ramId === 2 && storageId === 1) return 2925;
      if (ramId === 2 && storageId === 2) return 3090;
      if (ramId === 2 && storageId === 3) return 3240;
      if (ramId === 3 && storageId === 1) return 3120;
      if (ramId === 3 && storageId === 2) return 3285;
      if (ramId === 3 && storageId === 3) return 3420;
      return 2730; 
    }
  }
];

export default hardwarePrices;