document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('loginPage');
    const coursesPage = document.getElementById('coursesPage');
    const courseDetailPage = document.getElementById('courseDetailPage');
    const loginForm = document.getElementById('loginForm');
    const courseList = document.getElementById('courseList');
    const courseTitle = document.getElementById('courseTitle');
    const courseDescription = document.getElementById('courseDescription');
    const backToCoursesButton = document.getElementById('backToCourses');

    const validUsername = 'user';
    const validPassword = 'password';

    const courses = [
        { id: 1, title: 'HTML Basics', description: 'Learn the basics of HTML.' },
        { id: 2, title: 'CSS Basics', description: 'Learn the basics of CSS.' },
        { id: 3, title: 'JavaScript Basics', description: 'Learn the basics of JavaScript.' }
    ];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            loginPage.classList.add('hidden');
            coursesPage.classList.remove('hidden');
            displayCourses();
        } else {
            alert('Invalid username or password');
        }
    });

    function displayCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.title;
            li.addEventListener('click', () => showCourseDetail(course));
            courseList.appendChild(li);
        });
    }

    function showCourseDetail(course) {
        coursesPage.classList.add('hidden');
        courseDetailPage.classList.remove('hidden');
        courseTitle.textContent = course.title;
        courseDescription.textContent = course.description;
    }

    backToCoursesButton.addEventListener('click', () => {
        courseDetailPage.classList.add('hidden');
        coursesPage.classList.remove('hidden');
    });
});
