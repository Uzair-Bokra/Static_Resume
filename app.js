var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsList = document.getElementById('skills-list');
toggleSkillsButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
