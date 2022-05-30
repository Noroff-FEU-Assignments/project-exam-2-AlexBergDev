import { Unauthorized } from "@/components/common";
import AuthContext from "@/context/AuthContext";

import { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [auth] = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.push("/dashboard");
    }
  }, [auth]);
  return <Unauthorized />;
}
