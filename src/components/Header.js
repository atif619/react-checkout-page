import React from "react";

// import dhlLogo from "../assets/dhl.png";

const Header = () => {
  //   const [sticky, setSticky] = useState("");
  //   const classes = `d-flex align-items-center ${sticky}`;

  //   function isScrolled() {
  //     const scrollTop = window.scrollY;
  //     const stickyClass = scrollTop > 0 ? "is-sticky" : "";
  //     setSticky(stickyClass);
  //     // console.log(stickyClass);
  //   }

  //   useEffect(() => {
  //     window.addEventListener("scroll", isScrolled);
  //   }, []);

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container border-bottom py-4">
          <div className="row justify-content-between align-items-center flex-wrap">
            <div className="col-xl-4 col-lg-12 d-flex justify-content-xl-start justify-content-center">
              <h3>Brand Logo</h3>
            </div>
            <div className="col-xl-4 col-lg-12 d-flex justify-content-center my-xl-0 my-2">
              <ul className="p-0 m-0">
                <li className="d-inline-block m-0">
                  <a href="#" className="mx-4 text-black text-decoration-none">
                    Men
                  </a>
                </li>
                <li className="d-inline-block m-0">
                  <a href="#" className="mx-4 text-black text-decoration-none">
                    Women
                  </a>
                </li>
                <li className="d-inline-block m-0">
                  <a href="#" className="mx-4 text-black text-decoration-none">
                    Kids
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-12 d-flex justify-content-xl-end justify-content-center ">
              <i className="bi bi-search mx-3"></i>
              <i className="bi bi-cart3 mx-3"></i>
              <i className="bi bi-person ms-3"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
