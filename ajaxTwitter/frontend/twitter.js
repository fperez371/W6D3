const FollowToggle = require('./follow_toggle');

$(() => {
  const $buttons = $('button.follow-toggle');
  $buttons.forEach(() =>{
    (i, btn) => new FollowToggle(btn, {}); 
  })
})