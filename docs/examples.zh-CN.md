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

![](https://ipfs.io/ipfs/QmbV39V3cCarNqCS8yXnhBL67CdeTwPUj7Zydr85ybBgVM?filename=e8831869-a2d7-4433-89b9-35f5db272626.gif)

用法复制微信消息然后按 `shift + space` 触发回复 [演示](https://ipfs.ee/ipfs/QmRH85P88ErsmkfpaLtV5pwLztrdPyCaTmyteBH6wAKab5/e8831869-a2d7-4433-89b9-35f5db272626.mp4)


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

## 总结文章
```json
{
    "name":"总结文章",
    "model": "gpt-3.5-turbo-16k",
    "headMessages": [
      {
        "role": "system",
        "content": "以中文markdown格式总结下面这篇文章"
      }
    ],
    "maxContext": 16
  }
```

## 完型填空 

不只是完形填空， 它还可以做代码补全，诗歌补全
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
