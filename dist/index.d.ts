import { Device } from './interface';
type EventHandlerObject = {
    onCustomEvents: (obj?: any, properties?: any) => void;
    onIdentify: (obj: any, properties: any) => void;
    onScreen: (obj: any) => void;
    setEndpoint: (endpoint: string, informationDevice: Device) => void;
};
export declare const cepTracker: () => EventHandlerObject;
export {};
