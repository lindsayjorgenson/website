document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('#links a');
  const contentItems = document.querySelectorAll('.content-item');

  // Set the initial active link and content
  const initialActiveLink = document.querySelector('#links a[data-content="content1"]');
  initialActiveLink.classList.add('active');
  document.getElementById('content1').style.display = 'block';

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove 'active' class from all links
      links.forEach(l => l.classList.remove('active'));

      // Add 'active' class to the clicked link
      this.classList.add('active');

      // Hide all content items
      contentItems.forEach(item => item.style.display = 'none');

      // Show the selected content item
      const contentId = this.getAttribute('data-content');
      document.getElementById(contentId).style.display = 'block';
    });
  });
});



function toggleMenu() {
    var links = document.getElementById('links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
}


// below is for the skills

const skillsData = {
    rProgramming: [
        { name: 'R Programming', level: '90%', info: 'Expert in R programming with 5 years of experience.' },
        { name: 'Shiny Development', level: '90%', info: 'Skilled in developing Shiny applications.' },
        { name: 'Quarto', level: '90%', info: 'Proficient in Quarto for creating reports, docs, and websites.' },
        { name: 'Accessibility with R', level: '90%', info: 'Experienced in making R applications accessible according to WCAG2 standards.' },
        { name: 'Predictive Analytics', level: '50%', info: 'Good understanding of predictive analytics methods.' },
        { name: 'Inferential Statistics', level: '50%', info: 'Knowledgeable in inferential statistics techniques.' },
        { name: 'Tidyverse Styling', level: '90%', info: 'Proficient in using the Tidyverse suite for data manipulation and analysis.' },
        { name: 'Package Development', level: '70%', info: 'Experienced in developing R packages.' },
        { name: 'Version Control', level: '80%', info: 'Proficient in version control using Git and GitHub.' },
        { name: 'R Viz Libraries', level: '90%', info: 'Expert in using various R visualization libraries.' },
        { name: 'JavaScript Integration', level: '30%', info: 'Skilled in integrating JavaScript with R applications.' }
    ],
    dataVisualization: [
        { name: 'ggplot2', level: '90%', info: 'Expert in creating visualizations using ggplot2.' },
        { name: 'Plotly', level: '80%', info: 'Skilled in interactive visualizations with Plotly.' },
        { name: 'Leaflet', level: '70%', info: 'Experienced in creating maps with Leaflet.' },
        { name: 'Highcharter', level: '60%', info: 'Good understanding of Highcharter for interactive charts.' },
        { name: 'D3.js', level: '50%', info: 'Knowledgeable in using D3.js for data-driven documents.' },
        { name: 'Data Wrangling', level: '85%', info: 'Proficient in data wrangling and manipulation.' },
        { name: 'Dashboards', level: '75%', info: 'Experienced in creating dashboards.' },
        { name: 'Interactive Visualizations', level: '80%', info: 'Skilled in creating interactive visualizations.' }
    ]
};

function updateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    const selectedCategory = document.getElementById('skillCategory').value;
    const skills = skillsData[selectedCategory];

    skillsContainer.innerHTML = '';

    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill';

        const skillName = document.createElement('span');
        skillName.textContent = skill.name;
        skillDiv.appendChild(skillName);

        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';
        skillDiv.appendChild(lineDiv);

        const dotDiv = document.createElement('div');
        dotDiv.className = 'dot';
        dotDiv.style.left = skill.level;

        const tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip';
        tooltipDiv.textContent = skill.info;
        dotDiv.appendChild(tooltipDiv);

        lineDiv.appendChild(dotDiv);
        skillsContainer.appendChild(skillDiv);
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', updateSkills);
