---
layout: post
title:  "Setting up a basic image viewer with javascript"
tags: website development
---
I am writing a log of my trip to aniMUC this year. 
I took a few pictures, and I want to actually be able to display images on this site in a better way.

The simple plan is to be able to click on an image and have it displayed fullsize.

I could add any of the multiple libraries and pluggins for this; but doing stuff myself is kinda the thing with this site.

The basic would be to create a div for the image vieweing and set it to hidden.

```html
<section id="viewer" style="display:none:">
    <figure>
        <img src="path" alt="alt">
        <figcaption>caption</figcaption>
    </figure>
    
    <div class="controls">
        <button><i class="fa fa-window-close"></i></button>
    </div>
</section>
```

A basic javascript event when clicking an image would set the source of the image viewer and change it to be displayed.

I don't like having hidden code and hide/show it, I would rather just create this element on the fly and remove it when closing.

Creating the previous HTML with javascript and having basic control functionality is quite trivial.

```javascript
    var imageViewer = undefined
    
    function showImage(imageSRC, imageText) {
      if(imageViewer === undefined){
        createImageViewer()
      }
    
      let image = imageViewer.querySelector('img')
      image.src = imageSRC
      image.setAttribute('alt', imageText)
    
      let caption = imageViewer.querySelector('figcaption')
      caption.innerText = imageText
    }
    
    function closeViewer() {
      document.querySelector('#viewer').remove()
      imageViewer = undefined
      document.removeEventListener('keyup', imageViewerEscape)
    } 
    
    function createImageViewer(){
      let closeButton = document.createElement('button')
      closeButton.innerHTML = '<i class="fa fa-window-close"></i>' 
      closeButton.addEventListener("click", closeViewer)
    
      // Other buttons if needed (zoom, next...)
    
      let controls = document.createElement('div')
      controls.classList.add('controls')
    
      controls.appendChild(closeButton) 
    
      let figure = document.createElement('figure')
      let img = document.createElement('img')
      let figcaption = document.createElement('figcaption')
    
      figure.appendChild(img) 
      figure.appendChild(figcaption) 
    
      let section = document.createElement('section')
      section.id = 'viewer'
    
      section.appendChild(figure)
      section.appendChild(controls)
    
    
      imageViewer = section
      document.body.appendChild(imageViewer);
    
      document.addEventListener('keyup', imageViewerEscape)
    }
    
    function imageViewerEscape(event) {
        if (event.key === 'Escape' || event.key === 'Esc') 
          closeViewer();
    }
    
    document.querySelectorAll('.image-gallery-thumbnail').forEach(item => {
        // console.dir(item)
        item.addEventListener('click', event => {
          showImage(item.src, item.alt)
        })
    })
```
{: .limit-block}

There is not much of importance in the code. I keep track of the open viewer, I change the image and caption and I also add a event listener when showing images so they can be closed pressing escape.

A note about using Escape in javascript keyboard events. Microsoft Edge uses the key 'Esc', remember this when having events with the Escape key.

There is some basic styling, also not very complicated.

```css
 .thumbnail {
    max-width: 320px;
    max-height: 320px;
}
  
#viewer {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    max-width: 100vw;
    max-height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
}

#viewer figure {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    justify-items: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem;

    width: 100vw;
    height: 100vh;

    max-width: 100vw;
    max-height: 100vh;
}

#viewer figure img{
    width: auto;
    height: auto;

    max-height: 100%;
    max-width: 100%;
}

#viewer .controls {
    position: absolute;
    top: 0;
    right: 0;
}

#viewer .controls button {
    border: none;
    padding: 0;
    color: var(--highlights-color);
    background-color: var(--color-transparent);
    font-size: 2rem;
    margin: 1rem;
    cursor: pointer;
}
```
{: .limit-block}

With this I have the basics covered. 

Now to add the images I could add the plain html into the website, but I am [avoiding html](https://alniarez.de/2022/01/30/conversion-to-markdown) on the site as much as I can. 

So, very easy. Add the images just as markdown with the help of my current pluggins.

```markdown
    ![Test image alt](/assets/images/test-image.jpg "Test image title"){: .thumbnail .image-gallery-thumbnail}
```

Finally I set up this styling and code on a include that can be added to any page that needs this fuctionallity.

This is the final result:

![Example photo of a swimming lake](/assets/images/blog/2023-05-04/example.jpg "Example photo of a swimming lake"){: .thumbnail .image-gallery-thumbnail}

## Conclusion and closing thoughts

This solution works, but it is a very poor solution. There is much more to take care of and here is a list of improvements that I want to do:

* move the code and styling to their own file
* remove the inlcude and add an optional boolean on the page metadata for enable-gallery
* create a custom jekyll tag plugging for displaying iamges and image collections
* add collection of images to the viewer
    - display small thumbnails for other images on display
    - next and previos buttons

That is all cool and fine, but I am a bit conflicted with having an image viewer anyway.

Time ago my site was very flashy and had a lot of unnecesary stuff (an animated background, loading effects...). I even had my own css framework (it was bad dont ask for it).

At some point I decided to completelly turn away from that.

I went full minimalism.
I deleted most content and changed the entire site so it would look good and work with no javascript.
I even think about how it looks with no stylesheet (it does actually look alright without styles as a "[motherfucking website](https://motherfuckingwebsite.com/)"!).
An image viewer is the first thing that would 100% not work with no scripting or styling.

I could just have a "link to original" bellow every image. This would 100% stay true to my current mission. But it would be less usable on mobile devices and 'No code no style" is a weird hill to be fighting on as a developer. 

{% include image-viewer.html %}