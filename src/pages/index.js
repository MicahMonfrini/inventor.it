import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <h1>
        Welcome to Inventor.it
      </h1>
      <h3>
        Which Inventory Would You Like to View?
      </h3>
      <Link href="/books">
        <a>Books</a>
      </Link>
    </div>
  );
}

export default IndexPage;
