---
title: InputGPT 文档
hero:
  title: InputGPT
  description: InputGPT 的一些示例
  actions:
    - text: 示例
      link: /examples
features:
  - title: 资源高效
    emoji: 📉
    description: 内存需求 <10M
  - title: 快速
    emoji: 🚀
    description: 以最快的方式调用 LLM
  - title: 不受干扰
    emoji: 🧘
    description: 无干扰工作

---

# InputGPT 
InputGPT 让你任何可以打字的地方，直接调用LLM。 默认的续写模式， 让你写任何文档都可以像使用 IDE 一样有补全能力。

* 让你更专心的写作， 只在你需要的时候才调用 LLM 的能力， 而且还不用切换工作区。 让你更专注于当前的文字工作。
* 直接在输入区调用LLM 更快的响应时间。

## 特性
*  跨平台支持 [win,mac]
*  多语言  [en,zh,jp,es,az]
*  自定义 提示词， System Prompt,ont shot, few shots 都可以。 

# 如何使用
## 快速开始
1. 下载软件，绿色免安装，解压到任意地方即可，推荐解压到云盘。可以享受跨平台使用的便捷。
1. 打开InputGPT，点击“设置API密钥”以提供OpenAI密钥。
1. 用鼠标选中你想提问的文本。复制到剪切板。
1. 点击 `Shift + 空格` 查询 GPT。
1. 按下 `ESC` 键停止生成
2. 对于有上下文的prompt 快速按 3下 `ESC` 可以清除上下文。

## User define HotKey 
点击“设置 API 密钥”，InputGPT 将会打开 `env.txt` 文件。
在文件中添加一行，像这样`GPT_HOTKEYS=space+shift`然后保存并关闭文件。
the keycode [reference](https://github.com/vcaesar/keycode/blob/main/keycode.go):
![](https://ipfs.ee/ipfs/QmaBtanJEmt8krtLLAL2zE9QYyNodQ7bvkRofNuWABaZmn/d6636a7b-cb75-494f-84ac-3935382544d8.png)

##  导入新的提示词

复制下面的 json 之一即可：
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

```json
{
  "name": "翻译成中文",
  "model": "gpt-3.5-turbo-0613",
  "headMessages": [
    {
      "role": "system",
      "content": "Your a translator you translate any text I give you into Chinese. Just give me the result, do not explain."
    }
  ],
  "maxContext": 0
}
```

然后点击应用的导入菜单。



![](https://ipfs.ee/ipfs/QmPW2FcmLvfZLbT5Ak6FYWRSc9FWJ5p3waQ4PrCPEzeH5R/6d498736-0911-460a-8fe2-8e91c8ca3340.png)

[For more templates](./prompts)

# DEMO
[![IMAGE ALT TEXT](http://img.youtube.com/vi/2EpdfYILbgQ/0.jpg)](https://www.youtube.com/watch?v=2EpdfYILbgQ "InputGTP DEMO")

[translate demo](https://ipfs.ee/ipfs/QmepH3EbP71zaXxaLAfQt2domXZxnb7HuaAkxT4jzhajmk/7c5ec8d0-a3d2-4d06-b649-316456390599.mp4)

Work like GitHub Copilot complete the codes in the middle of code file.
[code cloze](https://ipfs.ee/ipfs/QmRp351kZ9fB1y1k9vWCHJq3egG8wZT39LYeVr9RhzbkVU/a159ab5f-e308-4d02-8d64-9c02ea0fc48e.mp4)

# Build 
```cmd
build_win.bat
```
or
```bash
build.sh
```

# Credit

https://github.com/getlantern/systray

https://github.com/go-vgo/robotgo

https://github.com/robotn/gohook

https://github.com/hanyuancheung/gpt-go
