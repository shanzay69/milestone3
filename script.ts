document.getElementById('resumeform')?.addEventListener('submit',function(event){
event.preventDefault();




const nameElement= document.getElementById('name')as    HTMLInputElement  ;
const emailElement= document.getElementById('email')as     HTMLInputElement  ;
const phoneElement= document.getElementById('phone')as    HTMLInputElement   ;
const ProfilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
const educationElement= document.getElementById('education')as     HTMLInputElement  ;
const experienceElement= document.getElementById('experience')as    HTMLInputElement   ;
const skillsElement= document.getElementById('skills')as    HTMLInputElement  ;

if ( ProfilePictureInput && nameElement &&  emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const profilePictureFile = ProfilePictureInput.files?.[0];
    let profilePictureURL = "";
    if (profilePictureFile instanceof File) {
      profilePictureURL = URL.createObjectURL(profilePictureFile);
    } else {
      console.error('Profile Picture file is not a valid File object.');
    }
    
    const resumeOutput = `
    <h2>Resume</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile Picture" class="profilePicture">` : ""}

    <p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
   `;

   const resumeOutputElement= document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else{
 console.error('the resume Output elements are missing')

}



}  else{
console.error('one or more Output elements are missing')

}

});
