const deviceKeys : Record<string, boolean> = {
    deviceId: true,
    brand: true,
    buildNumber: true,
    appName: true,
    bundleId: true,
    model: true,
    osBase: true,
  };

export function isValidDevice(obj:  Record<string, any>): boolean {
    for (var keys in obj) {;
        if (obj.hasOwnProperty(keys)) {
            if (!deviceKeys[keys]) {
                throw new Error('Invalid Device Key');
            }
        } else {
            return false
        }
    }
    return true;
}