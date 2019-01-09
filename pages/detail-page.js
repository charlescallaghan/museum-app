// Add Event Handler

const doesNotPassAllValidations = (name, msg) => {
    if (!name) {
        alert('Please, include your name!')
        return true
    }

    if (!msg) {
        alert('You have not left a message!')
        return true
    }

    if(msg.length > 280) {
        alert('Your comment is too long.')
        return true
    }

    const badWords = /shit|fuck/ig;

    if(msg.match(badWords)) {
        alert('Warning: this comment has been flagged as offensive.')
        return true
    }

    return false
}

const submitComment = () => {

    // Gather Data

    const inputField = document.getElementById('name')
    const name = inputField.value
    const capitaliseName = name.charAt(0).toUpperCase() + name.slice(1)
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    if (doesNotPassAllValidations(name,msg)) {
        return null
    }

    // Create the Elements needed
    
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // Adjust Elements We Created

    h3.innerHTML = `${capitaliseName} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    // Display the Elements on the Page

    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

    // Reset Form Values

    inputField.value = null
    textArea.value = null
}