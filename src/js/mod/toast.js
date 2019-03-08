let $ = require('../lib/jquery.js')
require('../../less/toast.less')
class Createtoast {
  constructor(options) {
    this.options = options;
    this.createTpl();
    this.showToast();
  }
  createTpl() {
    let { content } = this.options;
    let tpl = `<div class="note-toast">${content}</div>`
    this.$tpl = $(tpl);
  }
  showToast() {
    console.log('showToast')
    let {time} = this.options;
    $('body').append(this.$tpl)
    // setTimeout(() => {

    // },time)
  }
}
function Toast(msg,time) {
  return new Createtoast({
    content: msg,
    time
  })
}
module.exports.Toast = Toast;
