function saveData()
 {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;
    var description = document.getElementById('description').value;
    var major = document.getElementById('major').value;
    var university = document.getElementById('university').value;
    var programmingLanguages = document.querySelectorAll('input[name="PL"]:checked');
    var programmingLanguagesArray = Array.from(programmingLanguages).map(pl => pl.value);
    var formData = 
    {
        name: name,
        age: age,
        gender: gender,
        description: description,
        major: major,
        university: university,
        programmingLanguages: programmingLanguagesArray
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved to local storage!');
}
function saveProject() 
{
    var subject = document.getElementById('subject').value;
    var description = document.getElementById('projectDescription').value;
    var userTypes = document.getElementById('userTypes').value;
    var technologyUsed = document.getElementById('technologyUsed').value;
    var projectData = 
    {
        subject: subject,
        description: description,
        userTypes: userTypes,
        technologyUsed: technologyUsed
    };
    sessionStorage.setItem('projectData', JSON.stringify(projectData));
    renderProjectCard(projectData);
    alert('Project information saved to session storage!');
}
function renderProjectCard(projectData) 
{
    var projectContainer = document.getElementById('projectContainer');
    var card = document.createElement('div');
    card.classList.add('project-card');
  card.innerHTML = `
        <strong>Subject:</strong> ${projectData.subject}<br>
        <strong>Description:</strong> ${projectData.description}<br>
        <strong>User Types:</strong> ${projectData.userTypes}<br>
        <strong>Technology Used:</strong> ${projectData.technologyUsed}
    `;
    projectContainer.appendChild(card);
}