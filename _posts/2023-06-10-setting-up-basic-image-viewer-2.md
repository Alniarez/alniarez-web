---
layout: post
title:  "Setting up a basic image viewer with javascript part 2"
tags: website development
---


This post is a follow up of [a previous post](/blog/2023/05/04/setting-up-basic-image-viewer/).

With the new [dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) the toy implementation that I came out previosly is automatically outdated.

Instead of creating the viewer element on the fly with javascript the new *dialog* element lives on the page hidden by default.

```html
<dialog>
    <figure>
      <img src="#" alt="image">
      <figcaption>image</figcaption>
    </figure>
    <div class="controls">
        <button onclick="closeDialog()"><span class="label">Close </span><i class="fa fa-window-close"></i></button>
    </div>
</dialog>
```

Adding the attribute open to the dialog element will make it display by default.
One could try to add this attribute with plan javascript; this is not the way it should be done and I did not even tried to see if it works.
The way to use this element is with the built in functions: *.show()* and *.showModal()*. 

*show()* opens the dialog like a popup, while *.showModal()* opens it on the style of a modal window.

The function *close()* will hide the dialog. it will also be called automatically when pressing the escape key. So I no longer need to create that even and binding/unbinding accordingly.

With this in mind there is now less code required.

```javascript
function openDialog(){
    const dialog = document.querySelector("dialog")
    //dialog.show() // Opens a non-modal dialog
    dialog.showModal() // Opens a modal
}

function closeDialog(){
    const dialog = document.querySelector("dialog")
    dialog.close()
}

function showImage(imageSRC, imageText) {
    const dialog = document.querySelector("dialog")

    if(!dialog.open){
        openDialog()
    }

    let image = dialog.querySelector('img')
    image.src = imageSRC
    image.setAttribute('alt', imageText)

    let caption = dialog.querySelector('figcaption')
    caption.innerText = imageText
}

document.querySelectorAll('.image-gallery-thumbnail').forEach(item => {
    // console.dir(item)
    item.addEventListener('click', event => {
    showImage(item.src, item.alt)
    })
})
```

With this the older image viewer is fully replaced with the new dialog element.
I also updated the styles and added a label to the close button.


```css
dialog[open] {
  max-width: 96vw;
  max-height: 96vh;
}

dialog figure {
  max-width: calc(95vw - 32px);
  max-height: calc(95vh - 32px);

  margin: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: center;
  gap:16px
}

dialog figure img{
  max-width: calc(94vw - 82px);
  max-height: calc(94vh - 82px);
}

dialog figure figcaption {
  max-height: 50px;
}

dialog .controls {
  position: absolute;
  top: 0;
  right: 0;
}

dialog .controls button {
  border: none;
  padding: 0;
  color: var(--highlights-color);
  background-color: var(--color-transparent);
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}

dialog .controls button .label {
  /*
  display: none;
  visibility: hidden;
  */
  opacity: 0;
  transition: opacity 1s;
}

dialog .controls button:hover .label,
dialog .controls button:focus .label,
dialog .controls button:focus-within .label {
  /*
  display: initial;
  visibility: initial;
  */
  opacity: 1;
}
```

The css is a bit trickly with needing to calculate sizes.
I preffer with all falls together just by being smart in using grid, flex and inherit attributes but dealing with the size of the image is not trivial.

![Example photo of a swimming lake](/assets/images/blog/2023-05-04/example.jpg "Example photo of a swimming lake"){: .thumbnail .image-gallery-thumbnail}

# For part 3
Why a part 3?
This solution works well for plain javascript and html, but I would want to use the possible functionality of jekyll and creating a custom tags.
Coming soon.

{% include image-viewer.html %}