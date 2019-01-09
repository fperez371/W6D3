class FollowToggle{
  constructor($el){
    this.$el = $(el)
    this.userId = this.$el.data('user-id');
    this.followState = (this.$el.data('initial-follow-state'));
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() { 
    if (this.followState === 'followed'){
      this.$el.prop('disabled', false);
      this.$el.text('unfollow');
    } else {
      this.$el.prop('disabled', false);
      this.$el.text('follow');
    }
  
  }

  handleClick(event) {
    const followToggle = this;
    event.preventDefault();
    
    if (this.followState === 'followed') {
      this.followState = 'unfollowed'
      this.render();
      $.ajax({
        url: `/users/${id}/follow`,
        dataType: 'json',
        method: 'DELETE'
      });
      

      else {
        this.followState = 'followed'
        this.render();
        $.ajax({
          url: `/users/${id}/follow`,
          dataType: 'json',
          method: 'POST'
        });
      }
    }
  }
}



module.exports = FollowToggle;