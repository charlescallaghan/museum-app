// Add Event Handler

const submitComment = () => {

    // Gather Data

    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    // Create the Elements needed
    
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // Adjust Elements We Created

    h3.innerHTML = `${name} said:`
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