import * as React from "react";

type Ctx = { value: boolean; toggle: () => void };
const ShowSideRailCtx = React.createContext<Ctx | null>(null);

export function ShowSideRailProvider({ children }: { children: React.ReactNode }) {
  const [value, set] = React.useState(false);
  const toggle = React.useCallback(() => set(v => !v), []);
  const ctx = React.useMemo(() => ({ value, toggle }), [value, toggle]);
  return <ShowSideRailCtx.Provider value={ctx}>{children}</ShowSideRailCtx.Provider>;
}

export function useShowSideRail() {
  const ctx = React.useContext(ShowSideRailCtx);
  if (!ctx) throw new Error("useShowSideRail must be used within ShowSideRailProvider");
  return ctx;
}
