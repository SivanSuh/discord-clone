import Link from "next/link";
import Style from "./style.module.css";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.flexStructure}>
        <Link href="/">
          {/* <img src="../../logo.svg" /> */}
          <h1>Chat App</h1>
        </Link>
        <div>Search</div>
        <div className="flex items-center gap-2">
          <Link href="/auth/login">
            <div className={Style.button}>Login</div>
          </Link>
          <Link href="/auth/register">
            <div className={Style.register}>Register</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
