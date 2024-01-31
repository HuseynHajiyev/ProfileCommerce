import {Cloudinary} from "@cloudinary/url-gen";


export const useCloud = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dfakoycfs'
    }
  });

  return {
    cld
  }
};