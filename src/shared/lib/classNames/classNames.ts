type Mods = Record<string, string | boolean>;

export function classNames(currentClassName: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        currentClassName,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}
