import baseApi from './base'; 
import { IdentifyPayload, ScreenPayload, onCustomEventsPayload, Device, Devices } from './interface';
import { profileAndSession } from './profile';
import { isEmpty } from './utils/validationIsEmpty';
import { isValidDevice } from './utils/validationKey';



let apiUrl: string;
let informationDevices: any;


type EventHandlerObject = {
  onCustomEvents: (obj?: any, properties?: any) => void;
  onIdentify: (obj: any, properties: any) => void;
  onScreen: (obj: any) => void;
  setEndpoint: (endpoint: string, informationDevice: Device) => void;
};


const setSameKeyValues = (jsons: any, key: string, value: any): any => {
  if (typeof jsons !== "object" || jsons === null) {
    return jsons;
  }

  for (const prop in jsons) {
    if (jsons.hasOwnProperty(prop)) {
      if (prop === key) {
        jsons[prop] = value;
      } else if (typeof jsons[prop] === "object") {
        setSameKeyValues(jsons[prop], key, value);
      }
    }
  }
  return jsons;
};




  export const cepTracker = (): EventHandlerObject => {

    const setEndpoint = (endpoint: string, informationDevice: Devices): void => {
      isEmpty(endpoint, informationDevice);
      apiUrl = endpoint;
      if(isValidDevice(informationDevice)) {
        informationDevices = informationDevice;
        profileAndSession(apiUrl, informationDevice);
      }
      // something(profileAndSession(apiUrl, informationDevices));
    };

  
    

    const onCustomEvents = (obj: any, properties?: any): void => {
      let tmpCustom : onCustomEventsPayload | undefined;
      let url = `${apiUrl}/cxs/eventcollector`;
      const evonCustomEvents  : onCustomEventsPayload  = {
        events: [
          {
            eventType: "",
            scope: informationDevices?.appName ,
            sessionId: informationDevices?.deviceId + 'android',
            profileId: informationDevices?.deviceId,
            timeStamp: new Date().toISOString(),
            properties: {},
            source: {
              scope: informationDevices?.appName,
              itemId: "" ,
              itemType: informationDevices?.osBase,
              properties: {},
            },
            target: {
              scope: informationDevices?.appName,
              itemId: "",
              itemType: informationDevices?.osBase,
              properties: informationDevices,
            },
          },
        ],
        sessionId: informationDevices?.deviceId+ 'android',
      };
      for (const key in obj) {
          tmpCustom = setSameKeyValues(evonCustomEvents, key, obj[key]);
      }
  
      if (tmpCustom) {
          if (properties) {
              tmpCustom.events[0].properties = properties;
          }
          baseApi(url, tmpCustom);
      }
  };
  
   const onIdentify = (obj: any, properties: any): void => {
      let tmpIdentify: IdentifyPayload | undefined;
      let url = `${apiUrl}/cxs/eventcollector`;
      const evonIdentify : IdentifyPayload  = {
        events: [
          {
            eventType: "",
            scope: informationDevices?.appName ,
            sessionId: informationDevices?.deviceId + 'android',
            profileId: informationDevices?.deviceId,
            timeStamp: new Date().toISOString(),
            properties: {},
            source: {
              scope: informationDevices?.appName,
              itemId: "" ,
              itemType: informationDevices?.osBase,
              properties: {},
            },
            target: {
              scope: informationDevices?.appName,
              itemId: "",
              itemType: informationDevices?.osBase,
              properties: informationDevices,
            },
          },
        ],
        sessionId: informationDevices?.deviceId+'android',
      };
      for (const key in obj) {
        tmpIdentify = setSameKeyValues(evonIdentify, key, obj[key]);
      }
      if (tmpIdentify) {
        if (properties) {
          tmpIdentify.events[0].properties = properties;
        }
        baseApi(url, tmpIdentify);
      }
    };
  
    const onScreen = (obj: any, properties?: any): void => {
      let tmpView: ScreenPayload | undefined;
      let url = `${apiUrl}/cxs/eventcollector`;
      const evonScreen : ScreenPayload  = {
        events: [
          {
            eventType: "",
            scope: informationDevices?.appName ,
            sessionId: informationDevices?.deviceId + 'android',
            profileId: informationDevices?.deviceId,
            timeStamp: new Date().toISOString(),
            properties: {},
            source: {
              scope: informationDevices?.appName,
              itemId: "" ,
              itemType: informationDevices?.osBase,
              properties: {},
            },
            target: {
              scope: informationDevices?.appName,
              itemId: "",
              itemType: informationDevices?.osBase,
              properties: informationDevices,
            },
          },
        ],
        sessionId: informationDevices?.deviceId+ 'android',
      };
      for (const key in obj) {
        tmpView = setSameKeyValues(evonScreen, key, obj[key]);
      }
    
      if (tmpView) {
        if (properties) {
          tmpView.events[0].target.properties = properties;
        }
        baseApi(url, tmpView);
      }
    };

    return {
      onCustomEvents: onCustomEvents,
      onIdentify: onIdentify,
      onScreen: onScreen,
      setEndpoint: setEndpoint
    };


  } 



   

 