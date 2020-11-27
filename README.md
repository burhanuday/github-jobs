# GitHub Jobs API

![Design preview for the GitHub Jobs API coding challenge](./preview.jpg)

## Welcome! 👋

**To do this challenge, you need a solid understanding of HTML, CSS, and JavaScript.**

## The challenge

Your challenge is to build out this jobs board using the [GitHub Jobs API](https://jobs.github.com/api) data.

Technical Requirements:

- Use React.js to create a UI that matches the design as closely as
  possible
- Please DO NOT use any prebuilt component libraries like Material UI or Bootstrap. We want to test your ability to build your own components.
- Please demonstrate knowledge of flexbox and media queries for responsive card layout

Bonus points (optional):

- Use a CSS in JS library like emotion or aphrodite
- Use Typescript
- Use react hooks

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- View all jobs currently live on the GitHub Jobs API

⚠️ **IMPORTANT** ⚠️: The GitHub Jobs API will throw a CORS error when you try to pull data from it in your project. To avoid this, you need to use [CORS Anywhere](https://cors-anywhere.herokuapp.com/). This allows you to prefix your request URL with `https://cors-anywhere.herokuapp.com/` and the request will come back as expected. So, if you wanted to request all positions, your request would look something like this:

```javascript
fetch(
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## Where to find everything

Your task is to build out the project to the figma design file provided:

https://www.figma.com/file/y9zHlivJxYJqyA8tAuZfGk/github-jobs-api?node-id=0%3A1

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized. Some images can be re-used at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

The design system will give you more information about the various colors, fonts, and styles used in this project.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Separate the `starter-code` from the rest of this project and rename it to something meaningful for you.
2. Configure your repository to publish your code to a URL. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this like with vercel or netlify.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes that you could create to make reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Submitting the challenge

### Deploy your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

### Submit your code

Once you've finished the challenge, send me an email (akhil.r.nadendla@gmail.com) with the following links:

1. A link to your code either as a github repo or a downloadable .zip file
2. A link to the deployed web app (see instructions above)

If you have any questions during the course of the challenge, feel free to reach out at akhil.r.nadendla@gmail.com
