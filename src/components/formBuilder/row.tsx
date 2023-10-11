import { FC, PropsWithChildren } from "react";

export const FormRow: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div style={{ display: 'flex', gap: 26, justifyContent: 'justify' }}>
    {children}
  </div>
);
