const Categories = require("../api/models/Categories");
/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const Courses = require("../api/models/Courses");

module.exports.bootstrap = async function () {
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  await sails.models.categories.createEach([
    {
      categories: "backend",
    },
    {
      categories: "frontend",
    },
    {
      categories: "css",
    },
    {
      categories: "computer science",
    },
  ]);
  await sails.models.courses.createEach([
    {
      title:
        "SQL, Models and Migrations - Lecture 4 - CS50's Web Programming with Python and JavaScript 2020",
      description:
        "This course picks up where Harvard University's CS50 leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience. Through hands-on projects	",
      youtubeId: "YzP164YANAU",
      url:
        "https://www.youtube.com/watch?v=YzP164YANAU&t=5394s&ab_channel=CS50",
      category: 1,
    },
    {
      title: "Vue Js Basic",
      description: "Frontend basic using Vue JS",
      youtubeId: "Wy9q22isx3U",
      url: "https://www.youtube.com/watch?v=Wy9q22isx3U",
      category: 2,
    },
    {
      title: "Ruby Programming",
      description:
        "Giraffe Academy is rebranding! I've decided to re-focus the brand of this channel to highlight myself as a developer and teacher!",
      youtubeId: "8wZ2ZD--VTk",
      url: "https://www.youtube.com/watch?v=8wZ2ZD--VTk",
      category: 5,
    },
    {
      title: "Ruby On Rails in 60 Minutes",
      description:
        "In this video we will cover all of the fundamentals of the Ruby on Rails framework by building a blog application with comment functionality",
      youtubeId: "pPy0GQJLZUM",
      url: "https://www.youtube.com/watch?v=pPy0GQJLZUM",
      category: 5,
    },
    {
      title: "What exactly is an algorithm? Algorithms explained | BBC Ideas",
      description:
        "What is an algorithm? You may be familiar with the idea in the context of Instagram, YouTube or Facebook, but it can feel like a big, abstract concept. Here’s presenter Jon Stroud with a step-by-step guide to what algorithms actually are, what algorithms do, and how algorithms work.",
      youtubeId: "ZnBF2GeAKbo",
      url: "https://www.youtube.com/watch?v=ZnBF2GeAKbo",
      category: 4,
    },
    {
      title: "Create Rest Api in minutes with sails",
      description:
        "Here we will create a fully functional REST API using NodeJS and Sails",
      youtubeId: "WTlSCTiJAXM",
      url:
        "https://www.youtube.com/watch?v=WTlSCTiJAXM&t=183s&ab_channel=TraversyMedia",
      category: 3,
    },
  ]);
};
