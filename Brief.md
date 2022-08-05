# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project 3: Full-stack SPA JavaScript Application

### Overview

For this third project, you'll be working in teams of 3 to build an app using the MERN stack.

Your backend should be a NodeJS server which provides a JSON REST API for accessing and manipulating data in a MongoDB database.

Your frontend should be primarily a single-page-app, where the user interface is controlled by JavaScript (not server-generated HTML like project 2) and React.

This project is your first time working as part of a _software development team_. Your goal should be to develop teamwork, and skills using git branches and GitHub Pull Requests to collaborate effectively on shared code.

Do **not** attempt to build your app as separate pieces that you try to fit together at the end (they won't fit together, trust me). All code that you write should additions to the whole app, not separate pieces.

Everyone should work on both the server and client code. If you need to break up tasks within your team, break up tasks by app features, not by whether it's part of the server or client.

---

### Technical Requirements

Your app must:

- Use **M**ongoDB, **E**xpress, **R**eact and **No**de
- Be primarily a single-page-app (multiple HTML pages are fine, but the core of your app should be 1 HTML page)
- Have the browser (client) code interact with the server primarily through a JSON REST API
- Include all major CRUD functions for at least one of your models
- Manage team contributions and collaboration by using Git and GitHub
- Nicely styled front-end with or without a framework
- Deploy your application online, so that it is publically accessible (We will have a session on how to deploy your applications during project week)
- Wireframes for the views you planned to create

---

### Necessary Deliverables

- A working app, hosted somewhere on the internet
- A git repository hosted on GitHub, with frequent commits dating back to the very beginning of the project from _everyone_ in your team
- A short (10-15min) presentation, demo, and Q&A involving all team members
- A `README.md` file with:
  - Explanations of the technologies used
  - A couple paragraphs about the general approach you took
  - Installation instructions for any dependencies
  - Link to your wireframes – sketches of major views / interfaces in your application
  - Descriptions of any unsolved problems or major hurdles your team had to overcome
  - A link to your hosted working app in the README and URL section of your GitHub repo

---

### Group coding contributions

Contributions from each group member do not need to be exactly equal, but each group member must contribute signficant coding work to their project and have a good understanding of how the whole app works - both client and server.

We will be watching who authored the git commits for each project and how teams work together and collaborate during the project class time. Any group member who does not have a significant enough coding contribution to their group, unfortunately will not pass the project.

If you are a more confident coder, please be especially mindful of your teammates contributions and learning opportunities. Allow plenty of time and space for less confident or experienced coders to contribute to core parts of the app and don't just build everything yourself.

---

### Good Team Practices

- Be consistent with your code style. You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
- Write code another developer wouldn't have to ask you about. Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is?
- Make it all well-formatted. Are you indenting, consistently? Can we find the start and end of every div, curly brace, etc?
- Write good commit messages. Commit messages help document your work so your teammates can see what you've done and when they look back, what kinds of changes you made.
- Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
- Comment your code. Will someone understand what is going on in each block or function? Even if it's obvious, explaining the what & why means someone else can pick it up and get it.

---

### Extensions/options

#### Incorporate some React libraries like:

- https://reactrouter.com/
- https://react-bootstrap.github.io/ or https://mui.com/
- https://react-hook-form.com/

#### Implement auth and protected routes

- https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57
- https://dev.to/salarc123/mern-stack-authentication-tutorial-part-2-the-frontend-gen
- https://www.robinwieruch.de/react-router-private-routes/

#### Make your app even more interactive

- Have the page update automatically when another user who is using the app from a different browser window makes a change. (e.g. check for changes every 10 seconds). Search for short/long polling or websockets.

- Learn about websockets for instant updates, e.g. chat messages between users
