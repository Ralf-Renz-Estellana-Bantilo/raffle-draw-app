export type themeType = 'light' | 'dark';

export type contextValueType = {
   theme: themeType;
   isSidebarOpen: boolean;
   toggleTheme: () => void;
   toggleSidebar: () => void;
}

export type useColorSchemeType = {
   textColorPrimary: string,
   textColorSecondary: string,
   backgroundColor: string,
   containerColor: string
}