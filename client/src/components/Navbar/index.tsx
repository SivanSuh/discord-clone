import Link from "next/link";
import Style from "./style.module.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { clearResult } from "@/store/auth/authSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isLoggin } = useSelector((state: RootState) => state.user);

  const dispatch = AppDispatch();
  const router = useRouter();
  const logoutFunction = async () => {
    await dispatch(clearResult());
    router.push("/auth/login");
  };
  console.log("isLoggin", isLoggin);

  return (
    <div className={Style.navbar}>
      <div className={Style.flexStructure}>
        <div>
          {/* <img src="../../logo.svg" /> */}
          <h1>Chat App</h1>
        </div>
        <div></div>
        <div className="flex items-center gap-2">
          {isLoggin ? (
            <>
              <div className={Style.button} onClick={logoutFunction}>
                Logout
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <div className={Style.button}>Login</div>
              </Link>
              <Link href="/auth/register">
                <div className={Style.register}>Register</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
