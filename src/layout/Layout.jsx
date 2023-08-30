function Layout({ children }) {
  return (
    <>
      <div className="h-[100vh] bg-sky-100 text-center flex flex-col items-center">
        <div className="w-[100vw] h-1/4 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover pb-14">
          <div className="button-holder flex justify-center py-10 gap-3">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Layout;
