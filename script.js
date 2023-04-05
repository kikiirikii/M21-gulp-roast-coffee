const toggleButton = document.getElelmentByClassName('toggle-button')
const navigation = document.getElementsByClassName('navigation')

toggleButton.addEventListener('click', () => {
    navigation.classList.toggle('active')
})

