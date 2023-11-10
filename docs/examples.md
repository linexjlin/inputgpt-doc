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
    "maxContext": 0
  }
```


## Cloze 
Not only for reading comprehension, it can also be used for code completion and poetry completion. 

```json
{
    "name": "Cloze",
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

## Continue to write with GPT4
Act like the default prompt, but with GPT4
```json
{
    "name":"Continue",
    "model": "gpt-4-1106-preview",
    "headMessages": [
      {
        "role": "system",
        "content": "Just complete the text I give you, do not explain."
      }
    ],
    "maxContext": 0
  }
```

