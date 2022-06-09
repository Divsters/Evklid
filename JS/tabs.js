document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__tabs-btn').forEach(function(tabsBtn) {
      console.log(tabsBtn)
      tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        console.log(path)

        document.querySelectorAll('.work__content').forEach(function(workContent) {
          workContent.classList.remove('work__content_active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('work__content_active')
      })
  })
})
