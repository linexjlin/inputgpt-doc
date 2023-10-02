---
title: 使用案例
---

## 自动回复微信消息
```json
{
    "name": "回复微信消息",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [{
        "role": "system",
        "content": "Help me to reply last message in below:（just give me the content of message，do not explain）"
    }],
    "maxContext": 0
}
```
用法复制微信消息然后再 查询 GPT 触发回复。你再自定义自己的 prompt 把自己的背景信息，业务内容跟送给 GPT 让它生成更有针对性的内容。 

![](https://ipfs.io/ipfs/QmbV39V3cCarNqCS8yXnhBL67CdeTwPUj7Zydr85ybBgVM?filename=e8831869-a2d7-4433-89b9-35f5db272626.gif)


## 翻译成中文
```json
{
    "name":"翻译成中文",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
      {
        "role": "system",
        "content": "Your are a translator engine you translate any text I give you into Chinese. Here is the message:"
      }
    ],
    "maxContext": 0
  }
```

## 翻译成英文
```json
{
    "name":"翻译成英文",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
      {
        "role": "system",
        "content": "Your are a translator engine any text I give you into English. Here is the message:"
      }
    ],
    "maxContext": 0
  }
```

![](https://ipfs.ee/ipfs/QmWeYQJG8Tw41MNdqBX8H3RMPXLp4FEEdnTHtCGzjiXnFt/7c5ec8d0-a3d2-4d06-b649-316456390599.gif)

修改上在面的，prompt GPT 可以翻译任意语言。

## 总结文章
```json
{
    "name":"总结文章",
    "model": "gpt-3.5-turbo-16k",
    "headMessages": [
      {
        "role": "system",
        "content": "Summary the text below (in Chinese): "
      }
    ],
    "maxContext": 0
  }
```

## 完型填空 
```json
{
    "name": "完型填空",
    "model": "gpt-3.5-turbo",
    "headMessages": [{
        "role": "system",
        "content": "Cloze Test, fill some text in \"_\" to make the whole content reasonable, just give me result, do not explain."
    }, {
        "role": "user",
        "content": "Today, I went to the _ and bought some milk and eggs."
    }, {
        "role": "assistant",
        "content": "shop"
    }, {
        "role": "user",
        "content": "print(\"Hello __!\")"
    }, {
        "role": "assistant",
        "content": "World"
    }, {
        "role": "user",
        "content": "1\n2\n3\n4\n5\n_\n8\n9\n"
    }, {
        "role": "assistant",
        "content": "6\n7\n"
    }],
    "maxContext": 0
}
```

不只是完形填空， 它还可以做代码补全，诗歌补全。 先在想补全的地方打一个 "_" 下划线， 然后再查询ChatGPT。

![](https://ipfs.ee/ipfs/QmRRcA8fbJ8V73h2e5hxkRDLDf2bsKcb9TurjXJCCADTRo/a159ab5f-e308-4d02-8d64-9c02ea0fc48e.gif)

## 对话

```json
{
    "name": "ChatGPT",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [{
        "role": "system",
        "content": "You are a helpful assistant."
    }],
    "maxContext": 24
}
```

## 文档问答
```json
{
  "name": "文档问答",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "You are a helpful assistant. Please answer my questions by the article I give you next. When you receive the article reply me with \"Document Received!\" "
    }
  ],
  "maxContext": 80
}
```
### 用法
1. 复制上面的json， 然后导入到软件，如果还没导入的话
2. 复制你要提问文章的文本
3. 按下 `shift+space` 提交文章，你会收到 Document Recieved
4. 然后，就可以正常交互了
5. 如果想要换切换文章，需要先清除上下文

## 给文章起标题
```json
{
  "name": "起个标题",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "Please make a simple title in Chinse for the following text:"
    }
  ],
  "maxContext": 0
}
```

## 总结文章
```json
{
  "name": "总结文章",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "Please make a summary in Chinese for the following text:"
    }
  ],
  "maxContext": 0
}
```

## 列出值关注的问题然后回答我的疑问
```json
{
  "name": "列出问题然后回答我的疑问",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "Please generate 10 most import questions in Chinese from the following article:"
    }
  ],
  "maxContext": 20
}
```

## 文章的重写
```json
{
  "name": "文章的重写",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "You are a writer. Please extract the outline of the article and completely rewrite the article according to the outline. Please do not use the accent of the interpreter, but translate naturally, smoothly, and truthfully, and use beautiful and elegant words. It only needs to have a general meaning. The outline can be adjusted and does not need to appear in the answer. Just write the article in the answer. Try to keep the format of the article as much as possible. Your answer should be in Chinese. I'll send you the text later. I am now sending you the text."
    }
  ],
  "maxContext": 0
}
```

