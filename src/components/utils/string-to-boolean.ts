/**
 * Convert string like value to Boolean
 * @param value true | false | 'true' | 'false'
 * @returns boolean
 */
export function stringToBoolean(value: boolean | string | 'true' | 'false' | undefined): boolean {
  // some params could be undefined (not required)
  if (typeof value === 'undefined') return false;
  // if primitive boolean return self-value
  if (typeof value === 'boolean') {
    return value;
  }
  return value === 'true';
}
