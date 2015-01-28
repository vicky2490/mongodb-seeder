var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Article = mongoose.model('Article');

module.exports = function(app) {
    app.use('/', router);
    app.use('/seed', router);
    app.use('/getInfo', router);
    app.use('/getAllJSON', router);
};

router.get('/', function(req, res, next) {

    Article.find(function(err, articles) {
        if (err) return next(err);
        res.render('index', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
});

router.get('/getAllJSON', function(req, res, next) {

    Article.find(function(err, articles) {
        if (err) return next(err);
        res.render('index', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
});


router.get('/getInfo', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");   
   Article.find(function(err, articles) {
    if (err) {
      return;
    }
    res.json(articles);
  });
});



router.get('/seed', function(req, res, next) {
    Article.find(function(err, articles) {
        if (err) return next(err);

        new Article({
            author: 'Kye-Si Kwon, Steven Ready',
            category: 'A',
            title: 'Practical Guide to Machine Vision Software ',
            text: 'For both students and engineers in R&D, this book explains machine vision in a concise, hands-on way, using the Vision Development Module of the LabView software by National Instruments. '

        }).save();

        new Article({
            author: 'Kye-Si Kwon, Steven Ready',
            category: 'A',
            title: 'Understanding Context: Environment, Language, and Information Architecture',
            text: 'To make sense of the world'

        }).save();


        new Article({
            author: 'McGraw-Hill',
            category: 'B',
            title: 'Arduino Projects for Amateur Radio',
            text: 'Amateur Radio is filled with step-by-step microcontroller projects you can accomplish on your own--no programming experience necessary.'

        }).save();

          new Article({
            author: 'McGraw-Hill',
            category: 'B',
            title: 'Coding For Kids For Dummies ',
            text: 'An easy-to-grasp introduction to coding concepts for kidsCoding For Kids For Dummies breaks coding into a series of small projects'

        }).save();

        new Article({
            author: 'Laura Cassell, Alan Gauld',
            category: 'B',
            title: 'Python Projects',
            text: ' guide to completing Python projects for those ready to take their skills to the next level Python Projects is the ultimate resource for the Python programmer with basic skills who is ready to move beyond tutorials and start building projects. '

        }).save();

        new Article({
            author: 'Kye-Si Kwon, Steven Ready',
            category: 'B',
            title: 'Visualization Analysis and Design',
            text: 'Suitable for readers with a computer science background as well as those in geography'

        }).save();

        new Article({
            author: 'Raoul-Gabriel Urma, Mario Fusco, Alan Mycroft ',
            category: 'C',
            title: 'From Mathematics to Generic Programming',
            text: 'In this substantive yet accessible book, pioneering software designe'

        }).save();

        new Article({
            author: 'Raoul-Gabriel Urma, Mario Fusco, Alan Mycroft',
            category: 'C',
            title: 'Java 8 in Action: Lambdas',
            text: 'Java 8 in Action is a clearly written guide to the new features of Java 8'

        }).save();

        new Article({
            author: 'Bjarne Stroustrup',
            category: 'C',
            title: 'Advanced Persistent Threat Hacking',
            text: 'The Art and Science of Hacking Any Organization, IT security expert Tyler Wrightson takes the reader on a no-holds-barred, ninja-style hacking adventure.'

        }).save();

        new Article({
            author: 'Bjarne Stroustrup',
            category: 'D',
            title: 'Android Security Internals',
            text: 'In Android Security Internals, top Android security expert Nikolay Elenkov takes us under the hood of the Android security system. '

        }).save();

        new Article({
            author: 'Bjarne Stroustrup',
            category: 'D',
            title: 'The C++ Programming Language',
            text: 'thoroughly master it, with the definitive new guide from C++ creator Bjarne Stroustrup'

        }).save();

        new Article({
            author: 'Vandad Nahavandipoor',
            category: 'E',
            title: 'iOS 8 Swift Programming Cookbook',
            text: 'Entirely rewritten for Apple’s Swift programming language, this updated cookbook helps you overcome the vexing issues you’re likely to face when creating apps for iOS devices.'

        }).save();

        new Article({
            author: 'Vandad Nahavandipoor',
            category: 'F',
            title: 'How Computers Work: The Evolution of Technology',
            text: 'Having sold more than 2 million copies over its lifetime, '

        }).save();

        new Article({
            author: 'Tamara Munzner',
            category: 'F',
            title: 'Arduino for Beginners',
            text: 'Learn Arduino from the ground up, hands-on, in full color!'

        }).save();

        new Article({
            author: 'Tamara Munzner',
            category: '',
            title: '',
            text: ''

        }).save();

        new Article({
            author: 'Tamara Munzner',
            category: 'F',
            title: 'Incredible LEGO Technic',
            text: 'rom tanks to tow trucks, all the models showcased in this book use LEGO Technic gears, pulleys'

        }).save();

        new Article({
            author: 'Pawel',
            category: 'G',
            title: 'Building Scalable Apps with Redis and Node.js',
            text: 'Develop customized, scalable web apps through the integration of powerful Node.js frameworks About This BookDesign a simple application and turn '

        }).save();

        new Article({
            author: 'Pawel',
            category: 'G',
            title: 'AngularJS UI Development',
            text: 'Design, build, and test production-ready applications in AngularJS'

        }).save();

        new Article({
            author: 'Pawel',
            category: 'G',
            title: 'CompTIA Security',
            text: ' This new edition has been updated to align with the latest version of the Security'

        }).save();

        new Article({
            author: 'Kye-Si Kwon, Steven Ready',
            category: 'H',
            title: 'Web Development with Django Cookbook',
            text: 'ver 70 practical recipes to create multilingual, responsive, and scalable websites'

        }).save();


    });

    res.json({ message: 'ok' });
});
