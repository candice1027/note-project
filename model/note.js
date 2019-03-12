var path = require('path');
var Sequelize = require('sequelize')
var sequelize = new Sequelize(undefined,undefined,undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'../database/database.sqlite')
});

//以下是对数据库是否建立成功的测试
// sequelize
//   .authenticate()
//   .then((err) => {
//     console.log('connection has been established successfully')
//   })
//   .catch((err) => {
//     console.log('unable to connect the database',err)
//   })

//定义一个模型
var Note = sequelize.define('note',{
  username: {
    type: Sequelize.STRING
  },
  birthday: {
    type: Sequelize.STRING
  }
})

// Note.sync().then(()=>{
//   Note.create({
//     username: 'hello',
//     birthday: '10.27'
//   }).then(() =>{
//     Note.findAll({raw: true}).then(function(notes) {
//       console.log(notes)
//     })
//   })
// });

//Note.findAll({raw: true, where: {id:2}}).then((note)=>{console.log(note)})
module.exports.Note = Note

