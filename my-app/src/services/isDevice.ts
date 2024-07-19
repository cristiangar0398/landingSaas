export function IsMobileDevice(): boolean {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function IsIOSDevice(): boolean {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function IsAndroidDevice(): boolean {
    return /Mobi|Android/i.test(navigator.userAgent);
}
  