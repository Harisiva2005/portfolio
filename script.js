document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Ecommerce Site management system ',
            role: 'Developer',
            tech: 'JavaScript, HTML, CSS',
            outcome: 'succesfully created a site to order items from a site',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Medical supply management system ',
            role: 'Developer',
            tech: 'Mysql,Javascript,HTML',
            outcome: 'succesfully created a site to supply items to a medical store',
            link: '#'
        },
        // Add more projects as needed
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md');

        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('text-xl', 'font-bold', 'mb-2');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.classList.add('mb-2');
        projectDescription.textContent = project.description;

        const projectRole = document.createElement('p');
        projectRole.classList.add('mb-2');
        projectRole.textContent = `Role: ${project.role}`;

        const projectTech = document.createElement('p');
        projectTech.classList.add('mb-2');
        projectTech.textContent = `Tech Used: ${project.tech}`;

        const projectOutcome = document.createElement('p');
        projectOutcome.classList.add('mb-4');
        projectOutcome.textContent = `Outcome: ${project.outcome}`;

        const projectLink = document.createElement('a');
        projectLink.classList.add('text-blue-600', 'hover:underline');
        projectLink.href = project.link;
        projectLink.textContent = 'Learn more';

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectRole);
        projectCard.appendChild(projectTech);
        projectCard.appendChild(projectOutcome);
        projectCard.appendChild(projectLink);

        projectsList.appendChild(projectCard);
    });

    const testimonials = [
        {
            name: 'John Doe',
            testimonial: 'Great to work with, highly recommended!'
        },
        {
            name: 'Jane Smith',
            testimonial: 'Very skilled and professional.'
        },
        // Add more testimonials as needed
    ];

    const testimonialsList = document.getElementById('testimonials-list');

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('bg-white', 'p-4', 'rounded-md', 'shadow-md', 'mb-4');

        const testimonialName = document.createElement('p');
        testimonialName.classList.add('font-bold');
        testimonialName.textContent = testimonial.name;

        const testimonialText = document.createElement('p');
        testimonialText.textContent = testimonial.testimonial;

        testimonialCard.appendChild(testimonialName);
        testimonialCard.appendChild(testimonialText);

        testimonialsList.appendChild(testimonialCard);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}!`);
    });
});
