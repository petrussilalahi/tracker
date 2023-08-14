import baseApi from './base';

interface ProfileData {
  itemId: string;
  itemType: string;
  version: number;
  properties: any;
  systemProperties: any;
  segments: any[];
  scores: any;
  mergedWith: string;
  consents: any;
}

interface SessionData {
  itemId: string;
  itemType: string;
  scope: string;
  version: number;
  profileId: string;
  profile: any;
  properties: any;
  systemProperties: any;
  timeStamp: string;
}

export const profileAndSession = async (endpoint: string, informationDevices: any) => {
  const data: ProfileData = {
    itemId: informationDevices?.deviceId || '',
    itemType: 'profile',
    version: 0,
    properties: {},
    systemProperties: {},
    segments: [],
    scores: {},
    mergedWith: '',
    consents: {},
  };
  
  try {
    const profileData =  await baseApi(`${endpoint}/cxs/profiles`, data);
    if (profileData.status === 200) {
      const sessionId: SessionData = {
        itemId: informationDevices?.deviceId + 'android' || '',
        itemType: 'session',
        scope: informationDevices?.appName || '',
        version: 1,
        profileId: informationDevices?.deviceId || '',
        profile: data,
        properties: {},
        systemProperties: {},
        timeStamp: new Date().toISOString(),
      };
      await baseApi(`${endpoint}/cxs/profiles/sessions/${informationDevices?.deviceId}android`, sessionId);
    }
  } catch (error) {
    throw new Error('Error Register Profile And Session, Please Contact Support');
  } finally{
    console.log('finally profileAndSession');
  }
};
