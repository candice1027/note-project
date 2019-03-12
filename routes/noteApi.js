var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note;

router.post('/note/add',function(req,res,next){
  Note.create({
    username: 'xiaoming',
    birthday: '12.12'
  }).then(() =>{
    res.send({status: 0, msg: '创建成功'})
  })
})
router.post('/note/create',function(req,res,next){
  console.log(req.body.name)
  Note.findAll({raw: true}).then((notes) =>{
    res.send({status: 0, noteList: notes})
  })
})
router.post('/note/edit',function(req,res,next){
  Note.update({
    username: 'updateuser',
    birthday: '12222'
  },{where:{id:1}}).then(()=>{
    res.send({status: 0, msg: '修改成功'})
  })
})
router.post('/note/delete',function(req,res,next){
  Node.destroy({where: {id: 2}}).then(() =>{
    res.send({status: 0, msg: '删除成功'})
  })

})
module.exports = router