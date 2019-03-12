let T = require('../mod/toast.js');
console.log(T,'T')
T.Toast('hello')

add();
function add() {
  $.post('/api/note/add')
  .done(function(ret){
    console.log(ret,'ret=======')
    if(ret.status == 0){
      getList();
    }else{
    }
  })
  .fail(function(){
    Toast('网络异常');
  });
}

function getList() {
  $.post('/api/note/create')
  .done(function(ret){
    console.log(ret,'ret=======')
    if(ret.status == 0){
      update();
    }else{
    }
  })
  .fail(function(){
    Toast('网络异常');
  });
}

function update() {
  $.post('/api/note/edit')
  .done(function(ret){
    console.log(ret,'ret=======')
    if(ret.status == 0){
      //delete()
    }else{
    }
  })
  .fail(function(){
    Toast('网络异常');
  });
}

