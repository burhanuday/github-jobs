# GitHub Jobs API

Jobs board using the [GitHub Jobs API](https://jobs.github.com/api) data.

Technical stack:

- Typescript
- React
- styled-components

⚠️ **IMPORTANT** ⚠️: The GitHub Jobs API will throw a CORS error when you try to pull data from it in your project. To avoid this, you need to use [CORS Anywhere](https://cors-anywhere.herokuapp.com/). This allows you to prefix your request URL with `https://cors-anywhere.herokuapp.com/` and the request will come back as expected. So, if you wanted to request all positions, your request would look something like this:

```javascript
fetch(
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```
