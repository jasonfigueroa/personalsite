const idGenerator = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
};

const projectIdFactory = idGenerator();

const projects_db = {
    "projects": [
        {
            "project_id": `${ projectIdFactory.next().value }`,
            "project_name": "blog",
            "project_title": "My Blog",
            "project_content": [
                `I have a <a href="https://jasonfigueroa.github.io">blog</a> that I started in the spring of 2017. It’s a statically generated site hosted on GitHub. I built the site using <a href="https://blog.getpelican.com/">Pelican</a>, a static site generator written in Python. The content written for that site is written in Markdown and the theme I used is a Pelican theme by <a href="https://parbhatpuri.com/">parbhat</a>, which I modified slightly. The workflow for updating that site is very concise which makes it a breeze to push content to the web.`,
                `There are somethings I don’t like about that site. Due to my lack of knowledge of the underlying technologies that comprise Pelican I must depend on a lot of “magic” which I don’t like. Also, I’m not entirely happy with the design and responsiveness of the site.`,
                `I will continue to push content to that site just because of how fast and simple it is to publish to that site.`
            ],
            "date_completed": "",
            "technologies_used": [
                "HTML",
                "CSS",
                "JavaScript",
                "Pelican"
            ],
            "teammates": []
        },
        {
            "project_id": `${ projectIdFactory.next().value }`,
            "project_name": "personal-site",
            "project_title": "This Site",
            "project_content": [
                `This site is a personal site I’m creating while I’m at <a href="http://nashvillesoftwareschool.com/">Nashville Software School</a> (NSS). I’m taking a different approach to this site. All the code so far has been created from scratch. There is very minimal “borrowed” code. For example, the font used in this site is the same font used in Skeleton. I believe this approach will benefit me the most in the long run. I really want to gain a solid grasp on the fundamental technologies powering the users’ experience when interfacing with modern web applications. I’ll use this project to keep my HTML, CSS and JavaScript skills sharp. Maybe later down the road I’ll incorporate other technologies such as jQuery and Ajax.`,
                `This site is hosted on a server I have with <a href="https://www.digitalocean.com/">Digital Ocean</a>. I was using Amazon AWS before but my monthly bill was coming in at around $25 which for a student is way too much. Plus, with that kind of money I can have 5 servers with Digital Ocean. The only catch with Digital Ocean is that I must manage the server myself, with Amazon AWS I basically just dragged and dropped the files I wanted to upload.`
            ],
            "date_completed": "",
            "technologies_used": [
                "HTML",
                "CSS",
                "JavaScript",
                "Skeleton"
            ],
            "teammates": []
        }
    ],
    "other_projects": {
        "title": "Other Projects",
        "content": `I have had two other projects in the past, mostly with static content and using the Bootstrap Framework. I will probably provide a link within this site to those projects eventually.`
    }
}

localStorage.setItem("jasonfigueroa.io/projects_db", JSON.stringify(projects_db));

/***********/
/* Factory */
/***********/
const projects_data = JSON.parse(localStorage.getItem("jasonfigueroa.io/projects_db"));

let html = ``;

projects_data.projects.forEach( (project) => {
    html += `<article>`;
    html += `<h2>${ project.project_title }</h2>`;
    project.project_content.forEach( (paragraph) => {
        html += `<p>${ paragraph }</p>`;
    });
    html += `</article>`;
});

// adding other projects
html += `<article>`;
html += `<h2>S1mple Math</h2>`;
html += `<p><a target="_blank" href="http://simplemath.jasonfigueroa.io">S1mple Math</a> is a project I started during the winter of 2017. It is an application geared towards first grade level math students. I wanted to make something fun that would keep the user engaged while polishing their math skills.</p>`;
html += `<p>The app was built with AngularJS, Bootstrap, and Firebase.</p>`;
html += `<img src="images/simplemath2.PNG" />`;
html += `</article>`;

html += `<article class="article-below-image">`;
html += `<h2>CSGSI Stat Trakr</h2>`;
html += `<p><a target="_blank" href="https://csgsistattrakr.jasonfigueroa.io">CSGSI Stat Trakr</a> is an application designed to capture player data while playing Counter-Strike: Global Offensive, a popular first-person shooter for PC. The application consists of a desktop application which integrates with the game and captures data in real-time, an API which receives and stores the data captured and a web client a user can interact with to view their captured data. For a more detailed description of the application please visit <a target="_blank" href="https://csgsistattrakr.jasonfigueroa.io/About">the about page</a>. For a more technical description of the project please visit the <a target="_blank" href="https://csgsistattrakr.jasonfigueroa.io/TechnicalDetails">Technical Details page</a>.</p>`;
html += `<img src="images/csgsistattrakr.PNG" />`;
html += `</article>`;

document.getElementById("projects").innerHTML += html;
/***************/
/* End Factory */
/***************/