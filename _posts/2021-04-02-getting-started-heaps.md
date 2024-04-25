---
layout: post
title: "Getting started with Heaps on Manjaro"
tags: development videogames
published: false
---
I have written games and small snippets in different game engines/programming languages over the time. From java running natively on android, to assembly code for the Sega Genesis.
I like to think of myself as a capable language agnostic developer, but when it come to video games most of my time has been under the Unity umbrella.

If you have used Unity before you will know that it has a few "gotchas" here and there. 
I want to have more control over the code I write and the way I make it work. 

Easy! OpenGL/Vulkan and C/C++ will do it! . . . Yeah. . . I don't really want to get into that...

After some research  I have decided to try going for [Heaps.io](https://heaps.io/).
It looks like a decent tool: flexible, powerful and... obscure?
It is not like no one knows about it. There is an active community, some discord server and a few blog entries; But for sure it is not as popular as many other options.

Maybe this posts will turn into a decent source of knowledge (probably not  ¯\\_(ツ)_/¯ ).  
In any case I will be documenting my process as I try to learn, use, and eventually master Heaps.io, or my decadent downward spiral into giving up.

Well, first things go first: installing all I need into my development environment. I'm currently running Manjaro version 5.9.16.

## Installing Heaps.io on Manjaro

Let's go to [the official docu](https://heaps.io/documentation/installation.html) and follow along to install all the requirements.

1. **Install [Haxe](https://haxe.org/download/linux/)**: Just 2 commands. I will be using the default shared location (/usr/share/haxe/lib) and not my home directory.
```
sudo pacman -S haxe
haxelib setup 
```

2. **Installing Heaps using haxelib**: Copy & Paste from the docu. Sometimes Linux is really the easiest option.
```
haxelib install heaps
```

3. **Install VS Code**: In the case of Manjaro the easy way to install Visual Studio from Snaps. **DO NOT**. This is problematic as the Snaps version has issues with debugging and Dynamic Link.
I installed Code - OSS from the main Manjaro program repository.

4. **Installing Haxe extensions on Code - OSS**: The extensions panel search does not show the [Haxe Extension Pack](https://marketplace.visualstudio.com/items?itemName=vshaxe.haxe-extension-pack). Open the link and download each extension manually with the **Download Extension**. Add them to code oss from *Extensions > menu > Install from VSIX*.
* [Haxe](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe)
* [codedox](https://marketplace.visualstudio.com/items?itemName=wiggin77.codedox)
* [Flash Debugger](https://marketplace.visualstudio.com/items?itemName=vshaxe.haxe-debug)
* [HashLink Debugger](https://marketplace.visualstudio.com/items?itemName=HaxeFoundation.haxe-hl)
* [HXCPP Debugger](https://marketplace.visualstudio.com/items?itemName=vshaxe.hxcpp-debugger)  

5. **Install the Hashlink VM**. It says it's optional, but I'm going for it too. It is [here](https://aur.archlinux.org/packages/hashlink/).

6. **Install additional libraries**: Install OpenAL, DirectX and SDL/GL libraries.
    ```
    haxelib install hlopenal
    haxelib install hlsdl
    haxelib install hldx
    ```

It looks like it is working. Checking both Haxe and Hashlink:
 ```
 haxe --version #4.2.1
 which hl #/usr/local/bin/hl
 hl #HL/JIT 1.11.0 (c)2015-2019 Haxe Foundation
    #    Usage : hl [--debug <port>] [--debug-wait] <file>
```

That looks good so far. But I can't stop here. Let's go to the [Hello world example](https://heaps.io/documentation/hello-hashlink.html) and follow along. The only diference is that I don't have Chrome installed. I will set the json on *launch.json* as "type": "firefox".

![Hello world of Firefox](/assets/images/blog/2021-04-02-getting-started-heaps/firefox.png)

All good so far. 
