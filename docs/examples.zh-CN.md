---
title: 使用案例
---

## 自动回复微信消息
```json
{
    "name": "回复微信消息",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
        {
            "role": "system",
            "content": "观察下面的对话，再回复最后一句。"
        }
    ],
    "maxContext": 1
}
```
用法复制微信消息然后再 查询 GPT 触发回复。你再自定义自己的 prompt 把自己的背景信息，业务内容跟送给 GPT 让它生成更有针对性的内容。 

![](https://ipfs.io/ipfs/QmbV39V3cCarNqCS8yXnhBL67CdeTwPUj7Zydr85ybBgVM?filename=e8831869-a2d7-4433-89b9-35f5db272626.gif)


## 翻译 
```json
{
    "name":"翻译成中文",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
      {
        "role": "system",
        "content": "Your a translator you translate any text I give you into Chinese. Here is the message:"
      }
    ],
    "maxContext": 1
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
        "content": "以中文 markdown 格式总结下面这篇文章: "
      }
    ],
    "maxContext": 1
  }
```

## 完型填空 
```json
{
    "name": "完型填空",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
      {
        "role": "system",
        "content": "Cloze Test. Do not explain."
      },
      {
        "role": "user",
        "content": "填上合适的句子\n君不见黄河之水天上来，_\n君不见高堂明镜悲白发，\n朝如青丝暮成雪。"
      },
      {
        "role": "assistant",
        "content": "奔流到海不复回。"
      },
      {
        "role": "user",
        "content": "陈王昔时宴平乐，斗酒十千恣欢谑。\n_，径须沽取对君酌。"
      },
      {
        "role": "assistant",
        "content": "主人何为言少钱。"
      }
    ],
    "maxContext": 1
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
  "name": "Chat With Document",
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

## 起标题
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
  "maxContext": 1
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
      "content": "Please make a summary in Chinse for the following text:"
    }
  ],
  "maxContext": 1
}
```

## 列出值关注的问题然后回答我的疑问
```json
{
  "name": "列出值的关注的问题然后回答我的问题",
  "model": "gpt-3.5-turbo-16k",
  "headMessages": [
    {
      "role": "system",
      "content": "Please generate 10 most import questions in Chinse from the following text:"
    }
  ],
  "maxContext": 20
}
```
