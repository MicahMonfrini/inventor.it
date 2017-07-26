import React from "react";
import Head from "next/head";

const Header = () => (
  <div>
    <Head>
      <title>Inventor.it</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
      />
    </Head>
  </div>
);

export default Header;
