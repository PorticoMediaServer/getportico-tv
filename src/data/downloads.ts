export type PlatformIconName =
  | 'windows'
  | 'apple'
  | 'linux'
  | 'docker'
  | 'android'
  | 'roku'
  | 'lg'
  | 'samsung'
  | 'fire-tv'
  | 'xbox';

export type DownloadItem = {
  name: string;
  detail: string;
  icon: PlatformIconName;
  action: 'Download' | 'Coming soon';
  href?: string;
};

export type DownloadGroup = {
  title: string;
  description: string;
  items: DownloadItem[];
};

const serverRelease = 'https://github.com/justinehler/portico/releases/latest/download';

export const downloadGroups: DownloadGroup[] = [
  {
    title: 'Portico Server',
    description: 'Install Portico on the computer that stores or can reach your media.',
    items: [
      { name: 'Windows', detail: 'Windows 10 and 11 · x64', icon: 'windows', action: 'Download', href: `${serverRelease}/portico-server-windows-x64.exe` },
      { name: 'macOS', detail: 'macOS 13 or later · Apple silicon and Intel', icon: 'apple', action: 'Download', href: `${serverRelease}/portico-server-macos-universal.dmg` },
      { name: 'Linux', detail: 'Debian and Ubuntu · x64 and ARM64', icon: 'linux', action: 'Download', href: `${serverRelease}/portico-server-linux-x64.tar.gz` },
      { name: 'Docker', detail: 'Docker Engine on Linux', icon: 'docker', action: 'Coming soon' }
    ]
  },
  {
    title: 'Phones and tablets',
    description: 'Keep your libraries, progress, and playback close at hand.',
    items: [
      { name: 'iPhone and iPad', detail: 'iOS and iPadOS', icon: 'apple', action: 'Download', href: 'https://testflight.apple.com/join/portico' },
      { name: 'Android', detail: 'Phones and tablets', icon: 'android', action: 'Coming soon' }
    ]
  },
  {
    title: 'TV and streaming devices',
    description: 'A remote-first Portico experience for the living room.',
    items: [
      { name: 'Apple TV', detail: 'tvOS', icon: 'apple', action: 'Coming soon' },
      { name: 'Android TV', detail: 'Android TV and Google TV', icon: 'android', action: 'Coming soon' },
      { name: 'Fire TV', detail: 'Fire OS and Vega OS', icon: 'fire-tv', action: 'Coming soon' },
      { name: 'Roku', detail: 'Roku streaming players and televisions', icon: 'roku', action: 'Coming soon' },
      { name: 'LG', detail: 'webOS televisions', icon: 'lg', action: 'Coming soon' },
      { name: 'Samsung', detail: 'Tizen televisions', icon: 'samsung', action: 'Coming soon' },
      { name: 'Xbox', detail: 'Xbox One and Xbox Series', icon: 'xbox', action: 'Coming soon' }
    ]
  }
];
