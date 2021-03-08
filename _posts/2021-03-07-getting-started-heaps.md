---
layout: post
title:  "Getting started with Heaps"
---

# {{ page.title }}

I have written games and small snippets in different game engines/programing languages over the time. From java running natively on android, to assembly code for the Sega Genesis.
I like to think of myself as a capable language agnostic developer, but when it come to video games most of my tim has been under the Unity umbrella

If you have used Unity before you will know that it has a few "gotchas" here and there. 
I want to have more control over the code I write and the way I make it work. 

Easy! OpenGL/Vulkan and C/C++ will do it! . . . Yeah. . . I don't really want to get into that...

After some research  I have decided to try going for [Heaps.io](https://heaps.io/).
It looks like a decent tool: flexible, powerful and... obscure?
It is not like no one knows about it. There is an active community, some discord server and a few blog entries; But for sure it is not as popular as many other options.

Maybe this posts will turn into a decent source of knowledge (probably not  ¯\\_(ツ)_/¯ ).  
In any case I will be documentingmy process as I try to learn, use, and master Heaps.io, or my decadent downward spiral into giving up.

Well, first things go first: installing all I need into my development environment. 
I develop all on my Windows Subsystem for Linux. Any console command is run on Linux, unless said otherwise. So let's go with it.

## Installing Heaps.io on Ubuntu WSL

Let's go to [the official docu](https://heaps.io/documentation/installation.html) and follow along to install all the requirements.

1. **Install [Haxe](https://haxe.org/download/)**: Yeah, copy 4 lines into my terminal. Easy.
```
sudo add-apt-repository ppa:haxe/releases -y
sudo apt-get update
sudo apt-get install haxe -y
mkdir ~/haxelib && haxelib setup ~/haxelib
```

2. **Installing Heaps using haxelib**: Copy & Paste from the docu. Sometimes Linux is really the easiest option.
```
haxelib install heaps
```

3. **Install VS Code**: I might be using WSL, but Windows is still the host, and nothing is better than [Chocolatey](https://chocolatey.org/packages/vscode) to install stuff. Check the Chocolatey documentation to [install](https://chocolatey.org/install).

    This terminal has to be run on **Windows** as **administrator**. There is no sudo in Windows. :(
```
choco install vscode
```

4. **Installing Haxe extensions on vscode**: Not very complicated. It is all there in the [documentation](https://heaps.io/documentation/installation.html). Even with how easy it is, I installed *Java Extension Pack* and not the one I had to install: *[Haxe Extension Pack](https://marketplace.visualstudio.com/items?itemName=vshaxe.haxe-extension-pack)*. Read carefully.

5. **Install the Hashlink VM**. It says it's optional, but I'm going for it too. 
    
    I have read [somewhere](http://www.unexpected-vortices.com/haxe/getting-started-hl.html) that it would be recommended to install all this before:
    ```
    sudo apt install libpng-dev libturbojpeg0-dev libvorbis-dev
    sudo apt install libopenal-dev libsdl2-dev
    sudo apt install libmbedtls-dev libuv1-dev
    ```
    [Download](https://hashlink.haxe.org/#download) the lastest release (1.11 in my case) and run:
    ```
    sudo mv hashlink-1.11.tar.gz /opt
    cd /opt
    sudo tar xzf hashlink-1.11.tar.gz
    cd hashlink-1.11/
    sudo make
    ```

6. **Install additional libraries**: Install OpenAL, DirectX and SDL/GL libraries.

    You need to setup where all this libraries will go. I went with the default option: Run this command and just hit enter.
    ```
    haxelib setup
    ```
    Now install the libraries:
    ```
    haxelib install hlopenal
    haxelib install hlsdl
    haxelib install hldx
    ```

 Oh yeah, It seems to be done. Let's run some commands to check all is where it should:
 ```
 haxe --version #4.2.1
 which hl #/usr/local/bin/hl
 hl #hl: error while loading shared libraries: libhl.so: cannot open shared object file: No such file or directory
 ```

Oy! That is not what I expected. Something didn't work out. I'll go to sleep and check it later on. Luckily by the time you read this, it will be working.