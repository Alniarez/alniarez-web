---
layout: post
---
I use Arch as my main OS.

Because it sometimes breaks (actually has been stable for the last 2 years) I wrote a small guide for myself os how to setup arch+kde the way I like it.
This is just me publishing online in case anyone is curious about it; And to have some large file that I can use to test some styles.

Yes, the [[double bracket]] thing is because I use Obsidian. No I won't fix those links.

---

> Last update: 2024-07-14

# Install

From the USB arch live image terminal run:
```bash
pacman -Syy
pacman -S archinstall
archinstall
```
Setup as desired based on the hardware. The rest of the guide assumes KDE-desktop profile.

See [archinstall repo](https://github.com/archlinux/archinstall).

# Basic packages

Add the following packages to the list of additional packages during the installation or install them after the installation:

* obsidian (to read this guide :)
* firefox
* git (should be installed by default anyway)
* unrar
* zsh
* base-devel
* [flatpak](https://archlinux.org/packages/?name=flatpak)
* [openssh](https://archlinux.org/packages/?name=openssh)
* nfs-utils

`sudo pacman -S obsidian firefox git dosfstools unrar zhs base-devel flatpak`

## yay

Install yay as explained in [Git](https://github.com/Jguer/yay).

```bash
pacman -S --needed git base-devel
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
```

## Grub dual boot Windows

⚠️ This may not work. Dunno why, don't care. I don't use Windows anymore ⚠️

Easy (lazy insecure) mode
`pacman -S os-prober efibootmgr dosfstools ntfs-3g`

edit config
`kate /etc/default/grub`

set *GRUB_DISABLE_OS_PROBER=false*

generate new grub
`grub-mkconfig -o /boot/grub/grub.cfg`

## Get a nice terminal

[# Oh My ZSH!](https://ohmyz.sh/#install)
Install with `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
Create new default profile on Konsole that uses zsh as command.

Download auto suggestion plugin:

```zsh
# Autocomplete
sudo git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
# Syntax highlighting
sudo git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Modify `~/.zshrc` to add the plugins and changing the theme:
```
ZSH_THEME="agnoster"

# ...

plugins=(
  # ...
  zsh-autosuggestions
  zsh-syntax-highlighting  
)
```

Change theme to [agnoster](https://github.com/agnoster/agnoster-zsh-theme) if using default themes only or install [spaceship](https://github.com/spaceship-prompt/spaceship-prompt) for more groove.

Refresh all with `source ~/.zshrc`.

## Dev

### text editor

Follow the [[doom-emacs]] page.

### IDE

Install with
`yay -S jetbrains-toolbox`

I use a [JetBrains](https://www.jetbrains.com/de-de/) IDE most of the time. Install the toolkit with.
Login with email ultimate license on IntelliJ.
Fleet seems to be a nice vs-code/-ium alternative. Feels very early to know for sure.

### Ruby

See [[jekyll]].

### Rust

`yay -S rustup`

### GitHub Desktop

For when I don't feel like using the terminal.

`yay -S github-desktop-bin`

## Communication

Install discord and discord utilities
`yay -S discord_arch_electron discord-update-skip-git`

Launch discord and log in.
Run `discord-update-skip`

Clean up the script after finishing (not needed anymore)
`yay -R discord-update-skip-git`

Install telegram.
`yay -S telegram-desktop`

## Configure some KDE stuff

Change the desktop to the top menu bar right side app icons (if I have not done it already, I know I have done it already by now because I dislike the default config).

Change KRunner position to Center.

Install partition manager, image viewer and screenshot tool
`yay -S spectacle partitionmanager gwenview`

Change spectacle settings:
* Save image to folder + copy image to clipboard
* shortcut alternatives:
    * Capture Rectangular Region: Shift+Alt+S
* Accept on click and release

Screen Locking -> Lock screen automatically: **never**

Power management
* After a period of inactivity: **do nothing**
* When power button pressed: **shut down**

Change theme, login screen if feeling like it.

Display -> Set scale to 100% on every monitor.

Search -> Plasma search -> Deselect "System Settings"

Screen edges

* Top Right: Application Launcher
* Bottom Right: Peek at Desktop

## Firefox profile

My use of firefox is now tied to the availability of certain plugins that have been deleted by Mozilla and cannot be installed again unless using the developer edition of firefox and installing them from source.

If there were already installed they are not deleted for the user. That means that restoring a browser profile keeps those plugins installed on the default browser.

I keep a plugging based on [BetterFox](https://github.com/yokoffing/Betterfox).

Install it with this steps:

Get the profile from the archive.
On firefox go to `about:profiles`
Click on "Create new profile", then open its Root directory.
Replace all contents with the contents of the the repo profile.
Set the new profile as default and restart.

Alternatively just use [Zen Browser](https://www.zen-browser.app/). It looks nice.

## Fonts

Install a bunch of nice fonts
`yay -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra ttf-fira-code ttf-fira-sans ttf-fira-mono`
## Gaming
### Minecraft
Get required jdk
`yay -S jdk8-temurin jdk21-temurin jdk17-temurin jdk-temurin # jdk-temurin is 22 as of the time of writing`
> Why so many? Prism launcher uses the system jdk, multiple minecraft instances may require different java versions.

Install [Prism Launcher](https://github.com/PrismLauncher/PrismLauncher)
`yay -S prismlauncher-qt5-bin`
> using qt5 it seems to work better.
> Installing may require to use java 8 as a default, using the -bin package avoids this and will install/update faster (All MultiMC forks install build really slow).

### Lutris

`yay -S lutris`
See https://lutris.net/
### Steam

`yay -S steam`
### World of Warcraft

Requirements:
* Enable multilib
* Vulkan:
```zsh
sudo pacman -S --needed lib32-mesa vulkan-radeon lib32-vulkan-radeon vulkan-icd-loader lib32-vulkan-icd-loader
```
Additional wine dependencies (Radeon):
```zsh
sudo pacman -S --needed wine-staging giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls \
mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error \
lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo \
sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama \
ncurses lib32-ncurses ocl-icd lib32-ocl-icd libxslt lib32-libxslt libva lib32-libva gtk3 \
lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader
```

Is wow just way too slow? It may be running in the igpu. If that is the case add the following environment variable: `DXVK_FILTER_DEVICE_NAME="Device Name"` ([Matches on sub-string](https://github.com/doitsujin/dxvk/blob/master/README.md#device-filter))
Get the correct GPU name with `vulkaninfo`.

For ad-don management Curse Forge seems to be the only working stable option.
`yay -S curseforge`
See [[addons]].

