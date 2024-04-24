import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const photoResponse = await photoPromise;
    const userResponse = await userPromise;
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}
async function exampleUsage() {
  const result = await asyncUploadUser();
  console.log(result);
}

exampleUsage();