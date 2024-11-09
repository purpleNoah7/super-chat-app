import { useEffect, useState } from "react";

export const isAuthMock = () => {
  const [auth, setAuth] = useState(false);

  return {
    auth,
    setAuth,
  };
};
