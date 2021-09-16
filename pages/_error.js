function Error({ statusCode }) {
  return statusCode ? (
    statusCode === 404 ? (
      <div className="h-full flex flex-col w-full items-center justify-center">
        <h1>404 Page not Found</h1>
        <a
          href="/"
          className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
        >
          Go Back Home
        </a>
      </div>
    ) : (
      <div className="h-full flex flex-col w-full items-center justify-center">
        <h1>A {statusCode} occurred on the server</h1>
        <a
          href="/"
          className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
        >
          Go Back Home
        </a>
      </div>
    )
  ) : (
    <div className="h-full flex flex-col w-full items-center justify-center">
      <h1>An error occurred on client</h1>
      <a
        href="/"
        className="border py-4 text-xl px-16 border-accent hover:border-transparent transition-all duration-300 rounded hover:bg-accent"
      >
        Go Back Home
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
