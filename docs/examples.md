---
title: Examples
---

## Act as ChatGPT
```json
{
  "name": "ChatGPT",
  "model": "gpt-3.5-turbo-0613",
  "headMessages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    }
  ],
  "maxContext": 20
}
```

## Chat With Document
```
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
### Usage 
1. Copy the JSON above and import it into the software if you haven't already.
2. Copy the text of the article you want to ask about.
3. Press `shift+space` to submit the article, and you will receive a "Document Received" message.
4. You can then proceed with your questions and interactions.
5. If you want to switch to a different article, you need to clear the context first.

## Translate

```json
{
    "name":"translate to english",
    "model": "gpt-3.5-turbo-0613",
    "headMessages": [
      {
        "role": "system",
        "content": "Translate all the messages I give you into English"
      }
    ],
    "maxContext": 1
  }
```


## Cloze 
Not only for reading comprehension, it can also be used for code completion and poetry completion. 

```json
{
    "name": "cloze",
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
