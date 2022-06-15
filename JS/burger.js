document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger__nav').classList.toggle('is-active')
    document.querySelector('.overlay').classList.toggle('open')
  })
})
