import { createContext, useContext, useState } from "react";

const PropsContext = createContext();
function PostProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkorLight, setisDarkorLight] = useState(false);

  return (
    <PropsContext.Provider
      value={{ isOpen, setIsOpen, isDarkorLight, setisDarkorLight }}
    >
      {children}
    </PropsContext.Provider>
  );
}

function useProps() {
  const context = useContext(PropsContext);
  return context;
}
export { PostProvider, useProps };
