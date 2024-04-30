import { FC } from 'react';

export type SidebarItemType = {
  path: string
  text: string
  Icon: FC<{ color: string }>;
  authOnly?: boolean;
}
