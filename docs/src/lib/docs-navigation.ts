export type NavItem = {
  name: string;
  href: string;
};

export const allDocsPages: NavItem[] = [
  { name: "Introduction", href: "/" },
  { name: "Installation", href: "/installation" },
  { name: "Quick Start", href: "/quick-start" },
  { name: "Commands", href: "/commands" },
  { name: "Selectors", href: "/selectors" },
  { name: "Sessions", href: "/sessions" },
  { name: "Snapshots", href: "/snapshots" },
  { name: "Streaming", href: "/streaming" },
  { name: "CDP Mode", href: "/cdp-mode" },
  { name: "iOS Simulator", href: "/ios" },
  { name: "Changelog", href: "/changelog" },
];
