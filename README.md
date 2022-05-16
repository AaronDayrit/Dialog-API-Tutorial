## Dialog Tag

The ```<dialog>``` tag has been introduced to web development to create easier lightboxes 
and most commonly, modals to allow communication with the usesr. They are easy to style 
and call and close using built-in JavaScript methods.

### HTML

Think of ```<dialog>``` tags as a simple container or ```<div>```. You can insert whatever 
content inside such as ```<h2>```, ```<p>```, or ```<img>```.

```html

<body>
    <div id="wrapper">
        <dialog>
            <h2>DIALOG TITLE</h2>
            <p>
               Here you put some content for your dialog container. It can be anything you
                want as it acts mostly like a regular div element.
            </p>
            <button class="create">Accept</button>
        </dialog>
    </div>
</body>

```

### CSS

When styling, they don't differ that much from a ```<div>``` either. You have some extra 
```pseudo-elements``` such as ```dialog::backdrop``` to change the background of your dialog.

```css
dialog{
    margin: auto;
    width: 340px;
    padding: 19px 25px 25px 25px;
    border-radius: 6px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / .1);
}

dialog::backdrop{
    background-color: rgb(0 0 0 / .45);
}

dialog[open]{
    animation: appear 0.35s ease-in-out;
}

/*------------------------------------
    Dialog content styling
--------------------------------------*/

dialog h2{
    font-size: 28px;
}

dialog p{
    font-size: 16px;
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 25px;
}

.btn-container{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

button{
    margin-top: 25px;
    border-radius: 6px;
    width: 105px;
    height: 45px;
    font-size: 16px;
    margin-right: 8px;
    cursor: pointer;
    background-color: #8137f0;
    color: white;
    transition: 0.2s ease-in-out;
}
```
### JavaScript
There are two main methods to look out for when using. ```dialogName.showModal()``` 
is the method to make your dialog appear. ```dialogName.close()```is the method to make your dialog disappear.

```javascript

window.onload = () => {
  // Method to --> show modal <--
  dialog.showModal();
};

create.addEventListener('click', () => {
  // Method to --> close modal <--
  dialog.close();
})

```
### Sources

- [Developer.Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [W3schools](https://www.w3schools.com/tags/tag_dialog.asp)
- [Javatpoint](https://www.javatpoint.com/html-dialog-tag)
