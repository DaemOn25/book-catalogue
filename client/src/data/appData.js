export const table = {
  columns: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    {
      headerName: "Price",
      field: "price",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ],
  rowData: [
    { make: "Toyota", model: "Camry", price: 28000 },
    { make: "Ford", model: "Focus", price: 16700 },
    { make: "Hyundai", model: "Kona", price: 23500 },
  ],
};
