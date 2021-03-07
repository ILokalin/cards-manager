export const Header = (params) => {
  const style = {
    header: {
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
  };

  return (
    <header className="header" style={style.header}>
      <nav className="navbar navbar-light bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-light">CardNav</span>
        </div>
      </nav>
    </header>
  );
};
