export function isEmpty(endpoint: string, informationDevice: any) : void {
    if (!endpoint || endpoint === '' || !informationDevice || Object.keys(informationDevice).length === 0) {
        throw new Error('Endpoint or Information Device is missing');
      } else if(typeof informationDevice !== 'object') {
        throw new Error('Information Device must be an object');
      }
}