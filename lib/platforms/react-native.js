import { Linking } from 'react-native'; // eslint-disable-line import/no-unresolved, max-len
import SafariView from "react-native-safari-view";

export const dance = authUrl => new Promise((resolve, reject) => {
      const handleUrl = (url) => {
        if (!url || url.indexOf('fail') > -1) {
          reject(url);
        } else {
          resolve(url);
        }
      };

      const onLinkChange = ({ url }) => {
        Linking.removeEventListener('url', onLinkChange);
        SafariView.dismiss();
        handleUrl(url);
      };

      Linking.addEventListener('url', onLinkChange);
      
      SafariView.show({ url: authUrl })
        .catch((err) => reject(err))
    });

export const request = fetch;
