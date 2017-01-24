const express = require('express');
const { isAuthenticated, isStaff } = require('../../config/authenticate');
const { menuList } = require('../../tools');

const router = express.Router();

router.use(isAuthenticated, isStaff);

router.get('/', menuList, (req, res) => {
  res.render('activities/activities.view.ejs', {
    menuList: req.menuList,
    selected: 'Activity'
  });
});

router.use('/add', require('./add'));

module.exports = router;
