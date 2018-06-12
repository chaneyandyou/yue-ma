const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const filterKey = { 'password': 0, '__v': 0}

Router.get('/info', async function(req, res) {
  const { userid } = req.cookies
  if(!userid){
    return res.json({ code: 'error', data: null, message: '请重新登录'})
  }else {
    await User.findOne({ _id: userid }, filterKey, function(err, doc) {
      if(err) {
        return res.json({ code: 'error', data: null, message: '服务器出错了'})
      }
      if(doc) {
        return res.json({ code: 'success', data: doc, message: '' })
      }
    })
  }
})

Router.get('/list', function(req, res) {
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})

Router.post('/register', function(req, res) {
  const { user, password, type, realName } = req.body
  User.findOne({ user: user }, async(err, doc) => {
    if(doc) { // 该用户已存在
      return res.json({ code: 'error', message: "用户已存在", data: null })
    } else {
      User.create({ user, password, type, realName }, function(err, doc) {
        if(err) {
          return res.json({ code: 'error', message: '服务端出错了', data: null })
        }
        return res.json({ code: 'success', message: '注册成功', data: null })
      })
    }
  })
})

Router.post('/login', async function(req, res) {
  const { user, password } = req.body
  const targetUser = await User.findOne({ user })
  if(targetUser) {
    const match = await targetUser.comparePassword(password, targetUser.password)
    if(match) {
      let needData = {}
      for(let name in targetUser._doc) {
        if(name !== 'password') {
          needData[name] = targetUser[name]
        }
      }
      res.cookie('userid', targetUser.id)
      res.json({ code: 'success', data: needData, message: '登录成功' })
    } else {
      res.json({ code: 'error', data: null, message: '登录名或密码错误!' })
    }
  }
})

module.exports = Router
