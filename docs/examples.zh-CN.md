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
ChatGPT 的基本功能