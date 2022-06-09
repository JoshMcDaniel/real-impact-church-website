

export const createLocationLinkFromAddress = (address: string): string => {
  if (!address) {
    return '#';
  }
  return `https://google.com/maps/search/?api=1&query=${address}`
}