const express = require('express');
const path = require('path');
const app = express();

app.get('/components', (req, res) => {
  res.render('content', {
    posts: [
      {
        profilepic: 'images/profile.png',
        name: 'Brianna',
        foodielevel: 'Novice',
        bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat-free, sugar-free stuff!',
        date: 'February 18, 2021 @ 3:30 pm',
        reply: 'REPLY',
        message: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
        thisBox: false,
      },
      // Add other posts here
    ],
  });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
