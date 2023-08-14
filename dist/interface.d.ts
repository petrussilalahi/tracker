export interface Event {
    eventType: string;
    scope: string;
    sessionId: string;
    profileId: string;
    timeStamp: string;
    properties: any;
    source: {
        scope: string;
        itemId: string;
        itemType: string;
        properties: any;
    };
    target: {
        scope: string;
        itemId: string;
        itemType: string;
        properties: any;
    };
}
export interface IdentifyPayload {
    events: Event[];
    sessionId: string;
}
export interface ScreenPayload {
    events: Event[];
    sessionId: string;
}
export interface onCustomEventsPayload {
    events: Event[];
    sessionId: string;
}
export interface Device {
    deviceId: "";
    brand: "";
    buildNumber: "";
    appName: "";
    deviceName: "";
    androidId: "";
    bundleId: "";
    model: "";
    osBase: "";
}
export type Devices = {
    deviceId: "";
    brand: "";
    buildNumber: "";
    appName: "";
    deviceName: "";
    androidId: "";
    bundleId: "";
    model: "";
    osBase: "";
};
