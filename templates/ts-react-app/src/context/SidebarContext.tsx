import { FC, useState, createContext } from 'react';
type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContext>({} as SidebarContext);

interface ISidebarProvider {
  children: any;
}

/**
 * Provides the sidebar state and functions to toggle and close the sidebar.
 */
export const SidebarProvider: FC<ISidebarProvider> = ({ children }: any) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  /**
   * Toggles the sidebar state.
   */
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  /**
   * Closes the sidebar.
   */
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
