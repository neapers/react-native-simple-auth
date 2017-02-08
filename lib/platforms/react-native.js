import { Linking } from 'react-native'; // eslint-disable-line import/no-unresolved, max-len
import SafariView from "react-native-safari-view";

export const dance = authUrl => SafariView.show({ url: authUrl })
  .then(() => new Promise((resolve, reject) => {
    const handleUrl = (url) => {
      if (!url || url.indexOf('fail') > -1) {
        reject(url);
      } else {
        resolve(url);
      }
    };

    const onLinkChange = ({ url }) => {
      Linking.removeEventListener('url', onLinkChange);
      handleUrl(url);
    };

    Linking.addEventListener('url', onLinkChange);
  }));

export const request = fetch;
