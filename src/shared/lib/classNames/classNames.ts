export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
  currentClassName: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    currentClassName,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
}
