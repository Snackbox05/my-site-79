import { Permissions, webMethod } from 'wix-web-module';
import { mediaManager } from 'wix-media-backend';

export const getFileInfo = webMethod(Permissions.Anyone, async (fileUrl) => {
  return mediaManager.getFileInfo(fileUrl);
});


