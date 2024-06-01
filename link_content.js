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
    if (links.classList.contains('show')) {
        links.classList.remove('show');
    } else {
        links.classList.add('show');
    }
}


// below is for the skills

const skillsData = {
    rProgramming: [
        { name: 'R Programming', level: '90%', info: 'See examples of my code in GitHub' },
        { name: 'Shiny Development', level: '90%', info: 'Two of my production-grade shiny apps are highlighted in my projects' },
        { name: 'Quarto', level: '90%', info: 'Proficient in Quarto for creating automated reports, presentations, and websites (see my projects)' },
        { name: 'WCAG 2.2 (Accessibility)', level: '53%', info: 'Experienced in making R applications accessible, this is a topic of particular passion' },
        { name: 'Package Development', level: '53%', info: 'I have developed several packages for data viz and Shiny, though I have not pushed any to CRAN' },
        { name: 'Version Control', level: '90%', info: 'Proficient in version control using Git and GitHub' },
        { name: 'R Viz Libraries', level: '90%', info: '{ggplot}, {highcharter}, {echarts4r}, {plotly}, {leaflet}' },
        { name: 'JavaScript', level: '17%', info: 'I focus on JavaScript integrations with R applications, though I am learning React and D3' },
        { name: 'HTML & CSS', level: '53%', info: 'Regularly use for better ui/ux in R' },
        { name: 'SQL Querying', level: '30%', info: 'I can write SQL queries in SQL and R' }

    ],
    dataVisualization: [
        { name: 'InDesign & Illustrator', level: '90%', info: 'I have used these tools to create reports, infographics and visualizations since 2008' },
        { name: 'Photoshop', level: '53%', info: 'Mostly used for adding animation to Quarto presentations' },
        { name: 'Tableau/PowerBI', level: '17%', info: 'I much prefer R Shiny for dashboards' },
        { name: 'Arc GIS', level: '60%', info: 'I now mostly use R for maps' },
        { name: 'Wireframing', level: '90%', info: 'I wireframe in Illustrator, though I am interested in learning Figma' },
        { name: 'Report Design', level: '90%', info: 'Quarto and InDesign, see examples in my gallery' }
    ],
    dataScience: [
        { name: 'Instrument Development', level: '90%', info: 'Includes qualitative tools (e.g., key informant interview guides) as well as survey design, following the Tailored Design Method' },
        { name: 'Data Collection', level: '90%', info: 'I have developed custom tools for data collection in addition to using RedCap and Qualtrics' },
        { name: 'NVivo', level: '60%', info: 'For qualitative work, though it has been awhile' },
        { name: 'Discovery & User Testing', level: '90%', info: '10+ years of experience with qualitative data' },
        { name: 'Data Integration', level: '90%', info: 'Experience combining numerous datasets across an organization' },
        { name: 'Data Wrangling', level: '90%', info: 'Proficient in data wrangling and manipulation.' },
        { name: 'Predictive Analytics', level: '75%', info: 'Very comfortable with all forms of regression' },
        { name: 'Inferential Statistics', level: '90%', info: 'T-tests, ANOVA, DiD, chi-square, etc.' }
    ],
    leadershipPeople: [
        { name: 'Public Speaking', level: '90%', info: 'I tend to make the audience chuckle' },
        { name: 'Supervision & Management', level: '90%', info: 'Six years of experience supervising other staff' },
        { name: 'Project Management', level: '90%', info: 'A decade on experience with project management, refined while in academia' },
        { name: 'Great Conversationalist', level: '90%', info: 'I am great at chit chat!' }
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


///
