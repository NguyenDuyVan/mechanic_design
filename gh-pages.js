// gh-pages.js
import { publish } from "gh-pages";

publish(
  ".output/public",
  {
    branch: "gh-pages",
    repo: "https://github.com/<your-username>/<your-repo>.git",
    message: "Deploy Nuxt static site to GitHub Pages",
  },
  () => {
    console.log("✅ Deployed to GitHub Pages!");
  }
);
