import React from "react";

const Head = ({ title = null, description = null }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Head;
