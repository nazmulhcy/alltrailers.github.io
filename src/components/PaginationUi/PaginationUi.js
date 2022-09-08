import * as React from "react";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ setPage, page, numPage = 10 }) {
  //   const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* // <Stack spacing={2}>
    //   <Typography>Page: {page}</Typography> */}
      <Pagination count={numPage} page={page} onChange={handleChange} />
      {/* // </Stack> */}
    </div>
  );
}
