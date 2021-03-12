const buildProfile = (userObject) => {
  document.querySelector('#home-title').innerHTML = `<img src="${userObject.profileImage}" alt="userprofileimage"></img>
                                                     <h3>${userObject.name}</h3>
                                                     <p> You last logged in at ${userObject.lastSignedIn}. Welcome back!</p>
                                                     `;
  document.querySelector('#boards-container').innerHTML = `
                                                          `;
};

export default buildProfile;
